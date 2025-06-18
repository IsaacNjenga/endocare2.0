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
import {
  Diabetes2DefinitionAndOverview,
  Diabetes2DietAndLifestyle,
  Diabetes2SignsAndSymptoms,
  Diabetes2Tips,
} from "../../assets/data/diabetes2";
import {
  AddisonsDefinitionAndOverview,
  AddisonsDietAndLifestyle,
  AddisonsSignsAndSymptoms,
  AddisonsTips,
} from "../../assets/data/addisons";
import fatigue from "../../assets/icons/adfatigue.png";
import pcos from "../../assets/icons/pcos.png";
import pancreas from "../../assets/icons/pancreas.png";
import type2 from "../../assets/icons/type2.png";
import addisons from "../../assets/icons/addisons.png";

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

const diabetes2ContentList = {
  tab1: <Diabetes2DefinitionAndOverview />,
  tab2: <Diabetes2SignsAndSymptoms />,
  tab3: <Diabetes2DietAndLifestyle />,
  tab4: <Diabetes2Tips />,
};

const addisonsContentList = {
  tab1: <AddisonsDefinitionAndOverview />,
  tab2: <AddisonsSignsAndSymptoms />,
  tab3: <AddisonsDietAndLifestyle />,
  tab4: <AddisonsTips />,
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
            <img src={type2} alt="diabetes2_icon" style={iconStyle} />
            <Title style={cardTitleStyle}>Type 2 Diabetes</Title>
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
            {diabetes2ContentList[activeTabKey]}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

export const Addisons = () => {
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
            <img src={addisons} alt="addisons_icon" style={iconStyle} />
            <Title style={cardTitleStyle}>Addison's Disease</Title>
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
            {addisonsContentList[activeTabKey]}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

function ResourcesData() {
  return <div>ResourcesData</div>;
}

export default ResourcesData;
