import React from "react";
import UpdateAppointment from "./updateAppointment";
import { Modal } from "antd";
function UpdateAppointmentModal({
  openUpdateModal,
  setOpenUpdateModal,
  loading,
  modalContent,
  appointmentRefresh,
}) {
  return (
    <Modal
      footer={null}
      open={openUpdateModal}
      onCancel={() => setOpenUpdateModal(false)}
      confirmLoading={loading}
      width={800}
      style={{ maxWidth: "95vw" }}
    >
      <UpdateAppointment
        modalContent={modalContent}
        setOpenUpdateModal={setOpenUpdateModal}
        appointmentRefresh={appointmentRefresh}
      />
    </Modal>
  );
}

export default UpdateAppointmentModal;
