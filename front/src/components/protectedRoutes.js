import React from "react";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function ProtectedRoutes({ children }) {
  const token = cookies.get("token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        cookies.remove("token");

        Swal.fire({
          icon: "warning",
          title: "Session Expired",
          text: "Your session has expired. Please log in to continue",
          confirmButtonColor: "#2e3c8e",
          confirmButtonText: "OK",
        });
        window.location.reload();
        // <Navigate to="/auth" replace />;
      }
      return children;
    } catch (error) {
      console.error("Invalid token:", error);
      cookies.remove("token");
      Swal.fire({
        icon: "warning",
        title: "Session Expired",
        text: "Your session has expired. Please log in to continue",
        confirmButtonColor: "#2e3c8e",
        confirmButtonText: "OK",
      });

      window.location.reload();
      // <Navigate to="/auth" replace />;
    }
  }
  return;
}

export default ProtectedRoutes;
