import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchAllResponses(physicianId) {
  const [allResponses, setAllResponses] = useState([]);
  const [allResponsesLoading, setAllResponsesLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchAllResponses = async () => {
      setAllResponsesLoading(true);
      if (!physicianId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`fetch-doctor-responses?id=${physicianId}`);
        if (res.data.success) {
          console.log(res.data.fetchedResponses);
          setAllResponses(res.data.fetchedResponses);
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
        setAllResponsesLoading(false);
      }
    };
    fetchAllResponses();
  }, [refreshKey, physicianId]);

  return {
    allResponses,
    allResponsesLoading,
    responsesRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchAllResponses;
