import React, { useContext, useState } from "react";
import { Button, Divider, FloatButton, Layout, Menu, theme } from "antd";
import {
  BookOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  RobotOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import Swal from "sweetalert2";
import { UserContext } from "../App";
import Cookies from "universal-cookie";
import ChatBot from "./chatBot";
import axios from "axios";

const cookies = new Cookies();
const { Header, Sider, Content } = Layout;
function Navbar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(location.pathname);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [openBot, setOpenBot] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", content: "Ask me anything..." },
  ]);

  const assistantModel = () => {
    setOpenBot((prev) => !prev);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("endo-ai", {
        messages: newMessages,
      });
      setMessages([
        ...newMessages,
        { role: "assistant", content: res.data.reply },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: UserOutlined },
    { label: "Diary", path: "/diary", icon: BookOutlined },
    { label: "Appointments", path: "/appointments", icon: CalendarOutlined },
  ];

  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: "Profile", path: "/profile" },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Resources",
      path: "/resources",
    },
    { key: "3", icon: <UploadOutlined />, label: "Uploads", path: "/uploads" },
  ];

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = async () => {
    Swal.fire({
      icon: "warning",
      title: "Logging out",
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const allCookies = cookies.getAll();
        for (const cookieName in allCookies) {
          if (allCookies.hasOwnProperty(cookieName)) {
            cookies.remove(cookieName);
          }
        }
        setUser(null);
      }
      window.location.reload();
    });
  };
  return (
    <>
      <FloatButton
        description=""
        tooltip={collapsed ? "Open" : "Collapse"}
        type="primary"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed((prev) => !prev)}
        style={{
          left: 24,
          bottom: 24,
          right: "auto",
          fontSize: "16px",
          position: "fixed",
          zIndex: 1000,
        }}
      />
      <FloatButton
        icon={<RobotOutlined />}
        tooltip="Ask EndoAI"
        type="default"
        onClick={assistantModel}
      />
      {openBot && (
        <ChatBot
          messages={messages}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          loading={loading}
          setOpenBot={setOpenBot}
        />
      )}

      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onBreakpoint={(broken) => setCollapsed(broken)}
          width={300}
        >
          <div style={{ margin: "5px 1px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: collapsed ? "65px" : "85px",
                    height: collapsed ? "65px" : "85px",
                    borderRadius: "50%",
                    border: "2px solid #2f3c92",
                    padding: "8px",
                    background: "whitesmoke",
                  }}
                />
              </div>
              <div
                style={{
                  display: collapsed ? "none" : "flex",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    margin: "auto",
                    fontFamily: "Raleway",
                  }}
                >
                  EndoCare
                </h4>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "whitesmoke",
                fontFamily: "Raleway",
                marginTop: 6,
              }}
            >
              <span>
                {collapsed
                  ? `${user?.firstName.charAt(0)}${user?.lastName.charAt(0)}`
                  : `${user?.firstName} ${user?.lastName}`}
              </span>
            </div>
            <Divider
              dashed
              style={{ borderColor: "whitesmoke", color: "whitesmoke" }}
            ></Divider>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[current]}
              onClick={handleClick}
              inlineCollapsed={collapsed}
              style={{
                fontFamily: "Roboto",
                border: "none",
              }}
              items={navItems.map(({ key, icon, label, path }) => ({
                key: path || key,
                icon: React.createElement(icon, {
                  style: {
                    fontSize: "1.6rem",
                    color: "whitesmoke",
                  },
                }),
                label: (
                  <Link
                    to={path}
                    style={{
                      fontSize: "17px",
                      color: "whitesmoke",
                    }}
                  >
                    {label}
                  </Link>
                ),
                style: {
                  textAlign: "left",
                  margin: "12px 0",
                },
              }))}
            />
          </div>
        </Sider>{" "}
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[current]}
              onClick={handleClick}
              style={{
                justifyContent: "right",
                fontWeight: "light",
                fontFamily: "Raleway",
              }}
            >
              {menuItems.map((item) => (
                <Menu.Item key={item.path || item.key} icon={item.icon}>
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Item>
                <div>
                  <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    onClick={handleLogout}
                  />
                </div>
              </Menu.Item>
            </Menu>
            {/* <div>
                <Switch
                  checked={isDarkMode}
                  onChange={() => {
                    setIsDarkMode((prev) => !prev);
                    document.body.setAttribute(
                      "data-theme",
                      !isDarkMode ? "dark" : "light"
                    );
                  }}
                  checkedChildren="🌙"
                  unCheckedChildren="☀️"
                />
              </div> */}
          </Header>

          <Content
            style={{
              margin: "10px 10px",
              padding: 0,
              minHeight: "100vh",
              //background: colorBgContainer,
              borderRadius: borderRadiusLG,
              background: "whitesmoke",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Navbar;
