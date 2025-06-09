import React, { useState, useContext } from "react";
import { Card, List, Spin, Switch, Typography, Tag, Row, Col } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import useFetchMyPatients from "../../hooks/fetchMyPatients";
import { UserContext } from "../../App";

const { Title, Text } = Typography;

function MyPatients() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { myPatients, myPatientsLoading } = useFetchMyPatients(userId);
  const [listView, setListView] = useState(false);

  const renderPatientCard = (patient) => {
    const info = patient.patientInformation?.[0];
    const lifestyle = patient.lifestyle?.[0];

    return (
      <Card
        key={patient._id}
        title={info?.diagnosis || "Unknown Diagnosis"}
        bordered
        style={{ marginBottom: 16 }}
      >
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Text strong>Blood Type:</Text> {info?.bloodType}
          </Col>
          <Col span={12}>
            <Text strong>Allergies:</Text>{" "}
            {(info?.allergies || []).join(", ") || "None"}
          </Col>
          <Col span={12}>
            <Text strong>Chronic Conditions:</Text>{" "}
            {(info?.chronicConditions || []).join(", ") || "None"}
          </Col>
          <Col span={12}>
            <Text strong>Medications:</Text>{" "}
            {(patient.currentMedications || [])
              .map((m) => `${m.name} (${m.dosage})`)
              .join(", ") || "None"}
          </Col>
          <Col span={12}>
            <Text strong>Procedures:</Text>{" "}
            {(patient.medicalProcedures || [])
              .map((p) => p.procedureName)
              .join(", ") || "None"}
          </Col>
          <Col span={12}>
            <Text strong>Lifestyle:</Text>{" "}
            {lifestyle
              ? `${lifestyle.smoking}, ${lifestyle.alcoholUse}, ${lifestyle.exerciseFrequency}`
              : "N/A"}
          </Col>
        </Row>
      </Card>
    );
  };

  const renderPatientListItem = (patient) => {
    const info = patient.patientInformation?.[0];
    const diagnosis = info?.diagnosis || "Unknown";

    return (
      <List.Item key={patient._id}>
        <List.Item.Meta
          title={<Text strong>{diagnosis}</Text>}
          description={
            <>
              <Text>
                <strong>Medications:</strong>{" "}
                {(patient.currentMedications || [])
                  .map((m) => m.name)
                  .join(", ") || "None"}
              </Text>
              <br />
              <Text>
                <strong>Blood Type:</strong> {info?.bloodType}
              </Text>
              <br />
              <Text>
                <strong>Allergies:</strong>{" "}
                {(info?.allergies || []).join(", ") || "None"}
              </Text>
            </>
          }
        />
        <div>
          <Tag color="blue">Lifestyle: {patient.lifestyle?.[0]?.smoking}</Tag>
        </div>
      </List.Item>
    );
  };

  if (myPatientsLoading) {
    return <Spin tip="Loading..." size="large" fullscreen />;
  }

  const gridIconStyle = {
    background: !listView ? "#1377fd" : "#fff0f0",
    color: !listView ? "white" : "black",
    fontSize: "1.4rem",
    padding: 8,
    borderRadius: "20%",
    border: listView ? "1px solid grey" : "1px solid rgba(0,0,0,0)",
  };

  const listIconStyle = {
    background: listView ? "#1377fd" : "#fff0f0",
    color: listView ? "white" : "black",
    fontSize: "1.4rem",
    padding: 8,
    borderRadius: "20%",
    border: !listView ? "1px solid grey" : "1px solid rgba(0,0,0,0)",
  };

  return (
    <div style={{ padding: 18 }}>
      <div
        style={{
          display: "flex",
          gap: 5,
          padding: 10,
          margin: "0px auto",
        }}
      >
        <div onClick={() => setListView((prev) => !prev)}>
          <AppstoreOutlined style={gridIconStyle} />
        </div>

        <div onClick={() => setListView((prev) => !prev)}>
          <UnorderedListOutlined style={listIconStyle} />
        </div>
      </div>

      {myPatients ? (
        listView ? (
          <List
            itemLayout="horizontal"
            dataSource={myPatients}
            renderItem={renderPatientListItem}
          />
        ) : (
          myPatients.map((patient) => renderPatientCard(patient))
        )
      ) : null}
    </div>
  );
}

export default MyPatients;
