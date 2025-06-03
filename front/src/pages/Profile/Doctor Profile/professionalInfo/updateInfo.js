import { Button, Card, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";

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

function UpdateInfo({ user, modalContent, setOpenUpdateModal }) {
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
    } catch (error) {
      console.log(error);
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <Card
      title={<span style={sectionHeaderStyle}>Update your information</span>}
      style={{
        padding: 5,
        margin: 20,
        marginBottom: 20,
        background: "linear-gradient(to right, #eef2ff 30%, #eae9e7 100%)",
      }}
    >
      <Form
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
        initialValues={modalContent}
      >
        <Form.Item
          label={<span style={labelStyle}>Medical License Number</span>}
          name="medicalLicenseNumber"
        >
          <Input style={inputStyle} />
        </Form.Item>
        <Form.Item
          label={<span style={labelStyle}>Specialty</span>}
          name="specialty"
          extra="Separate with commas or press 'Enter'"
        >
          <Select mode="tags" tokenSeparators={[","]} style={inputStyle} />
        </Form.Item>
        <Form.Item
          label={<span style={labelStyle}>Years of experience</span>}
          name="yearsOfExperience"
        >
          <InputNumber style={inputStyle} />
        </Form.Item>
        <Form.Item
          label={<span style={labelStyle}>Current Hospital/Clinic</span>}
          name="currentHospital"
        >
          <Input style={inputStyle} />
        </Form.Item>

        <Form.Item
          label={<span style={labelStyle}>License Expiry</span>}
          name="practiceLicenseExpiry"
        >
          <Input type="date" style={inputStyle} />
        </Form.Item>

        <Form.Item
          label={<span style={labelStyle}>Languages</span>}
          name="languagesSpoken"
          extra="Separate with commas or press 'Enter'"
        >
          <Select mode="tags" tokenSeparators={[","]} style={inputStyle} />
        </Form.Item>

        <div>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {updateLoading ? "Updating..." : "Update"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
}

export default UpdateInfo;
