import React from "react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

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
