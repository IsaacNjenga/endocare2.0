import { Modal, Descriptions, Divider, List, Typography, Avatar, Spin } from "antd";
import React from "react";

const { Title, Text } = Typography;

function PatientModal({ openPatientModal, patientData, setOpenPatientModal, loading }) {
  if (!patientData) return null;

  const info = patientData[0];

  const renderList = (title, data, renderItem) => (
    <>
      <Divider orientation="left">{title}</Divider>
      <List
        dataSource={data}
        bordered
        renderItem={renderItem}
        locale={{ emptyText: "No data available" }}
        style={{ marginBottom: "1rem" }}
      />
    </>
  );

  //console.log(patientData)

  return (
    <Modal
      footer={null}
      open={openPatientModal}
      confirmLoading={loading}
      onCancel={() => setOpenPatientModal(false)}
      width={900}
      style={{ maxWidth: "95vw" }}
    >
      {loading ? (
        <Spin fullscreen />
      ) : (
        <div>
          <Title level={4}>Patient Overview</Title>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Diagnosis">{info?.patientInformation?.[0]?.diagnosis}</Descriptions.Item>
            <Descriptions.Item label="Blood Type">{info?.patientInformation?.[0]?.bloodType}</Descriptions.Item>
            <Descriptions.Item label="Chronic Conditions">{info?.patientInformation?.[0]?.chronicConditions?.join(", ")}</Descriptions.Item>
            <Descriptions.Item label="Allergies">{info?.patientInformation?.[0]?.allergies?.join(", ")}</Descriptions.Item>
          </Descriptions>

          {renderList("Current Medications", info.currentMedications, (item) => (
            <List.Item>
              <Text strong>{item.name}</Text> — {item.dosage}, {item.frequency} <br />
              <Text type="secondary">Start: {new Date(item.startDate).toDateString()}</Text>
            </List.Item>
          ))}

          {renderList("Treatment History", info.treatmentHistory, (item) => (
            <List.Item>
              <Text strong>{item.condition}</Text> — {item.treatmentDescription} <br />
              <Text type="secondary">Date: {new Date(item.diagnosisDate).toDateString()} | Outcome: {item.outcome}</Text>
            </List.Item>
          ))}

          {renderList("Medical Procedures", info.medicalProcedures, (item) => (
            <List.Item>
              <Text strong>{item.procedureName}</Text> — {item.notes} <br />
              <Text type="secondary">Date: {new Date(item.dateOfProcedure).toDateString()}</Text>
            </List.Item>
          ))}

          {renderList("Family History", info.familyHistory, (item) => (
            <List.Item>
              <Text strong>{item.relation}</Text> — {item.condition} <br />
              <Text type="secondary">{item.notes}</Text>
            </List.Item>
          ))}

          {renderList("Previous Providers", info.previousProviders, (item) => (
            <List.Item>
              <Text strong>{item.name}</Text> — {item.contactInfo} <br />
              <Text type="secondary">Period: {item.period}</Text>
            </List.Item>
          ))}

          {renderList("Lifestyle", info.lifestyle, (item) => (
            <List.Item>
              <Text>Smoking: {item.smoking}</Text><br />
              <Text>Alcohol: {item.alcoholUse}</Text><br />
              <Text>Exercise: {item.exerciseFrequency}</Text><br />
              <Text>Diet: {item.dietDescription}</Text>
            </List.Item>
          ))}

          <Divider orientation="left">Emergency & Creator Info</Divider>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={info.createdBy?.avatar} />}
              title={`${info.createdBy?.firstName} ${info.createdBy?.middleName} ${info.createdBy?.lastName}`}
              description={`Phone: ${info.createdBy?.phoneNumber}, Email: ${info.createdBy?.email}`}
            />
            <div>
              <Text>Gender: {info.createdBy?.gender}</Text><br />
              <Text>DOB: {new Date(info.createdBy?.dob).toDateString()}</Text><br />
              <Text>Emergency Contact: {info.createdBy?.emergencyName} ({info.createdBy?.emergencyPhoneNumber})</Text><br />
              <Text>Email: {info.createdBy?.emergencyEmail}</Text>
            </div>
          </List.Item>

          <Divider />
          <Text type="secondary">
            Created At: {new Date(info.createdAt).toLocaleString()}<br />
            Updated At: {new Date(info.updatedAt).toLocaleString()}
          </Text>
        </div>
      )}
    </Modal>
  );
}

export default PatientModal;
