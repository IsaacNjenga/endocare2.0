import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../App";

function FetchUserDetails() {
  const [userData, setUserData] = useState([]);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const { user } = useContext(UserContext);
  const userId = user._id;

  useEffect(() => {
    const fetchUserData = async () => {
      setUserDataLoading(true);
      if (!id) {
        console.warn("No ID specified");
        return;
      }
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`fetch-user?id=${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setUserData(res.data.userDetails);
        }
      } catch (error) {
        console.log(error);
        const errorMessage =
          error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : "An unexpected error occurred. Please try again later.";

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
  }, [refreshKey]);

  return {
    userData,
    userDataLoading,
    refresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default FetchUserDetails;
