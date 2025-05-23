import { Button, Card, Col, Form, Input, Row,  } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialValues = {
  patientInformation: [
    {
      diagnosis: "",
      chronicConditions: [],
      allergies: [],
      bloodType: "",
    },
  ],
  currentMedications: [
    {
      name: "",
      dosage: "",
      frequency: "",
      isOngoing: "",
      startDate: "",
    },
  ],
  treatmentHistory: [
    {
      condition: "",
      diagnosisDate: "",
      treatmentDescription: "",
      outcome: "",
    },
  ],
  medicalProcedures: [{ procedureName: "", date: "", notes: "" }],
  familyMedicalHistory: [{ relation: "", condition: "", notes: "" }],
  previousHealthcareProviders: [
    {
      name: "",
      contactInfo: "",
      period: "",
    },
  ],
  lifestyle: [
    {
      smoking: "",
      alcoholUse: "",
      exerciseFrequency: "",
      dietDescription: "",
    },
  ],
  assignedPhysician: "",
};

function CreateMedicalInfo() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values); 
      Swal.fire({ icon: "success", title: "Submitted!" });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred.";
      Swal.fire({ icon: "error", title: "Error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Button onClick={() => navigate("/profile")}>Back</Button>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
        style={{ maxWidth: 900, margin: "2rem auto" }}
      >
        {/* Patient Info */}
        <Card title="Patient Information">
          <Form.List name="patientInformation">
            {(fields) => (
              <>
                {fields.map(({ key, name }) => (
                  <Row gutter={16} key={key}>
                    <Col span={12}>
                      <Form.Item name={[name, "diagnosis"]} label="Diagnosis">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name={[name, "bloodType"]} label="Blood Type">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={[name, "chronicConditions"]}
                        label="Chronic Conditions"
                      >
                        <Input placeholder="Separate with commas" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name={[name, "allergies"]} label="Allergies">
                        <Input placeholder="Separate with commas" />
                      </Form.Item>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Form.List>
        </Card>

        {/* Current Medications */}
        <Card title="Current Medications" style={{ marginTop: 20 }}>
          <Form.List name="currentMedications">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <Card key={key} size="small" style={{ marginBottom: 10 }}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name={[name, "name"]}
                          label="Medication Name"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name={[name, "dosage"]} label="Dosage">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name={[name, "frequency"]} label="Frequency">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name={[name, "isOngoing"]} label="Ongoing?">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name={[name, "startDate"]}
                          label="Start Date"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                ))}
                <Button type="dashed" onClick={() => add()}>
                  + Add Medication
                </Button>
              </>
            )}
          </Form.List>
        </Card>

        {/* Repeat the same pattern for each section */}
        {[
          { name: "treatmentHistory", title: "Treatment History" },
          { name: "medicalProcedures", title: "Medical Procedures" },
          { name: "familyMedicalHistory", title: "Family Medical History" },
          {
            name: "previousHealthcareProviders",
            title: "Previous Healthcare Providers",
          },
          { name: "lifestyle", title: "Lifestyle" },
        ].map((section) => (
          <Card
            title={section.title}
            key={section.name}
            style={{ marginTop: 20 }}
          >
            <Form.List name={section.name}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <Card key={key} size="small" style={{ marginBottom: 10 }}>
                      <Row gutter={16}>
                        {Object.keys(initialValues[section.name][0]).map(
                          (fieldKey) => (
                            <Col span={12} key={fieldKey}>
                              <Form.Item
                                name={[name, fieldKey]}
                                label={fieldKey}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                          )
                        )}
                      </Row>
                    </Card>
                  ))}
                  <Button type="dashed" onClick={() => add()}>
                    + Add {section.title}
                  </Button>
                </>
              )}
            </Form.List>
          </Card>
        ))}

        {/* Assigned Physician */}
        <Card title="Assigned Physician" style={{ marginTop: 20 }}>
          <Form.Item name="assignedPhysician" label="Assigned Physician">
            <Input />
          </Form.Item>
        </Card>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateMedicalInfo;
