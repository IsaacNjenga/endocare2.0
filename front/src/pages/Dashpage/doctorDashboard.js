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
  Empty,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  format,
  formatDistanceToNow,
  formatRelative,
  isAfter,
  isEqual,
  parse,
} from "date-fns";
import DocGauge from "./docGauge";
import useFetchMyPatients from "../../hooks/fetchMyPatients";
import useFetchAppointmentData from "../../hooks/fetchAppointmentData";
import SinglePatientDiary from "./singlePatientDiary";

const { Title, Text } = Typography;

const AppointmentsUpcoming = ({
  user,
  appointmentsLoading,
  doctorAppointments,
  navigate,
}) => {
  const [newAppointments, setNewAppointments] = useState([]);
  //console.log(doctorAppointments);

  useEffect(() => {
    const current = new Date();
    const filtered = doctorAppointments.filter((appt) => {
      const apptDateTime = parse(
        `${appt.appointmentDate} ${appt.appointmentTime}`,
        "yyyy-MM-dd p",
        new Date()
      );
      return isAfter(apptDateTime, current) || isEqual(apptDateTime, current);
    });
    setNewAppointments(filtered);
  }, [doctorAppointments]);

  const columns = [
    {
      title: "Name of Patient",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            cursor: "pointer",
          }}
        >
          <Avatar src={record.avatar} style={{ background: "#00152a" }}>
            {record.firstName?.[0]}
            {record.lastName?.[0]}
          </Avatar>
          <Text
            type="link"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/my-patients/${record.patientId}`)}
          >
            {record.firstName} {record.lastName}
          </Text>
        </div>
      ),
    },
    // {
    //   title: "Time",
    //   dataIndex: "appointmentTime",
    //   key: "appointmentTime",
    //   render: (time) => <Tag color="geekblue">{time}</Tag>,
    // },
    {
      title: "Date & Time",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
      render: (date, record) => {
        const fullDate = parse(
          `${record.appointmentDate} ${record.appointmentTime}`,
          "yyyy-MM-dd hh:mm a",
          new Date()
        );
        const formatted = formatRelative(fullDate, new Date());
        return (
          <Tag color="white" style={{ backgroundColor: "green" }}>
            {formatted}
          </Tag>
        );
      },
    },
    {
      title: "Reason",
      dataIndex: "appointmentReason",
      key: "appointmentReason",
      render: (time) => (
        <Tag color="white" style={{ backgroundColor: "red" }}>
          {time}
        </Tag>
      ),
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
    patientId: appt?.createdBy?._id,
    avatar: appt?.createdBy?.avatar,
    appointmentTime: appt?.appointmentTime,
    appointmentDate: appt?.appointmentDate,
    appointmentReason: appt?.appointmentReason,
    createdAt: appt?.createdAt,
  }));

  const sortedData = [...dataSource].sort((a, b) => {
    const dateA = parse(
      `${a.appointmentDate} ${a.appointmentTime}`,
      "yyyy-MM-dd hh:mm a",
      new Date()
    );
    const dateB = parse(
      `${b.appointmentDate} ${b.appointmentTime}`,
      "yyyy-MM-dd hh:mm a",
      new Date()
    );
    return dateA - dateB;
  });

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
      {" "}
      {sortedData.length > 0 ? (
        <Table
          columns={columns}
          dataSource={sortedData}
          pagination={false}
          bordered
          size="small"
          style={{ background: "white", borderRadius: "12px" }}
          locale={{ emptyText: "📭 No upcoming appointments" }}
        />
      ) : (
        <Empty description="📭 No upcoming appointments" />
      )}
    </div>
  );
};

const PendingFeedback = ({ myPatients }) => {
  const patientIds = myPatients?.map((i) => i.createdBy._id);

  return (
    <div>
      {patientIds?.map((id) => (
        <SinglePatientDiary patientId={id} />
      ))}
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
          </Title>{" "}
          <Text type="secondary" style={{ fontSize: 16 }}>
            Your dashboard at a glance
          </Text>
        </Col>
      </Row>
      <Divider style={{ borderColor: "#333" }} dashed size="large" />
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
      <Card style={cardStyle}>
        <Title level={3} style={{ marginBottom: 15, marginTop: 0 }}>
          Upcoming Appointments
        </Title>
        <AppointmentsUpcoming
          user={user}
          appointmentsLoading={appointmentsLoading}
          doctorAppointments={doctorAppointments}
          navigate={navigate}
        />
      </Card>
      <Divider />{" "}
      <Card style={cardStyle}>
        <Title level={3} style={{ marginBottom: 15, marginTop: 0 }}>
          Diaries Awaiting Feedback
        </Title>
        <PendingFeedback
          user={user}
          navigate={navigate}
          myPatients={myPatients}
        />
      </Card>
    </div>
  );
}

export default DoctorDashboard;
