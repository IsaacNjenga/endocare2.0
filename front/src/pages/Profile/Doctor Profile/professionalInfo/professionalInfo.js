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

const { Title } = Typography;

const profeshDetails = {
  medicalLicenseNumber: "MD1733-2494",
  specialty: ["Cardiology", "Pediatrics"],
  yearsOfExperience: 12,
  currentHospital: "Nairobi Hospital",
  boardCertifications: [
    "American Board of Medical Specialties",
    "American Board of Orthopaedic Surgery",
    "American Board of Radiology",
  ],
  education: [
    {
      bachelorsDegree: "B.Sc. in Biochemistry - USIU-A",
      medicalSchool: "MedSchool Kenya",
      residency: "AAR Hospital, Kiambu, Kenya",
      certification: "Certified in Internal Medicine",
    },
  ],
  languagesSpoken: ["English", "Swahili"],
  practiceLicenseExpiry: "2027-08-31",
};

function ProfessionalInfo({
  sectionCardStyle,
  sectionHeaderStyle,
  contentStyle,
  labelStyle,
  user,
}) {
  const [modalContent, setModalContent] = useState(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
              handleEdit(profeshDetails);
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
            {profeshDetails.medicalLicenseNumber || ""}
          </Descriptions.Item>

          <Descriptions.Item label="Specialties">
            {renderTags(profeshDetails.specialty, "blue")}
          </Descriptions.Item>

          <Descriptions.Item label="Board Certifications">
            {renderTags(profeshDetails.boardCertifications, "green")}
          </Descriptions.Item>

          <Descriptions.Item label="Years of Experience">
            {profeshDetails.yearsOfExperience} years
          </Descriptions.Item>

          <Descriptions.Item label="Current Hospital / Clinic">
            {profeshDetails.currentHospital}
          </Descriptions.Item>

          <Descriptions.Item label="Education">
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              <li>{profeshDetails.education[0].bachelorsDegree}</li>
              <li>{profeshDetails.education[0].medicalSchool}</li>
              <li>{profeshDetails.education[0].residency}</li>
              <li>{profeshDetails.education[0].certification}</li>
            </ul>
          </Descriptions.Item>

          <Descriptions.Item label="Languages Spoken">
            {renderTags(profeshDetails.languagesSpoken, "gold")}
          </Descriptions.Item>

          <Descriptions.Item label="Practice License Expiry">
            {profeshDetails.practiceLicenseExpiry}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <UpdateInfoModal
        user={user}
        setOpenUpdateModal={setOpenUpdateModal}
        loading={loading}
        openUpdateModal={openUpdateModal}
        modalContent={modalContent}
      />
    </div>
  );
}

export default ProfessionalInfo;
