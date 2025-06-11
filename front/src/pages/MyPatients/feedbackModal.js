import { Button, Col, Form, Input, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  MoodsComponent,
  BloodSugarComponent,
  MealsComponent,
  MedicationsComponent,
  PhysicalActivityComponent,
  SymptomsComponent,
} from "../../components/feedbackDiaryPage";

function FeedbackModal({
  openFeedbackModal,
  setOpenFeedbackModal,
  modalContent,
  sectionName,
  loading,
  user,
  feedbackRefresh,
  diaryId,
}) {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

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
      //console.log(allValues);
      const res = await axios.post("/create-feedback", allValues);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Feedback saved successfully",
        });
        feedbackRefresh();
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

  const renderComponent = () => (
    <>
      <div style={{ display: sectionName === "mealLogs" ? "block" : "none" }}>
        <MealsComponent
          content={modalContent}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div
        style={{
          display: sectionName === "medicationsLogs" ? "block" : "none",
        }}
      >
        <MedicationsComponent
          content={modalContent}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div
        style={{ display: sectionName === "bloodSugarLogs" ? "block" : "none" }}
      >
        <BloodSugarComponent
          content={modalContent}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div
        style={{
          display: sectionName === "physicalActivityLogs" ? "block" : "none",
        }}
      >
        <PhysicalActivityComponent
          content={modalContent}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div
        style={{ display: sectionName === "symptomsLogs" ? "block" : "none" }}
      >
        <SymptomsComponent
          content={modalContent}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div style={{ display: sectionName === "moodLogs" ? "block" : "none" }}>
        <MoodsComponent
          content={modalContent}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </>
  );

  return (
    <Modal
      footer={null}
      open={openFeedbackModal}
      onCancel={() => setOpenFeedbackModal(false)}
      confirmLoading={loading}
      width={950}
      style={{ maxWidth: "95vw" }}
    >
      <Row gutter={[20, 20]}>
        <Col span={12}>
          {renderComponent()}
        </Col>
        <Col span={12}>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label={
                <span
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    margin: 0,
                    fontSize: "1rem",
                    letterSpacing: "1px",
                  }}
                >
                  Feedback
                </span>
              }
              name="feedback"
            >
              <Input.TextArea
                rows={10}
                placeholder="Give your feedback..."
                style={{ fontFamily: "Raleway" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={submitLoading}
                block
              >
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
