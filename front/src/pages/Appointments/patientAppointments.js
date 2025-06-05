import React from "react";
import {
  Button,
  Card,
  Typography,
  List,
  Empty,
  Space,
  Divider,
  Spin,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function PatientAppointments({
  navigate,
  patientAppointments,
  appointmentsLoading,
  appointmentRefresh,
  user,
}) {
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
                    <CalendarOutlined /> Date:{" "}
                    <strong>
                      {new Date(item.appointmentDate).toDateString()}
                    </strong>
                  </Text>
                  <Text>
                    <ClockCircleOutlined /> Time:{" "}
                    <strong>{item.appointmentTime}</strong>
                  </Text>
                  <Text>
                    <UserOutlined /> Physician:{" "}
                    <strong>{item.physician?.name || "To be populated"}</strong>
                  </Text>
                </Space>
              </Card>
            )}
          />
        )}
      </Card>
    </div>
  );
}

export default PatientAppointments;
