import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function useFetchAppointmentData(userId) {
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      setAppointmentsLoading(true);
      if (!userId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const [doctorRes, patientRes] = await Promise.all([
          axios.get(`fetch-doctor-appointments?id=${userId}`),
          axios.get(`fetch-patient-appointments?id=${userId}`),
        ]);

        if (doctorRes.data.success) {
          setDoctorAppointments(doctorRes.data.doctorAppointments);
        }
        if (patientRes.data.success) {
          setPatientAppointments(patientRes.data.patientAppointments);
        }

      } catch (error) {
        const errorMessage =
          error.response?.data?.error ??
          "An unexpected error occurred. Please try again later.";
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: errorMessage,
        });
      } finally {
        setAppointmentsLoading(false);
      }
    };
    fetchAppointments();
  }, [refreshKey, userId]);

  return {
    doctorAppointments,
    patientAppointments,
    appointmentsLoading,
    appointmentRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchAppointmentData;
