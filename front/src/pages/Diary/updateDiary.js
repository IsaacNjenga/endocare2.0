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

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      console.log(values);
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred.";
      Swal.fire({ icon: "error", title: "Error", text: errorMessage });
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  const toCamelCase = (str) => str.charAt(0).toLowerCase() + str.slice(1);

  useEffect(() => {
    if (openDiaryModal && modalContent) {
      const fieldName = toCamelCase(sectionName);
      form.setFieldsValue({ [fieldName]: [modalContent] });
    }
  }, [openDiaryModal, sectionName, modalContent, form]);

  const renderSectionForm = () => {
    switch (sectionName) {
      case "mealLogs":
        return <MealsLog />;
      case "medicationsLogs":
        return <MedicationsLog />;
      case "bloodSugarLogs":
        return <BloodSugarLevelsLog />;
      case "physicalActivityLogs":
        return <PhysicalActivityLog />;
      case "symptomsLogs":
        return <SymptomsLog />;
      case "moodLogs":
        return <MoodsLog />;
      default:
        return <p>Section not selected</p>;
    }
  };

  return (
    <>
      <Modal
        footer={null}
        open={openDiaryModal}
        onCancel={() => setOpenDiaryModal(false)}
        width={950}
        confirmLoading={loading}
        style={{ maxWidth: "95vw" }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            [toCamelCase(sectionName)]: modalContent ? [modalContent] : [{}],
          }}
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
