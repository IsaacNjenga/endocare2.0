import { Button, Form, Modal } from "antd";
import React, { useState, useEffect } from "react";
import {
  PatientInformation,
  CurrentMedications,
  TreatmentHistory,
  Lifestyle,
  PreviousHealthcareProviders,
  FamilyMedicalHistory,
  MedicalProcedures,
} from "../../../../components/MedicalFormComponents";
import axios from "axios";
import Swal from "sweetalert2";

function UpdateMedicalInfoModal({
  openMedicalInfoModal,
  setOpenMedicalInfoModal,
  loading,
  modalContent,
  sectionName,
  user,
  patientRefresh,
}) {
  const [form] = Form.useForm();
  const [updateLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = { ...values, createdBy: user._id };
      console.log(allValues);
      const res = await axios.put(
        `update-patient-details?id=${user._id}`,
        allValues
      );
      if (res.data.success) {
        Swal.fire({ icon: "success", title: "Updated successfully!" });
        patientRefresh();
        setOpenMedicalInfoModal(false);
      }
    } catch (error) {
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
    if (openMedicalInfoModal && modalContent) {
      const fieldName = toCamelCase(sectionName);
      form.setFieldsValue({
        [fieldName]: [modalContent],
      });
    }
  }, [openMedicalInfoModal, modalContent, sectionName, form]);

  const renderSectionForm = () => {
    switch (sectionName) {
      case "PatientInformation":
        return <PatientInformation />;
      case "CurrentMedications":
        return <CurrentMedications />;
      case "TreatmentHistory":
        return <TreatmentHistory />;
      case "Lifestyle":
        return <Lifestyle />;
      case "PreviousHealthcareProviders":
        return <PreviousHealthcareProviders />;
      case "FamilyMedicalHistory":
        return <FamilyMedicalHistory />;
      case "MedicalProcedures":
        return <MedicalProcedures />;
      default:
        return <p>Select a section to update.</p>;
    }
  };

  return (
    <Modal
      footer={null}
      open={openMedicalInfoModal}
      onCancel={() => setOpenMedicalInfoModal(false)}
      width={750}
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
        style={{ maxWidth: 650, margin: "2rem auto" }}
      >
        {renderSectionForm()}
        <Button
          type="primary"
          htmlType="submit"
          loading={updateLoading}
          style={{ marginTop: 20 }}
        >
          {updateLoading ? "Updating..." : "Update"}
        </Button>
      </Form>
    </Modal>
  );
}

export default UpdateMedicalInfoModal;
