import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchFeedbackByDiaryId(diaryId) {
  const [feedback, setFeedback] = useState(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchedFeedback = async () => {
      setFeedbackLoading(true);
      if (!diaryId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`get-all-feedback?id=${diaryId}`);
        if (res.data.success) {
          setFeedback(res.data.feedback);
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
        setFeedbackLoading(false);
      }
    };
    fetchedFeedback();
  }, [refreshKey, diaryId]);

  return {
    feedback,
    feedbackLoading,
    feedbackRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchFeedbackByDiaryId;
