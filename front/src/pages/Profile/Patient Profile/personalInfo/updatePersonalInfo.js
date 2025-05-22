import React, { useState } from "react";
import { Card, Form, Input, Row, Col, Button, Radio } from "antd";
import Swal from "sweetalert2";
import axios from "axios";

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
  fontFamily: "Raleway",
};

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  gender: "",
  phoneNumber: "",
  email: "",
  address: "",
  emergencyName: "",
  emergencyPhoneNumber: "",
  emergencyEmail: "",
};

function UpdatePersonalInfo({
  modalContent,
  setOpenPersonalInfoModal,
  refresh,
}) {
  const [form] = Form.useForm();
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (modalContent) {
      const newValues = {
        firstName: modalContent.firstName ? modalContent.firstName : "",
        middleName: modalContent.middleName ? modalContent.middleName : "",
        lastName: modalContent.lastName ? modalContent.lastName : "",
        dob: modalContent.dob ? modalContent.dob : "",
        gender: modalContent.gender ? modalContent.gender : "",
        phoneNumber: modalContent.phoneNumber ? modalContent.phoneNumber : "",
        email: modalContent.email ? modalContent.email : "",
        address: modalContent.address ? modalContent.address : "",
        emergencyName: modalContent.emergencyName
          ? modalContent.emergencyName
          : "",
        emergencyPhoneNumber: modalContent.emergencyPhoneNumber
          ? modalContent.emergencyPhoneNumber
          : "",
        emergencyEmail: modalContent.emergencyEmail
          ? modalContent.emergencyEmail
          : "",
      };
      setValues(newValues);
      form.setFieldsValue(newValues);
    }
  }, [form, modalContent]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const allValues = await form.validateFields();
      // console.log(allValues);
      const res = await axios.put(
        `update-user?id=${modalContent._id}`,
        allValues
      );
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your profile has been updated successfully",
        });
      }
      refresh();
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "An unexpected error occurred. Please try again later.";

      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
      setOpenPersonalInfoModal(false);
      form.resetFields();
    }
  };
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Form
          layout="vertical"
          form={form}
          initialValues={values}
          onFinish={handleSubmit}
        >
          <Card style={sectionStyle} title="Basic Details">
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
                  <Radio.Group
                    value={values.gender}
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                    ]}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          <Card style={sectionStyle} title="Contact Information">
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
          </Card>
          <Card style={sectionStyle} title="Emergency Contact">
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
                  <Input
                    style={inputStyle}
                    value={values.emergencyPhoneNumber}
                  />
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
          </Card>{" "}
          <Button type="primary" htmlType="submit">
            {loading ? "Updating" : "Update"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdatePersonalInfo;
