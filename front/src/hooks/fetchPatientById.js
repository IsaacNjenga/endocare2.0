import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function useFetchPatientById() {
  const [patientData, setPatientData] = useState(null);
  const [patientLoading, setPatientLoading] = useState(false);

  const fetchPatientById = async (patientId) => {
    if (!patientId) return;
    setPatientLoading(true);
    try {
      const res = await axios.get(`get-patient-details?id=${patientId}`);
      if (res.data.success) {
        setPatientData(res.data.patientData);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error ??
        "An unexpected error occurred. Please try again later.";
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setPatientLoading(false);
    }
  };
  return { patientData, patientLoading, fetchPatientById };
}

export default useFetchPatientById;
