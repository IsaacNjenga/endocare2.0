import React, { useState } from "react";
import {
  Button,
  Calendar,
  Col,
  Divider,
  Row,
  Typography,
  Card,
  Space,
  message,
} from "antd";
//import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

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
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time on date change
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      message.success(
        `Appointment set for ${selectedDate.format(
          "dddd, MMMM D YYYY"
        )} at ${selectedTime}`
      );
      // Continue to next step here (e.g., confirm, submit, etc.)
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

  return (
    <Card style={{ maxWidth: 800, margin: "auto", marginTop: 32, padding: 24 }}>
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
          <Divider />

          <Typography.Text strong>
            Selected:{" "}
            {selectedDate && selectedTime
              ? `${selectedDate.format("dddd, MMMM D YYYY")} at ${selectedTime}`
              : "Please choose a time"}
          </Typography.Text>

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Button
              type="primary"
              disabled={!selectedDate || !selectedTime}
              size="large"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </Card>
  );
}

export default CreateAppointment;
