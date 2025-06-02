import React, { useState } from "react";
import { Typography, Divider, Tag, Space, Button } from "antd";
import UpdateMedicalInfoModal from "./updateMedicalInfoModal";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Swal from "sweetalert2";
import axios from "axios";
import {
  PatientInformationSection,
  CurrentMedicationSection,
  TreatmentHistorySection,
  MedicalProceduresSection,
  FamilyMedicalHistorySection,
  PreviousProvidersSection,
  LifestyleSection,
} from "../../../../components/medicalPageComponents";

function MedicalInfo({
  patientData,
  patientRefresh,
  patientDataLoading,
  user,
}) {
  const navigate = useNavigate();
  const [openMedicalInfoModal, setOpenMedicalInfoModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [values, setValues] = useState({});
  const [sectionName, setSectionName] = useState("");

  React.useEffect(() => {
    if (patientData) {
      const newValues = Object.values(patientData)
        .map((value) => ({ ...value }))
        .reduce((acc, value) => [...acc, value], []);
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
            setTimeout(() => {
              setSectionName("");
            }, 100);
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
              content={values[0]?.patientInformation}
              renderListAsTags={renderListAsTags}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
            />
            <Divider />
            <CurrentMedicationSection
              content={values[0]?.currentMedications}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
            />
            <Divider />
            <TreatmentHistorySection
              content={values[0]?.treatmentHistory}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
            />
            <Divider />
            <MedicalProceduresSection
              content={values[0]?.medicalProcedures}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
            />
            <Divider />
            <FamilyMedicalHistorySection
              content={values[0]?.familyMedicalHistory}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
            />
            <Divider />
            <PreviousProvidersSection
              content={values[0]?.previousHealthcareProviders}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
            />
            <Divider />
            <LifestyleSection
              content={values[0]?.lifestyle}
              handleDelete={handleDelete}
              setSectionName={setSectionName}
              setLoading={setLoading}
              handleUpdate={handleUpdate}
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
          <Space direction="vertical" size="medium" style={{ width: "100%" }}>
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
