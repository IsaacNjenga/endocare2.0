import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import PatientAppointments from "./patientAppointments";
import DoctorAppointments from "./doctorAppointments";
import useFetchAppointmentData from "../../hooks/fetchAppointmentData";

function Appointments() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const userRole = user?.role;
  const {
    doctorAppointments,
    patientAppointments,
    appointmentsLoading,
    appointmentRefresh,
  } = useFetchAppointmentData(userId);

  return (
    <>
      {userRole === "patient" ? (
        <PatientAppointments
          navigate={navigate}
          user={user}
          patientAppointments={patientAppointments}
          appointmentsLoading={appointmentsLoading}
          appointmentRefresh={appointmentRefresh}
        />
      ) : userRole === "doctor" ? (
        <DoctorAppointments
          navigate={navigate}
          user={user}
          doctorAppointments={doctorAppointments}
          appointmentsLoading={appointmentsLoading}
          appointmentRefresh={appointmentRefresh}
        />
      ) : (
        "Unknown user. Back to sign in"
      )}
    </>
  );
}

export default Appointments;
