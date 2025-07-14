import {
  Modal,
  Descriptions,
  Divider,
  List,
  Typography,
  Avatar,
  Spin,
  Card,
  Row,
  Col,
} from "antd";
import { formatDistanceToNowStrict } from "date-fns";

const { Title, Text } = Typography;

const dividerStyle = {
  background: "#c0cacc6e",
  fontFamily: "Raleway",
  color: "#0b5197ff",
  padding: 8,
  borderRadius: 8,
  fontSize: "20px",
  fontWeight: "bold",
};

const cardStyle = {
  padding: 12,
  borderRadius: 16,
  background: "#f8f9fa",
  boxShadow: "0 4px 8px rgba(21, 61, 238, 0.61)",
};

function PatientModal({
  openPatientModal,
  patientData,
  setOpenPatientModal,
  loading,
}) {
  if (!patientData) return null;

  const info = patientData[0];

  const renderList = (title, data, renderItem) => (
    <>
      <List
        dataSource={data}
        bordered
        renderItem={renderItem}
        locale={{ emptyText: "No data available" }}
        style={{ marginBottom: "1rem" }}
      />
    </>
  );

  return (
    <Modal
      footer={null}
      open={openPatientModal}
      confirmLoading={loading}
      onCancel={() => setOpenPatientModal(false)}
      width={1200}
      style={{ maxWidth: "95vw" }}
    >
      {loading ? (
        <Spin fullscreen tip="Loading. Please wait..." />
      ) : (
        <div>
          <Title level={2} style={{ fontFamily: "Raleway" }}>
            Patient Overview
          </Title>
          <Row gutter={[36, 36]}>
            <Col lg={12}>
              <Card style={cardStyle}>
                <Divider orientation="left" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Patient & Emergency Info</span>
                </Divider>

                <List.Item>
                  <Row gutter={[18, 24]} align="middle">
                    <Col
                      xs={24}
                      sm={6}
                      md={8}
                      style={{
                        textAlign: "center",
                        padding: 12,
                      }}
                    >
                      <Avatar
                        src={info.createdBy?.avatar}
                        size={84}
                        style={{ border: "2px solid #00152a" }}
                      />
                      <Title
                        level={3}
                        style={{ marginTop: 8, fontFamily: "Raleway" }}
                      >
                        {`${info.createdBy?.firstName} ${
                          info.createdBy?.middleName ?? ""
                        } ${info.createdBy?.lastName}`}
                      </Title>
                      <Text
                        type="secondary"
                        style={{ fontSize: 14, fontFamily: "Raleway" }}
                      >
                        {info.createdBy?.gender},{" "}
                        {formatDistanceToNowStrict(
                          new Date(info.createdBy?.dob)
                        )}{" "}
                        old
                      </Text>
                    </Col>
                    <Col xs={24} sm={18} md={16}>
                      <Row gutter={[0, 16]}>
                        <Col span={24}>
                          <Text
                            strong
                            style={{
                              fontSize: 16,
                              textDecoration: "underline",
                              fontFamily: "Raleway",
                            }}
                          >
                            Contact Information
                          </Text>
                          <br />
                          <Text style={{ fontFamily: "Raleway" }}>
                            📞 Phone: {info.createdBy?.phoneNumber}
                          </Text>
                          <br />
                          <Text style={{ fontFamily: "Raleway" }}>
                            📧 Email: {info.createdBy?.email}
                          </Text>
                        </Col>

                        <Col span={24}>
                          <Text
                            strong
                            style={{
                              fontSize: 16,
                              textDecoration: "underline",
                              fontFamily: "Raleway",
                            }}
                          >
                            Emergency Contact
                          </Text>
                          <br />
                          <Text style={{ fontFamily: "Raleway" }}>
                            👤 {info.createdBy?.emergencyName} <br />
                            📞 {info.createdBy?.emergencyPhoneNumber} <br />
                            📧 {info.createdBy?.emergencyEmail}
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </List.Item>
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="left" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Diagnosis Info</span>
                </Divider>
                <Descriptions bordered column={1} size="small">
                  <Descriptions.Item label="Diagnosis">
                    {info?.patientInformation?.[0]?.diagnosis}
                  </Descriptions.Item>
                  <Descriptions.Item label="Blood Type">
                    {info?.patientInformation?.[0]?.bloodType}
                  </Descriptions.Item>
                  <Descriptions.Item label="Chronic Conditions">
                    {info?.patientInformation?.[0]?.chronicConditions?.join(
                      ", "
                    )}
                  </Descriptions.Item>
                  <Descriptions.Item label="Allergies">
                    {info?.patientInformation?.[0]?.allergies?.join(", ")}
                  </Descriptions.Item>
                </Descriptions>
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="left" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Current Medications</span>
                </Divider>
                {renderList(
                  "Current Medications",
                  info.currentMedications,
                  (item) => (
                    <List.Item>
                      <Text strong>{item.name}</Text> — {item.dosage},{" "}
                      {item.frequency} <br />
                      <Text type="secondary">
                        Start: {new Date(item.startDate).toDateString()}
                      </Text>
                    </List.Item>
                  )
                )}
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="left" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Treatment History</span>
                </Divider>
                {renderList(
                  "Treatment History",
                  info.treatmentHistory,
                  (item) => (
                    <List.Item>
                      <Text strong>{item.condition}</Text> —{" "}
                      {item.treatmentDescription} <br />
                      <Text type="secondary">
                        Date: {new Date(item.diagnosisDate).toDateString()} |
                        Outcome: {item.outcome}
                      </Text>
                    </List.Item>
                  )
                )}
              </Card>
            </Col>

            <Col lg={12}>
              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Medical Procedures</span>
                </Divider>
                {renderList(
                  "Medical Procedures",
                  info.medicalProcedures,
                  (item) => (
                    <List.Item>
                      <Text strong>{item.procedureName}</Text> — {item.notes}{" "}
                      <br />
                      <Text type="secondary">
                        Date: {new Date(item.dateOfProcedure).toDateString()}
                      </Text>
                    </List.Item>
                  )
                )}
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Family History</span>
                </Divider>
                {renderList("Family History", info.familyHistory, (item) => (
                  <List.Item>
                    <Text strong>{item.relation}</Text> — {item.condition}{" "}
                    <br />
                    <Text type="secondary">{item.notes}</Text>
                  </List.Item>
                ))}
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Previous Providers</span>
                </Divider>
                {renderList(
                  "Previous Providers",
                  info.previousProviders,
                  (item) => (
                    <List.Item>
                      <Text strong>{item.name}</Text> — {item.contactInfo}{" "}
                      <br />
                      <Text type="secondary">Period: {item.period}</Text>
                    </List.Item>
                  )
                )}
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Patient's Lifestyle</span>
                </Divider>
                {renderList("Lifestyle", info.lifestyle, (item) => (
                  <List.Item>
                    <Text>Smoking: {item.smoking}</Text>
                    <br />
                    <Text>Alcohol: {item.alcoholUse}</Text>
                    <br />
                    <Text>Exercise: {item.exerciseFrequency}</Text>
                    <br />
                    <Text>Diet: {item.dietDescription}</Text>
                  </List.Item>
                ))}
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Modal>
  );
}

export default PatientModal;
