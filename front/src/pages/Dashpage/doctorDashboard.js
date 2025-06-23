import React, { useState, useEffect } from "react";
import {
  Typography,
  Divider,
  Row,
  Col,
  Card,
  Spin,
  Table,
  Tag,
  Avatar,
} from "antd";
import { useNavigate } from "react-router-dom";
import { format, formatDistanceToNow } from "date-fns";
import DocGauge from "./docGauge";
import useFetchMyPatients from "../../hooks/fetchMyPatients";
import useFetchAppointmentData from "../../hooks/fetchAppointmentData";

const { Title, Text } = Typography;

const AppointmentsUpcoming = ({
  user,
  appointmentsLoading,
  doctorAppointments,
}) => {
  const [newAppointments, setNewAppointments] = useState([]);

  const currentDate = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    const filtered = doctorAppointments.filter(
      (appt) => appt.appointmentDate === currentDate
    );
    setNewAppointments(filtered);
  }, [doctorAppointments, currentDate]);

  const columns = [
    {
      title: "Name of Patient",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar src={record.avatar}>
            {record.firstName?.[0]}
            {record.lastName?.[0]}
          </Avatar>
          <span>
            {record.firstName} {record.lastName}
          </span>
        </div>
      ),
    },
    {
      title: "Time of Appointment",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
      render: (time) => <Tag color="geekblue">{time}</Tag>,
    },
    {
      title: "Set",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) =>
        date ? `${formatDistanceToNow(new Date(date))} ago` : "N/A",
    },
  ];

  const dataSource = newAppointments.map((appt, index) => ({
    key: index,
    firstName: appt?.createdBy?.firstName,
    lastName: appt?.createdBy?.lastName,
    avatar: appt?.createdBy?.avatar,
    appointmentTime: appt?.appointmentTime,
    createdAt: appt?.createdAt,
  }));

  if (appointmentsLoading) {
    return (
      <Spin
        tip="Getting things ready. Please wait..."
        fullscreen
        size="large"
      />
    );
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered
        size="small"
        style={{ background: "white", borderRadius: "12px" }}
      />
    </div>
  );
};

function DoctorDashboard({ cardStyle, user }) {
  const navigate = useNavigate();
  const userId = user?._id;
  const { myPatients, myPatientsLoading } = useFetchMyPatients(userId);
  const { doctorAppointments, appointmentsLoading } =
    useFetchAppointmentData(userId);

  const today = new Date();
  const todayFormatted = format(today, "EEEE, do MMMM yyyy");

  if (myPatientsLoading)
    return <Spin tip="Loading. Please wait..." fullscreen size="large" />;

  return (
    <div
      style={{
        padding: "32px 24px",
        background: "#f5f8fc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Title level={1} style={{ fontFamily: "Raleway", marginBottom: 0 }}>
            Dashboard
          </Title>
        </Col>
      </Row>
      <Divider />
      {/* Today’s Overview */}
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12}>
          <Card style={cardStyle}>
            <Title level={2} style={{ marginBottom: 20 }}>
              Today: {todayFormatted}
            </Title>
            <Text type="secondary" style={{ fontSize: "20px", color: "#333" }}>
              📌 Don't forget to check in on your patients' health stats and
              logs. They are awaiting your feedback.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Card style={cardStyle}>
            <DocGauge myPatients={myPatients} navigate={navigate} />
          </Card>
        </Col>
      </Row>
      <Divider />
      <Title level={2} style={{ marginBottom: 12 }}>
        Upcoming Appointments
      </Title>
      <Card style={cardStyle}>
        <AppointmentsUpcoming
          user={user}
          appointmentsLoading={appointmentsLoading}
          doctorAppointments={doctorAppointments}
        />
      </Card>
      <Divider />
      <br /> Pending Feedback
    </div>
  );
}

export default DoctorDashboard;
