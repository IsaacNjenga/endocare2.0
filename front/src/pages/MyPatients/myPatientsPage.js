import {
  BookOutlined,
  CalendarOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Tag,
  Spin,
  Tabs,
  Typography,
  Descriptions,
  Card,
  Divider,
  Empty,
  Calendar,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchPatientById from "../../hooks/fetchPatientById";
import { format, formatDistanceToNowStrict } from "date-fns";
import dayjs from "dayjs";
import useFetchDiaryData from "../../hooks/fetchDiaryData";
import Swal from "sweetalert2";

const { Title, Text } = Typography;

const iconStyle = {
  fontSize: "1.5rem",
  color: "#2e3c8e",
};

const iconStyle2 = {
  fontSize: "1.2rem",
  color: "#00152a",
  padding: "5px",
  borderRadius: "50%",
  backgroundColor: "whitesmoke",
};

const tabLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontFamily: "Raleway",
  fontWeight: 500,
  fontSize: "1rem",
  margin: "10px 0px",
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

const markerStyle = {
  display: "inline-block",
  width: 28,
  height: 28,
  borderRadius: "50%",
  margin: "auto",
};

const PatientInformation = ({ patientInformation }) => {
  if (!patientInformation)
    return (
      <div>
        <Empty description="No patient data available" />
      </div>
    );
  const patient = patientInformation;

  return (
    <Card style={sectionCardStyle}>
      <div style={sectionHeaderStyle}>Patient Information</div>
      <Divider />
      <Descriptions
        bordered
        size="medium"
        column={1}
        styles={{ label: { fontWeight: "bold" } }}
      >
        <Descriptions.Item label="Full Name" style={contentStyle}>
          {patient[0]?.createdBy?.firstName} {patient[0]?.createdBy?.middleName}{" "}
          {patient[0]?.createdBy?.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Gender" style={contentStyle}>
          <Tag
            style={contentStyle}
            icon={
              patient[0]?.createdBy.gender === "Male" ? (
                <ManOutlined style={iconStyle2} />
              ) : (
                <WomanOutlined style={iconStyle2} />
              )
            }
          >
            {patient[0]?.createdBy.gender}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Date of Birth" style={contentStyle}>
          {patient[0]?.createdBy.dob}
        </Descriptions.Item>
        <Descriptions.Item label="Age" style={contentStyle}>
          {formatDistanceToNowStrict(new Date(patient[0]?.createdBy.dob))} old
        </Descriptions.Item>
        <Descriptions.Item label="Phone" style={contentStyle}>
          <PhoneOutlined style={iconStyle2} />{" "}
          {patient[0]?.createdBy.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Email" style={contentStyle}>
          <MailOutlined style={iconStyle2} /> {patient[0]?.createdBy.email}
        </Descriptions.Item>
        <Descriptions.Item label="Emergency Contact" style={contentStyle}>
          <div>
            Name: {patient[0]?.createdBy.emergencyName} <br />
            Phone: {patient[0]?.createdBy.emergencyPhoneNumber} <br />
            Email: {patient[0]?.createdBy.emergencyEmail}
          </div>
        </Descriptions.Item>
        {patient[0]?.lifestyle && (
          <Descriptions.Item label="Lifestyle" style={contentStyle}>
            Smoking: {patient[0]?.lifestyle[0]?.smoking} <br />
            Alcohol Use: {patient[0]?.lifestyle[0]?.alcoholUse} <br />
            Exercise: {patient[0]?.lifestyle[0]?.exerciseFrequency} <br />
            Diet: {patient[0]?.lifestyle[0]?.dietDescription}
          </Descriptions.Item>
        )}
      </Descriptions>
    </Card>
  );
};

const PatientDetails = ({ details }) => {
  if (!details)
    return (
      <div>
        <Empty description="No patient data available" />
      </div>
    );

  const {
    patientInformation,
    currentMedications,
    treatmentHistory,
    medicalProcedures,
    familyHistory,
    previousProviders,
  } = details[0];

  return (
    <Card style={sectionCardStyle}>
      <div style={sectionHeaderStyle}>Medical Information</div>
      <Divider style={{ borderColor: "#00152a" }} dashed size="large" />

      {patientInformation?.map((info, i) => (
        <Descriptions
          key={i}
          bordered
          size="small"
          column={1}
          labelStyle={{ fontWeight: "bold" }}
          style={{ marginBottom: 24 }}
        >
          <Descriptions.Item label="Diagnosis" style={contentStyle}>
            {info?.diagnosis}
          </Descriptions.Item>
          <Descriptions.Item label="Blood Type" style={contentStyle}>
            <Tag color="red" style={contentStyle}>
              {info?.bloodType}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Chronic Conditions" style={contentStyle}>
            {info?.chronicConditions?.map((c, idx) => (
              <Tag key={idx} color="orange" style={contentStyle}>
                {c}
              </Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Allergies" style={contentStyle}>
            {info?.allergies?.map((a, idx) => (
              <Tag key={idx} color="green" style={contentStyle}>
                {a}
              </Tag>
            ))}
          </Descriptions.Item>
        </Descriptions>
      ))}

      <Divider
        orientation="left"
        style={sectionHeaderStyle}
        dashed
        size="large"
      >
        Current Medications
      </Divider>

      {currentMedications?.map((med, i) => (
        <Descriptions
          key={i}
          column={2}
          bordered
          size="small"
          style={{ marginBottom: 16 }}
          title={`${i + 1}`}
        >
          <Descriptions.Item label="Name" style={contentStyle}>
            {med?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Dosage" style={contentStyle}>
            {med?.dosage}
          </Descriptions.Item>
          <Descriptions.Item label="Frequency" style={contentStyle}>
            {med?.frequency}
          </Descriptions.Item>
          <Descriptions.Item label="Start Date" style={contentStyle}>
            {med.startDate
              ? `${format(new Date(med?.startDate), "yyyy-MM-dd")}`
              : null}
          </Descriptions.Item>
          <Descriptions.Item label="Ongoing" style={contentStyle}>
            {med?.isOngoing ? "Yes" : "No"}
          </Descriptions.Item>
        </Descriptions>
      ))}

      <Divider orientation="left" style={sectionHeaderStyle}>
        Treatment History
      </Divider>

      {treatmentHistory?.map((treat, i) => (
        <Descriptions
          key={i}
          column={1}
          bordered
          size="medium"
          style={{ marginBottom: 16 }}
        >
          <Descriptions.Item label="Condition" style={contentStyle}>
            {treat?.condition}
          </Descriptions.Item>
          <Descriptions.Item label="Diagnosis Date" style={contentStyle}>
            {" "}
            {treat?.diagnosisDate
              ? `${format(new Date(treat?.diagnosisDate), "yyyy-MM-dd")}`
              : null}
          </Descriptions.Item>
          <Descriptions.Item label="Description" style={contentStyle}>
            {treat?.treatmentDescription}
          </Descriptions.Item>
          <Descriptions.Item label="Outcome" style={contentStyle}>
            {treat?.outcome}
          </Descriptions.Item>
        </Descriptions>
      ))}

      <Divider orientation="left" style={sectionHeaderStyle}>
        Medical Procedures
      </Divider>

      {medicalProcedures?.map((proc, i) => (
        <Descriptions
          key={i}
          column={1}
          bordered
          size="small"
          style={{ marginBottom: 16 }}
          title={i + 1}
        >
          <Descriptions.Item label="Procedure Name" style={contentStyle}>
            {proc?.procedureName}
          </Descriptions.Item>
          <Descriptions.Item label="Date" style={contentStyle}>
            {" "}
            {proc.dateOfProcedure
              ? `${format(new Date(proc?.dateOfProcedure), "yyyy-MM-dd")}`
              : null}
          </Descriptions.Item>
          <Descriptions.Item label="Notes" style={contentStyle}>
            {proc?.notes}
          </Descriptions.Item>
        </Descriptions>
      ))}

      <Divider orientation="left" style={sectionHeaderStyle}>
        Family History
      </Divider>

      {familyHistory?.map((fam, i) => (
        <Descriptions
          key={i}
          column={1}
          bordered
          size="small"
          style={{ marginBottom: 16 }}
        >
          <Descriptions.Item label="Relation" style={contentStyle}>
            {fam?.relation}
          </Descriptions.Item>
          <Descriptions.Item label="Condition" style={contentStyle}>
            {fam?.condition}
          </Descriptions.Item>
          <Descriptions.Item label="Notes" style={contentStyle}>
            {fam?.notes}
          </Descriptions.Item>
        </Descriptions>
      ))}

      <Divider orientation="left" style={sectionHeaderStyle}>
        Previous Providers
      </Divider>

      {previousProviders?.map((doc, i) => (
        <Descriptions
          key={i}
          column={2}
          bordered
          size="small"
          style={{ marginBottom: 16 }}
        >
          <Descriptions.Item label="Name" style={contentStyle}>
            {doc?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Contact" style={contentStyle}>
            {doc?.contactInfo}
          </Descriptions.Item>
          <Descriptions.Item label="Period" style={contentStyle}>
            {doc?.period}
          </Descriptions.Item>
        </Descriptions>
      ))}
    </Card>
  );
};

const PatientDiary = ({ diaryData, diaryLoading, navigate, id }) => {
  const [value, setValue] = useState(dayjs());

  const onSelect = (date) => {
    setValue(date);
  };

  const onPanelChange = (date) => {
    setValue(date);
  };

  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const hasEntry = diaryData?.some((entry) => entry.entryDate === dateStr);
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <Tooltip title={hasEntry ? "Click to view entry" : "Diary not filled"}>
          <span
            style={{
              ...markerStyle,
              background: hasEntry
                ? "#1677ff"
                : "linear-gradient(to left, #e9e8e6 0%, #ddd1d1 100%)",
              border: hasEntry ? "" : "2px dashed grey",
              cursor: hasEntry ? "pointer" : "default",
            }}
            onClick={() => {
              if (hasEntry) {
                navigate(
                  `/my-patients/${id}/date/${value.format("YYYY-MM-DD")}`
                );
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Not Updated",
                  text: "Patient hasn't updated for this day",
                });
              }
            }}
          />
        </Tooltip>
      </div>
    );
  };

  if (diaryLoading)
    return <Spin tip="Fetching the diary entry. Please wait..." fullscreen />;
  return (
    <div>
      <Typography.Title
        style={{
          fontFamily: "Raleway",
          display: "flex",
          justifyContent: "right",
          marginBottom: 24,
        }}
      >
        {format(new Date(value), "EEEE, do MMMM yyyy")}
      </Typography.Title>
      <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
      <Calendar
        value={value}
        onSelect={onSelect}
        cellRender={dateCellRender}
        onPanelChange={onPanelChange}
        disabledDate={(current) => current && current > dayjs().endOf("day")}
      />
    </div>
  );
};

function MyPatientsPage() {
  const navigate = useNavigate();
  const { patientData, patientLoading, fetchPatientById } =
    useFetchPatientById();
  const { id } = useParams();
  const { diaryData, diaryLoading } = useFetchDiaryData(id);

  useEffect(() => {
    const fetchingPatient = async () => {
      await fetchPatientById(id);
    };
    fetchingPatient();
  }, [id]);

  const patient = patientData?.[0].createdBy;
  const patientDiagnosis = patientData?.[0].patientInformation?.[0];

  const tabItems = [
    {
      key: 1,
      name: "Patient Information",
      childPage: <PatientInformation patientInformation={patientData} />,
      icon: <UserOutlined style={iconStyle} />,
    },
    {
      key: 2,
      name: "Medical Information",
      childPage: <PatientDetails details={patientData} />,
      icon: <BookOutlined style={iconStyle} />,
    },
    {
      key: 3,
      name: "Diary Entries",
      childPage: (
        <PatientDiary
          diaryData={diaryData}
          diaryLoading={diaryLoading}
          navigate={navigate}
          id={id}
        />
      ),
      icon: <CalendarOutlined style={iconStyle} />,
    },
  ];

  if (patientLoading)
    return (
      <div>
        <Spin tip="Loading..." fullscreen />
      </div>
    );
  return (
    <div
      style={{
        padding: "0.5rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <Button
          danger
          onClick={() => {
            navigate("/my-patients");
          }}
        >
          Back
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          background: "white",
          margin: 10,
          padding: 10,
          borderRadius: "12px",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        <div>
          <Avatar src={patient?.avatar} size={82} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title level={3} style={{ fontFamily: "Raleway", marginBottom: 3 }}>
            {patient?.firstName} {patient?.middleName} {patient?.lastName}
          </Title>
          <Text
            type="secondary"
            style={{ fontFamily: "Roboto", fontWeight: 600 }}
          >
            {patientDiagnosis?.diagnosis}
          </Text>
        </div>
      </div>
      <>
        <div
          style={{
            background: "#fff",
            border: "1px solid whitesmoke",
            borderRadius: "10px",
            padding: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
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
              children: (
                <div style={{ margin: 7, padding: "0.5rem" }}>
                  {item.childPage}
                </div>
              ),
            }))}
          />
        </div>
      </>
    </div>
  );
}

export default MyPatientsPage;
