import { Col, Modal, Row } from "antd";
import React from "react";

function ReviewModal({
  modalContent,
  setOpenReviewModal,
  openReviewModal,
  loading,
}) {
  return (
    <Modal
      footer={null}
      open={openReviewModal}
      onCancel={() => {
        setOpenReviewModal(false);
      }}
      confirmLoading={loading}
      width={1100}
      style={{ maxWidth: "95vw" }}
    >
      <div
        style={{
          margin: 10,
          padding: 10,
          background: "whitesmoke",
          borderRadius: "8px",
        }}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={20} md={18} lg={16}>
            {modalContent}
          </Col>
          <Col xs={24} sm={20} md={18} lg={8}>
            {modalContent}
          </Col>
        </Row>
      </div>
    </Modal>
  );
}

export default ReviewModal;
