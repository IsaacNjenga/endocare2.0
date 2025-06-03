import {
  AuditOutlined,
  BookOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import UserAccount from "../userAccount/userAccount";
import PersonalInfo from "../personalInfo/personalInfo";
import ProfessionalInfo from "./professionalInfo/professionalInfo";
import PracticeInfo from "./practiceInfo/practiceInfo";

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

const labelStyle = {
  fontFamily: "Raleway",
  fontWeight: 500,
  fontSize: "1rem",
};

const contentStyle = {
  fontFamily: "Roboto",
  lineHeight: 1.6,
  fontSize: "1rem",
};

const sectionCardStyle = {
  marginBottom: "2rem",
  padding: "1.5rem",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
  fontFamily: "Raleway",
};

const sectionHeaderStyle = {
  padding: "6px 16px",
  borderRadius: "30px",
  background: "#eef2ff",
  fontFamily: "Raleway",
  fontWeight: 600,
  fontSize: 22,
  color: "#4f46e5",
};

function DoctorProfile({ user, refresh, userDataLoading }) {
  const tabItems = [
    {
      key: 1,
      name: "Account & Privacy",
      childPage: (
        <UserAccount
          user={user}
          labelStyle={labelStyle}
          contentStyle={contentStyle}
          sectionCardStyle={sectionCardStyle}
          sectionHeaderStyle={sectionHeaderStyle}
          refresh={refresh}
        />
      ),
      icon: <LockOutlined style={iconStyle} />,
    },
    {
      key: 2,
      name: "Personal Information",
      childPage: (
        <PersonalInfo
          user={user}
          labelStyle={labelStyle}
          contentStyle={contentStyle}
          sectionCardStyle={sectionCardStyle}
          sectionHeaderStyle={sectionHeaderStyle}
          refresh={refresh}
        />
      ),
      icon: <UserOutlined style={iconStyle} />,
    },
    {
      key: 3,
      name: "Professional Information",
      childPage: (
        <ProfessionalInfo
          user={user}
          labelStyle={labelStyle}
          contentStyle={contentStyle}
          sectionCardStyle={sectionCardStyle}
          sectionHeaderStyle={sectionHeaderStyle}
          refresh={refresh}
        />
      ),
      icon: <AuditOutlined style={iconStyle} />,
    },
    {
      key: 4,
      name: "Practice Information",
      childPage: (
        <PracticeInfo
          user={user}
          labelStyle={labelStyle}
          contentStyle={contentStyle}
          sectionCardStyle={sectionCardStyle}
          sectionHeaderStyle={sectionHeaderStyle}
          refresh={refresh}
        />
      ),
      icon: <BookOutlined style={iconStyle} />,
    },
  ];

  if (userDataLoading) return <div>Loading...</div>;
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
  );
}

export default DoctorProfile;
