import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchDiaryData(userId) {
  const [diaryData, setDiaryData] = useState([]);
  const [diaryLoading, setDiaryLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchDiaryData = async () => {
      setDiaryLoading(true);

      if (!userId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`fetch-diary-entry?id=${userId}`);
        if (res.data.success) {
          setDiaryData(res.data.entry);
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
        setDiaryLoading(false);
      }
    };
    fetchDiaryData();
  }, [refreshKey, userId]);

  return {
    diaryData,
    diaryLoading,
    diaryRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchDiaryData;
