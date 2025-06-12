import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import useFetchUserDetails from "../../hooks/fetchUserDetails";
import { Avatar, Calendar, Card, Divider, Spin, Typography } from "antd";
import useFetchPatientData from "../../hooks/fetchPatientData";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { formatDistanceToNowStrict } from "date-fns";
import dayjs from "dayjs";

const { Title, Text, Paragraph } = Typography;

const avatarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginBottom: 0,
  fontFamily: "Raleway",
};

const titleStyle = {
  marginBottom: 0,
  fontWeight: 600,
  fontSize: 16,
};

const textStyle = { fontFamily: "Roboto" };

const AIOutput = () => {
  return <div>Output</div>;
};

function Endoai() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { userData, userDataLoading } = useFetchUserDetails(userId);
  const { patientData, patientDataLoading } = useFetchPatientData(userId);
  const [value, setValue] = useState(dayjs());

  const handleDateSelect = (date) => {
    setValue(date);
  };

  const patient = patientData?.[0];
  //console.log(patient);

  if (userDataLoading || patientDataLoading)
    return <Spin tip="Loading. Please Wait..." fullscreen />;

  return (
    <>
      <div style={{ margin: 5, padding: "0.3rem" }}>
        <div>
          <Title type="primary" style={{ fontFamily: "Raleway" }}>
            EndoAI Medical Assistant
          </Title>
        </div>
        <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
        <div
          style={{
            display: "flex",
            gap: "2px",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Card
              style={{
                width: "400px",
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
              width: 600,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.34)",
              padding: "10px",
              background: "#fff",
              borderRadius: "8px",
              border: "1px solid #00152a",
            }}
          >
            <Text type="primary" style={textStyle}>
              Date: {value.format("dddd, Do MMMM YYYY")}
            </Text>
            <Calendar
              fullscreen={false}
              value={value}
              onSelect={handleDateSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Endoai;
