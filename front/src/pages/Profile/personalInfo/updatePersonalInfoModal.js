import React from "react";
import UpdatePersonalInfo from "./updatePersonalInfo";
import { Modal } from "antd";

function UpdatePersonalInfoModal({
  openPersonalInfoModal,
  setOpenPersonalInfoModal,
  loading,
  refresh,
  modalContent,
}) {
  return (
    <>
      <Modal
        footer={null}
        open={openPersonalInfoModal}
        onCancel={() => setOpenPersonalInfoModal(false)}
        confirmLoading={loading}
        width={950}
        style={{ maxWidth: "95vw" }}
      >
        <UpdatePersonalInfo
          modalContent={modalContent}
          setOpenPersonalInfoModal={setOpenPersonalInfoModal}
          refresh={refresh}
        />
      </Modal>
    </>
  );
}

export default UpdatePersonalInfoModal;
