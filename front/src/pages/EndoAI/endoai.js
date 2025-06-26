import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import useFetchUserDetails from "../../hooks/fetchUserDetails";
import {
  Alert,
  Avatar,
  Button,
  Calendar,
  Card,
  Col,
  Divider,
  Row,
  Spin,
  Tooltip,
  Typography,
} from "antd";
import useFetchPatientData from "../../hooks/fetchPatientData";
import {
  InfoCircleOutlined,
  SearchOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatDistanceToNowStrict } from "date-fns";
import dayjs from "dayjs";
import useFetchDiaryData from "../../hooks/fetchDiaryData";
import Swal from "sweetalert2";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatePresence, motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;

const avatarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontFamily: "Raleway",
};

const titleStyle = {
  marginBottom: 0,
  fontWeight: 600,
  fontSize: 16,
};

const markerStyle = {
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  margin: "auto",
  marginTop: "2px",
};

const textStyle = { fontFamily: "Roboto" };

const divStyle = {
  background: "#fff",
  padding: "18px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
  marginTop: 14,
  margin: "10px 8x",
  border: "1px solid rgba(0, 0, 0, 0.39)",
  fontFamily: "Raleway",
  height: "100%",
};

const AIOutput = ({ entryData, patientInfo, patientPhysician, userId }) => {
  const [aiLoading, setAILoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [AIResponse, setAIResponse] = useState(null);

  const entryInfo = {
    bloodSugarLogs: entryData?.bloodSugarLogs,
    entryDate: entryData?.entryDate,
    mealLogs: entryData?.mealLogs,
    medicationsLogs: entryData?.medicationsLogs,
    moodLogs: entryData?.moodLogs,
    physicalActivityLogs: entryData?.physicalActivityLogs,
    symptomsLogs: entryData?.symptomsLogs,
  };

  const patientContext = { ...patientInfo, ...entryInfo };

  const handleSubmit = async () => {
    setAILoading(true);
    try {
      const res = await axios.post("ask-endo", { patientContext });
      if (res.data.success) {
        //console.log(res.data.reply);
        setAIResponse(res.data.reply);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error ??
        "An unexpected error occurred. Please try again later.";
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setAILoading(false);
    }
  };

  const handleShare = async (review) => {
    setShareLoading(true);
    try {
      const values = {
        physicianId: patientPhysician,
        review: review,
        createdBy: userId,
      };
      //console.log(values);
      const res = await axios.post("create-review", values);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "The response has been sent to your physician for review",
        });
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error ??
        "An unexpected error occurred. Please try again later.";
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setShareLoading(false);
    }
  };

  const renderContent = (markdownText) => (
    <ReactMarkdown
      children={markdownText}
      components={{
        h2: ({ children }) => (
          <h2
            style={{
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              color: "#2e3a59",
            }}
          >
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p style={{ lineHeight: 1.6, marginBottom: "1rem" }}>{children}</p>
        ),
        strong: ({ children }) => (
          <strong style={{ color: "#111", fontWeight: 600 }}>{children}</strong>
        ),
        li: ({ children }) => (
          <li style={{ marginBottom: "0.5rem", lineHeight: 1.5 }}>
            {children}
          </li>
        ),
        ul: ({ children }) => (
          <ul style={{ paddingLeft: "1.2rem" }}>{children}</ul>
        ),
        code({ inline, children, ...props }) {
          return !inline ? (
            <SyntaxHighlighter
              style={oneDark}
              language="javascript"
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code
              style={{
                backgroundColor: "#eee",
                padding: "2px 4px",
                borderRadius: 4,
              }}
            >
              {children}
            </code>
          );
        },
      }}
    />
  );

  return (
    <div style={{ marginTop: 24, margin: "15px 10px" }}>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        loading={aiLoading}
        onClick={handleSubmit}
        disabled={entryData && Object.keys(entryData).length > 0 ? false : true}
        size="large"
      >
        {aiLoading
          ? "Analyzing. This could take a while..."
          : "Analyze with EndoAI"}
      </Button>
      <div>
        {AIResponse && (
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={20} md={18} lg={14}>
              <div style={divStyle}>
                <Title level={4} style={{ fontFamily: "Raleway" }}>
                  What EndoAI has to say...
                </Title>
                {renderContent(AIResponse)}
              </div>
            </Col>
            <Col xs={24} sm={20} md={18} lg={10}>
              <div style={{...divStyle,height:'auto'}}>
                <div>
                  <Paragraph>
                    <Title level={4} style={{ fontFamily: "Raleway" }}>
                      Share with your specialist
                    </Title>
                    <Text type="secondary" style={{ fontFamily: "Roboto" }}>
                      EndoAI aims to support your health journey, however it may
                      occasionally provide incomplete or inaccurate suggestions.
                      If you’re feeling uncertain about this response, you can
                      share it with your specialist for professional review.
                    </Text>
                  </Paragraph>
                </div>
                <Button
                  onClick={() => handleShare(AIResponse)}
                  loading={shareLoading}
                  icon={<SendOutlined />}
                  iconPosition="end"
                  style={{ fontFamily: "Raleway" }}
                  type="primary"
                >
                  {shareLoading ? "Sending..." : "Share with my specialist"}
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

function Endoai() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { userData, userDataLoading } = useFetchUserDetails(userId);
  const { patientData, patientDataLoading } = useFetchPatientData(userId);
  const { diaryData, diaryLoading } = useFetchDiaryData(userId);
  const [entryData, setEntryData] = useState(null);
  const [value, setValue] = useState(dayjs());

  const handleDateSelect = (date) => {
    setValue(date);

    const dateStr = date.format("YYYY-MM-DD");
    const hasEntry = diaryData?.some((entry) => entry.entryDate === dateStr);

    if (hasEntry) {
      const entryForDate = diaryData.find(
        (entry) => entry.entryDate === dateStr
      );
      setEntryData(entryForDate);
    } else {
      setEntryData({});
    }
  };

  const patient = patientData?.[0];
  const patientPhysician = patient?.selectedPhysician;

  const patientInfo = {
    dob: userData?.dob,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    gender: userData?.gender,
    currentMedications: patient?.currentMedications,
    familyHistory: patient?.familyHistory,
    lifestyle: patient?.lifestyle,
    medicalProcedures: patient?.medicalProcedures,
    treatmentHistory: patient?.treatmentHistory,
  };

  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const hasEntry = diaryData?.some((entry) => entry.entryDate === dateStr);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip title={hasEntry ? "Click to select" : "Diary not filled"}>
          <span
            style={{
              ...markerStyle,
              background: hasEntry ? "#1677ff" : "#f83d1200",
              cursor: hasEntry ? "pointer" : "default",
            }}
            // onClick={() => {
            //   if (hasEntry) {
            //     const entryForDate = diaryData.find(
            //       (entry) => entry.entryDate === dateStr
            //     );
            //     setEntryData(entryForDate);
            //   } else {
            //     setEntryData({});
            //   }
            // }}
          />
        </Tooltip>
      </div>
    );
  };

  if (userDataLoading || patientDataLoading || diaryLoading)
    return <Spin tip="Loading. Please Wait..." fullscreen />;

  return (
    <>
      <div style={{ margin: 0, padding: 8 }}>
        <div>
          <Title type="primary" style={{ fontFamily: "Raleway" }}>
            EndoAI Medical Assistant
          </Title>
        </div>
        <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
        <div style={{ padding: 10 }}>
          <Alert
            message={<Text style={titleStyle}>How to?</Text>}
            type="info"
            showIcon
            description={
              <Text type="primary" style={textStyle}>
                Simply select a date with a diary entry and click the 'analyze'
                button to get insights from EndoAI. The blue dots represents the
                days that have the diary filled.
              </Text>
            }
            closable
          />
        </div>
        <div style={{ margin: 12 }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={20} md={18} lg={10}>
              <Card
                style={{
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",

                  border: "1px solid rgba(0, 0, 0, 0.39)",
                  height: "100%",
                }}
              >
                <div style={avatarStyle}>
                  <Avatar
                    size={78}
                    src={userData.avatar}
                    icon={!userData.avatar && <UserOutlined />}
                    style={{
                      backgroundColor: !userData.avatar && "#f56a00",
                      fontWeight: "bold",
                    }}
                  >
                    {!userData?.avatar &&
                      `${userData.firstName?.charAt(
                        0
                      )}${userData.lastName?.charAt(0)}`}
                  </Avatar>{" "}
                  <div>
                    <div style={{ color: "#666" }}>@{userData?.username}</div>
                    <div style={titleStyle}>
                      {userData?.firstName} {userData?.middleName}{" "}
                      {userData?.lastName}
                    </div>
                    {userData.dob && (
                      <div>
                        <Text type="secondary" style={textStyle}>
                          {userData?.gender},{" "}
                          {formatDistanceToNowStrict(new Date(userData?.dob))}
                        </Text>
                      </div>
                    )}
                  </div>
                </div>
                <Divider style={{ borderColor: "#00152a" }} />
                <div>
                  <div>
                    <Text type="primary" style={textStyle}>
                      Diagnosis:
                    </Text>{" "}
                    <Text type="secondary" style={textStyle}>
                      {patient?.patientInformation[0]?.diagnosis}
                    </Text>
                  </div>
                  <div>
                    <Text type="primary" style={textStyle}>
                      Blood Type:
                    </Text>{" "}
                    <Text type="secondary" style={textStyle}>
                      {patient?.patientInformation[0]?.bloodType}
                    </Text>
                  </div>
                  <div>
                    <Text type="primary" style={textStyle}>
                      Chronic Condition(s):
                    </Text>{" "}
                    {patient?.patientInformation[0]?.chronicConditions.map(
                      (condition, i) => (
                        <Text
                          type="secondary"
                          key={condition.i}
                          style={textStyle}
                        >
                          {condition}
                        </Text>
                      )
                    )}
                  </div>
                  <div>
                    <Divider
                      orientation="left"
                      style={{ borderColor: "#00152a" }}
                    >
                      <Paragraph
                        copyable={{
                          icon: [<InfoCircleOutlined />],
                          tooltips: ["These can be changed in your profile"],
                        }}
                        style={titleStyle}
                      >
                        Lifestyle
                      </Paragraph>
                    </Divider>{" "}
                    {patient?.lifestyle?.map((life, i) => (
                      <div
                        key={life.i}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Text type="primary" style={textStyle}>
                          Smoker:{" "}
                          <Text type="secondary" style={textStyle}>
                            {life.smoking}
                          </Text>
                        </Text>
                        <Text type="primary" style={textStyle}>
                          Alcohol Intake:{" "}
                          <Text type="secondary" style={textStyle}>
                            {life.alcoholUse}
                          </Text>
                        </Text>
                        <Text type="primary" style={textStyle}>
                          Diet:{" "}
                          <Text type="secondary" style={textStyle}>
                            {life.dietDescription}
                          </Text>
                        </Text>
                        <Text type="primary" style={textStyle}>
                          Exercise & Activity:{" "}
                          <Text type="secondary" style={textStyle}>
                            {life.exerciseFrequency}
                          </Text>
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={20} md={18} lg={14}>
              <div
                style={{
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.34)",
                  padding: 4,
                  background: "#fff",
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.39)",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    margin: 8,
                    right: "0px",
                    padding: "2px",
                  }}
                >
                  <Text type="primary" style={titleStyle}>
                    {value.format("dddd, Do, MMMM YYYY")}
                  </Text>
                </div>
                <Calendar
                  fullscreen={false}
                  onSelect={handleDateSelect}
                  cellRender={dateCellRender}
                  disabledDate={(current) =>
                    current && current > dayjs().endOf("day")
                  }
                />
              </div>
            </Col>
          </Row>
        </div>

        {/* AI */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div style={{ margin: 10 }}>
              <AIOutput
                entryData={entryData}
                patientInfo={patientInfo}
                patientPhysician={patientPhysician}
                userId={userId}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Endoai;
