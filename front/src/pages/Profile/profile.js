import React, { useContext } from "react";
import { UserContext } from "../../App";
import PatientProfile from "./Patient Profile/patientProfile";
import DoctorProfile from "./Doctor Profile/doctorProfile";
import useFetchUserDetails from "../../hooks/fetchUserDetails";

function Profile() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { userData, userDataLoading, refresh } = useFetchUserDetails(userId);

  const userRole = user?.role;
  if (userDataLoading) return <div>Loading...</div>;

  return (
    <>
      {userRole === "patient" ? (
        <PatientProfile
          user={userData}
          refresh={refresh}
          userDataLoading={userDataLoading}
        />
      ) : userRole === "doctor" ? (
        <DoctorProfile
          user={userData}
          refresh={refresh}
          userDataLoading={userDataLoading}
        />
      ) : (
        "Unknown user role. Back to sign in"
      )}
    </>
  );
}

export default Profile;
