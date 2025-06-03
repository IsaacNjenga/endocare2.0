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
import dayjs from "dayjs";
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

function Appointments() {
  const navigate = useNavigate();
  return (
    <Card
      style={{ maxWidth: 1000, margin: "auto", marginTop: 32, padding: 24 }}
    >
      <div>Available times:</div>
      <div>Upcoming Appointments:</div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            navigate("/appointments/create-appointment");
          }}
        >
          Book an appointment
        </Button>
      </div>
    </Card>
  );
}

export default Appointments;
