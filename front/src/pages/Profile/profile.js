import React, { useContext } from "react";
import { UserContext } from "../../App";
import PatientProfile from "./Patient Profile/patientProfile";
import DoctorProfile from "./Doctor Profile/doctorProfile";
import useFetchUserDetails from "../../hooks/fetchUserDetails";
import useFetchPatientData from "../../hooks/fetchPatientData";
import useFetchDoctorData from "../../hooks/fetchDoctorData";
import { Spin } from "antd";

function Profile() {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { userData, userDataLoading, refresh } = useFetchUserDetails(userId);
  const { patientData, patientDataLoading, patientRefresh } =
    useFetchPatientData(userId);
  const {
    doctorPracticeData,
    doctorProfessionalData,
    doctorLoading,
    doctorRefresh,
  } = useFetchDoctorData(userId);

  const userRole = user?.role;
  if (userDataLoading) return <Spin tip="Loading. Please wait..." fullscreen />;

  return (
    <>
      {userRole === "patient" ? (
        <PatientProfile
          user={userData}
          refresh={refresh}
          userDataLoading={userDataLoading}
          patientData={patientData}
          patientDataLoading={patientDataLoading}
          patientRefresh={patientRefresh}
        />
      ) : userRole === "doctor" ? (
        <DoctorProfile
          user={userData}
          refresh={refresh}
          userDataLoading={userDataLoading}
          doctorPracticeData={doctorPracticeData}
          doctorProfessionalData={doctorProfessionalData}
          doctorLoading={doctorLoading}
          doctorRefresh={doctorRefresh}
        />
      ) : (
        "Unknown user role. Back to sign in"
      )}
    </>
  );
}

export default Profile;
