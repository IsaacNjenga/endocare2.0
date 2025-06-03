import {
  Card,
  Typography,
  Button,
  Descriptions,
  Divider,
  Tooltip,
  Tag,
} from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import UpdateInfoModal from "./updateInfoModal";
import CreateInfo from "./createInfo";

const { Title } = Typography;

function ProfessionalInfo({
  sectionCardStyle,
  sectionHeaderStyle,
  contentStyle,
  labelStyle,
  user,
  doctorProfessionalData,
  refresh,
  doctorLoading,
}) {
  const [modalContent, setModalContent] = useState(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [loading, setLoading] = useState(false);

  //console.log(doctorProfessionalData);

  const handleEdit = (content) => {
    setOpenUpdateModal(true);
    setLoading(true);
    setModalContent(content);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };


  const renderTags = (list, color) =>
    list?.map((item) => (
      <Tag key={item} color={color} style={contentStyle}>
        {item}
      </Tag>
    )) || "—";

  if (doctorLoading) return <div>Loading...</div>;
  if (doctorProfessionalData.length === 0)
    return <CreateInfo user={user} refresh={refresh} />;

  return (
    <div style={{ fontFamily: "Roboto", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Title level={3} style={{ fontFamily: "Raleway", margin: 0 }}>
          <u>Professional Information</u>
        </Title>
        <Tooltip title="Edit your information">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              handleEdit(doctorProfessionalData);
            }}
            style={{ padding: "10px 16px" }}
          />
        </Tooltip>
      </div>

      <Card
        style={{
          ...sectionCardStyle,
          background: "#fafafa",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Divider style={{ borderColor: "#4f46e5" }}>
          <div style={sectionHeaderStyle}>Doctor Details</div>
        </Divider>

        <Descriptions
          column={1}
          bordered
          size="large"
          labelStyle={labelStyle}
          contentStyle={contentStyle}
        >
          <Descriptions.Item label="Medical License Number">
            {doctorProfessionalData.medicalLicenseNumber || ""}
          </Descriptions.Item>

          <Descriptions.Item label="Specialties">
            {renderTags(doctorProfessionalData.specialty, "blue")}
          </Descriptions.Item>

          <Descriptions.Item label="Board Certifications">
            {renderTags(doctorProfessionalData.boardCertifications, "green")}
          </Descriptions.Item>

          <Descriptions.Item label="Years of Experience">
            {doctorProfessionalData.yearsOfExperience} years
          </Descriptions.Item>

          <Descriptions.Item label="Current Hospital / Clinic">
            {doctorProfessionalData.currentHospital}
          </Descriptions.Item>

          <Descriptions.Item label="Education">
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              <li>{doctorProfessionalData?.education[0]?.bachelorsDegree}</li>
              <li>{doctorProfessionalData?.education[0]?.medicalSchool}</li>
              <li>{doctorProfessionalData?.education[0]?.residency}</li>
              <li>{doctorProfessionalData?.education[0]?.certification}</li>
            </ul>
          </Descriptions.Item>

          <Descriptions.Item label="Languages Spoken">
            {renderTags(doctorProfessionalData.languagesSpoken, "gold")}
          </Descriptions.Item>

          <Descriptions.Item label="Practice License Expiry">
            {doctorProfessionalData.practiceLicenseExpiry}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <UpdateInfoModal
        user={user}
        setOpenUpdateModal={setOpenUpdateModal}
        loading={loading}
        openUpdateModal={openUpdateModal}
        modalContent={modalContent}
        refresh={refresh}
      />
    </div>
  );
}

export default ProfessionalInfo;
