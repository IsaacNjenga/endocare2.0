import { Modal } from "antd";
import React from "react";

function UpdateMedicalInfoModal({
  openMedicalInfoModal,
  setOpenMedicalInfoModal,
  loading,
  modalContent,
}) {
  return (
    <Modal
      footer={null}
      open={openMedicalInfoModal}
      onCancel={() => setOpenMedicalInfoModal(false)}
      width={500}
      confirmLoading={loading}
      style={{ maxWidth: "95vw" }}
    >
      UpdateMedicalInfoModal
      <pre>
        {modalContent ? JSON.stringify(modalContent, null, 2) : "No content"}
      </pre>
    </Modal>
  );
}

export default UpdateMedicalInfoModal;
