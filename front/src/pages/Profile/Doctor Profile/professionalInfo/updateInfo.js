import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from "antd";
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

function UpdateInfo({ user, modalContent, setOpenUpdateModal, refresh }) {
  const [form] = Form.useForm();
  const [updateLoading, setUpdateLoading] = useState(false);

  React.useEffect(() => {
    if (modalContent) {
      form.setFieldsValue(modalContent);
    }
  }, [form, modalContent]);

  const handleSubmit = async () => {
    setUpdateLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = { ...values, createdBy: user._id };
      console.log(allValues);
      const res = await axios.put(
        `update-doctor-details?id=${modalContent._id}`,
        allValues
      );
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
      setUpdateLoading(false);
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
      <Form
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
        initialValues={modalContent}
      >
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Medical License Number</span>}
              name="medicalLicenseNumber"
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>{" "}
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>License Expiry</span>}
              name="practiceLicenseExpiry"
            >
              <Input type="date" style={inputStyle} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label={<span style={labelStyle}>Specialty</span>}
              name="specialty"
              extra="Separate with commas or press 'Enter'"
            >
              <Select mode="tags" tokenSeparators={[","]} style={inputStyle} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Current Hospital/Clinic</span>}
              name="currentHospital"
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>{" "}
          <Col span={12}>
            <Form.Item
              label={<span style={labelStyle}>Years of experience</span>}
              name="yearsOfExperience"
            >
              <InputNumber style={inputStyle} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label={<span style={labelStyle}>Board Certifications</span>}
              name="boardCertifications"
              extra="Separate with commas or press 'Enter'"
            >
              <Select mode="tags" tokenSeparators={[","]} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.List name="education">
              {(fields, { add }) => {
                if (fields.length === 0) add();
                return (
                  <>
                    {fields.map(({ key, name }) => (
                      <div key={key}>
                        <Row gutter={20}>
                          <Col span={12}>
                            <Form.Item
                              name={[name, "bachelorsDegree"]}
                              label={
                                <span style={labelStyle}>
                                  Bachelor's Degree
                                </span>
                              }
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={[name, "medicalSchool"]}
                              label={
                                <span style={labelStyle}>Medical School</span>
                              }
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={[name, "residency"]}
                              label={<span style={labelStyle}>Residency</span>}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={[name, "certification"]}
                              label={
                                <span style={labelStyle}>Certification</span>
                              }
                            >
                              <Input />
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
          <Col span={18}>
            <Form.Item
              label={<span style={labelStyle}>Languages</span>}
              name="languagesSpoken"
              extra="Separate with commas or press 'Enter'"
            >
              <Select mode="tags" tokenSeparators={[","]} style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <div>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={updateLoading}>
              {updateLoading ? "Updating..." : "Update"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
}

export default UpdateInfo;
