import { Button, Col, Form, Input, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import RenderContent from "../../components/renderContent";
import axios from "axios";
import Swal from "sweetalert2";

const inputStyle = {
  backgroundColor: "#00152a",
  border: "1px solid #ccc",
  fontSize: 14,
  color: "white",
  fontFamily: "Roboto",
  borderRadius: 8,
  paddingLeft: 10,
};

const labelStyle = {
  color: "white",
  fontFamily: "Raleway",
};

const divStyle = {
  padding: 18,
  margin: 14,
  borderRadius: "10px",
  border: "1px solid #ccc",
  background: "#00152a",
  color: "white",
};

const { Title } = Typography;

function ReviewModal({
  modalContent,
  setOpenReviewModal,
  openReviewModal,
  loading,
  user,
  reviewsRefresh,
}) {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);
  // console.log(modalContent);
  const handleResponse = async () => {
    setSubmitLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = {
        ...values,
        createdBy: user?._id,
        reviewId: modalContent?._id,
        diaryId: modalContent?.diaryId,
        patientId: modalContent?.createdBy?._id,
      };
      //console.log(allValues);
      const res = await axios.post("create-response", allValues);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your patient will receive the response",
        });
        reviewsRefresh();
        setOpenReviewModal(false);
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
      setSubmitLoading(false);
    }
  };

  return (
    <Modal
      footer={null}
      open={openReviewModal}
      onCancel={() => {
        setOpenReviewModal(false);
      }}
      confirmLoading={loading}
      width={1200}
      style={{ maxWidth: "95vw", padding: 12, borderRadius: 8 }}
    >
      <div
        style={{
          background: "#00152a",
          borderRadius: "8px",
          padding: 12,
        }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={20} md={18} lg={14}>
            <div style={divStyle}>
              <Title level={4} style={labelStyle}>
                EndoAI's Response
              </Title>
              {RenderContent(modalContent?.review)}
            </div>
          </Col>
          <Col xs={24} sm={20} md={18} lg={10}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleResponse}
              style={divStyle}
            >
              <Form.Item
                name="response"
                label={
                  <Title level={4} style={labelStyle}>
                    Your response
                  </Title>
                }
              >
                <Input.TextArea rows={12} style={inputStyle} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  loading={submitLoading}
                  htmlType="submit"
                  block
                >
                  {submitLoading ? "Submitting..." : "Submit"}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}

export default ReviewModal;
