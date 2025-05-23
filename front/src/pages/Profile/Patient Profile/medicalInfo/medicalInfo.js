import React, { useState } from "react";
import {
  Card,
  Descriptions,
  Typography,
  Divider,
  Tag,
  List,
  Space,
  Collapse,
  Tooltip,
  Button,
} from "antd";
import UpdateMedicalInfoModal from "./updateMedicalInfoModal";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
const { Panel } = Collapse;

function MedicalInfo({
  labelStyle,
  contentStyle,
  sectionCardStyle,
  sectionHeaderStyle,
}) {
  const navigate = useNavigate();
  // const values = {
  //   patientInformation: [
  //     {
  //       diagnosis: "sick",
  //       chronicConditions: ["heart disease", "liver failure"],
  //       allergies: ["milk", "eggs"],
  //       bloodType: "A+",
  //     },
  //   ],
  //   currentMedications: [
  //     {
  //       name: "pills",
  //       dosage: "alot",
  //       frequency: "1x2",
  //       isOngoing: true,
  //       startDate: "2001-02-12",
  //     },
  //     {
  //       name: "pills",
  //       dosage: "alot",
  //       frequency: "1x2",
  //       isOngoing: true,
  //       startDate: "2001-02-12",
  //     },
  //     {
  //       name: "pills",
  //       dosage: "alot",
  //       frequency: "1x2",
  //       isOngoing: true,
  //       startDate: "2001-02-12",
  //     },
  //     {
  //       name: "pills",
  //       dosage: "alot",
  //       frequency: "1x2",
  //       isOngoing: true,
  //       startDate: "2001-02-12",
  //     },
  //   ],
  //   treatmentHistory: [
  //     {
  //       condition: "big head",
  //       diagnosisDate: "2001-01-01",
  //       treatmentDescription: "sick",
  //       outcome: "not bad",
  //     },
  //     {
  //       condition: "big head",
  //       diagnosisDate: "2001-01-01",
  //       treatmentDescription: "sick",
  //       outcome: "not bad",
  //     },
  //     {
  //       condition: "big head",
  //       diagnosisDate: "2001-01-01",
  //       treatmentDescription: "sick",
  //       outcome: "not bad",
  //     },
  //   ],
  //   medicalProcedures: [
  //     { procedureName: "surgery", date: "2001-03-03", notes: "bla bla bla" },
  //     { procedureName: "surgery", date: "2001-03-03", notes: "bla bla bla" },
  //     { procedureName: "surgery", date: "2001-03-03", notes: "bla bla bla" },
  //   ],
  //   familyMedicalHistory: [
  //     { relation: "Papa", condition: "sick", notes: "very sicc" },
  //     { relation: "Papa", condition: "sick", notes: "very sicc" },
  //     { relation: "Papa", condition: "sick", notes: "very sicc" },
  //   ],
  //   previousHealthcareProviders: [
  //     {
  //       name: "John Doe",
  //       contactInfo: "email@email.com",
  //       period: "2001-2003",
  //     },
  //     {
  //       name: "John Doe",
  //       contactInfo: "email@email.com",
  //       period: "2001-2003",
  //     },
  //   ],
  //   lifestyle: [
  //     {
  //       smoking: false,
  //       alcoholUse: true,
  //       exerciseFrequency: "daily",
  //       dietDescription: "poor",
  //     },
  //   ],
  //   assignedPhysician: "Dr.John",
  // };
  const values = {};
  const [openMedicalInfoModal, setOpenMedicalInfoModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const renderListAsTags = (items) => (
    <Space wrap>
      {items.map((item, idx) => (
        <Tag key={idx} color="red">
          {item}
        </Tag>
      ))}
    </Space>
  );

  const renderObjectList = (data, fields) => (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          margin: "5px 0px",
        }}
      >
        <Tooltip title="Edit this section">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleUpdate(data)}
          />
        </Tooltip>
      </div>
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
    </>
  );

  const MedicalProceduresSection = ({
    procedures,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Medical Procedures
        </Title>{" "}
        {procedures.map((procedure, index) => (
          <Card
            key={index}
            type="inner"
            style={{ marginBottom: "1rem", borderRadius: "10px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                margin: "5px 0px",
              }}
            >
              <Tooltip title="Edit this section">
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => handleUpdate(procedure)}
                />
              </Tooltip>
            </div>
            <Descriptions size="small" column={2}>
              <Descriptions.Item
                label={<span style={labelStyle}>Procedure</span>}
              >
                <span style={contentStyle}>{procedure.procedureName}</span>
              </Descriptions.Item>
              <Descriptions.Item label={<span style={labelStyle}>Date</span>}>
                <span style={contentStyle}>{procedure.date}</span>
              </Descriptions.Item>
            </Descriptions>

            <Collapse style={{ marginTop: "1rem" }}>
              <Panel header="View Notes" key="1">
                <p style={contentStyle}>{procedure.notes}</p>
              </Panel>
            </Collapse>
          </Card>
        ))}
      </>
    );
  };

  const FamilyMedicalHistorySection = ({
    medicalHistory,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Family Medical History
        </Title>
        {medicalHistory.map((history, index) => (
          <Card
            key={index}
            type="inner"
            style={{ marginBottom: "1rem", borderRadius: "10px" }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                margin: "5px 0px",
              }}
            >
              <Tooltip title="Edit this section">
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => handleUpdate(history)}
                />
              </Tooltip>
            </div>
            <Descriptions size="small" column={2}>
              <Descriptions.Item
                label={<span style={labelStyle}>Relation</span>}
              >
                <span style={contentStyle}>{history.relation}</span>
              </Descriptions.Item>
              <Descriptions.Item
                label={<span style={labelStyle}>Condition</span>}
              >
                <span style={contentStyle}>{history.condition}</span>
              </Descriptions.Item>
            </Descriptions>
            <Collapse style={{ marginTop: "1rem" }}>
              <Panel header="View Notes" key="1">
                <p style={contentStyle}>{history.notes}</p>
              </Panel>
            </Collapse>
          </Card>
        ))}
      </>
    );
  };

  const handleUpdate = (info) => {
    setOpenMedicalInfoModal(true);
    setModalContent(info);
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };

  return (
    <>
      {values.length > 0 ? (
        <>
          <div style={{ fontFamily: "Roboto", padding: "0.7rem" }}>
            <Title level={2} style={{ ...sectionHeaderStyle }}>
              <u>Medical Information</u>
            </Title>

            <Card style={sectionCardStyle}>
              {values?.patientInformation.map((info) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      margin: "5px 0px",
                    }}
                  >
                    <Tooltip title="Edit this section">
                      <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleUpdate(info)}
                      />
                    </Tooltip>
                  </div>
                  <Descriptions column={2} bordered size="samll">
                    <Descriptions.Item
                      label={<span style={labelStyle}>Diagnosis</span>}
                    >
                      <span style={contentStyle}>{info.diagnosis}</span>
                    </Descriptions.Item>
                    <Descriptions.Item
                      label={<span style={labelStyle}>Chronic Conditions</span>}
                    >
                      {renderListAsTags(info.chronicConditions)}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label={<span style={labelStyle}>Allergies</span>}
                    >
                      {renderListAsTags(info.allergies)}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label={<span style={labelStyle}>Blood Type</span>}
                    >
                      <span style={contentStyle}>{info.bloodType}</span>
                    </Descriptions.Item>
                    <Descriptions.Item
                      label={<span style={labelStyle}>Assigned Physician</span>}
                    >
                      <span style={contentStyle}>
                        {values?.assignedPhysician}
                      </span>
                    </Descriptions.Item>
                  </Descriptions>
                </>
              ))}
            </Card>

            <Divider />

            <Title level={4} style={sectionHeaderStyle}>
              Current Medications
            </Title>
            {renderObjectList(values?.currentMedications, [
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
            {renderObjectList(values?.treatmentHistory, [
              { key: "condition", label: "Condition" },
              { key: "diagnosisDate", label: "Diagnosis Date" },
              { key: "treatmentDescription", label: "Description" },
              { key: "outcome", label: "Outcome" },
            ])}

            <Divider />

            <MedicalProceduresSection
              procedures={values?.medicalProcedures}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />

            <Divider />

            <FamilyMedicalHistorySection
              medicalHistory={values?.familyMedicalHistory}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />

            <Divider />

            <Title level={4} style={sectionHeaderStyle}>
              Previous Healthcare Providers
            </Title>
            {renderObjectList(values?.previousHealthcareProviders, [
              { key: "name", label: "Name" },
              { key: "contactInfo", label: "Contact" },
              { key: "period", label: "Period" },
            ])}

            <Divider />

            <Title level={4} style={sectionHeaderStyle}>
              Lifestyle
            </Title>
            {values?.lifestyle.map((lifestyle) => (
              <>
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    margin: "5px 0px",
                  }}
                >
                  <Tooltip title="Edit this section">
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      onClick={() => handleUpdate(lifestyle)}
                    />
                  </Tooltip>
                </div>
                <Descriptions column={2} bordered size="small">
                  <Descriptions.Item
                    label={<span style={labelStyle}>Smoking</span>}
                  >
                    <span style={contentStyle}>
                      {lifestyle.smoking ? "Yes" : "No"}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={labelStyle}>Alcohol Use</span>}
                  >
                    <span style={contentStyle}>
                      {lifestyle.alcoholUse ? "Yes" : "No"}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={labelStyle}>Exercise Frequency</span>}
                  >
                    <span style={contentStyle}>
                      {lifestyle.exerciseFrequency}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={labelStyle}>Diet Description</span>}
                  >
                    <span style={contentStyle}>
                      {lifestyle.dietDescription}
                    </span>
                  </Descriptions.Item>
                </Descriptions>
              </>
            ))}
          </div>
          <UpdateMedicalInfoModal
            openMedicalInfoModal={openMedicalInfoModal}
            setOpenMedicalInfoModal={setOpenMedicalInfoModal}
            loading={loading}
            modalContent={modalContent}
          />
        </>
      ) : (
        <>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Typography.Paragraph>
              Looks like your information is not updated.
            </Typography.Paragraph>
            <Button
              type="link"
              onClick={() => {
                navigate("/profile/create-medical-info");
              }}
            >
              Click here to get started
            </Button>
          </Space>
        </>
      )}
    </>
  );
}
export default MedicalInfo;
