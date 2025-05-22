import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Descriptions,
  Divider,
  Tooltip,
  Avatar,
  Image,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import UpdatePersonalInfoModal from "./updatePersonalInfoModal";
import UpdateAvatar from "../userAccount/updateAvatar";

const { Title } = Typography;

function PersonalInfo({
  user,
  labelStyle,
  contentStyle,
  sectionCardStyle,
  sectionHeaderStyle,
}) {
  const [loading, setLoading] = useState(false);
  const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const changeAvatar = () => {
    setOpenAvatarModal(true);
    setModalContent(user);
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };

  const handleEdit = () => {
    setOpenPersonalInfoModal(true);
    setModalContent(user);
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };

  return (
    <div style={{ fontFamily: "Roboto", padding: "0.7rem" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Title level={2} style={{ fontFamily: "Raleway" }}>
          <u>Personal Information</u>
        </Title>
        <Tooltip title="Edit your information">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={handleEdit}
            style={{ padding: "12px 15px" }}
          />
        </Tooltip>
      </div>

      {/* Sections */}
      <Card style={sectionCardStyle}>
        <Divider style={{ borderColor: "#4f46e5" }}>
          <div style={sectionHeaderStyle}>Basic Details</div>
        </Divider>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
          <div style={{ position: "relative", width: 150, height: 150 }}>
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt="avatar"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "8px",
                  objectFit: "cover",
                  border: "1px solid #e0e0e0",
                }}
              />
            ) : (
              <Avatar
                style={{
                  backgroundColor: "#fde3cf",
                  color: "#f56a00",
                }}
                size="large"
              >
                {user.firstName?.charAt(0)}
                {user.lastName?.charAt(0)}
              </Avatar>
            )}
            <Tooltip title="Edit your avatar">
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                size="small"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#4f46e5",
                  borderColor: "#4f46e5",
                }}
                onClick={changeAvatar}
              />
            </Tooltip>
          </div>

          {/* Descriptions */}
          <Descriptions column={1} bordered size="small" style={{ flex: 1 }}>
            <Descriptions.Item
              label={<span style={labelStyle}>First Name</span>}
            >
              <span style={contentStyle}>{user?.firstName || "—"}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Middle Name</span>}
            >
              <span style={contentStyle}>{user?.middleName || "—"}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Last Name</span>}
            >
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
        </div>
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
      <UpdateAvatar
        loading={loading}
        openAvatarModal={openAvatarModal}
        setOpenAvatarModal={setOpenAvatarModal}
        modalContent={modalContent}
        setLoading={setLoading}
      />
    </div>
  );
}

export default PersonalInfo;

//https://res.cloudinary.com/dinsdfwod/image/upload/v1746518453/wv7kofcnb4hjrmrdom4i.png
//wv7kofcnb4hjrmrdom4i
