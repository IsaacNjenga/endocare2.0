import { Modal } from "antd";
import React from "react";

function ResourceModal({
  openResourceModal,
  setOpenResourceModal,
  loading,
  modalContent,
}) {
  return (
    <Modal
      footer={null}
      open={openResourceModal}
      onCancel={() => setOpenResourceModal(false)}
      confirmLoading={loading}
      width={900}
      style={{ maxWidth: "95vw" }}
    >
      {modalContent}
    </Modal>
  );
}

export default ResourceModal;
