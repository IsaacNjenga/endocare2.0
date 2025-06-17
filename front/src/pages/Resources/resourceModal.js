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
      loading={loading}
      width={1200}
      style={{ maxWidth: "95vw", }}
      centered
      height={600}
    >
      {modalContent}
    </Modal>
  );
}

export default ResourceModal;
