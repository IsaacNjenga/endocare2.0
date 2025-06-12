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
  Divider,
  Spin,
  Tooltip,
  Typography,
} from "antd";
import useFetchPatientData from "../../hooks/fetchPatientData";
import {
  InfoCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatDistanceToNowStrict } from "date-fns";
import dayjs from "dayjs";
import useFetchDiaryData from "../../hooks/fetchDiaryData";

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
  width: 15,
  height: 15,
  borderRadius: "50%",
  margin: "auto",
};

const textStyle = { fontFamily: "Roboto" };

const AIOutput = ({ entryData, patientInfo }) => {
  const [aiLoading, setAILoading] = useState(false);

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

//  console.log(patientContext);
  return (
    <div style={{ marginTop: 24 }}>
      <Button type="primary" icon={<SearchOutlined />} loading={aiLoading}>
        {aiLoading
          ? "Analyzing. This could take a while..."
          : "Analyze with EndoAI"}
      </Button>

      {entryData && <pre>{JSON.stringify(entryData, null, 2)}</pre>}
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
  };

  const patient = patientData?.[0];

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
              background: hasEntry ? "#1677ff" : "#f83d12",
              cursor: hasEntry ? "pointer" : "default",
            }}
            onClick={() => {
              if (hasEntry) {
                const entryForDate = diaryData.find(
                  (entry) => entry.entryDate === dateStr
                );
                setEntryData(entryForDate);
              } else {
                setEntryData({});
              }
            }}
          />
        </Tooltip>
      </div>
    );
  };

  if (userDataLoading || patientDataLoading || diaryLoading)
    return <Spin tip="Loading. Please Wait..." fullscreen />;

  return (
    <>
      <div style={{ margin: 0, padding: 5 }}>
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
        <div
          style={{
            display: "flex",
            gap: "1px",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Card
              style={{
                width: "350px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                border: "1px solid #00152a",
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
          </div>
          <div
            style={{
              width: 650,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.34)",
              padding: "10px",
              background: "#fff",
              borderRadius: "8px",
              border: "1px solid #00152a",
            }}
          >
            <div
              style={{
                margin: 1,
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
            />
          </div>
        </div>

        {/* AI */}
        <div>
          <AIOutput entryData={entryData} patientInfo={patientInfo} />
        </div>
      </div>
    </>
  );
}

export default Endoai;
