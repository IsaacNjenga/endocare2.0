import React, { useState } from "react";
import { Card, Typography, Button, Descriptions, Divider } from "antd";
import { EditOutlined } from "@ant-design/icons";
import UpdatePersonalInfoModal from "./updatePersonalInfoModal";

const { Title } = Typography;

const labelStyle = {
  fontFamily: "Raleway",
  fontWeight: 500,
  fontSize: "1rem",
};

const contentStyle = {
  fontFamily: "Roboto",
  lineHeight: 1.6,
  fontSize: "1rem",
};

const sectionCardStyle = {
  marginBottom: "2rem",
  padding: "1.5rem",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
  fontFamily: "Raleway",
};

const sectionHeaderStyle = {
  padding: "6px 16px",
  borderRadius: "30px",
  background: "#eef2ff",
  fontFamily: "Raleway",
  fontWeight: 600,
  fontSize: 22,
  color: "#4f46e5",
};

function PersonalInfo({ user }) {
  const [loading, setLoading] = useState(false);
  const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleEdit = () => {
    setOpenPersonalInfoModal(true);
    setModalContent(user);
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };

  return (
    <div style={{ fontFamily: "Roboto", padding: "1rem" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Title level={3} style={{ fontFamily: "Raleway" }}>
          <u>Personal Information</u>
        </Title>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={handleEdit}
          style={{ padding: "12px 15px" }}
          title="Update your information"
          aria-label="Edit personal information"
        >
          Edit
        </Button>
      </div>

      {/* Sections */}
      <Card style={sectionCardStyle}>
        <Divider style={{ borderColor: "#4f46e5" }}>
          <div style={sectionHeaderStyle}>Basic Details</div>
        </Divider>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label={<span style={labelStyle}>First Name</span>}>
            <span style={contentStyle}>{user?.firstName || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Middle Name</span>}
          >
            <span style={contentStyle}>{user?.middleName || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Last Name</span>}>
            <span style={contentStyle}>{user?.lastName || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Date of Birth</span>}
          >
            <span style={contentStyle}>{user?.dob || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span style={labelStyle}>Gender</span>}>
            <span style={contentStyle}>{user?.gender || "—"}</span>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card style={sectionCardStyle}>
        <Divider style={{ borderColor: "#4f46e5" }}>
          <div style={sectionHeaderStyle}>Contact Information</div>
        </Divider>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item
            label={<span style={labelStyle}>Phone Number</span>}
          >
            <span style={contentStyle}>{user?.phoneNumber || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Email Address</span>}
          >
            <span style={contentStyle}>{user?.email || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Physical Address</span>}
          >
            <span style={contentStyle}>{user?.address || "—"}</span>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card style={sectionCardStyle}>
        <Divider style={{ borderColor: "#4f46e5" }}>
          <div style={sectionHeaderStyle}>Emergency Contact Info</div>
        </Divider>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label={<span style={labelStyle}>Full Name</span>}>
            <span style={contentStyle}>{user?.emergencyName || "—"}</span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Phone Number</span>}
          >
            <span style={contentStyle}>
              {user?.emergencyPhoneNumber || "—"}
            </span>
          </Descriptions.Item>
          <Descriptions.Item
            label={<span style={labelStyle}>Email Address</span>}
          >
            <span style={contentStyle}>{user?.emergencyEmail || "—"}</span>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Modal */}
      <UpdatePersonalInfoModal
        loading={loading}
        openPersonalInfoModal={openPersonalInfoModal}
        setOpenPersonalInfoModal={setOpenPersonalInfoModal}
        modalContent={modalContent}
      />
    </div>
  );
}

export default PersonalInfo;
