import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

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

const sectionHeaderStyle = {
  fontFamily: "Raleway",
  background: "#eef2ff",
  padding: "6px 16px",
  borderRadius: "30px",
  fontWeight: 700,
  fontSize: 22,
  color: "#4f46e5",
};

function CreatePracticeInfo({ user, refresh }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = { ...values };
      console.log(allValues);
      const res = await axios.put(`create-doctor-details`, allValues);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your information has been saved!",
        });
        refresh();
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
      setLoading(false);
    }
  };

  return (
    <Card
      title={<span style={sectionHeaderStyle}>Update your information</span>}
      style={{
        padding: 15,
        margin: 20,
        marginBottom: 20,
        background: "linear-gradient(to left, #eef2f3 50%, #eae9e7 100%)",
      }}
    >
      <Form onFinish={handleSubmit} form={form} layout="vertical">
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Name of Practice</span>}
              name="practiceName"
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Address</span>}
              name="practiceAddress"
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Office Hours</span>}
              name="officeHours"
              extra="Select or type other"
            >
              <Select
                mode="tags"
                tokenSeparators={[","]}
                options={[
                  { value: "9:00AM - 5:00PM Weekdays" },
                  { value: "10:00AM - 3:00PM Weekends" },
                ]}
              />
            </Form.Item>
          </Col>{" "}
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Services Offered</span>}
              name="servicesOffered"
            >
              <Select mode="tags" tokenSeparators={[","]} />
            </Form.Item>
          </Col>{" "}
          <Col span={24}>
            <Form.List name="contactInformation">
              {(fields, { add }) => {
                if (fields.length === 0) add();
                return (
                  <>
                    {fields.map(({ key, name }) => (
                      <div key={key}>
                        <Row gutter={20}>
                          <Col span={12}>
                            <Form.Item
                              label={
                                <span style={labelStyle}>Office Phone</span>
                              }
                              name={[name, "officePhone"]}
                            >
                              <Input style={inputStyle} />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              label={
                                <span style={labelStyle}>Office Email</span>
                              }
                              name={[name, "officeEmail"]}
                            >
                              <Input style={inputStyle} />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              label={<span style={labelStyle}>Website</span>}
                              name={[name, "website"]}
                            >
                              <Input style={inputStyle} />
                            </Form.Item>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </>
                );
              }}
            </Form.List>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Accepted Insurance Plans</span>}
              name="acceptedInsurancePlans"
              extra="Select or type other"
            >
              <Select
                mode="tags"
                tokenSeparators={[","]}
                options={[
                  { value: "SHA" },
                  { value: "NHIF" },
                  { value: "Britam Insurance" },
                  { value: "AAR Insurance" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <div>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
}

export default CreatePracticeInfo;
