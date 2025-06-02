import { Button, Form } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../../../App";
import axios from "axios";
import {
  PatientInformation,
  CurrentMedications,
  TreatmentHistory,
  Lifestyle,
  PreviousHealthcareProviders,
  FamilyMedicalHistory,
  MedicalProcedures,
} from "../../../../components/MedicalFormComponents";

const initialValues = {
  patientInformation: [
    {
      diagnosis: "",
      chronicConditions: [],
      allergies: [],
      bloodType: "",
    },
  ],
  currentMedications: [
    {
      name: "",
      dosage: "",
      frequency: "",
      isOngoing: "",
      startDate: "",
    },
  ],
  treatmentHistory: [
    {
      condition: "",
      diagnosisDate: "",
      treatmentDescription: "",
      outcome: "",
    },
  ],
  medicalProcedures: [{ procedureName: "", date: "", notes: "" }],
  familyMedicalHistory: [{ relation: "", condition: "", notes: "" }],
  previousHealthcareProviders: [
    {
      name: "",
      contactInfo: "",
      period: "",
    },
  ],
  lifestyle: [
    {
      smoking: "",
      alcoholUse: "",
      exerciseFrequency: "",
      dietDescription: "",
    },
  ],
  assignedPhysician: "",
};

function CreateMedicalInfo() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const allValues = { ...values, createdBy: user._id };
      console.log(allValues);
      const res = await axios.post("create-patient-details", allValues);
      if (res.data.success) {
        Swal.fire({ icon: "success", title: "Submitted!" });
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred.";
      Swal.fire({ icon: "error", title: "Error", text: errorMessage });
    } finally {
      setLoading(false);
      form.resetFields();
      navigate("/profile");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Button onClick={() => navigate("/profile")}>Back</Button>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
        style={{ maxWidth: 900, margin: "2rem auto" }}
      >
        <PatientInformation />
        <CurrentMedications />
        <TreatmentHistory />
        <MedicalProcedures />
        <FamilyMedicalHistory />
        <PreviousHealthcareProviders />
        <Lifestyle />

        {/* <Card title="Assigned Physician" style={{ marginTop: 20 }}>
          <Form.Item name="assignedPhysician" label="Assigned Physician">
            <Input />
          </Form.Item>
        </Card> */}

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateMedicalInfo;

// {[{ name: "lifestyle", title: "Lifestyle" }].map((section) => (
//     <Card
//       title={section.title}
//       key={section.name}
//       style={{ marginTop: 20 }}
//     >
//       <Form.List name={section.name}>
//         {(fields, { add, remove }) => (
//           <>
//             {fields.map(({ key, name }) => (
//               <Card key={key} size="small" style={{ marginBottom: 10 }}>
//                 {" "}
//                 <div style={{ display: "flex", justifyContent: "right" }}>
//                   <Button
//                     type="text"
//                     danger
//                     icon={<CloseOutlined />}
//                     onClick={() => remove(name)}
//                   />
//                 </div>
//                 <Row gutter={16}>
//                   {Object.keys(initialValues[section.name][0]).map(
//                     (fieldKey) => (
//                       <Col span={12} key={fieldKey}>
//                         <Form.Item
//                           name={[name, fieldKey]}
//                           label={fieldKey}
//                         >
//                           <Input />
//                         </Form.Item>
//                       </Col>
//                     )
//                   )}
//                 </Row>
//               </Card>
//             ))}
//             <Button type="dashed" onClick={() => add()}>
//               + Add {section.title}
//             </Button>
//           </>
//         )}
//       </Form.List>
//     </Card>
//   ))}
