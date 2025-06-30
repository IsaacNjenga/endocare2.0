import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchPatientResponses(patientId) {
  const [allResponses, setAllResponses] = useState([]);
  const [allResponsesLoading, setAllResponsesLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchAllResponses = async () => {
      setAllResponsesLoading(true);
      if (!patientId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`fetch-responses?id=${patientId}`);
        if (res.data.success) {
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
  }, [refreshKey, patientId]);

  return {
    allResponses,
    allResponsesLoading,
    responsesRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchPatientResponses;
