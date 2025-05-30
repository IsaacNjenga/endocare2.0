import { Form, Modal } from "antd";
import React from "react";

function UpdateDiary({
  openDiaryModal,
  setOpenDiaryModal,
  loading,
  modalContent,
}) {
  const renderSectionForm = () => {};
  return (
    <>
      <Modal
        footer={null}
        open={openDiaryModal}
        onCancel={() => setOpenDiaryModal(false)}
        width={750}
        confirmLoading={loading}
        style={{ maxWidth: "95vw" }}
      >
        <pre>{JSON.stringify(modalContent, null, 2)}</pre>
        <Form>
          <div>UpdateDiary</div>
        </Form>
      </Modal>
    </>
  );
}

export default UpdateDiary;
