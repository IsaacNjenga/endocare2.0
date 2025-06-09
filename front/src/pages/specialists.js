import React, { useState } from "react";
import useFetchAllDoctorData from "../hooks/fetchAllDoctorData";
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
import useFetchDoctorById from "../hooks/fetchDoctorById";
import DoctorDetailsModal from "../components/doctorDetailsModal";

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
  const { doctors, allDoctorsLoading } = useFetchAllDoctorData();
  const [openDoctorModal, setOpenDoctorModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    fetchDoctorById,
    doctorUserData,
  } = useFetchDoctorById();

  const viewDoctor = async (id) => {
    setLoading(true);
    await fetchDoctorById(id);
    setOpenDoctorModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const handleSelect = async (id) => {
    setLoading(true);
    try {
      console.log(id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 12 }}>
      {allDoctorsLoading ? (
        <Spin tip="Loading..." />
      ) : (
        <>
          <Title level={4} style={{ textAlign: "center" }}>
            Select your primary physician
          </Title>
          <Divider />
          <Row gutter={[20, 20]}>
            {doctors?.map((doctor) => {
              const user = doctor.createdBy;

              return (
                <Col span={12} key={doctor._id}>
                  <Card hoverable style={cardStyle}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={avatarStyle}>
                        <Avatar
                          size={68}
                          src={user.avatar}
                          icon={!user.avatar && <UserOutlined />}
                          style={{
                            backgroundColor: !user.avatar && "#f56a00",
                            fontWeight: "bold",
                          }}
                        >
                          {!user.avatar &&
                            `${user.firstName?.charAt(
                              0
                            )}${user.lastName?.charAt(0)}`}
                        </Avatar>
                        <div>
                          <div style={titleStyle}>
                            Dr. {user.firstName} {user.lastName}
                          </div>
                          <div style={{ color: "#666" }}>
                            {doctor.specialty.join(", ")}
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
                          onClick={() => viewDoctor(user?._id)}
                        >
                          View More
                        </Button>
                        <Tooltip
                          title={`Select 
                            Dr. ${user.firstName} ${user.lastName}`}
                        >
                          <Button
                            type="primary"
                            style={{
                              fontFamily: "Roboto",
                              background: "#00152a",
                            }}
                            onClick={() => handleSelect(user?._id)}
                          >
                            Select
                          </Button>
                        </Tooltip>
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
                          <PhoneOutlined style={iconStyle} /> {user.phoneNumber}
                        </Text>
                      </div>
                      <div>
                        <Text style={labelStyle}>
                          <MailOutlined style={iconStyle} /> {user.email}
                        </Text>
                      </div>
                      <div>
                        <Text style={labelStyle}>
                          <EnvironmentOutlined style={iconStyle} />{" "}
                          {doctor.currentHospital}
                        </Text>
                      </div>
                      <div>
                        <Text style={labelStyle}>
                          <ClockCircleOutlined style={iconStyle} />{" "}
                          {doctor.officeHours}
                        </Text>
                      </div>
                      <div>
                        <Text style={labelStyle}>
                          Experience: {doctor.yearsOfExperience} years
                        </Text>
                      </div>

                      <div>
                        {doctor.servicesOffered.map((service, idx) => (
                          <Tag
                            color="blue"
                            key={idx}
                            style={{ fontFamily: "Roboto" }}
                          >
                            {service}
                          </Tag>
                        ))}
                      </div>
                      <div>
                        {doctor.boardCertifications.map((cert, idx) => (
                          <Tag
                            color="green"
                            key={idx}
                            style={{ fontFamily: "Roboto" }}
                          >
                            {cert}
                          </Tag>
                        ))}
                      </div>
                    </Space>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      )}
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
}

export default Specialists;
