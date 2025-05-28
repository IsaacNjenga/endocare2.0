import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
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
} from "antd";
import React from "react";
import { mealExperience, mealType } from "../assets/data/data";
import dayjs from "dayjs";

export const MealLogs = () => {
  return (
    <Card title="Meals Log" style={{ marginBottom: 24 }}>
      <Form.List name="mealLogs">
        {(fields, { add, remove }) => {
          if (fields.length === 0) add();

          return (
            <>
              {fields.map(({ key, name }) => (
                <div
                  key={key}
                  style={{
                    marginBottom: 24,
                    padding: 12,
                    border: "1px solid #f0f0f0",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ textAlign: "right", marginBottom: 8 }}>
                    <Button
                      type="text"
                      danger
                      icon={<CloseOutlined />}
                      onClick={() => remove(name)}
                      aria-label="Remove meal log"
                    />
                  </div>

                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item name={[name, "meal"]} label="Meal">
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
                        label="Time"
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
                  </Row>

                  <Divider />
                </div>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  block
                >
                  Add Meal/Snack Log
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </Card>
  );
};
function DiaryFormComponents() {
  return <div>DiaryFormComponents</div>;
}

export default DiaryFormComponents;
