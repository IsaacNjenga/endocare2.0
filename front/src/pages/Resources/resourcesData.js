import { Card, Typography } from "antd";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DefinitionAndOverview,
  DietAndLifestyle,
  SignsAndSymptoms,
  Tips,
} from "../../assets/data/adrenalFatigue";

const { Title } = Typography;

const tabStyle = {
  fontFamily: "Raleway",
  fontWeight: 800,
  letterSpacing: 1,
  fontSize: "14px",
};

const cardStyle = {
  width: "100%",
  border: "1px solid #e6f0ff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 21, 42, 0.1)",
  background: "rgb(0,0,0,0)",
};

const cardTitleStyle = {
  fontFamily: "Raleway",
  fontSize: "22px",
  color: "#00152a",
};

const tabItems = [
  { key: "tab1", tab: <span style={tabStyle}>Definition & Overview</span> },
  { key: "tab2", tab: <span style={tabStyle}>Sign & Symptoms</span> },
  { key: "tab3", tab: <span style={tabStyle}>Diet & Lifestyle</span> },
  { key: "tab4", tab: <span style={tabStyle}>Extra Tips</span> },
];

const adrenalFatigueContentList = {
  tab1: <DefinitionAndOverview />,
  tab2: <SignsAndSymptoms />,
  tab3: <DietAndLifestyle />,
  tab4: <Tips />,
};

export const AdrenalFatigue = () => {
  const [activeTabKey, setActiveTabKey] = useState("tab1");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div
      style={{
        padding: "24px 0px",
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "12px",
      }}
    >
      <Card
        style={cardStyle}
        title={<Title style={cardTitleStyle}>Adrenal Fatigue</Title>}
        tabList={tabItems}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{
          size: "large",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {adrenalFatigueContentList[activeTabKey]}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

export const PCOS = () => {
  return <div>PCOS</div>;
};

export const Diabetes1 = () => {
  return <div>Type 1 Diabetes</div>;
};

export const Diabetes2 = () => {
  return <div>Type 2 Diabetes</div>;
};

export const Cortisol = () => {
  return <div>Cortisol</div>;
};

function ResourcesData() {
  return <div>ResourcesData</div>;
}

export default ResourcesData;
