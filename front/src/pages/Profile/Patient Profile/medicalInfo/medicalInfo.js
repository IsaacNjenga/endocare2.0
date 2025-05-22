import React from "react";
import {
  Card,
  Descriptions,
  Typography,
  Divider,
  Tag,
  List,
  Space,
} from "antd";

const { Title, Text } = Typography;

function MedicalInfo({
  labelStyle,
  contentStyle,
  sectionCardStyle,
  sectionHeaderStyle,
}) {
  const values = {
    diagnosis: "sick",
    chronicConditions: ["heart disease", "liver failure"],
    allergies: ["milk", "eggs"],
    bloodType: "A+",
    currentMedications: [
      {
        name: "pills",
        dosage: "alot",
        frequency: "1x2",
        isOngoing: true,
        startDate: "2001-02-12",
      },
      {
        name: "pills",
        dosage: "alot",
        frequency: "1x2",
        isOngoing: true,
        startDate: "2001-02-12",
      },
      {
        name: "pills",
        dosage: "alot",
        frequency: "1x2",
        isOngoing: true,
        startDate: "2001-02-12",
      },
      {
        name: "pills",
        dosage: "alot",
        frequency: "1x2",
        isOngoing: true,
        startDate: "2001-02-12",
      },
    ],
    treatmentHistory: [
      {
        condition: "big head",
        diagnosisDate: "2001-01-01",
        treatmentDescription: "sick",
        outcome: "not bad",
      },
      {
        condition: "big head",
        diagnosisDate: "2001-01-01",
        treatmentDescription: "sick",
        outcome: "not bad",
      },
      {
        condition: "big head",
        diagnosisDate: "2001-01-01",
        treatmentDescription: "sick",
        outcome: "not bad",
      },
    ],
    medicalProcedures: [
      { procedureName: "surgery", date: "2001-03-03", notes: "bla bla bla" },
      { procedureName: "surgery", date: "2001-03-03", notes: "bla bla bla" },
      { procedureName: "surgery", date: "2001-03-03", notes: "bla bla bla" },
    ],
    familyMedicalHistory: [
      { relation: "Papa", condition: "sick", notes: "very sicc" },
      { relation: "Papa", condition: "sick", notes: "very sicc" },
      { relation: "Papa", condition: "sick", notes: "very sicc" },
    ],
    previousHealthcareProviders: [
      {
        name: "John Doe",
        contactInfo: "email@email.com",
        period: "2001-2003",
      },
      {
        name: "John Doe",
        contactInfo: "email@email.com",
        period: "2001-2003",
      },
    ],
    lifestyle: {
      smoking: false,
      alcoholUse: true,
      exerciseFrequency: "daily",
      dietDescription: "poor",
    },
    assignedPhysician: "Dr.John",
  };

  const renderListAsTags = (items) => (
    <Space wrap>
      {items.map((item, idx) => (
        <Tag key={idx} color="blue">
          {item}
        </Tag>
      ))}
    </Space>
  );

  const renderObjectList = (data, fields) => (
    <List
      size="small"
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          {fields.map((f, i) => (
            <div key={i} style={{ marginRight: 20 }}>
              <Text strong>{f.label}:</Text>{" "}
              <span style={contentStyle}>{item[f.key] || "—"}</span>
            </div>
          ))}
        </List.Item>
      )}
    />
  );

  return (
    <div style={{ fontFamily: "Roboto", padding: "0.7rem" }}>
      <Title level={2} style={{ ...sectionHeaderStyle }}>
        <u>Medical Information</u>
      </Title>

      <Card style={sectionCardStyle}>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label={<span style={labelStyle}>Diagnosis</span>}>
            <span style={contentStyle}>{values.diagnosis}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Chronic Conditions</span>}
          >
            {renderListAsTags(values.chronicConditions)}
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Allergies</span>}>
            {renderListAsTags(values.allergies)}
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Blood Type</span>}>
            <span style={contentStyle}>{values.bloodType}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Assigned Physician</span>}
          >
            <span style={contentStyle}>{values.assignedPhysician}</span>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Divider />

      <Title level={4} style={sectionHeaderStyle}>
        Current Medications
      </Title>
      {renderObjectList(values.currentMedications, [
        { key: "name", label: "Name" },
        { key: "dosage", label: "Dosage" },
        { key: "frequency", label: "Frequency" },
        { key: "startDate", label: "Start Date" },
        { key: "isOngoing", label: "Ongoing" },
      ])}

      <Divider />

      <Title level={4} style={sectionHeaderStyle}>
        Treatment History
      </Title>
      {renderObjectList(values.treatmentHistory, [
        { key: "condition", label: "Condition" },
        { key: "diagnosisDate", label: "Diagnosis Date" },
        { key: "treatmentDescription", label: "Description" },
        { key: "outcome", label: "Outcome" },
      ])}

      <Divider />

      <Title level={4} style={sectionHeaderStyle}>
        Medical Procedures
      </Title>
      {renderObjectList(values.medicalProcedures, [
        { key: "procedureName", label: "Procedure" },
        { key: "date", label: "Date" },
        { key: "notes", label: "Notes" },
      ])}

      <Divider />

      <Title level={4} style={sectionHeaderStyle}>
        Family Medical History
      </Title>
      {renderObjectList(values.familyMedicalHistory, [
        { key: "relation", label: "Relation" },
        { key: "condition", label: "Condition" },
        { key: "notes", label: "Notes" },
      ])}

      <Divider />

      <Title level={4} style={sectionHeaderStyle}>
        Previous Healthcare Providers
      </Title>
      {renderObjectList(values.previousHealthcareProviders, [
        { key: "name", label: "Name" },
        { key: "contactInfo", label: "Contact" },
        { key: "period", label: "Period" },
      ])}

      <Divider />

      <Title level={4} style={sectionHeaderStyle}>
        Lifestyle
      </Title>
      <Descriptions column={2} bordered size="small">
        <Descriptions.Item label={<span style={labelStyle}>Smoking</span>}>
          <span style={contentStyle}>
            {values.lifestyle.smoking ? "Yes" : "No"}
          </span>
        </Descriptions.Item>
        <Descriptions.Item label={<span style={labelStyle}>Alcohol Use</span>}>
          <span style={contentStyle}>
            {values.lifestyle.alcoholUse ? "Yes" : "No"}
          </span>
        </Descriptions.Item>
        <Descriptions.Item
          label={<span style={labelStyle}>Exercise Frequency</span>}
        >
          <span style={contentStyle}>{values.lifestyle.exerciseFrequency}</span>
        </Descriptions.Item>
        <Descriptions.Item
          label={<span style={labelStyle}>Diet Description</span>}
        >
          <span style={contentStyle}>{values.lifestyle.dietDescription}</span>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
export default MedicalInfo;
