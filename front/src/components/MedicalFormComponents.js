import React from "react";
import { Button, Card, Col, Form, Input, Row, Select, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  bloodTypes,
  onGoingValues,
  endocrineDiseases,
  familyTree,
  dietDescriptions,
  alcoholUseDescriptions,
  exerciseFrequencyDescriptions,
  smokingDescriptions,
} from "../assets/data/data";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

export const PatientInformation = () => {
  return (
    <Card title="Patient Information">
      <Form.List name="patientInformation">
        {(fields, { add }) => {
          if (fields.length === 0) add();
          return (
            <>
              {fields.map(({ key, name }) => (
                <Row gutter={16} key={key}>
                  <Col span={12}>
                    <Form.Item name={[name, "diagnosis"]} label="Diagnosis">
                      <Select>
                        {endocrineDiseases.map((disease) => (
                          <Select.Option value={disease.value}>
                            {disease.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name={[name, "bloodType"]} label="Blood Type">
                      <Select>
                        {bloodTypes.map((type) => (
                          <Select.Option value={type.value}>
                            {type.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "chronicConditions"]}
                      label="Chronic Condition(s)"
                      extra="Separate with commas or press 'Enter'"
                    >
                      <Select
                        mode="tags"
                        tokenSeparators={[","]}
                        placeholder="Type condition and press Enter"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "allergies"]}
                      label="Allergies"
                      extra="Separate with commas or press 'Enter'"
                      // getValueFromEvent={(e) => {
                      //   const input = e.target.value || "";
                      //   const array = input
                      //     .split(",")
                      //     .map((item) => item.trim())
                      //     .filter((item) => item.length > 0);
                      //   return array;
                      // }}
                    >
                      <Select
                        mode="tags"
                        tokenSeparators={[","]}
                        options={[
                          { value: "Pollen" },
                          { value: "Dust" },
                          { value: "Nuts" },
                        ]}
                        placeholder="Type allergy and press Enter"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              ))}
            </>
          );
        }}
      </Form.List>
    </Card>
  );
};

export const CurrentMedications = () => {
  return (
    <Card title="Current Medications" style={{ marginTop: 20 }}>
      <Form.List name="currentMedications">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Card key={key} size="small" style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    type="text"
                    danger
                    icon={<CloseOutlined />}
                    onClick={() => remove(name)}
                  />
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name={[name, "name"]} label="Medication Name">
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
                      <Select>
                        {onGoingValues.map((ongoing) => (
                          <Select.Option value={ongoing.value}>
                            {ongoing.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name={[name, "startDate"]} label="Start Date">
                      <Input type="date" />
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
  );
};

export const TreatmentHistory = () => {
  return (
    <Card
      title="Treatment History"
      key="treatmentHistory"
      style={{ marginTop: 20 }}
    >
      <Form.List name="treatmentHistory">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Card key={key} size="small" style={{ marginBottom: 10 }}>
                {" "}
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    type="text"
                    danger
                    icon={<CloseOutlined />}
                    onClick={() => remove(name)}
                  />
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name={[name, "condition"]} label="Condition">
                      <Input />
                    </Form.Item>
                  </Col>{" "}
                  <Col span={12}>
                    <Form.Item
                      name={[name, "diagnosisDate"]}
                      label="Date of Diagnosis"
                    >
                      <Input type="date" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "treatmentDescription"]}
                      label="Description of treatment"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "outcome"]}
                      label="Outcome of treatment"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()}>
              + Add Treatment History
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );
};

export const MedicalProcedures = () => {
  return (
    <Card
      title="Medical Procedures"
      key="medicalProcedures"
      style={{ marginTop: 20 }}
    >
      <Form.List name="medicalProcedures">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Card key={key} size="small" style={{ marginBottom: 10 }}>
                {" "}
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    type="text"
                    danger
                    icon={<CloseOutlined />}
                    onClick={() => remove(name)}
                  />
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "procedureName"]}
                      label="Name of procedure"
                    >
                      <Input />
                    </Form.Item>
                  </Col>{" "}
                  <Col span={12}>
                    <Form.Item
                      name={[name, "dateOfProcedure"]}
                      label="Date of Procedure"
                    >
                      <Input type="date" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name={[name, "notes"]} label="Additional Notes">
                      <TextArea rows={3} />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()}>
              + Add Procedure
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );
};

export const FamilyMedicalHistory = () => {
  return (
    <Card
      title="Family Medical History"
      key="familyMedicalHistory"
      style={{ marginTop: 20 }}
    >
      <Form.List name="familyMedicalHistory">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Card key={key} size="small" style={{ marginBottom: 10 }}>
                {" "}
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    type="text"
                    danger
                    icon={<CloseOutlined />}
                    onClick={() => remove(name)}
                  />
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name={[name, "relation"]} label="Relation">
                      <Select>
                        {familyTree.map((tree) => (
                          <Select.Option value={tree.value}>
                            {tree.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>{" "}
                  <Col span={12}>
                    <Form.Item name={[name, "condition"]} label="Condition">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name={[name, "notes"]} label="Additional Notes">
                      <TextArea rows={3} />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()}>
              + Add Medical History
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );
};

export const PreviousHealthcareProviders = () => {
  return (
    <Card
      title="Previous Healthcare Providers"
      key="previousHealthcareProviders"
      style={{ marginTop: 20 }}
    >
      <Form.List name="previousHealthcareProviders">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Card key={key} size="small" style={{ marginBottom: 10 }}>
                {" "}
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    type="text"
                    danger
                    icon={<CloseOutlined />}
                    onClick={() => remove(name)}
                  />
                </div>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name={[name, "name"]} label="Name">
                      <Input />
                    </Form.Item>
                  </Col>{" "}
                  <Col span={12}>
                    <Form.Item
                      name={[name, "contactInfo"]}
                      label="Contact Information"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "period"]}
                      label="Period"
                      getValueFromEvent={(dates) => {
                        if (!dates || dates.length !== 2) return "";
                        const formattedStart = dayjs(dates[0]).format(
                          "YYYY-MM-DD"
                        );
                        const formattedEnd = dayjs(dates[1]).format(
                          "YYYY-MM-DD"
                        );
                        return `${formattedStart} - ${formattedEnd}`;
                      }}
                      getValueProps={(value) => {
                        if (!value || typeof value !== "string") return {};
                        const parts = value.split(" - ");
                        if (parts.length === 2) {
                          return {
                            value: [dayjs(parts[0]), dayjs(parts[1])],
                          };
                        }
                        return {};
                      }}
                    >
                      <RangePicker />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()}>
              + Add Previous Provider
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );
};

export const Lifestyle = () => {
  return (
    <Card title="Lifestyle" key="lifestyle" style={{ marginTop: 20 }}>
      <Form.List name="lifestyle">
        {(fields) => (
          <>
            {fields.map(({ key, name }) => (
              <Card key={key} size="small" style={{ marginBottom: 10 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name={[name, "smoking"]} label="Smoking">
                      <Select>
                        {smokingDescriptions.map((description) => (
                          <Select.Option value={description.value}>
                            {description.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>{" "}
                  <Col span={12}>
                    <Form.Item name={[name, "alcoholUse"]} label="Alcohol Use">
                      <Select>
                        {alcoholUseDescriptions.map((description) => (
                          <Select.Option value={description.value}>
                            {description.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[name, "exerciseFrequency"]}
                      label="Exercise Frequency"
                    >
                      <Select>
                        {exerciseFrequencyDescriptions.map((description) => (
                          <Select.Option value={description.value}>
                            {description.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>{" "}
                  <Col span={12}>
                    <Form.Item
                      name={[name, "dietDescription"]}
                      label="Diet Description"
                    >
                      <Select>
                        {dietDescriptions.map((description) => (
                          <Select.Option value={description.value}>
                            {description.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}
          </>
        )}
      </Form.List>
    </Card>
  );
};

function MedicalFormComponents() {
  return <div>MedicalFormComponents</div>;
}

export default MedicalFormComponents;
