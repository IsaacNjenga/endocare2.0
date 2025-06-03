import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Descriptions,
  Divider,
  Drawer,
  Tooltip,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import ChangePassword from "../../../components/changePassword";

const { Title } = Typography;
function UserAccount({
  user,
  labelStyle,
  contentStyle,
  sectionCardStyle,
  sectionHeaderStyle,
  refresh,
}) {
  const [open, setOpen] = useState(null);
  const handleEdit = () => {};

  return (
    <div style={{ fontFamily: "Roboto", padding: "0.7rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Title level={2} style={{ fontFamily: "Raleway" }}>
          <u>User Account & Privacy</u>
        </Title>
        {/* <Tooltip title="Edit your information">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={handleEdit}
            style={{ padding: "12px 15px" }}
          />
        </Tooltip> */}
      </div>
      <Card style={sectionCardStyle}>
        <Divider style={{ borderColor: "#4f46e5" }}>
          <div style={sectionHeaderStyle}>User Details</div>
        </Divider>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label={<span style={labelStyle}>User ID</span>}>
            <span style={contentStyle}>{user?._id || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Username</span>}>
            <span style={contentStyle}>{user?.username || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Primary Email</span>}
          >
            <span style={contentStyle}>{user?.email || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Role</span>}>
            <span style={contentStyle}>{user?.role || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Password</span>}>
            <span style={contentStyle}>*************</span>
          </Descriptions.Item>
        </Descriptions>
        <div style={{ margin: "10px 0px" }}>
          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Change your password
          </Button>
          <Drawer
            width={650}
            onClose={() => setOpen(false)}
            open={open}
            styles={{ body: { paddingBottom: 60 } }}
          >
            <ChangePassword setOpen={setOpen} />
          </Drawer>
        </div>
      </Card>
    </div>
  );
}

export default UserAccount;
