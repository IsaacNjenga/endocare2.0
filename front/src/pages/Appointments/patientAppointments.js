import React from "react";
import { Button, Card } from "antd";

function PatientAppointments({
  navigate,
  patientAppointments,
  appointmentsLoading,
  appointmentRefresh,
}) {
  return (
    <div>
      {" "}
      <Card
        style={{ maxWidth: 1000, margin: "auto", marginTop: 32, padding: 24 }}
      >
        <div>Available times:</div>
        <div>
          Upcoming Appointments:
          <div>
            <pre>{JSON.stringify(patientAppointments, null, 2)}</pre>
          </div>
        </div>
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
    </div>
  );
}

export default PatientAppointments;
