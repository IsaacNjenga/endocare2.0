import React from "react";
import {
  Card,
  Descriptions,
  Typography,
  Collapse,
  Tooltip,
  Button,
  Empty,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { format } from "date-fns";

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
  content = [],
  setSectionName,
  renderListAsTags,
  handleDelete,
  handleUpdate,
}) => {
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
                  handleUpdate(content);
                  setSectionName("patientInformation");
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

export const CurrentMedicationSection = ({
  content = [],
  setSectionName,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Current Medication</u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(content);
                  setSectionName("currentMedications");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <Card
          type="inner"
          style={{ marginBottom: "1rem", borderRadius: "10px" }}
        >
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
                  handleDelete(content);
                  setSectionName("currentMedications");
                }}
              />
            </Tooltip>
          </div>
          <Descriptions size="small" column={2}>
            <Descriptions.Item
              label={<span style={labelStyle}>Medication Name</span>}
            >
              <span style={contentStyle}>{content.name}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Assigned Dosage</span>}
            >
              <span style={contentStyle}>{content.dosage}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Frequency</span>}
            >
              <span style={contentStyle}>{content.frequency}</span>
            </Descriptions.Item>
            <Descriptions.Item label={<span style={labelStyle}>Date</span>}>
              <span style={contentStyle}>
                {content.startDate}
                {/* {format(new Date(content?.startDate), "yyyy-MM-dd")} */}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label={<span style={labelStyle}>Ongoing</span>}>
              <span style={contentStyle}>
                {content.isOngoing === "true" ? "Yes" : "No"}
              </span>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </>
  );
};

export const TreatmentHistorySection = ({
  content = [],
  setSectionName,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Treatment History </u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(content);
                  setSectionName("treatmentHistory");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <Card
          type="inner"
          style={{ marginBottom: "1rem", borderRadius: "10px" }}
        >
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
                  handleDelete(content);
                  setSectionName("treatmentHistory");
                }}
              />
            </Tooltip>
          </div>
          <Descriptions size="small" column={2}>
            <Descriptions.Item
              label={<span style={labelStyle}>Condition</span>}
            >
              <span style={contentStyle}>{content.condition}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Date of Diagnosis</span>}
            >
              <span style={contentStyle}>
                {content.diagnosisDate}
                {/* {format(new Date(content?.diagnosisDate), "yyyy-MM-dd")} */}
              </span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Description</span>}
            >
              <span style={contentStyle}>{content.treatmentDescription}</span>
            </Descriptions.Item>
            <Descriptions.Item label={<span style={labelStyle}>Outcome</span>}>
              <span style={contentStyle}>{content.outcome}</span>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </>
  );
};

export const MedicalProceduresSection = ({
  content = [],
  setSectionName,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Medical Procedures </u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(content);
                  setSectionName("medicalProcedures");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <Card
          type="inner"
          style={{ marginBottom: "1rem", borderRadius: "10px" }}
        >
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
                  handleDelete(content);
                  setSectionName("medicalProcedures");
                }}
              />
            </Tooltip>
          </div>
          <Descriptions size="small" column={2}>
            <Descriptions.Item
              label={<span style={labelStyle}>Procedure</span>}
            >
              <span style={contentStyle}>{content.procedureName}</span>
            </Descriptions.Item>
            <Descriptions.Item label={<span style={labelStyle}>Date</span>}>
              <span style={contentStyle}>
                {content.dateOfProcedure}
                {/* {format(new Date(content.dateOfProcedure), "yyyy-MM-dd")} */}
              </span>
            </Descriptions.Item>
          </Descriptions>

          <Collapse style={{ marginTop: "1rem" }}>
            <Panel header="View Notes" key="1">
              <p style={contentStyle}>{content.notes}</p>
            </Panel>
          </Collapse>
        </Card>
      )}
    </>
  );
};

export const FamilyMedicalHistorySection = ({
  content = [],
  setSectionName,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Family Medical History</u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(content);
                  setSectionName("familyHistory");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <Card
          type="inner"
          style={{ marginBottom: "1rem", borderRadius: "10px" }}
        >
          {" "}
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
                  handleDelete(content);
                  setSectionName("familyHistory");
                }}
              />
            </Tooltip>
          </div>
          <Descriptions size="small" column={2}>
            <Descriptions.Item label={<span style={labelStyle}>Relation</span>}>
              <span style={contentStyle}>{content.relation}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Condition</span>}
            >
              <span style={contentStyle}>{content.condition}</span>
            </Descriptions.Item>
          </Descriptions>
          <Collapse style={{ marginTop: "1rem" }}>
            <Panel header="View Notes" key="1">
              <p style={contentStyle}>{content.notes}</p>
            </Panel>
          </Collapse>
        </Card>
      )}
    </>
  );
};

export const PreviousProvidersSection = ({
  content = [],
  setSectionName,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Previous Healthcare Providers</u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(content);
                  setSectionName("previousProviders");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <Card
          type="inner"
          style={{ marginBottom: "1rem", borderRadius: "10px" }}
        >
          {" "}
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
                  handleDelete(content);
                  setSectionName("previousProviders");
                }}
              />
            </Tooltip>
          </div>
          <Descriptions size="small" column={1}>
            <Descriptions.Item label={<span style={labelStyle}>Name</span>}>
              <span style={contentStyle}>{content.name}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Contact Information</span>}
            >
              <span style={contentStyle}>{content.contactInfo}</span>
            </Descriptions.Item>{" "}
            <Descriptions.Item label={<span style={labelStyle}>Period</span>}>
              <span style={contentStyle}>{content.period}</span>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </>
  );
};

export const LifestyleSection = ({
  content = [],
  setSectionName,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <Title level={2} style={sectionHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <u>Lifestyle</u>
          </div>
          <div>
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  handleUpdate(content);
                  setSectionName("lifestyle");
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Title>
      {content?.length === 0 ? (
        <Empty />
      ) : (
        <>
          {" "}
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
                  handleDelete(content);
                  setSectionName("lifestyle");
                }}
              />
            </Tooltip>
          </div>
          <Descriptions column={2} bordered size="small">
            <Descriptions.Item label={<span style={labelStyle}>Smoking</span>}>
              <span style={contentStyle}>{content.smoking ? "Yes" : "No"}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Alcohol Use</span>}
            >
              <span style={contentStyle}>
                {content.alcoholUse ? "Yes" : "No"}
              </span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Exercise Frequency</span>}
            >
              <span style={contentStyle}>{content.exerciseFrequency}</span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span style={labelStyle}>Diet Description</span>}
            >
              <span style={contentStyle}>{content.dietDescription}</span>
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </>
  );
};

function MedicalPageComponents() {
  return <div>MedicalPageComponents</div>;
}

export default MedicalPageComponents;
