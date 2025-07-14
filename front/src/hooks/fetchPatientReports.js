import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function useFetchPatientReports() {
  const [patientReport, setPatientReport] = useState({});
  const [reportLoading, setReportLoading] = useState(false);

  const fetchReports = async (id) => {
    setReportLoading(true);
    if (!id) {
      console.warn("No ID specified");
      return;
    }
    try {
      const res = await axios.get(`fetch-patient-report?id=${id}`);
      if (res.data.success) {
        setPatientReport(res.data.fetchedReport);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error ??
        "An unexpected error has occurred. Please refresh and try again.";
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setReportLoading(false);
    }
  };

  return {
    patientReport,
    reportLoading,
    fetchReports,
  };
}

export default useFetchPatientReports;
