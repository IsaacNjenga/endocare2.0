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
import UpdateAvatar from "./updateAvatar";

const { Title } = Typography;

function PersonalInfo({
  user,
  labelStyle,
  contentStyle,
  sectionCardStyle,
  refresh,
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
            {user?.avatar ? (
              <Image
                src={
                  user.avatar
                    ? user.avatar
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACUCAMAAAAEVFNMAAAAMFBMVEVHR0cAAABKSko5OTlCQkI+Pj4pKSkJCQkuLi4REREdHR0mJiYWFhYNDQ0aGho2NjamPXOMAAAD7UlEQVR4nO2cW5OkIAyFMYIX8PL//+3aOva2rtpCwoGt8XuZmnk6RYWcGJJR6uHh4eHh4eHh4XdByw+tP3/LFlK6HJvK2QnnqnE0WlG2okmVje3q4pN+cI3OUTIpMq7dil2ph0lzaoE7SJfdodhVc2VykkxqtFdyZ8kuH8lkvsp90Va55Izqjtz5lMcMFJO5DN4dGdy+sfXQWxQ2sWJqvORO9GkV3w7fv9RlQsUBeqczTqfYOx5+zjhRRvaP3/cZJ4ljKkP1FsWgE+jVPvl3T4UXrBxDb1GUaLk0svQWBVqw6pmCK+y9o6AM/ElvoIINV29ROKhg3o2bqZH3zviVaMcgjzjY4zbg3EMPIoIbVKLgmPInLUywwJWbQWU24prGCiomtJDewmL0ssuINx0mT/BteQVkz8QphLeMEMFKwuYWGoheLScY8+FhpLIaqJyg8rhtHYJFpInfLRig95cLhoSEZJaAeLP+z9La/2ccSq6WwFgz3XrkugPoVSm8L7ynBdXDAm2fhQGid0JKMKohKBbEsGaV0EddjdIrZR0O1yKW6aQAO8Qi9Q+oK7Egce1An8wLAu1A7FsdsRuu6GEPtttBI/gFt18FfyBnVsXgZzrF/bSDB4TiVZkt9lVxVRyejFONg4Uqhj0f7Ql8/kqmd1Ic8j2aYriDoxjzpXyOZ6WZwfhl45OPh5RTdivXo84bqgTTVEfcPOQ2h+OdIWO/S24zGMV9Q6p015K7Jp+J8h9MdS65KzMJ3g1ExnX9XnXdZ7gU8WYKjbFytmv7uu/7brCumc42W7kr2mgzo1XGez0PD/9A9ApYbcqJKX71zx9yReuycduqorXutU+XH6TNWHUnttHazDLbZBeNve4X150rc5E8OcWNumfS3FZZ2J32qd4dfO59B+nG84vOQlvCe7nkuef1orbpiswysBmYZj+NdPizTN/gUzONrAd9fFxwX7167OXzWgI9weEiOSQ5HDCgwoK8Gj0XdKAmhdjscFGPiPpCalx/BnD1RPVG72yT3Cw5SLG43siKpfLDhnj9bblliA3x9sjFZr92tJHKesGByx1xtk8Y5eRXbISgkJtePEI+VUgt0J0QYTtUbgD3EPHxnwiOsUX4NVdwSv8M2aAQG3A+p5XUG8fidghmCrEN0EsEh2qi37gFsQ2JeJ68RawKiupxnwg5tEQT4iYyRww7YKnhO1AEvxCJ4rhVzw4BgxZcYb4Bfy9bbifmHuwJMflGxDXsioL1351C4Davxvh15RaueYAjgr3sI/S/W3zgxQQ0CS/w3A5oyyusrgp/ucQf3vArXi/PnhOEMGv5PW576oyaUU8kCOHiW2L7A5K5MpdSqqdDAAAAAElFTkSuQmCC"
                }
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
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
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
          <Descriptions column={1} bordered size="large" style={{ flex: 1 }}>
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
        refresh={refresh}
      />
      <UpdateAvatar
        loading={loading}
        openAvatarModal={openAvatarModal}
        setOpenAvatarModal={setOpenAvatarModal}
        modalContent={modalContent}
        setLoading={setLoading}
        refresh={refresh}
      />
    </div>
  );
}

export default PersonalInfo;

//https://res.cloudinary.com/dinsdfwod/image/upload/v1746518453/wv7kofcnb4hjrmrdom4i.png
//wv7kofcnb4hjrmrdom4i
