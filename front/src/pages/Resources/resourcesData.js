import { Card, Typography } from "antd";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DefinitionAndOverview,
  DietAndLifestyle,
  SignsAndSymptoms,
  Tips,
} from "../../assets/data/adrenalFatigue";
import {
  PCOSDefinitionAndOverview,
  PCOSDietAndLifestyle,
  PCOSSignsAndSymptoms,
  PCOSTips,
} from "../../assets/data/pcos";
import {
  Diabetes1DefinitionAndOverview,
  Diabetes1DietAndLifestyle,
  Diabetes1SignsAndSymptoms,
  Diabetes1Tips,
} from "../../assets/data/diabetes1";
import fatigue from "../../assets/icons/adfatigue.png";
import pcos from "../../assets/icons/pcos.png";
import pancreas from "../../assets/icons/pancreas.png";

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
};

const cardTitleStyle = {
  fontFamily: "Raleway",
  fontSize: "28px",
  color: "#00152a",
  marginLeft: "3px",
};

const iconStyle = {
  width: "50px",
  padding: "5px",
  borderRadius: "50%",
  border: "1px solid black",
  margin: "3px",
};

const tabItems = [
  { key: "tab1", tab: <span style={tabStyle}>Definition & Overview</span> },
  { key: "tab2", tab: <span style={tabStyle}>Signs & Symptoms</span> },
  { key: "tab3", tab: <span style={tabStyle}>Diet & Lifestyle</span> },
  { key: "tab4", tab: <span style={tabStyle}>Extra Tips</span> },
];

const adrenalFatigueContentList = {
  tab1: <DefinitionAndOverview />,
  tab2: <SignsAndSymptoms />,
  tab3: <DietAndLifestyle />,
  tab4: <Tips />,
};

const PcosContentList = {
  tab1: <PCOSDefinitionAndOverview />,
  tab2: <PCOSSignsAndSymptoms />,
  tab3: <PCOSDietAndLifestyle />,
  tab4: <PCOSTips />,
};

const diabetesContentList = {
  tab1: <Diabetes1DefinitionAndOverview />,
  tab2: <Diabetes1SignsAndSymptoms />,
  tab3: <Diabetes1DietAndLifestyle />,
  tab4: <Diabetes1Tips />,
};
export const AdrenalFatigue = () => {
  const [activeTabKey, setActiveTabKey] = useState("tab1");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div
      style={{
        padding: "0px 0px",
        background:
          "linear-gradient(to right,rgba(224, 247, 250, 0),rgba(255, 255, 255, 0))",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "12px",
      }}
    >
      <Card
        style={cardStyle}
        title={
          <div style={{ display: "flex" }}>
            <img src={fatigue} alt="adf_icon" style={iconStyle} />
            <Title style={cardTitleStyle}>Adrenal Fatigue</Title>
          </div>
        }
        tabList={tabItems}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{
          size: "large",
        }}
        type="inner"
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
  const [activeTabKey, setActiveTabKey] = useState("tab1");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div
      style={{
        padding: "0px 0px",
        background:
          "linear-gradient(to right,rgba(224, 247, 250, 0),rgba(255, 255, 255, 0))",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "12px",
      }}
    >
      <Card
        style={cardStyle}
        title={
          <div style={{ display: "flex" }}>
            <img src={pcos} alt="pcos_icon" style={iconStyle} />
            <Title style={cardTitleStyle}>
              Polycystic Ovarian Syndrome (PCOS)
            </Title>
          </div>
        }
        tabList={tabItems}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{
          size: "large",
        }}
        type="inner"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {PcosContentList[activeTabKey]}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

export const Diabetes1 = () => {
  const [activeTabKey, setActiveTabKey] = useState("tab1");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div
      style={{
        padding: "0px 0px",
        background:
          "linear-gradient(to right,rgba(224, 247, 250, 0),rgba(255, 255, 255, 0))",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "12px",
      }}
    >
      <Card
        style={cardStyle}
        title={
          <div style={{ display: "flex" }}>
            <img src={pancreas} alt="diabetes_icon" style={iconStyle} />
            <Title style={cardTitleStyle}>Type 1 Diabetes</Title>
          </div>
        }
        tabList={tabItems}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{
          size: "large",
        }}
        type="inner"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {diabetesContentList[activeTabKey]}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
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
