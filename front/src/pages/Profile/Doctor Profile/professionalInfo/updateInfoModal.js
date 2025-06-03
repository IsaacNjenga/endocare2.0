import { Modal } from "antd";
import React from "react";
import UpdateInfo from "./updateInfo";

function UpdateInfoModal({
  openUpdateModal,
  setOpenUpdateModal,
  modalContent,
  user,
  loading,
  refresh,
}) {
  return (
    <Modal
      footer={null}
      open={openUpdateModal}
      onCancel={() => {
        setOpenUpdateModal(false);
      }}
      confirmLoading={loading}
      width={1050}
      style={{ maxWidth: "95vw" }}
    >
      <UpdateInfo
        modalContent={modalContent}
        user={user}
        setOpenUpdateModal={setOpenUpdateModal}
        refresh={refresh}
      />
    </Modal>
  );
}

export default UpdateInfoModal;
