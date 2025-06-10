import React, { useContext, useState } from "react";
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
import { UserContext } from "../../App";
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
  const [openDoctorModal, setOpenDoctorModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { patientData, patientDataLoading } = useFetchPatientData(userId);
  const {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    fetchDoctorById,
    doctorUserData,
  } = useFetchDoctorById();

  const physicianId = patientData[0]?.selectedPhysician;

  React.useEffect(() => {
    if (physicianId) {
      fetchDoctorById(physicianId);
    }
  }, [physicianId]);

  const viewDoctor = async (id) => {
    setLoading(true);
    await fetchDoctorById(id);
    setOpenDoctorModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const YesPhysician = () => {
    if (doctorLoading)
      return (
        <div>
          <Spin tip="Loading..." />
        </div>
      );

    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Title>Your selected specialist</Title>
          </div>
          <div>
            <Button
              type="link"
              onClick={() => {
                navigate("/specialists/select-specialist");
              }}
            >
              Change your specialist
            </Button>
          </div>
        </div>
        <Card hoverable style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={avatarStyle}>
              <Avatar
                size={74}
                src={doctorUserData?.avatar}
                icon={!doctorUserData?.avatar && <UserOutlined />}
                style={{
                  backgroundColor: !doctorUserData?.avatar && "#f56a00",
                  fontWeight: "bold",
                }}
              >
                {!user?.avatar &&
                  `${doctorUserData?.firstName?.charAt(
                    0
                  )}${doctorUserData?.lastName?.charAt(0)}`}
              </Avatar>
              <div>
                <div style={titleStyle}>
                  Dr. {doctorUserData?.firstName} {doctorUserData?.lastName}
                </div>
                <div style={{ color: "#666" }}>
                  {doctorProfessionalData?.specialty.join(", ")}
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "0px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Button
                type="primary"
                style={{ fontFamily: "Roboto" }}
                onClick={() => viewDoctor(doctorUserData?._id)}
              >
                View More
              </Button>
            </div>
          </div>
          <Divider style={{ borderColor: "#00152a" }} />
          <Space
            direction="vertical"
            size="small"
            style={{ padding: "0px 10px" }}
          >
            <div>
              <Text style={labelStyle}>
                <PhoneOutlined style={iconStyle} />{" "}
                {doctorUserData?.phoneNumber}
              </Text>
            </div>
            <div>
              <Text style={labelStyle}>
                <MailOutlined style={iconStyle} /> {doctorUserData?.email}
              </Text>
            </div>
            <div>
              <Text style={labelStyle}>
                <EnvironmentOutlined style={iconStyle} />{" "}
                {doctorProfessionalData?.currentHospital}
              </Text>
            </div>
            <div>
              <Text style={labelStyle}>
                <ClockCircleOutlined style={iconStyle} />{" "}
                {doctorPracticeData?.officeHours}
              </Text>
            </div>
            <div>
              <Text style={labelStyle}>
                Experience: {doctorProfessionalData?.yearsOfExperience} years
              </Text>
            </div>

            <div>
              {doctorPracticeData?.servicesOffered.map((service, idx) => (
                <Tag color="blue" key={idx} style={{ fontFamily: "Roboto" }}>
                  {service}
                </Tag>
              ))}
            </div>
            <div>
              {doctorProfessionalData?.boardCertifications.map((cert, idx) => (
                <Tag color="green" key={idx} style={{ fontFamily: "Roboto" }}>
                  {cert}
                </Tag>
              ))}
            </div>
          </Space>
        </Card>
        <DoctorDetailsModal
          openDoctorModal={openDoctorModal}
          setOpenDoctorModal={setOpenDoctorModal}
          loading={loading}
          doctorPracticeData={doctorPracticeData}
          doctorLoading={doctorLoading}
          doctorProfessionalData={doctorProfessionalData}
          doctorUserData={doctorUserData}
        />
      </div>
    );
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

  if (patientDataLoading)
    return (
      <div>
        <Spin tip="Loading..." />
      </div>
    );

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
