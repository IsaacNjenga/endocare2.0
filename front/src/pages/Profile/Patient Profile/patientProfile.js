import React from "react";
import { Tabs } from "antd";
import UserAccount from "./userAccount";
import PersonalInfo from "./personalInfo/personalInfo";
import MedicalInfo from "./medicalInfo";
import AIInsight from "./AIInsight";
import Reports from "./reports";
import Logs from "./logs";
import {
  BarChartOutlined,
  FileDoneOutlined,
  InfoCircleOutlined,
  LockOutlined,
  RobotOutlined,
  UserOutlined,
} from "@ant-design/icons";

const iconStyle = {
  fontSize: "1.54rem",
  color: "#2e3c8e",
};

const labelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: "Raleway",
  fontWeight: 520,
  fontSize: "1.1rem",
  margin: "10px 0px",
};

const PatientProfile = ({ user }) => {
  const tabItems = [
    {
      key: 1,
      name: "Account & Privacy",
      childPage: <UserAccount user={user} />,
      icon: <LockOutlined style={iconStyle} />,
    },
    {
      key: 2,
      name: "Personal Information",
      childPage: <PersonalInfo user={user} />,
      icon: <UserOutlined style={iconStyle} />,
    },
    {
      key: 3,
      name: "Medical Information",
      childPage: <MedicalInfo />,
      icon: <InfoCircleOutlined style={iconStyle} />,
    },
    {
      key: 4,
      name: "AI Recommendations",
      childPage: <AIInsight />,
      icon: <RobotOutlined style={iconStyle} />,
    },
    {
      key: 5,
      name: "Document & Reports",
      childPage: <Reports />,
      icon: <BarChartOutlined style={iconStyle} />,
    },
    {
      key: 6,
      name: "Health Diary / Logs",
      childPage: <Logs />,
      icon: <FileDoneOutlined style={iconStyle} />,
    },
  ];

  return (
    <div
      style={{
        padding: "0.5rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
      }}
    >
      <Tabs
        tabPosition="right"
        size="large"
        style={{ minHeight: "500px" }}
        items={tabItems.map((item) => ({
          label: (
            <div style={labelStyle}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          ),
          key: String(item.key),
          children: <div>{item.childPage}</div>,
        }))}
      />
    </div>
  );
};

export default PatientProfile;
