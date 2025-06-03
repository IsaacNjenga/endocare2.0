import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function useFetchDoctorData(userId) {
  //const [doctorData, setDoctorData] = useState([]);
  const [doctorProfessionalData, setDoctorProfessionalData] = useState([]);
  const [doctorPracticeData, setDoctorPracticeData] = useState([]);
  const [doctorLoading, setDoctorLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchDoctor = async () => {
      setDoctorLoading(true);
      if (!userId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`get-doctor-details?id=${userId}`);
        if (res.data.success) {
          console.log(res.data.fetchedDoctor);
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
        setDoctorLoading(false);
      }
    };
    fetchDoctor();
  }, [refreshKey, userId]);

  return {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    doctorRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchDoctorData;
