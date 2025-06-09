import React, { useContext, useState } from "react";
import useFetchAllDoctorData from "../../hooks/fetchAllDoctorData";
import {
  Button,
  Col,
  Divider,
  Row,
  Typography,
  Card,
  Space,
  Avatar,
  Spin,
  Tag,
  Tooltip,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useFetchDoctorById from "../../hooks/fetchDoctorById";
import DoctorDetailsModal from "../../components/doctorDetailsModal";
import axios from "axios";
import { UserContext } from "../../App";
import Swal from "sweetalert2";
import SelectSpecialist from "./selectSpecialist";
import useFetchPatientData from "../../hooks/fetchPatientData";
import doctorImg from "../../assets/images/doctor.png";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const cardStyle = {
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  border: "1px solid #00152a",
};

const avatarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 0,
  fontFamily: "Raleway",
};

const titleStyle = {
  marginBottom: 4,
  fontWeight: 600,
  fontSize: 16,
};

const iconStyle = {
  fontSize: "1.4rem",
  color: "#00152a",
  padding: "7px",
  borderRadius: "50%",
  backgroundColor: "whitesmoke",
};

const labelStyle = { fontFamily: "Raleway", fontSize: "1.1rem" };

function Specialists() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { doctors, allDoctorsLoading } = useFetchAllDoctorData();
  const [openDoctorModal, setOpenDoctorModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { patientData, patientDataLoading, patientRefresh } =
    useFetchPatientData(userId);
  const {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    fetchDoctorById,
    doctorUserData,
  } = useFetchDoctorById();

  //console.log(patientData[0]?.selectedPhysician);

  const YesPhysician = () => {
    return <div>There is</div>;
  };

  const NoPhysician = () => {
    return (
      <Card
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "24px",
        }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} sm={10} md={8}>
            <img
              src={doctorImg}
              alt="doctor"
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "12px",
                border: "1px solid #e0e0e0",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col xs={24} sm={14} md={16}>
            <Title level={2} style={{ marginBottom: 12 }}>
              It looks like you haven’t selected a primary physician/specialist
            </Title>
            <Text type="secondary">
              Finding one helps ensure consistent, quality care.
            </Text>
            <br />
            <Button
              type="primary"
              style={{ marginTop: 16 }}
              onClick={() => navigate("/specialists/select-specialist")}
            >
              Select a Doctor
            </Button>
          </Col>
        </Row>
      </Card>
    );
  };

  return (
    <div style={{ padding: 12 }}>
      {patientData[0]?.selectedPhysician ||
      patientData[0]?.selectedPhysician === "" ? (
        <YesPhysician />
      ) : (
        <NoPhysician />
      )}
    </div>
  );
}

export default Specialists;
