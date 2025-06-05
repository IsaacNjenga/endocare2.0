import axios from "axios";
import { useEffect, useState } from "react";

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
