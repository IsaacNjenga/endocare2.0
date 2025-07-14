import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function useFetchDoctorById() {
  const [doctorProfessionalData, setProfessionalData] = useState(null);
  const [doctorPracticeData, setPracticeData] = useState(null);
  const [doctorUserData, setDoctorUserData] = useState(null);
  const [doctorLoading, setDoctorLoading] = useState(false);

  const fetchDoctorById = async (doctorId) => {
    if (!doctorId) return;
    setDoctorLoading(true);
    try {
      const res = await axios.get(`get-doctor-details?id=${doctorId}`);
      if (res.data.success) {
        const doctorData = res.data.doctorData?.[0];
        if (doctorData) {
          setProfessionalData({
            boardCertifications: doctorData.boardCertifications,
            currentHospital: doctorData.currentHospital,
            education: doctorData.education,
            languagesSpoken: doctorData.languagesSpoken,
            medicalLicenseNumber: doctorData.medicalLicenseNumber,
            practicalLicenseExpiry: doctorData.practicalLicenseExpiry,
            yearsOfExperience: doctorData.yearsOfExperience,
            specialty: doctorData.specialty,
          });

          setPracticeData({
            acceptedInsurancePlans: doctorData.acceptedInsurancePlans,
            contactInformation: doctorData.contactInformation,
            officeHours: doctorData.officeHours,
            servicesOffered: doctorData.servicesOffered,
            practiceName: doctorData.practiceName,
            practiceAddress: doctorData.practiceAddress,
          });

          setDoctorUserData({
            avatar: doctorData.createdBy.avatar,
            email: doctorData.createdBy.email,
            firstName: doctorData.createdBy.firstName,
            lastName: doctorData.createdBy.lastName,
            gender: doctorData.createdBy.gender,
            phoneNumber: doctorData.createdBy.phoneNumber,
          });
        }
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error ??
        "An unexpected error has occurred. Please try again later.";
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setDoctorLoading(false);
    }
  };

  return {
    doctorProfessionalData,
    doctorPracticeData,
    doctorLoading,
    doctorUserData,
    fetchDoctorById,
  };
}

export default useFetchDoctorById;
