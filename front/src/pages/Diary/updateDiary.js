import { Button, Form, Modal } from "antd";
import React, { useEffect, useState } from "react";
import {
  BloodSugarLevelsLog,
  MealsLog,
  MedicationsLog,
  MoodsLog,
  PhysicalActivityLog,
  SymptomsLog,
} from "../../components/diaryFormComponents";
import Swal from "sweetalert2";

function UpdateDiary({
  openDiaryModal,
  setOpenDiaryModal,
  loading,
  modalContent,
  sectionName,
}) {
  const [form] = Form.useForm();
  const [updateLoading, setLoading] = useState(false);
  const toCamelCase = (str) => str.charAt(0).toLowerCase() + str.slice(1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const fieldName = toCamelCase(sectionName);
      const payload = { [fieldName]: values[fieldName] };
      //const allValues = { ...payload, createdBy: user._id };
     // console.log(allValues);
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred.";
      Swal.fire({ icon: "error", title: "Error", text: errorMessage });
    } finally {
      setLoading(false);
      setOpenDiaryModal(false);
    }
  };

  useEffect(() => {
    if (openDiaryModal && modalContent && sectionName) {
      form.setFieldsValue({ [sectionName]: modalContent });
      // console.log("Prefilling", sectionName, modalContent);
    }
  }, [openDiaryModal, modalContent, sectionName]);

  const renderSectionForm = () => (
    <>
      <div style={{ display: sectionName === "mealLogs" ? "block" : "none" }}>
        <MealsLog />
      </div>
      <div
        style={{
          display: sectionName === "medicationsLogs" ? "block" : "none",
        }}
      >
        <MedicationsLog />
      </div>
      <div
        style={{ display: sectionName === "bloodSugarLogs" ? "block" : "none" }}
      >
        <BloodSugarLevelsLog />
      </div>
      <div
        style={{
          display: sectionName === "physicalActivityLogs" ? "block" : "none",
        }}
      >
        <PhysicalActivityLog />
      </div>
      <div
        style={{ display: sectionName === "symptomsLogs" ? "block" : "none" }}
      >
        <SymptomsLog />
      </div>
      <div style={{ display: sectionName === "moodLogs" ? "block" : "none" }}>
        <MoodsLog />
      </div>
    </>
  );

  return (
    <>
      <Modal
        footer={null}
        open={openDiaryModal}
        onCancel={() => {
          setOpenDiaryModal(false);
          form.resetFields();
        }}
        width={950}
        confirmLoading={loading}
        style={{ maxWidth: "95vw" }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          // initialValues={{
          //   [toCamelCase(sectionName)]: modalContent ? [modalContent] : [{}],
          // }}
          style={{ maxWidth: 950, margin: "2rem auto" }}
        >
          {renderSectionForm()}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={updateLoading}
              style={{ marginTop: 20 }}
            >
              {updateLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default UpdateDiary;
