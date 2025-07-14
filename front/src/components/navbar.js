import React, { useContext, useRef, useState } from "react";
import { Button, Divider, FloatButton, Layout, Menu, theme, Tour } from "antd";
import {
  AppstoreOutlined,
  BookOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  RobotOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(location.pathname);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [openBot, setOpenBot] = useState(false);
  const [input, setInput] = useState("");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [tourOpen, setTourOpen] = useState(false);

  const tourSteps = [
    { title: "Title", description: "Upload", target: () => ref1.current },
    {
      title: "Save",
      description: "Save your changes.",
      target: () => ref2.current,
    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      target: () => ref3.current,
    },
  ];

  const [messages, setMessages] = useState([
    { role: "system", content: "Ask me anything..." },
  ]);
  const userRole = user?.role;

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

  const doctorNavItems = [
    { label: "Dashboard", path: "/dashboard", icon: AppstoreOutlined },
    { label: "My Patients", path: "/my-patients", icon: TeamOutlined },
    { label: "Appointments", path: "/appointments", icon: CalendarOutlined },
    { label: "EndoAI Reviews", path: "/reviews", icon: RobotOutlined },
    {
      label: "Patient Reports",
      path: "/patient-reports",
      icon: SolutionOutlined,
    },
  ];

  const patientNavItems = [
    {
      label: <span ref={ref1}>Dashboard</span>,
      path: "/dashboard",
      icon: AppstoreOutlined,
    },
    {
      label: <span ref={ref2}>Specialists</span>,
      path: "/specialists",
      icon: MedicineBoxOutlined,
    },
    {
      label: <span ref={ref3}>My Health Diary</span>,
      path: "/diary",
      icon: BookOutlined,
    },
    { label: "Appointments", path: "/appointments", icon: CalendarOutlined },
    { label: "EndoAI Assistant", path: "/endo-ai", icon: RobotOutlined },
  ];

  const navItems = userRole === "patient" ? patientNavItems : doctorNavItems;

  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: "Profile", path: "/profile" },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Resources",
      path: "/resources",
    },
    // { key: "3", icon: <UploadOutlined />, label: "Uploads", path: "/resources" },
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
      navigate("/");
      window.location.reload();
    });
  };
  return (
    <>
      <Tour
        open={tourOpen}
        onClose={() => setTourOpen(false)}
        steps={tourSteps}
      />
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
          width={250}
          style={{ padding: 3 }}
        >
          <div style={{ margin: "4px 0px" }}>
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
                    padding: "6px",
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
              {/* <span>
                {collapsed
                  ? `${user?.firstName.charAt(0)}${user?.lastName.charAt(0)}`
                  : `Hi, ${user?.firstName} ${user?.lastName}`}
              </span> */}
            </div>
            <Divider
              dashed
              style={{ borderColor: "whitesmoke", color: "whitesmoke" }}
            >
              <span style={{ fontFamily: "Raleway" }}>
                {collapsed
                  ? `${user?.firstName.charAt(0)}${user?.lastName.charAt(0)}`
                  : `Hi, ${user?.firstName} ${user?.lastName}`}
              </span>
            </Divider>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[current]}
              onClick={handleClick}
              inlineCollapsed={collapsed}
              style={{
                fontFamily: "Raleway",
                border: "none",
              }}
              items={navItems.map(({ key, icon, label, path }) => ({
                key: path || key,
                icon: React.createElement(icon, {
                  style: {
                    fontSize: collapsed ? "1.5rem" : "1.7rem",
                    color: "whitesmoke",
                    margin: "7px 0px",
                  },
                }),
                label: (
                  <Link
                    to={path}
                    style={{
                      fontSize: "18px",
                      color: "whitesmoke",
                    }}
                  >
                    {label}
                  </Link>
                ),
                style: {
                  textAlign: "left",
                  margin: collapsed ? "14px 4.1px" : "19px 4.1px",
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
                <Menu.Item
                  key={item?.path || item?.key}
                  icon={
                    <span
                      style={{
                        borderRadius: "50%",
                        border: "1px solid #fff",
                        padding: "7px",
                        margin: 0,
                      }}
                    >
                      {item.icon}
                    </span>
                  }
                  style={{ color: "whitesmoke", fontSize: "0.9rem" }}
                >
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
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
              margin: "0px",
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
