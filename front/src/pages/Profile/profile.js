import React, { useContext } from "react";
import { UserContext } from "../../App";
import PatientProfile from "./Patient Profile/patientProfile";
import DoctorProfile from "./Doctor Profile/doctorProfile";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>User is unauthorized</div>;

  const userRole = user?.role;

  return (
    <>
      {userRole === "patient" ? (
        <PatientProfile user={user} />
      ) : userRole === "doctor" ? (
        <DoctorProfile user={user} />
      ) : (
        "Unknown user role. Back to sign in"
      )}
    </>
  );
}

export default Profile;
