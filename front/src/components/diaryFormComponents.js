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
  Divider,
  Slider,
} from "antd";
import React from "react";
import { mealExperience, mealType, moodAfter } from "../assets/data/data";
import dayjs from "dayjs";

const sectionHeaderStyle = {
  fontFamily: "Raleway",
  background: "#eef2ff",
  padding: "6px 16px",
  borderRadius: "30px",
  fontWeight: 600,
  fontSize: 22,
  color: "#4f46e5",
};

const labelStyle = {
  fontFamily: "Roboto",
  lineHeight: 1.6,
  fontWeight: 500,
  fontSize: "1rem",
};

export const MealsLog = () => {
  return (
    <Card
      title={<span style={sectionHeaderStyle}>Meals Log</span>}
      style={{
        padding: 5,
        margin:20,
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
                        <Input placeholder="E.g. Chicken Salad" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item name={[name, "mealType"]} label="Meal Type">
                        <Select placeholder="Select type">
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
                        label="Time of meal"
                        getValueFromEvent={(time) =>
                          time ? dayjs(time).format("HH:mm") : undefined
                        }
                        getValueProps={(value) => ({
                          value: value ? dayjs(value, "HH:mm") : null,
                        })}
                      >
                        <TimePicker format="HH:mm" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name={[name, "mealExperience"]}
                        label="Meal Experience"
                      >
                        <Select placeholder="How was the meal?">
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
                        label="Craving Levels"
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
                        label="Mood after meal"
                      >
                        <Select placeholder="">
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

export const MedicationsLog = () => {};

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
