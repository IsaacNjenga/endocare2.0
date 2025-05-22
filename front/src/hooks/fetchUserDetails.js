import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function useFetchUserDetails(userId) {
  const [userData, setUserData] = useState([]);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      setUserDataLoading(true);
      if (!userId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`fetch-user?id=${userId}`);
        if (res.data.success) {
          setUserData(res.data.userDetails);
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
        setUserDataLoading(false);
      }
    };
    fetchUserData();
  }, [refreshKey, userId]);

  return {
    userData,
    userDataLoading,
    refresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchUserDetails;
