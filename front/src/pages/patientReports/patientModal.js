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
  Button,
  Form,
  Input,
  Drawer,
} from "antd";
import { formatDistanceToNowStrict } from "date-fns";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../App";
import axios from "axios";

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

const RenderReportForm = ({
  patientInfo,
  user,
  setReportFormVisible,
  patientReport,
}) => {
  const [formLoading, setFormLoading] = useState(false);
  const [value, setValue] = useState("");
  const [form] = Form.useForm();

  const reportValue = patientReport?.report;

  React.useEffect(() => {
    if (reportValue && patientReport !== null) {
      setValue({ report: reportValue });
      form.setFieldsValue({ report: reportValue });
    } else {
      setValue({ report: "" });
      form.setFieldsValue({ report: "" });
    }
  }, [form, patientReport, reportValue]);

  const handleFormSubmit = async () => {
    setFormLoading(true);
    try {
      const values = await form.validateFields();
      const existingValue = patientReport?.report;

      const payload = {
        ...values,
        createdBy: user._id,
        patientId: patientInfo?._id,
      };

      let res;
      if (existingValue) {
        res = await axios.put(
          `update-patient-report?id=${patientReport?._id}`,
          payload
        );
      } else {
        res = await axios.post("create-patient-report", payload);
      }
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: existingValue
            ? "Report updated successfully!"
            : "Report submitted successfully!",
        });
        setReportFormVisible(false);
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
      setFormLoading(false);
    }
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        initialValues={value}
      >
        <Form.Item
          label={
            <span
              style={{ fontFamily: "Raleway", fontWeight: "bold" }}
            >{`Patient Report on ${patientInfo?.firstName} ${patientInfo?.lastName}`}</span>
          }
          name="report"
        >
          <Input.TextArea rows={20} />
        </Form.Item>
        <Button block htmlType="submit" loading={formLoading} type="primary">
          {formLoading ? "Submitting report..." : "Submit Report"}
        </Button>
      </Form>
    </div>
  );
};

function PatientModal({
  openPatientModal,
  patientData,
  setOpenPatientModal,
  loading,
  patientReport,
  reportLoading,
}) {
  const [reportFormVisible, setReportFormVisible] = useState(false);
  const { user } = useContext(UserContext);

  if (reportLoading)
    return <Spin fullscreen tip="Report Loading. Please wait..." />;

  const existingReport = patientReport?.report;
  if (!patientData) return null;

  const info = patientData[0];
  const patientInfo = info.createdBy;

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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0px 20px",
            }}
          >
            <div>
              <Title level={2} style={{ fontFamily: "Raleway", margin: 0 }}>
                Patient Overview
              </Title>
            </div>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  //navigate(`/edit-report/${info.createdBy?._id}`);
                  setReportFormVisible(true);
                }}
              >
                {existingReport
                  ? "View Patient Report"
                  : "Generate Patient Report"}
              </Button>
            </div>
          </div>

          <Divider dashed size="large" style={{ borderColor: "#00152a" }} />
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
                        src={info?.createdBy?.avatar}
                        size={84}
                        style={{ border: "2px solid #00152a" }}
                      />
                      <Title
                        level={3}
                        style={{ marginTop: 8, fontFamily: "Raleway" }}
                      >
                        {`${info?.createdBy?.firstName} ${
                          info?.createdBy?.middleName ?? ""
                        } ${info.createdBy?.lastName}`}
                      </Title>
                      <Text
                        type="secondary"
                        style={{ fontSize: 14, fontFamily: "Raleway" }}
                      >
                        {info?.createdBy?.gender},{" "}
                        {formatDistanceToNowStrict(
                          new Date(info?.createdBy?.dob)
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
                            📞 Phone: {info?.createdBy?.phoneNumber}
                          </Text>
                          <br />
                          <Text style={{ fontFamily: "Raleway" }}>
                            📧 Email: {info?.createdBy?.email}
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
                            👤 {info?.createdBy?.emergencyName} <br />
                            📞 {info?.createdBy?.emergencyPhoneNumber} <br />
                            📧 {info?.createdBy?.emergencyEmail}
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
                <Descriptions
                  bordered
                  column={1}
                  size="middle"
                  styles={{
                    contentStyle: { fontFamily: "Roboto" },
                    labelStyle: { fontWeight: 600, fontFamily: "Raleway" },
                  }}
                >
                  <Descriptions.Item label="Diagnosis">
                    {info?.patientInformation?.[0]?.diagnosis || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Blood Type">
                    {info?.patientInformation?.[0]?.bloodType || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Chronic Conditions">
                    {(
                      info?.patientInformation?.[0]?.chronicConditions || []
                    ).join(", ") || "None"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Allergies">
                    {(info?.patientInformation?.[0]?.allergies || []).join(
                      ", "
                    ) || "None"}
                  </Descriptions.Item>
                </Descriptions>
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="left" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Current Medications</span>
                </Divider>
                <List
                  itemLayout="vertical"
                  dataSource={info?.currentMedications}
                  renderItem={(item) => (
                    <List.Item>
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        {item?.name}
                      </Text>{" "}
                      — {item?.dosage}, {item?.frequency}
                      <br />
                      <Text type="secondary" style={{ fontSize: 13 }}>
                        Started: {new Date(item?.startDate).toDateString()}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="left" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Treatment History</span>
                </Divider>
                <List
                  itemLayout="vertical"
                  dataSource={info?.treatmentHistory}
                  renderItem={(item) => (
                    <List.Item>
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        {item.condition}
                      </Text>{" "}
                      — {item.treatmentDescription}
                      <br />
                      <Text type="secondary" style={{ fontSize: 13 }}>
                        Date: {new Date(item.diagnosisDate).toDateString()} |
                        Outcome: {item.outcome}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            <Col lg={12}>
              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Medical Procedures</span>
                </Divider>{" "}
                <List
                  itemLayout="vertical"
                  dataSource={info?.medicalProcedures}
                  renderItem={(item) => (
                    <List.Item>
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        {item.procedureName}
                      </Text>{" "}
                      — {item.notes}
                      <br />
                      <Text type="secondary" style={{ fontSize: 13 }}>
                        Date: {new Date(item.dateOfProcedure).toDateString()}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Family History</span>
                </Divider>
                <List
                  itemLayout="vertical"
                  dataSource={info?.familyHistory}
                  renderItem={(item) => (
                    <List.Item>
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        {item?.relation}
                      </Text>{" "}
                      — {item?.condition}
                      <br />
                      <Text type="secondary" style={{ fontSize: 13 }}>
                        {item?.notes}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Previous Providers</span>
                </Divider>
                <List
                  itemLayout="vertical"
                  dataSource={info?.previousProviders}
                  renderItem={(item) => (
                    <List.Item>
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        {item.name}
                      </Text>{" "}
                      — {item.contactInfo}
                      <br />
                      <Text type="secondary" style={{ fontSize: 13 }}>
                        Period: {item.period}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>

              <Divider />

              <Card style={cardStyle}>
                <Divider orientation="right" style={{ borderColor: "#00152a" }}>
                  <span style={dividerStyle}>Patient's Lifestyle</span>
                </Divider>
                <List
                  itemLayout="vertical"
                  dataSource={info?.lifestyle}
                  renderItem={(item) => (
                    <List.Item>
                      <Text style={{ fontFamily: "Roboto" }}>
                        <strong>Smoking:</strong> {item.smoking}
                      </Text>
                      <br />
                      <Text>
                        <strong>Alcohol Use:</strong> {item.alcoholUse}
                      </Text>
                      <br />
                      <Text>
                        <strong>Exercise Frequency:</strong>{" "}
                        {item.exerciseFrequency}
                      </Text>
                      <br />
                      <Text>
                        <strong>Diet:</strong> {item.dietDescription}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>
      )}

      <Drawer
        title="Patient Report"
        placement="right"
        width={700}
        onClose={() => setReportFormVisible(false)}
        open={reportFormVisible}
        bodyStyle={{ padding: "24px" }}
      >
        <RenderReportForm
          patientInfo={patientInfo}
          user={user}
          setReportFormVisible={setReportFormVisible}
          patientReport={patientReport}
        />
      </Drawer>
    </Modal>
  );
}

export default PatientModal;
