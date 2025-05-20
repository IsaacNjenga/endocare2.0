import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

function ProtectedRoutes({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        localStorage.removeItem("token");

        Swal.fire({
          icon: "warning",
          title: "Session Expired",
          text: "Your session has expired. Please log in to continue",
          confirmButtonColor: "#2e3c8e",
          confirmButtonText: "OK",
        });
        return <Navigate to="/auth" replace />;
      }
      return children;
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");
      Swal.fire({
        icon: "warning",
        title: "Session Expired",
        text: "Your session has expired. Please log in to continue",
        confirmButtonColor: "#2e3c8e",
        confirmButtonText: "OK",
      });
      return <Navigate to="/auth" replace />;
    }
  }
  return <Navigate to="/auth" replace />;
}

export default ProtectedRoutes;
