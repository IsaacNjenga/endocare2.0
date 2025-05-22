import React, { useContext } from "react";
import { UserContext } from "../../App";
import PatientProfile from "./Patient Profile/patientProfile";
import DoctorProfile from "./Doctor Profile/doctorProfile";
import FetchUserDetails from "../../hooks/fetchUserDetails";

function Profile() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { userData, userDataLoading } = FetchUserDetails(userId);

  const userRole = user?.role;
  if (userDataLoading) return <div>Loading...</div>;
  
  return (
    <>
      {userRole === "patient" ? (
        <PatientProfile user={userData} />
      ) : userRole === "doctor" ? (
        <DoctorProfile user={user} />
      ) : (
        "Unknown user role. Back to sign in"
      )}
    </>
  );
}

export default Profile;
