import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchReviews(physicianId) {
  const [allReviews, setAllReviews] = useState(null);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setReviewsLoading(true);
      if (!physicianId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`fetch-reviews?id=${physicianId}`);
        if (res.data.success) {
          setAllReviews(res.data.fetchedReviews);
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
        setReviewsLoading(false);
      }
    };
    fetchAllReviews();
  }, [refreshKey, physicianId]);

  return {
    allReviews,
    reviewsLoading,
    reviewsRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchReviews;
