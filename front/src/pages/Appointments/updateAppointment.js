import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import {
  Typography,
  Button,
  Calendar,
  Col,
  Divider,
  Row,
  Card,
  Space,
  Avatar,
  Tag,
} from "antd";
import axios from "axios";
import dayjs from "dayjs";
import {
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useFetchAllDoctorData from "../../hooks/fetchAllDoctorData";
import { format } from "date-fns";
import Swal from "sweetalert2";

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

function UpdateAppointment({
  modalContent,
  setOpenUpdateModal,
  appointmentRefresh,
}) {
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPhysician, setSelectedPhysician] = useState(null);
  const [selectedPhysicianName, setSelectedPhysicianName] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const { doctors, allDoctorsLoading } = useFetchAllDoctorData();

  React.useEffect(() => {
    if (modalContent) {
      const newValue = {
        appointmentDate: modalContent.appointmentDate,
        appointmentTime: modalContent.appointmentTime,
        physician: modalContent.physician,
      };
      setSelectedDate(newValue.appointmentDate);
      setSelectedTime(newValue.appointmentTime);
      setSelectedPhysician(newValue.physician._id);
      setSelectedPhysicianName(newValue.physician.firstName);
    }
  }, [modalContent, user]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handlePhysicianSelect = (id, name) => {
    setSelectedPhysician(id);
    setSelectedPhysicianName(name);
  };

  const handleContinue = async () => {
    setUpdateLoading(true);
    try {
      if (selectedDate && selectedTime && selectedPhysician) {
        const values = {
          appointmentDate: selectedDate.format("YYYY-MM-DD"),
          appointmentTime: selectedTime,
          createdBy: user._id,
          physician: selectedPhysician,
        };
        //console.log(values);
        const res = await axios.put(
          `update-appointment?id=${modalContent._id}`,
          values
        );
        if (res.data.success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Appointment successfully rescheduled",
          });
          appointmentRefresh();
        }
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error ??
        "An unexpected error occurred. Please try again later.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setUpdateLoading(false);
      setOpenUpdateModal(false);
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
    <Card style={{ maxWidth: 800, margin: "auto", marginTop: 28, padding: 16 }}>
      <Typography.Title level={3} style={sectionCardStyle}>
        Reschedule Your Appointment
      </Typography.Title>
      <Divider orientation="left">
        <span style={sectionHeaderStyle}>Select a Date</span>
      </Divider>
      <Calendar
        fullscreen={false}
        onSelect={handleDateSelect}
        value={dayjs(selectedDate)}
      />

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
                        <div>Experience: {doctor.yearsOfExperience} years</div>

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
            ? `${format(
                new Date(selectedDate),
                "EEEE, do MMMM yyyy"
              )} at ${selectedTime} with Dr. ${selectedPhysicianName}`
            : "Please choose a time and select a physician"}
        </Typography.Text>

        <div style={{ marginTop: 24, textAlign: "center" }}>
          <Button
            type="primary"
            disabled={!selectedDate || !selectedTime || !selectedPhysician}
            size="large"
            onClick={handleContinue}
            loading={updateLoading}
          >
            Set Appointment
          </Button>
        </div>
      </>
    </Card>
  );
}

export default UpdateAppointment;
