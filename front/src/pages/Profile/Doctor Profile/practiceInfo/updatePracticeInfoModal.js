import { Modal } from "antd";
import React from "react";
import UpdatePracticeInfo from "./updatePracticeInfo";

function UpdatePracticeInfoModal({
  user,
  loading,
  setOpenUpdateModal,
  openUpdateModal,
  modalContent,
  refresh,
}) {
  return (
    <Modal
      footer={null}
      open={openUpdateModal}
      onCancel={() => setOpenUpdateModal(false)}
      confirmLoading={loading}
      width={950}
      style={{ maxWidth: "95vw" }}
    >
      <UpdatePracticeInfo
        modalContent={modalContent}
        user={user}
        setOpenUpdateModal={setOpenUpdateModal}
        refresh={refresh}
      />
    </Modal>
  );
}

export default UpdatePracticeInfoModal;
