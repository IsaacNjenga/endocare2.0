import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function useFetchDoctorData(userId) {
  //const [doctorData, setDoctorData] = useState([]);
  const [doctorProfessionalData, setDoctorProfessionalData] = useState([]);
  const [doctorPracticeData, setDoctorPracticeData] = useState([]);
  const [doctorLoading, setDoctorLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchDoctor = async () => {
      setDoctorLoading(true);
      if (!userId) {
        console.warn("No ID specified");
        return;
      }
      try {
        const res = await axios.get(`get-doctor-details?id=${userId}`);
        if (res.data.success) {
          const doctorData = res.data.doctorData;
          if (doctorData && doctorData.length > 0) {
            const professionalData = {
              boardCertifications: doctorData[0]?.boardCertifications,
              currentHospital: doctorData[0]?.currentHospital,
              education: doctorData[0]?.education,
              languagesSpoken: doctorData[0]?.languagesSpoken,
              medicalLicenseNumber: doctorData[0]?.medicalLicenseNumber,
              practiceLicenseExpiry: doctorData[0]?.practiceLicenseExpiry,
              yearsOfExperience: doctorData[0]?.yearsOfExperience,
              specialty: doctorData[0]?.specialty,
              _id: doctorData[0]?._id,
            };

            const practiceData = {
              acceptedInsurancePlans: doctorData[0]?.acceptedInsurancePlans,
              contactInformation: doctorData[0]?.contactInformation,
              officeHours: doctorData[0]?.officeHours,
              servicesOffered: doctorData[0]?.servicesOffered,
              practiceName: doctorData[0]?.practiceName,
              practiceAddress: doctorData[0]?.practiceAddress,
              _id: doctorData[0]?._id,
            };

            setDoctorProfessionalData(professionalData);
            // setDoctorPracticeData(practiceData);
          }
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
        setDoctorLoading(false);
      }
    };
    fetchDoctor();
  }, [refreshKey, userId]);

  return {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    doctorRefresh: () => setRefreshKey((prev) => prev + 1),
  };
}

export default useFetchDoctorData;
