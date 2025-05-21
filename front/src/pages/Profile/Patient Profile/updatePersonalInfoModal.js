import React from "react";
import UpdatePersonalInfo from "./updatePersonalInfo";
import { Modal } from "antd";

function UpdatePersonalInfoModal({
  openPersonalInfoModal,
  setOpenPersonalInfoModal,
  loading,
  modalContent,
}) {
  return (
    <>
      <Modal
        footer={null}
        open={openPersonalInfoModal}
        onCancel={() => setOpenPersonalInfoModal(false)}
        confirmLoading={loading}
        width={850}
        style={{ maxWidth: "95vw" }}
      >
        <UpdatePersonalInfo
          modalContent={modalContent}
          setOpenPersonalInfoModal={setOpenPersonalInfoModal}
        />
      </Modal>
    </>
  );
}

export default UpdatePersonalInfoModal;
