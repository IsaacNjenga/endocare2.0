import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchPatientData(userId) {
  const [patientData, setPatientData] = useState([]);
  const [patientDataLoading, setPatientDataLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchPatientData = async () => {
      setPatientDataLoading(true);
      if (!userId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`get-patient-details?id=${userId}`);
        if (res.data.success) {
          setPatientData(res.data.patientData);
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
        setPatientDataLoading(false);
      }
    };
    fetchPatientData();
  }, [refreshKey, userId]);

  return {
    patientData,
    patientDataLoading,
    patientRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchPatientData;
