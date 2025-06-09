import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchMyPatients(userId) {
  const [myPatients, setMyPatients] = useState(null);
  const [myPatientsLoading, setMyPatientsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchMyPatients = async () => {
      setMyPatientsLoading(true);
      try {
        const res = await axios.get(`get-my-patients?id=${userId}`);
        if (res.data.success) {
          setMyPatients(res.data.myPatients);
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
        setMyPatientsLoading(false);
      }
    };
    fetchMyPatients();
  }, [refreshKey, userId]);

  return {
    myPatients,
    myPatientsLoading,
    myPatientsRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchMyPatients;
