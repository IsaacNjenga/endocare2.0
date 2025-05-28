import {
  CloseOutlined,
  FrownOutlined,
  PlusOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Input,
  Row,
  Form,
  Button,
  Select,
  TimePicker,
  Slider,
} from "antd";
import React from "react";
import {
  mealExperience,
  mealType,
  medicationType,
  moodAfter,
} from "../assets/data/data";
import dayjs from "dayjs";

const sectionHeaderStyle = {
  fontFamily: "Raleway",
  background: "#eef2ff",
  padding: "6px 16px",
  borderRadius: "30px",
  fontWeight: 700,
  fontSize: 22,
  color: "#4f46e5",
};

const labelStyle = {
  fontFamily: "Raleway",
  lineHeight: 1.6,
  fontWeight: 500,
  fontSize: "1.1rem",
};

const inputStyle = {
  fontFamily: "Roboto",
  fontSize: "1rem",
  lineHeight: 1.6,
  fontWeight: 500,
  borderRadius: 8,
  height: 40,
};

export const MealsLog = () => {
  return (
    <Card
      title={<span style={sectionHeaderStyle}>Meals Log</span>}
      style={{
        padding: 5,
        margin: 20,
        marginBottom: 20,
        background: "linear-gradient(to right, #eef2ff 30%, #eae9e7 100%)",
      }}
    >
      <Form.List name="mealLogs">
        {(fields, { add, remove }) => {
          if (fields.length === 0) add();

          return (
            <>
              {fields.map(({ key, name }) => (
                <div
                  key={key}
                  style={{
                    marginBottom: 10,
                    padding: 12,
                    border: "1px solid rgba(0,0,0,0)",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ textAlign: "right", marginBottom: 2 }}>
                    <Button
                      type="text"
                      danger
                      icon={<CloseOutlined />}
                      onClick={() => remove(name)}
                      aria-label="Remove meal log"
                    />
                  </div>

                  <Row gutter={20}>
                    <Col span={12}>
                      <Form.Item
                        name={[name, "meal"]}
                        label={<span style={labelStyle}>Meal description</span>}
                      >
                        <Input
                          placeholder="E.g. Chicken Salad"
                          style={inputStyle}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name={[name, "mealType"]}
                        label={<span style={labelStyle}>Type Of Meal</span>}
                      >
                        <Select placeholder="Select type" style={inputStyle}>
                          {mealType.map((type) => (
                            <Select.Option key={type.value} value={type.value}>
                              {type.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name={[name, "timeOfMeal"]}
                        label={<span style={labelStyle}>Time Of Meal</span>}
                        getValueFromEvent={(time) =>
                          time ? dayjs(time).format("HH:mm") : undefined
                        }
                        getValueProps={(value) => ({
                          value: value ? dayjs(value, "HH:mm") : null,
                        })}
                      >
                        <TimePicker format="HH:mm" style={inputStyle} />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name={[name, "mealExperience"]}
                        label={<span style={labelStyle}>Meal Experience</span>}
                      >
                        <Select
                          placeholder="How was the meal?"
                          style={inputStyle}
                        >
                          {mealExperience.map((experience) => (
                            <Select.Option
                              key={experience.value}
                              value={experience.value}
                            >
                              {experience.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name={[name, "cravingLevel"]}
                        label={<span style={labelStyle}>Craving Level</span>}
                        extra="How much did you crave it?"
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "8px 0",
                          }}
                        >
                          <FrownOutlined
                            style={{ fontSize: "1.4rem", color: "red" }}
                          />
                          <Form.Item name={[name, "cravingLevel"]} noStyle>
                            <Slider min={1} max={10} style={{ flex: 1 }} />
                          </Form.Item>
                          <SmileOutlined
                            style={{ fontSize: "1.4rem", color: "green" }}
                          />
                        </div>
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name={[name, "moodAfter"]}
                        label={<span style={labelStyle}>Mood After Meal</span>}
                      >
                        <Select placeholder="" style={inputStyle}>
                          {moodAfter.map((mood) => (
                            <Select.Option value={mood.value}>
                              {mood.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  block
                >
                  Add a Meal entry
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </Card>
  );
};

export const MedicationsLog = () => {
  return (
    <Card
      title={<span style={sectionHeaderStyle}>Medications Log</span>}
      style={{
        padding: 5,
        margin: 20,
        marginBottom: 20,
        background: "linear-gradient(to right, #eef2ff 20%, #eae9e7 90%)",
      }}
    >
      <Form.List name="medicationsLogs">
        {(fields, { add, remove }) => {
          if (fields.length === 0) add();

          return (
            <>
              {fields.map(({ key, name }) => (
                <div
                  key={key}
                  style={{
                    marginBottom: 10,
                    padding: 12,
                    border: "1px solid rgba(0,0,0,0)",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ textAlign: "right", marginBottom: 2 }}>
                    <Button
                      type="text"
                      danger
                      icon={<CloseOutlined />}
                      onClick={() => remove(name)}
                      aria-label="Remove medication log"
                    />
                  </div>

                  <Row gutter={20}>
                    <Col span={10}>
                      <Form.Item
                        name={[name, "meal"]}
                        label={<span style={labelStyle}>Medication Name</span>}
                      >
                        <Input placeholder="" style={inputStyle} />
                      </Form.Item>
                    </Col>

                    <Col span={10}>
                      <Form.Item
                        name={[name, "medicationType"]}
                        label={<span style={labelStyle}>Medication Type</span>}
                      >
                        <Select placeholder="Select type" style={inputStyle}>
                          {medicationType.map((type) => (
                            <Select.Option key={type.value} value={type.value}>
                              {type.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={10}>
                      <Form.Item
                        name={[name, "timeOfMedication"]}
                        label={
                          <span style={labelStyle}>Time Of Medication</span>
                        }
                        getValueFromEvent={(time) =>
                          time ? dayjs(time).format("HH:mm") : undefined
                        }
                        getValueProps={(value) => ({
                          value: value ? dayjs(value, "HH:mm") : null,
                        })}
                      >
                        <TimePicker format="HH:mm" style={inputStyle} />
                      </Form.Item>
                    </Col>

                    <Col span={10}>
                      <Form.Item
                        name={[name, "dosage"]}
                        label={<span style={labelStyle}>Dosage</span>}
                      >
                        <Input
                          placeholder="e.g., 500mg, 1 tablet"
                          style={inputStyle}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={10}>
                      <Form.Item
                        name={[name, "route"]}
                        label={<span style={labelStyle}>Route</span>}
                      >
                        <Select
                          placeholder="e.g., Oral, IV, Inhaled"
                          style={inputStyle}
                        >
                          {[
                            "Oral",
                            "Intravenous (IV)",
                            "Inhaled",
                            "Topical (Skin)",
                            "Sublingual (Underneath tongue)",
                          ].map((route) => (
                            <Select.Option key={route} value={route}>
                              {route}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={10}>
                      <Form.Item
                        name={[name, "purpose"]}
                        label={<span style={labelStyle}>Purpose</span>}
                      >
                        <Input
                          placeholder="e.g., Pain relief, BP control"
                          style={inputStyle}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        name={[name, "sideEffects"]}
                        label={<span style={labelStyle}>Side Effects</span>}
                      >
                        <Input.TextArea
                          rows={2}
                          placeholder="Describe any side effects"
                          style={inputStyle}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={8}>
                      <Form.Item
                        name={[name, "compliance"]}
                        label={
                          <span style={labelStyle}>Taken as Prescribed?</span>
                        }
                      >
                        <Select placeholder="Select" style={inputStyle}>
                          <Select.Option value="yes">Yes</Select.Option>
                          <Select.Option value="no">No</Select.Option>
                          <Select.Option value="partial">
                            Partially
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  block
                >
                  Add a Medication entry
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </Card>
  );
};

export const BloodSugarLevelsLog = () => {};

export const PhysicalActivityLog = () => {};

export const SymptomsLog = () => {};

export const MoodsLog = () => {};

//medications taken
//blood sugra levels
//physical activity
//symptoms and physical ailments
//mood tofday
//stress management
function DiaryFormComponents() {
  return <div>DiaryFormComponents</div>;
}

export default DiaryFormComponents;
