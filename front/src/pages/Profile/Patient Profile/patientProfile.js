import React from "react";
import { Tabs } from "antd";
import UserAccount from "./userAccount.js";
import PersonalInfo from "./personalInfo.js";
import MedicalInfo from "./medicalInfo.js";
import AIInsight from "./AIInsight.js";
import Reports from "./reports.js";
import Logs from "./logs.js";

function PatientProfile({ user }) {
  const tabItems = [
    { key: 1, name: "Account & Privacy", childPage: <UserAccount /> },
    { key: 2, name: "Personal Information", childPage: <PersonalInfo /> },
    { key: 3, name: "Medical Information", childPage: <MedicalInfo /> },
    { key: 4, name: "AI Recommendations", childPage: <AIInsight /> },
    { key: 5, name: "Document & Reports", childPage: <Reports /> },
    { key: 6, name: "Health Diary/Logs", childPage: <Logs /> },
  ];
  return (
    <Tabs
      tabPosition="right"
      items={tabItems.map((item) => ({
        label: (
          <p>
            <strong>{item.name}</strong>
          </p>
        ),
        key: String(item.key),
        children: item.childPage,
      }))}
    />
  );
}

export default PatientProfile;
