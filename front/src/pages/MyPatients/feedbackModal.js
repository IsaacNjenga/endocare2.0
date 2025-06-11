import { Button, Col, Form, Input, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

function FeedbackModal({
  openFeedbackModal,
  setOpenFeedbackModal,
  modalContent,
  sectionName,
  loading,
  user,
  diaryId,
}) {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = {
        ...values,
        diaryId: diaryId,
        createdBy: user._id,
        entryId: modalContent[0]?._id,
        section: sectionName,
      };
      console.log(allValues);
      const res = await axios.post("/create-feedback", allValues);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Feedback saved successfully",
        });
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
      form.resetFields();
      setOpenFeedbackModal(false);
    }
  };

  return (
    <Modal
      footer={null}
      open={openFeedbackModal}
      onCancel={() => setOpenFeedbackModal(false)}
      confirmLoading={loading}
      width={850}
      style={{ maxWidth: "95vw" }}
    >
      <Row gutter={[20, 20]}>
        <Col span={12}>
          {sectionName}
          <pre>{JSON.stringify(modalContent, null, 2)}</pre>
        </Col>
        <Col span={12}>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item label={<span>Feedback</span>} name="feedback">
              <Input.TextArea rows={8} placeholder="Write your feedback..." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={submitLoading} block>
                {submitLoading ? "Submitting..." : "Submit"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}

export default FeedbackModal;
