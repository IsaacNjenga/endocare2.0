import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchMyPatientDiary(patientId) {
  const [myPatientDiary, setMyPatientDiary] = useState(null);
  const [patientDiaryLoading, setPatientDiaryLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchMyPatientDiary = async () => {
      setPatientDiaryLoading(true);
      if (!patientId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`fetch-my-patients-diary?id=${patientId}`);
        if (res.data.success) {
          setMyPatientDiary(res.data.fetchedDiaries);
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
        setPatientDiaryLoading(false);
      }
    };
    fetchMyPatientDiary();
  }, [refreshKey, patientId]);

  return {
    myPatientDiary,
    patientDiaryLoading,
    patientDiaryRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchMyPatientDiary;
