import { Card, Typography, Button, Descriptions, Tooltip, Tag } from "antd";
import React, { useState } from "react";
import {
  EditOutlined,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import UpdatePracticeInfoModal from "./updatePracticeInfoModal";
import CreatePracticeInfo from "./createPracticeInfo";

const { Title } = Typography;

function PracticeInfo({
  user,
  labelStyle,
  contentStyle,
  sectionCardStyle,
  refresh,
  doctorPracticeData,
  doctorLoading,
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

  if (doctorLoading) return <div>Loading...</div>;

  if (doctorPracticeData.length === 0)
    return <CreatePracticeInfo user={user} refresh={refresh} />;

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
              handleEdit(doctorPracticeData);
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
            {doctorPracticeData.practiceName}
          </Descriptions.Item>

          <Descriptions.Item label="Address">
            {doctorPracticeData.practiceAddress}
          </Descriptions.Item>

          <Descriptions.Item label="Office Hours">
            {renderTags(doctorPracticeData.officeHours, "green")}
          </Descriptions.Item>

          <Descriptions.Item label="Contact Information">
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              <li>
                <PhoneOutlined />{" "}
                {doctorPracticeData?.contactInformation[0]?.officePhone}
              </li>
              <li>
                <MailOutlined />{" "}
                {doctorPracticeData?.contactInformation[0]?.officeEmail}
              </li>
              <li>
                <LinkOutlined />{" "}
                <a href="https://google.com">
                  {doctorPracticeData?.contactInformation[0]?.website}
                </a>
              </li>
            </ul>
          </Descriptions.Item>

          <Descriptions.Item label="Services Offered">
            {renderTags(doctorPracticeData.servicesOffered, "gold")}
          </Descriptions.Item>

          <Descriptions.Item label="Accepted Insurance Plans">
            {renderTags(doctorPracticeData.acceptedInsurancePlans, "red")}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <UpdatePracticeInfoModal
        user={user}
        loading={loading}
        setOpenUpdateModal={setOpenUpdateModal}
        openUpdateModal={openUpdateModal}
        modalContent={modalContent}
        refresh={refresh}
      />
    </div>
  );
}

export default PracticeInfo;
