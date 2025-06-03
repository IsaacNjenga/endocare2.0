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

function UpdatePracticeInfo({ modalContent, user, refresh }) {
  const [form] = Form.useForm();
  const [updateLoading, setUpdateLoading] = useState(false);

  React.useEffect(() => {
    if (modalContent) {
      form.setFieldsValue(modalContent);
    }
  }, [modalContent, form]);

  const handleSubmit = async () => {
    setUpdateLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = { ...values, createdBy: user._id };
      //      console.log(allValues);

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
        initialValues={modalContent}
        layout="vertical"
      >
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
            >
              <Select mode="tags" tokenSeparators={[","]} />
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
            >
              <Select mode="tags" tokenSeparators={[","]} />
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

export default UpdatePracticeInfo;
