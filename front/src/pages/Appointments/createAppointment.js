import React, { useContext, useState } from "react";
import {
  Button,
  Calendar,
  Col,
  Divider,
  Row,
  Typography,
  Card,
  Space,
  notification,
  Avatar,
  Tag,
} from "antd";
//import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import useFetchAllDoctorData from "../../hooks/fetchAllDoctorData";
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

const cardStyle = {
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
};

const avatarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 16,
};

const titleStyle = {
  marginBottom: 4,
  fontWeight: 600,
  fontSize: 16,
};

const sectionHeaderStyle = {
  padding: "6px 16px",
  borderRadius: "30px",
  background: "#eef2ff",
  fontFamily: "Raleway",
  fontWeight: 600,
  fontSize: 22,
  color: "#4f46e5",
};

const sectionCardStyle = {
  marginBottom: "2rem",
  padding: "1.5rem",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
  fontFamily: "Raleway",
  textAlign: "center",
};

const labelStyle = {
  fontFamily: "Raleway",
  fontWeight: 700,
  fontSize: "1.4rem",
  textAlign: "center",
};

const morningHours = [
  { label: "8:00 AM", value: "8:00 AM" },
  { label: "9:00 AM", value: "9:00 AM" },
  { label: "10:00 AM", value: "10:00 AM" },
  { label: "11:00 AM", value: "11:00 AM" },
];

const afternoonHours = [
  { label: "12:00 PM", value: "12:00 PM" },
  { label: "2:00 PM", value: "2:00 PM" },
  { label: "3:00 PM", value: "3:00 PM" },
  { label: "4:00 PM", value: "4:00 PM" },
];

function CreateAppointment() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPhysician, setSelectedPhysician] = useState(null);
  const [selectedPhysicianName, setSelectedPhysicianName] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  const { doctors, allDoctorsLoading } = useFetchAllDoctorData();

  // console.log(doctors);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setSelectedPhysician(null);
    setSelectedPhysicianName(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSelectedPhysician(null);
    setSelectedPhysicianName(null);
  };

  const handlePhysicianSelect = (id, name) => {
    setSelectedPhysician(id);
    setSelectedPhysicianName(name);
  };

  const handleContinue = async () => {
    try {
      if (selectedDate && selectedTime) {
        const values = {
          appointmentDate: selectedDate.format("YYYY-MM-DD"),
          appointmentTime: selectedTime,
          createdBy: user._id,
          physician: selectedPhysician,
        };
        const res = await axios.post("create-appointment", values);
        if (res.data.success) {
          api.success({
            message: "Appointment Set!",
            description: `Appointment set for ${selectedDate.format(
              "dddd, MMMM D YYYY"
            )} at
            ${selectedTime} with Dr ${selectedPhysicianName}. Don't be late!`,
          });
          setTimeout(() => {
            navigate("/appointments");
          }, 4500);
        }
      }
    } catch (error) {
      console.log(error);
      api.error({
        message: "Could not set appointment",
        description:
          "There was an error setting your appointment. Kindly refresh and try again",
      });
    }
  };

  const timeButtonStyle = (time) => ({
    background: time === selectedTime ? "#1677ff" : "#00152a",
    color: "white",
    border: time === selectedTime ? "2px solid #69c0ff" : "none",
    marginBottom: 8,
    width: 120,
    fontSize: "1.3rem",
    fontFamily: "Roboto",
  });

  if (allDoctorsLoading) return <div>Loading...</div>;
  return (
    <Card style={{ maxWidth: 800, margin: "auto", marginTop: 32, padding: 24 }}>
      {contextHolder}
      <Button
        danger
        onClick={() => {
          navigate("/appointments");
        }}
      >
        Cancel
      </Button>
      <Typography.Title level={3} style={sectionCardStyle}>
        Schedule Your Appointment
      </Typography.Title>

      <Divider orientation="left">
        <span style={sectionHeaderStyle}>Select a Date</span>
      </Divider>
      <Calendar
        fullscreen={false}
        onSelect={handleDateSelect}
        value={selectedDate}
      />

      {selectedDate && (
        <>
          <Divider orientation="left">
            <span style={sectionHeaderStyle}>Select a Time</span>
          </Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Row gutter={[25, 25]}>
              <Col span={12}>
                <Typography.Title level={4} style={labelStyle}>
                  Morning
                </Typography.Title>
                <Space direction="vertical">
                  {morningHours.map((hour) => (
                    <Button
                      key={hour.value}
                      onClick={() => handleTimeSelect(hour.value)}
                      style={timeButtonStyle(hour.value)}
                    >
                      {hour.label}
                    </Button>
                  ))}
                </Space>
              </Col>

              <Col span={12}>
                <Typography.Title level={4} style={labelStyle}>
                  Afternoon
                </Typography.Title>
                <Space direction="vertical">
                  {afternoonHours.map((hour) => (
                    <Button
                      key={hour.value}
                      onClick={() => handleTimeSelect(hour.value)}
                      style={timeButtonStyle(hour.value)}
                    >
                      {hour.label}
                    </Button>
                  ))}
                </Space>
              </Col>
            </Row>
          </div>

          {selectedTime && (
            <div>
              <Divider orientation="left">
                <span style={sectionHeaderStyle}>Select a Physician</span>
              </Divider>
              <Row gutter={[24, 24]}>
                {doctors?.map((doctor) => {
                  const user = doctor.createdBy;
                  const docName = `${user.firstName} ${user.lastName}`;

                  return (
                    <Col span={12} key={doctor._id}>
                      <Card
                        hoverable
                        style={cardStyle}
                        onClick={() => handlePhysicianSelect(user._id, docName)}
                      >
                        <div style={avatarStyle}>
                          <Avatar
                            size={74}
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
                        <Divider />
                        <Space direction="vertical" size="small">
                          <div>
                            <PhoneOutlined /> {user.phoneNumber}
                          </div>
                          <div>
                            <MailOutlined /> {user.email}
                          </div>
                          <div>
                            <EnvironmentOutlined /> {doctor.currentHospital}
                          </div>
                          <div>
                            <ClockCircleOutlined /> {doctor.officeHours}
                          </div>
                          <div>
                            Experience: {doctor.yearsOfExperience} years
                          </div>

                          <div>
                            {doctor.servicesOffered.map((service, idx) => (
                              <Tag color="blue" key={idx}>
                                {service}
                              </Tag>
                            ))}
                          </div>
                          <div>
                            {doctor.boardCertifications.map((cert, idx) => (
                              <Tag color="green" key={idx}>
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
            </div>
          )}

          <Divider />

          <Typography.Text strong>
            Selected:{" "}
            {selectedDate && selectedTime && selectedPhysician
              ? `${selectedDate.format(
                  "dddd, MMMM D YYYY"
                )} at ${selectedTime} with Dr. ${selectedPhysicianName}`
              : "Please choose a time and select a physician"}
          </Typography.Text>

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Button
              type="primary"
              disabled={!selectedDate || !selectedTime || !selectedPhysician}
              size="large"
              onClick={handleContinue}
            >
              Set Appointment
            </Button>
          </div>
        </>
      )}
    </Card>
  );
}

export default CreateAppointment;
