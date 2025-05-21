import React, { useState } from "react";
import { Card, Typography, Button, Descriptions, Divider } from "antd";
import UpdatePersonalInfoModal from "./updatePersonalInfoModal";
import { EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

const labelStyle = {
  fontFamily: "Raleway",
  fontWeight: 500,
};

const sectionStyle = {
  marginBottom: "2rem",
  padding: "1.5rem",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
  fontFamily: "Raleway",
};

const contentStyle = {
  fontFamily: "Roboto",
};

function PersonalInfo({ user }) {
  const [loading, setLoading] = useState(false);
  const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const updateInfo = () => {
    setOpenPersonalInfoModal(true);
    setLoading(true);
    setModalContent(user);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <div style={{ fontFamily: "Roboto", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Title
            level={3}
            style={{ fontFamily: "Raleway", marginBottom: "1rem" }}
          >
            <u>Personal Information</u>
          </Title>
        </div>
        <div>
          <Button
            type="primary"
            icon={<EditOutlined />}
            block
            title="Update your information"
            style={{ padding: "12px 15px" }}
            onClick={updateInfo}
          />
        </div>
      </div>
      <Card style={sectionStyle} title={<Divider>Basic Details</Divider>}>
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
            <span style={contentStyle}>{user?.gender || ""}</span>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card style={sectionStyle} title={<Divider>Contact Information</Divider>}>
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
      <Card style={sectionStyle} title={<Divider>Emergency Contact</Divider>}>
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
