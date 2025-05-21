import React from "react";
import { Tabs } from "antd";
import UserAccount from "./userAccount.js";
import PersonalInfo from "./personalInfo.js";
import MedicalInfo from "./medicalInfo.js";
import AIInsight from "./AIInsight.js";
import Reports from "./reports.js";
import Logs from "./logs.js";
import {
  BarChartOutlined,
  FileDoneOutlined,
  InfoCircleOutlined,
  LockOutlined,
  RobotOutlined,
  UserOutlined,
} from "@ant-design/icons";

const iconStyle = { fontSize: "1.5rem" };
function PatientProfile({ user }) {
  const tabItems = [
    {
      key: 1,
      name: "Account & Privacy",
      childPage: <UserAccount />,
      icon: <LockOutlined style={iconStyle} />,
    },
    {
      key: 2,
      name: "Personal Information",
      childPage: <PersonalInfo />,
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
      name: "Health Diary/Logs",
      childPage: <Logs />,
      icon: <FileDoneOutlined style={iconStyle} />,
    },
  ];
  return (
    <Tabs
      tabPosition="right"
      items={tabItems.map((item) => ({
        label: (
          <p>
            <strong>
              {item.icon} {item.name}
            </strong>
          </p>
        ),
        key: String(item.key),
        children: item.childPage,
      }))}
    />
  );
}

export default PatientProfile;
