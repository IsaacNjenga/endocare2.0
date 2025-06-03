import {
  Card,
  Typography,
  Button,
  Descriptions,
  Divider,
  Tooltip,
  Tag,
} from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

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
  education: {
    bachelorsDegree: "B.Sc. in Biochemistry - USIU-A",
    medicalSchool: "MedSchool Kenya",
    residency: "AAR Hospital, Kiambu, Kenya",
    certification: "Certified in Internal Medicine",
  },
  languagesSpoken: ["English", "Swahili", "French"],
  practiceLicenseExpiry: "2027-08-31",
};

function ProfessionalInfo({
  sectionCardStyle,
  sectionHeaderStyle,
  contentStyle,
  labelStyle,
}) {
  const handleEdit = () => {
    // trigger modal or route to edit form
  };

  const renderTags = (list) =>
    list?.map((item) => (
      <Tag key={item} color="green">
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
            onClick={handleEdit}
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
          <div
            style={sectionHeaderStyle || { fontSize: "18px", fontWeight: 600 }}
          >
            Doctor Details
          </div>
        </Divider>

        <Descriptions
          column={1}
          bordered
          size="middle"
          labelStyle={labelStyle}
          contentStyle={contentStyle}
        >
          <Descriptions.Item label="Medical License Number">
            {profeshDetails.medicalLicenseNumber}
          </Descriptions.Item>

          <Descriptions.Item label="Specialties">
            {renderTags(profeshDetails.specialty)}
          </Descriptions.Item>

          <Descriptions.Item label="Board Certifications">
            {renderTags(profeshDetails.boardCertifications)}
          </Descriptions.Item>

          <Descriptions.Item label="Years of Experience">
            {profeshDetails.yearsOfExperience} years
          </Descriptions.Item>

          <Descriptions.Item label="Current Hospital / Clinic">
            {profeshDetails.currentHospital}
          </Descriptions.Item>

          <Descriptions.Item label="Education">
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              <li>{profeshDetails.education.bachelorsDegree}</li>
              <li>{profeshDetails.education.medicalSchool}</li>
              <li>{profeshDetails.education.residency}</li>
              <li>{profeshDetails.education.certification}</li>
            </ul>
          </Descriptions.Item>

          <Descriptions.Item label="Languages Spoken">
            {renderTags(profeshDetails.languagesSpoken)}
          </Descriptions.Item>

          <Descriptions.Item label="Practice License Expiry">
            {profeshDetails.practiceLicenseExpiry}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

export default ProfessionalInfo;
