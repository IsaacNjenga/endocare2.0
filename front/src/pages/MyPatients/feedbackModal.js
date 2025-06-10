import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

function FeedbackModal({
  openFeedbackModal,
  setOpenFeedbackModal,
  modalContent,
  sectionName,
  loading,
  user,
}) {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    try {
      const values = await form.validateFields();
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Modal
      footer={null}
      open={openFeedbackModal}
      onCancel={() => setOpenFeedbackModal(false)}
      confirmLoading={loading}
      width={750}
      style={{ maxWidth: "95vw" }}
    >
      {sectionName}
      <pre>{JSON.stringify(modalContent, null, 2)}</pre>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item label={<span>Feedback</span>} name="feedback">
          <Input.TextArea rows={6} placeholder="Write your feedback..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitLoading}>
            {submitLoading ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default FeedbackModal;
