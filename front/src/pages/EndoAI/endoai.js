import { Divider, Tabs, Typography } from "antd";
import React from "react";
import AIpage from "./AIpage";
import Responses from "./responses";
import { RobotOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const { Title } = Typography;

const iconStyle = {
  fontSize: "1.54rem",
  color: "#2e3c8e",
};

const tabLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: "Raleway",
  fontWeight: 520,
  fontSize: "1.1rem",
  margin: "10px 0px",
};
const tabItems = [
  {
    key: 1,
    name: "EndoAI Assistant",
    childPage: <AIpage />,
    icon: <RobotOutlined style={iconStyle} />,
  },
  {
    key: 2,
    name: "Doctor's Responses",
    childPage: <Responses />,
    icon: <SafetyCertificateOutlined style={iconStyle} />,
  },
];
function Endoai() {
  return (
    <div style={{ padding: 8, margin: "14px 0px" }}>
      {" "}
      <Title level={1} style={{ fontFamily: "Raleway" }}>
        EndoAI Medical Assistant
      </Title>
      <Divider style={{ borderColor: "#333" }} dashed size="large" />
      <div>
        <Tabs
          tabPosition="right"
          size="large"
          style={{ minHeight: "500px" }}
          items={tabItems.map((item) => ({
            label: (
              <div style={tabLabelStyle}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ),
            key: String(item.key),
            children: <div>{item.childPage}</div>,
          }))}
        />
      </div>
    </div>
  );
}

export default Endoai;
