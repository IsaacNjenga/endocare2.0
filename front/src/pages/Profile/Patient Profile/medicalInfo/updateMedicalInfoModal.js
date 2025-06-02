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
  const toCamelCase = (str) => str.charAt(0).toLowerCase() + str.slice(1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const fieldName = toCamelCase(sectionName);
      const payload = { [fieldName]: values[fieldName] };
      const allValues = { ...payload, createdBy: user._id };
      //console.log(allValues);
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
      console.log(error);
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred.";
      Swal.fire({ icon: "error", title: "Error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (openMedicalInfoModal && modalContent && sectionName) {
      form.setFieldsValue({ [sectionName]: modalContent });
    }
  }, [openMedicalInfoModal, modalContent, sectionName, form]);

  const renderSectionForm = () => (
    <>
      <div
        style={{
          display: sectionName === "patientInformation" ? "block" : "none",
        }}
      >
        <PatientInformation />
      </div>
      <div
        style={{
          display: sectionName === "currentMedications" ? "block" : "none",
        }}
      >
        <CurrentMedications />
      </div>
      <div
        style={{
          display: sectionName === "treatmentHistory" ? "block" : "none",
        }}
      >
        <TreatmentHistory />
      </div>
      <div style={{ display: sectionName === "lifestyle" ? "block" : "none" }}>
        <Lifestyle />
      </div>
      <div
        style={{
          display: sectionName === "previousProviders" ? "block" : "none",
        }}
      >
        <PreviousHealthcareProviders />
      </div>
      <div
        style={{ display: sectionName === "familyHistory" ? "block" : "none" }}
      >
        <FamilyMedicalHistory />
      </div>
      <div
        style={{
          display: sectionName === "medicalProcedures" ? "block" : "none",
        }}
      >
        <MedicalProcedures />
      </div>
    </>
  );

  return (
    <Modal
      footer={null}
      open={openMedicalInfoModal}
      onCancel={() => {
        setOpenMedicalInfoModal(false);
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
        style={{ maxWidth: 750, margin: "2rem auto" }}
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
  );
}

export default UpdateMedicalInfoModal;
