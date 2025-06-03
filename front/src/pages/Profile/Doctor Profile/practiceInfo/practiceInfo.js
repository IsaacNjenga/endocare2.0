import { Card, Typography, Button, Descriptions, Tooltip, Tag } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import UpdatePracticeInfoModal from "./updatePracticeInfoModal";

const { Title } = Typography;

const practiceData = {
  practiceName: "John Doe's Medical Facility",
  practiceAddress: "519-00300 Nairobi, Kenya",
  officeHours: ["9:00 AM - 5:00 PM Weekdays", "10:00 AM - 2:00 PM Weekends"],
  contactInformation: [
    {
      officePhone: "+254 780 522-234",
      officeEmail: "JDoe@email.com",
      website: "https://website.com",
    },
  ],
  servicesOffered: ["Consultations", "Surgery", "E&R"],
  acceptedInsurancePlans: ["SHA", "NHIF"],
};
function PracticeInfo({
  user,
  labelStyle,
  contentStyle,
  sectionCardStyle,
  refresh,
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
          <u>Practice Information</u>
        </Title>
        <Tooltip title="Edit your information">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              handleEdit(practiceData);
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
        <Descriptions
          column={1}
          bordered
          size="large"
          labelStyle={labelStyle}
          contentStyle={contentStyle}
        >
          <Descriptions.Item label="Practice">
            {practiceData.practiceName}
          </Descriptions.Item>

          <Descriptions.Item label="Address">
            {practiceData.practiceAddress}
          </Descriptions.Item>

          <Descriptions.Item label="Office Hours">
            {renderTags(practiceData.officeHours, "green")}
          </Descriptions.Item>

          <Descriptions.Item label="Contact Information">
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              <li>{practiceData.contactInformation[0].officePhone}</li>
              <li>{practiceData.contactInformation[0].officeEmail}</li>
              <li>
                <a href="https://google.com">
                  {practiceData.contactInformation[0].website}
                </a>
              </li>
            </ul>
          </Descriptions.Item>

          <Descriptions.Item label="Services Offered">
            {renderTags(practiceData.servicesOffered, "gold")}
          </Descriptions.Item>

          <Descriptions.Item label="Accepted Insurance Plans">
            {renderTags(practiceData.acceptedInsurancePlans, "red")}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <UpdatePracticeInfoModal
        user={user}
        loading={loading}
        setOpenUpdateModal={setOpenUpdateModal}
        openUpdateModal={openUpdateModal}
        modalContent={modalContent}
      />
    </div>
  );
}

export default PracticeInfo;
