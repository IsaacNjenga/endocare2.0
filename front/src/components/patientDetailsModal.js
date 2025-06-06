import { Avatar, Card, Col, Divider, Modal, Row, Spin, Typography } from "antd";
import React from "react";
import moment from "moment";

const { Title, Text } = Typography;

function PatientDetailsModal({
  openPatientModal,
  setOpenPatientModal,
  loading,
  patientData,
  patientLoading,
}) {
  const patient = patientData?.[0]; 

  return (
    <Modal
      footer={null}
      open={openPatientModal}
      onCancel={() => setOpenPatientModal(false)}
      confirmLoading={loading}
      width={800}
      style={{ maxWidth: "95vw" }}
    >
      {patientLoading ? (
        <Spin tip="Loading..." />
      ) : (
        <div style={{ padding: "12px" }}>
          {/* Personal Info */}
          <Card>
            <Row align="middle" gutter={16}>
              <Col>
                <Avatar size={80} src={patient?.createdBy?.avatar} />
              </Col>
              <Col>
                <Title level={4}>
                  {patient?.createdBy?.firstName} {patient?.createdBy?.lastName}
                </Title>
                <Text type="secondary">{patient?.createdBy?.email}</Text>
                <br />
                <Text>{patient?.createdBy?.phoneNumber}</Text>
                <br />
                <Text>
                  <strong>Gender:</strong> {patient?.createdBy?.gender}
                </Text>
              </Col>
            </Row>
          </Card>

          <Divider />

          {/* Diagnosis */}
          <Card title="Diagnosis & Health Info">
            {patient?.patientInformation?.map((info, idx) => (
              <div key={idx}>
                <p>
                  <strong>Diagnosis:</strong> {info.diagnosis}
                </p>
                <p>
                  <strong>Blood Type:</strong> {info.bloodType}
                </p>
                <p>
                  <strong>Chronic Conditions:</strong>{" "}
                  {info.chronicConditions?.join(", ")}
                </p>
                <p>
                  <strong>Allergies:</strong> {info.allergies?.join(", ")}
                </p>
              </div>
            ))}
          </Card>

          <Divider />

          {/* Medications */}
          <Card title="Current Medications">
            {patient?.currentMedications?.map((med, idx) => (
              <div key={idx} style={{ marginBottom: 8 }}>
                <Text>
                  <strong>{med.name}</strong> — {med.dosage}, {med.frequency}
                </Text>
                <br />
                <Text type="secondary">
                  Ongoing: {med.isOngoing ? "Yes" : "No"}
                </Text>
                <br />
                <Text type="secondary">
                  Started: {moment(med.startDate).format("YYYY-MM-DD")}
                </Text>
              </div>
            ))}
          </Card>

          <Divider />

          {/* Treatment History */}
          <Card title="Treatment History">
            {patient?.treatmentHistory?.map((treat, idx) => (
              <div key={idx} style={{ marginBottom: 8 }}>
                <Text>
                  <strong>Condition:</strong> {treat.condition}
                </Text>
                <br />
                <Text>
                  <strong>Diagnosis Date:</strong>{" "}
                  {moment(treat.diagnosisDate).format("YYYY-MM-DD")}
                </Text>
                <br />
                <Text>
                  <strong>Treatment:</strong> {treat.treatmentDescription}
                </Text>
                <br />
                <Text>
                  <strong>Outcome:</strong> {treat.outcome}
                </Text>
              </div>
            ))}
          </Card>

          <Divider />

          {/* Medical Procedures */}
          <Card title="Medical Procedures">
            {patient?.medicalProcedures?.map((proc, idx) => (
              <div key={idx} style={{ marginBottom: 8 }}>
                <Text>
                  <strong>Procedure:</strong> {proc.procedureName}
                </Text>
                <br />
                <Text>
                  <strong>Date:</strong>{" "}
                  {moment(proc.dateOfProcedure).format("YYYY-MM-DD")}
                </Text>
                <br />
                <Text>
                  <strong>Notes:</strong> {proc.notes}
                </Text>
              </div>
            ))}
          </Card>

          <Divider />

          {/* Family History */}
          <Card title="Family History">
            {patient?.familyHistory?.map((fam, idx) => (
              <div key={idx} style={{ marginBottom: 8 }}>
                <Text>
                  <strong>{fam.relation}</strong> — {fam.condition}
                </Text>
                <br />
                <Text type="secondary">{fam.notes}</Text>
              </div>
            ))}
          </Card>

          <Divider />

          {/* Previous Providers */}
          <Card title="Previous Providers">
            {patient?.previousProviders?.map((prov, idx) => (
              <div key={idx} style={{ marginBottom: 8 }}>
                <Text>
                  <strong>{prov.name}</strong>
                </Text>
                <br />
                <Text>Contact: {prov.contactInfo}</Text>
                <br />
                <Text>Period: {prov.period}</Text>
              </div>
            ))}
          </Card>

          <Divider />

          {/* Lifestyle */}
          <Card title="Lifestyle">
            {patient?.lifestyle?.map((life, idx) => (
              <div key={idx}>
                <p>
                  <strong>Smoking:</strong> {life.smoking}
                </p>
                <p>
                  <strong>Alcohol Use:</strong> {life.alcoholUse}
                </p>
                <p>
                  <strong>Exercise:</strong> {life.exerciseFrequency}
                </p>
                <p>
                  <strong>Diet:</strong> {life.dietDescription}
                </p>
              </div>
            ))}
          </Card>
        </div>
      )}
    </Modal>
  );
}

export default PatientDetailsModal;
