import React from "react";
import {
  Card,
  Descriptions,
  Typography,
  Divider,
  Tag,
  Space,
  Collapse,
  Tooltip,
  Button,
  Empty,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Panel } = Collapse;

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

export const PatientInformationSection = ({
  patientInfo,
  content = [],
  setOpenMedicalInfoModal,
  setLoading,
  setSectionName,
  renderListAsTags,
  setModalContent,
  handleDelete,
}) => {
  const handleUpdate = (info) => {
    setOpenMedicalInfoModal(true);
    setModalContent(info);
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Medical Information</u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(patientInfo);
                  setSectionName("PatientInformation");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <Card style={sectionCardStyle}>
          {content?.map((info) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                  gap: "10px",
                }}
              >
                <Tooltip title="Delete this section">
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      handleDelete(info);
                      setSectionName("patientInformation");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions column={2} bordered size="samll">
                <Descriptions.Item
                  label={<span style={labelStyle}>Diagnosis</span>}
                >
                  <span style={contentStyle}>{info.diagnosis}</span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Chronic Conditions</span>}
                >
                  {renderListAsTags(info.chronicConditions)}
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Allergies</span>}
                >
                  {renderListAsTags(info.allergies)}
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Blood Type</span>}
                >
                  <span style={contentStyle}>{info.bloodType}</span>
                </Descriptions.Item>
              </Descriptions>
            </>
          ))}
        </Card>
      )}
    </>
  );
};

function MedicalPageComponents() {
  return <div>MedicalPageComponents</div>;
}

export default MedicalPageComponents;
