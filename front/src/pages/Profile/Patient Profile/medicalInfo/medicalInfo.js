import React, { useState } from "react";
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
} from "antd";
import UpdateMedicalInfoModal from "./updateMedicalInfoModal";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Swal from "sweetalert2";
import axios from "axios";

const { Title } = Typography;
const { Panel } = Collapse;

function MedicalInfo({
  labelStyle,
  contentStyle,
  sectionCardStyle,
  sectionHeaderStyle,
  patientData,
  patientRefresh,
  patientDataLoading,
  user,
}) {
  const navigate = useNavigate();
  // const values = {
  //   patientInformation: [
  //     {
  //       diagnosis: "sick",
  //       chronicConditions: ["heart disease", "liver failure"],
  //       allergies: ["milk", "eggs"],
  //       bloodType: "A+",
  //     },
  //   ],
  //   currentMedications: [
  //
  //     {
  //       name: "pills",
  //       dosage: "alot",
  //       frequency: "1x2",
  //       isOngoing: true,
  //       startDate: "2001-02-12",
  //     },
  //
  //   ],
  //   treatmentHistory: [
  //     {
  //       condition: "big head",
  //       diagnosisDate: "2001-01-01",
  //       treatmentDescription: "sick",
  //       outcome: "not bad",
  //     },
  //     {
  //       condition: "big head",
  //       diagnosisDate: "2001-01-01",
  //       treatmentDescription: "sick",
  //       outcome: "not bad",
  //     },
  //     {
  //       condition: "big head",
  //       diagnosisDate: "2001-01-01",
  //       treatmentDescription: "sick",
  //       outcome: "not bad",
  //     },
  //   ],
  //   medicalProcedures: [
  //     { procedureName: "surgery", dateOfProcedure: "2001-03-03", notes: "bla bla bla" },
  //     { procedureName: "surgery", dateOfProcedure: "2001-03-03", notes: "bla bla bla" },
  //     { procedureName: "surgery", dateOfProcedure: "2001-03-03", notes: "bla bla bla" },
  //   ],
  //   familyMedicalHistory: [
  //     { relation: "Papa", condition: "sick", notes: "very sicc" },
  //     { relation: "Papa", condition: "sick", notes: "very sicc" },
  //     { relation: "Papa", condition: "sick", notes: "very sicc" },
  //   ],
  //   previousHealthcareProviders: [
  //     {
  //       name: "John Doe",
  //       contactInfo: "email@email.com",
  //       period: "2001-2003",
  //     },
  //     {
  //       name: "John Doe",
  //       contactInfo: "email@email.com",
  //       period: "2001-2003",
  //     },
  //   ],
  //   lifestyle: [
  //     {
  //       smoking: false,
  //       alcoholUse: true,
  //       exerciseFrequency: "daily",
  //       dietDescription: "poor",
  //     },
  //   ],
  //   assignedPhysician: "Dr.John",
  // };

  const [openMedicalInfoModal, setOpenMedicalInfoModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [values, setValues] = useState({});
  const [sectionName, setSectionName] = useState("");

  React.useEffect(() => {
    if (patientData) {
      const newValues = Object.values(patientData)
        .map((value) => ({ ...value }))
        .reduce((acc, value) => [...acc, value]);
      setValues(newValues);
    }
  }, [user, patientData]);

  const renderListAsTags = (items) => (
    <Space wrap>
      {items.map((item, idx) => (
        <Tag key={idx} color="red">
          {item}
        </Tag>
      ))}
    </Space>
  );

  const PatientInformationSection = ({
    patientInfo,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={2} style={sectionHeaderStyle}>
          <u>Medical Information</u>
        </Title>

        <Card style={sectionCardStyle}>
          {patientInfo?.length !== 0 ? (
            patientInfo?.map((info) => (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    margin: "5px 0px",
                    gap: "10px",
                  }}
                >
                  <Tooltip title="Edit this section">
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      onClick={() => {
                        handleUpdate(info);
                        setSectionName("PatientInformation");
                      }}
                    />
                  </Tooltip>
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
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                margin: "5px 0px",
              }}
            >
              <Tooltip title="Edit this section">
                <Button
                  type="primary"
                  icon={<PlusCircleOutlined />}
                  onClick={() => {
                    handleUpdate(patientInfo);
                    setSectionName("PatientInformation");
                  }}
                />
              </Tooltip>
            </div>
          )}
        </Card>
      </>
    );
  };

  const CurrentMedicationSection = ({
    medications,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Current Medication
        </Title>{" "}
        {medications?.length !== 0 ? (
          medications?.map((medication, index) => (
            <Card
              key={index}
              type="inner"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                }}
              >
                <Tooltip title="Edit this section">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleUpdate(medication);
                      setSectionName("CurrentMedications");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions size="small" column={2}>
                <Descriptions.Item
                  label={<span style={labelStyle}>Medication Name</span>}
                >
                  <span style={contentStyle}>{medication.name}</span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Assigned Dosage</span>}
                >
                  <span style={contentStyle}>{medication.dosage}</span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Frequency</span>}
                >
                  <span style={contentStyle}>{medication.frequency}</span>
                </Descriptions.Item>
                <Descriptions.Item label={<span style={labelStyle}>Date</span>}>
                  <span style={contentStyle}>
                    {format(new Date(medication.startDate), "yyyy-MM-dd")}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Ongoing</span>}
                >
                  <span style={contentStyle}>
                    {medication.isOngoing === "true" ? "Yes" : "No"}
                  </span>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "5px 0px",
            }}
          >
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  handleUpdate(medications);
                  setSectionName("CurrentMedications");
                }}
              />
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  const TreatmentHistorySection = ({
    treatmentHistory,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Treatment History
        </Title>{" "}
        {treatmentHistory?.length !== 0 ? (
          treatmentHistory?.map((history, index) => (
            <Card
              key={index}
              type="inner"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                }}
              >
                <Tooltip title="Edit this section">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleUpdate(history);
                      setSectionName("TreatmentHistory");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions size="small" column={2}>
                <Descriptions.Item
                  label={<span style={labelStyle}>Condition</span>}
                >
                  <span style={contentStyle}>{history.condition}</span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Date of Diagnosis</span>}
                >
                  <span style={contentStyle}>
                    {format(new Date(history.diagnosisDate), "yyyy-MM-dd")}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Description</span>}
                >
                  <span style={contentStyle}>
                    {history.treatmentDescription}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Outcome</span>}
                >
                  <span style={contentStyle}>{history.outcome}</span>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "5px 0px",
            }}
          >
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  handleUpdate(treatmentHistory);
                  setSectionName("TreatmentHistory");
                }}
              />
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  const MedicalProceduresSection = ({
    procedures,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Medical Procedures
        </Title>{" "}
        {procedures?.length !== 0 ? (
          procedures?.map((procedure, index) => (
            <Card
              key={index}
              type="inner"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                }}
              >
                <Tooltip title="Edit this section">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleUpdate(procedure);
                      setSectionName("MedicalProcedures");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions size="small" column={2}>
                <Descriptions.Item
                  label={<span style={labelStyle}>Procedure</span>}
                >
                  <span style={contentStyle}>{procedure.procedureName}</span>
                </Descriptions.Item>
                <Descriptions.Item label={<span style={labelStyle}>Date</span>}>
                  <span style={contentStyle}>
                    {format(new Date(procedure.dateOfProcedure), "yyyy-MM-dd")}
                  </span>
                </Descriptions.Item>
              </Descriptions>

              <Collapse style={{ marginTop: "1rem" }}>
                <Panel header="View Notes" key="1">
                  <p style={contentStyle}>{procedure.notes}</p>
                </Panel>
              </Collapse>
            </Card>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "5px 0px",
            }}
          >
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  handleUpdate(procedures);
                  setSectionName("MedicalProcedures");
                }}
              />
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  const FamilyMedicalHistorySection = ({
    medicalHistory,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Family Medical History
        </Title>
        {medicalHistory?.length !== 0 ? (
          medicalHistory?.map((history, index) => (
            <Card
              key={index}
              type="inner"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                }}
              >
                <Tooltip title="Edit this section">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleUpdate(history);
                      setSectionName("FamilyMedicalHistory");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions size="small" column={2}>
                <Descriptions.Item
                  label={<span style={labelStyle}>Relation</span>}
                >
                  <span style={contentStyle}>{history.relation}</span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Condition</span>}
                >
                  <span style={contentStyle}>{history.condition}</span>
                </Descriptions.Item>
              </Descriptions>
              <Collapse style={{ marginTop: "1rem" }}>
                <Panel header="View Notes" key="1">
                  <p style={contentStyle}>{history.notes}</p>
                </Panel>
              </Collapse>
            </Card>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "5px 0px",
            }}
          >
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  handleUpdate(medicalHistory);
                  setSectionName("MedicalHistory");
                }}
              />
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  const PreviousProvidersSection = ({
    previousProviders,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Previous Healthcare Providers
        </Title>
        {previousProviders?.length !== 0 ? (
          previousProviders?.map((provider, index) => (
            <Card
              key={index}
              type="inner"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                }}
              >
                <Tooltip title="Edit this section">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleUpdate(provider);
                      setSectionName("PreviousHealthcareProviders");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label={<span style={labelStyle}>Name</span>}>
                  <span style={contentStyle}>{provider.name}</span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Contact Information</span>}
                >
                  <span style={contentStyle}>{provider.contactInfo}</span>
                </Descriptions.Item>{" "}
                <Descriptions.Item
                  label={<span style={labelStyle}>Period</span>}
                >
                  <span style={contentStyle}>{provider.period}</span>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "5px 0px",
            }}
          >
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  handleUpdate(previousProviders);
                  setSectionName("PreviousHealthcareProviders");
                }}
              />
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  const LifestyleSection = ({
    lifestyles,
    labelStyle,
    contentStyle,
    sectionHeaderStyle,
  }) => {
    return (
      <>
        <Title level={4} style={sectionHeaderStyle}>
          Lifestyle
        </Title>
        {lifestyles?.length !== 0 ? (
          lifestyles?.map((lifestyle) => (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "5px 0px",
                }}
              >
                <Tooltip title="Edit this section">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleUpdate(lifestyle);
                      setSectionName("Lifestyle");
                    }}
                  />
                </Tooltip>
              </div>
              <Descriptions column={2} bordered size="small">
                <Descriptions.Item
                  label={<span style={labelStyle}>Smoking</span>}
                >
                  <span style={contentStyle}>
                    {lifestyle.smoking ? "Yes" : "No"}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Alcohol Use</span>}
                >
                  <span style={contentStyle}>
                    {lifestyle.alcoholUse ? "Yes" : "No"}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Exercise Frequency</span>}
                >
                  <span style={contentStyle}>
                    {lifestyle.exerciseFrequency}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span style={labelStyle}>Diet Description</span>}
                >
                  <span style={contentStyle}>{lifestyle.dietDescription}</span>
                </Descriptions.Item>
              </Descriptions>
            </>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "5px 0px",
            }}
          >
            <Tooltip title="Edit this section">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() => {
                  handleUpdate(lifestyles);
                  setSectionName("Lifestyle");
                }}
              />
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  const handleUpdate = (info) => {
    setOpenMedicalInfoModal(true);
    setModalContent(info);
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  };

  const handleDelete = (info) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This will be discarded permanently!",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const res = await axios.delete(
            `delete-detail?section=${sectionName}&id=${info._id}&userId=${user._id}`
          );
          if (res.data.success) {
            patientRefresh();
          }
        } catch (error) {
          console.log(error);
          const errorMessage =
            error.response?.data?.error ??
            "An unexpected error occurred. Please try again later.";
          Swal.fire({
            icon: "warning",
            title: "Error",
            text: errorMessage,
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  if (patientDataLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {values.length !== 0 ? (
        <>
          <p style={{ fontFamily: "Raleway" }}>
            Last Updated:{" "}
            {format(new Date(patientData[0].updatedAt), "yyyy-MM-dd, pp")}
          </p>
          <div style={{ fontFamily: "Roboto", padding: "0.5rem" }}>
            <PatientInformationSection
              patientInfo={values?.patientInformation}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
            <Divider />
            <CurrentMedicationSection
              medications={values?.currentMedications}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
            <Divider />
            <TreatmentHistorySection
              treatmentHistory={values?.treatmentHistory}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
            <Divider />
            <MedicalProceduresSection
              procedures={values?.medicalProcedures}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
            <Divider />
            <FamilyMedicalHistorySection
              medicalHistory={values?.familyMedicalHistory}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
            <Divider />
            <PreviousProvidersSection
              previousProviders={values?.previousHealthcareProviders}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
            <Divider />
            <LifestyleSection
              lifestyles={values?.lifestyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              sectionHeaderStyle={sectionHeaderStyle}
            />
          </div>

          <UpdateMedicalInfoModal
            openMedicalInfoModal={openMedicalInfoModal}
            setOpenMedicalInfoModal={setOpenMedicalInfoModal}
            loading={loading}
            modalContent={modalContent}
            patientRefresh={patientRefresh}
            sectionName={sectionName}
            user={user}
          />
        </>
      ) : (
        <>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Typography.Paragraph>
              Looks like your information is not updated.
            </Typography.Paragraph>
            <Button
              type="link"
              onClick={() => {
                navigate("/profile/create-medical-info");
              }}
            >
              Click here to get started
            </Button>
          </Space>
        </>
      )}
    </>
  );
}
export default MedicalInfo;

// const renderObjectList = (data, fields) => (
//   <>
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "right",
//         margin: "5px 0px",
//       }}
//     >
//       <Tooltip title="Edit this section">
//         <Button
//           type="primary"
//           icon={<EditOutlined />}
//           onClick={() => handleUpdate(data)}
//         />
//       </Tooltip>
//     </div>
//     <List
//       size="small"
//       bordered
//       dataSource={data}
//       renderItem={(item) => (
//         <List.Item>
//           {fields.map((f, i) => (
//             <div key={i} style={{ marginRight: 20 }}>
//               <Text strong>{f.label}:</Text>{" "}
//               <span style={contentStyle}>{item[f.key] || "—"}</span>
//             </div>
//           ))}
//         </List.Item>
//       )}
//     />
//   </>
// );
