import React, { useState } from "react";
import { Card, Form, Input, Typography, Row, Col, Divider, Select } from "antd";

const { Title, Text } = Typography;

const labelStyle = {
  fontFamily: "Raleway",
  fontWeight: 500,
};

const inputStyle = {
  fontFamily: "Roboto",
};

const sectionStyle = {
  marginBottom: "2rem",
  padding: "1.5rem",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
};

const initialValues = {
  firstName: "John",
  middleName: "J",
  lastName: "Jameson",
  dob: "12/12/2001",
  gender: "Male",
  phoneNumber: "0740900061",
  email: "email@email.com",
  address: "270-2442",
  emergencyName: "Jane Doe",
  emergencyPhoneNumber: "0789099963",
  emergencyEmail: "email2@Email.com",
};

function PersonalInfo({ user }) {
  const [values, setValues] = useState(initialValues);
  const [form] = Form.useForm();
  return (
    <div style={{ fontFamily: "Roboto", padding: "1rem" }}>
      <Title level={3} style={{ fontFamily: "Raleway", marginBottom: "1rem" }}>
        Personal Information
      </Title>

      <Card style={sectionStyle} title="Basic Details">
        <Form layout="vertical" form={form} initialValues={values}>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>First Name</span>}
                name="firstName"
              >
                <Input style={inputStyle} value={values.firstName} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Middle Name</span>}
                name="middleName"
              >
                <Input style={inputStyle} value={values.middleName} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Last Name</span>}
                name="lastName"
              >
                <Input style={inputStyle} value={values.lastName} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Date of Birth</span>}
                name="dob"
              >
                <Input type="date" style={inputStyle} value={values.dob} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Gender</span>}
                name="gender"
              >
                <Input style={inputStyle} value={values.gender} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card style={sectionStyle} title="Contact Information">
        <Form layout="vertical" form={form} initialValues={values}>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label={<span style={labelStyle}>Phone Number</span>}
                name="phoneNumber"
                extra="We'll use this to reach you directly"
              >
                <Input style={inputStyle} value={values.phoneNumber} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label={<span style={labelStyle}>Email Address</span>}
                name="email"
                extra="Used for system notifications"
              >
                <Input style={inputStyle} value={values.email} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label={<span style={labelStyle}>Physical Address</span>}
            name="address"
          >
            <Input.TextArea
              rows={2}
              style={inputStyle}
              value={values.address}
            />
          </Form.Item>
        </Form>
      </Card>
      <Card style={sectionStyle} title="Emergency Contact">
        <Form layout="vertical" initialValues={values} form={form}>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Full Name</span>}
                name="emergencyName"
              >
                <Input style={inputStyle} value={values.emergencyName} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Phone Number</span>}
                name="emergencyPhoneNumber"
              >
                <Input style={inputStyle} value={values.emergencyPhoneNumber} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={<span style={labelStyle}>Email Address</span>}
                name="emergencyEmail"
              >
                <Input style={inputStyle} value={values.emergencyEmail} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default PersonalInfo;
