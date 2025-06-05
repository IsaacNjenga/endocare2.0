import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchAllDoctorData() {
  const [doctors, setDoctors] = useState([]);
  const [allDoctorsLoading, setAllDoctorsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      setAllDoctorsLoading(true);
      try {
        const res = await axios.get("get-all-doctors");
        if (res.data.success) {
          setDoctors(res.data.allDoctors);
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
        setAllDoctorsLoading(false);
      }
    };
    fetchAllDoctors();
  }, [refreshKey]);

  return {
    doctors,
    allDoctorsLoading,
    allDoctorsRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchAllDoctorData;
