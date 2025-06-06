import React from "react";
import UpdateAppointment from "./updateAppointment";
import { Modal } from "antd";
function UpdateAppointmentModal({
  openUpdateModal,
  setOpenUpdateModal,
  loading,
  modalContent,
}) {
  return (
    <Modal
      footer={null}
      open={openUpdateModal}
      onCancel={() => setOpenUpdateModal(false)}
      confirmLoading={loading}
      width={850}
      style={{ maxWidth: "95vw" }}
    >
      <UpdateAppointment modalContent={modalContent}/>
    </Modal>
  );
}

export default UpdateAppointmentModal;
