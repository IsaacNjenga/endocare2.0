import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  List,
  Empty,
  Space,
  Divider,
  Spin,
  Tag,
  Tooltip,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DoctorDetailsModal from "../../components/doctorDetailsModal";
import useFetchDoctorById from "../../hooks/fetchDoctorById";

const { Title, Text } = Typography;

const iconStyle = {
  fontSize: "1.4rem",
  color: "#00152a",
  padding: "6px",
  borderRadius: "50%",
  border: "1px solid #00152a",
};

function PatientAppointments({
  navigate,
  patientAppointments,
  appointmentsLoading,
  appointmentRefresh,
  user,
}) {
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

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        marginTop: 40,
        padding: "0 16px",
      }}
    >
      <Card
        style={{
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Title level={4}>Upcoming Appointments</Title>
          <Button
            type="primary"
            onClick={() => navigate("/appointments/create-appointment")}
          >
            Book an Appointment
          </Button>
        </Space>

        <Divider />

        {appointmentsLoading ? (
          <Spin />
        ) : patientAppointments?.length === 0 ? (
          <Empty description="No upcoming appointments." />
        ) : (
          <List
            itemLayout="vertical"
            dataSource={patientAppointments}
            renderItem={(item) => (
              <Card
                key={item._id}
                style={{ marginBottom: 16, borderRadius: 8 }}
                type="inner"
              >
                <Space direction="vertical" size="small">
                  <Text>
                    <CalendarOutlined style={iconStyle} /> Date:{" "}
                    <strong>
                      {new Date(item.appointmentDate).toDateString()}
                    </strong>
                  </Text>
                  <Text>
                    <ClockCircleOutlined style={iconStyle} /> Time:{" "}
                    <strong>{item.appointmentTime}</strong>
                  </Text>
                  <Text>
                    <UserOutlined style={iconStyle} /> Physician:{" "}
                    <Tag
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => viewDoctor(item.physician?._id)}
                      color="blue"
                    >
                      <Tooltip
                        title={`Click to view Dr. ${item.physician?.firstName} ${item.physician?.lastName}`}
                      >
                        <strong>
                          Dr. {item.physician?.firstName}{" "}
                          {item.physician?.lastName}
                        </strong>
                      </Tooltip>
                    </Tag>
                  </Text>
                </Space>
              </Card>
            )}
          />
        )}
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
}

export default PatientAppointments;
