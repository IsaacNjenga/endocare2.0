import React, { useContext } from "react";
import { UserContext } from "../../App";
import PatientDashboard from "./patientDashboard";
import DoctorDashboard from "./doctorDashboard";

const markerStyle = {
  display: "inline-block",
  width: 6,
  height: 6,
  borderRadius: "50%",
  margin: "auto",
  marginTop: "2px",
};

const cardStyle = {
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 21, 42, 0.15)",
  background: "#fff",
  padding: "16px",
  height: "100%",
  border: "1px solid #00152a",
};

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const userRole = user?.role;

  return (
    <div>
      {userRole === "patient" ? (
        <PatientDashboard
          markerStyle={markerStyle}
          cardStyle={cardStyle}
          user={user}
        />
      ) : (
        <DoctorDashboard
          markerStyle={markerStyle}
          cardStyle={cardStyle}
          user={user}
        />
      )}
    </div>
  );
};

export default Dashboard;
