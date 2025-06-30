import express from "express";
import {
  Auth,
  credentialUpdate,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import {
  deleteUser,
  fetchUser,
  updateAvatar,
  updateUser,
} from "../controllers/userController.js";
import { deleteImage } from "../controllers/cloudinaryController.js";
import { verifyOtp, otpRequest } from "../controllers/otpController.js";
import {
  createPatientDetails,
  deletePatientDetails,
  fetchPatientDetails,
  fetchPatientsDetails,
  updatePatientDetails,
  deletePatientDetail,
  updatePatientPhysician,
} from "../controllers/patientController.js";
import { chatWithCohere } from "../controllers/chatbotController.js";
import {
  fetchDiaryEntries,
  createDiaryEntry,
  fetchDiaryEntry,
  updateDiaryEntry,
  deleteDiaryEntry,
  diaryWithNoFeedback,
} from "../controllers/diaryController.js";
import {
  deleteDoctor,
  createDoctor,
  fetchDoctor,
  fetchAllDoctors,
  updateDoctor,
  fetchMyPatients,
} from "../controllers/doctorController.js";
import {
  updateAppointment,
  createAppointment,
  deleteAppointment,
  fetchPatientAppointments,
  fetchDoctorAppointments,
} from "../controllers/appointmentController.js";
import {
  fetchFeedbackForEntry,
  createFeedback,
  fetchFeedback,
  fetchDoctorFeedback,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";
import { EndoAI } from "../controllers/endoController.js";
import {
  createReview,
  fetchReviews,
  fetchUnrespondedReviews,
} from "../controllers/reviewController.js";
import {
  createResponse,
  fetchDoctorResponses,
  fetchResponses,
  updateResponse,
} from "../controllers/responseController.js";

const router = express.Router();

//authentication routes
router.post("/sign-up", registerUser);
router.post("/sign-in", loginUser);
router.post("/password-change", credentialUpdate);

//user routes
router.put("/update-user", updateUser);
router.put("/update-user-avatar", updateAvatar);
router.get("/fetch-user", fetchUser);
router.delete("/delete-user", deleteUser);

//cloudinary route
router.post("/delete-image", deleteImage);

//mail routes
router.post("/otp-request", otpRequest);
router.post("/verify-otp", verifyOtp);

//patient routes
router.post("/create-patient-details", createPatientDetails);
router.get("/get-patient-details", fetchPatientDetails);
router.get("/get-patients-details", fetchPatientsDetails);
router.put("/update-patient-details", updatePatientDetails);
router.put("/update-patient-physician", updatePatientPhysician);
router.delete("/delete-patient-details", deletePatientDetails);
router.delete("/delete-detail", deletePatientDetail);

//doctor routes
router.post("/create-doctor-details", createDoctor);
router.get("/get-doctor-details", fetchDoctor);
router.get("/get-all-doctors", fetchAllDoctors);
router.get("/get-my-patients", fetchMyPatients);
router.put("/update-doctor-details", updateDoctor);
router.delete("/delete-details", deleteDoctor);

//chatbot route
router.post("/endo-ai", chatWithCohere);

//EndoAI route
router.post("/ask-endo", EndoAI);

//diary routes
router.post("/create-diary-entry", createDiaryEntry);
router.get("/fetch-diary-entry", fetchDiaryEntry);
router.get("/fetch-diary-entries", fetchDiaryEntries);
router.get("/fetch-my-patients-diary", diaryWithNoFeedback);
router.put("/update-diary-entry", updateDiaryEntry);
router.delete("/delete-diary-entry", deleteDiaryEntry);

//appointment routes
router.post("/create-appointment", createAppointment);
router.get("/fetch-doctor-appointments", fetchDoctorAppointments);
router.get("/fetch-patient-appointments", fetchPatientAppointments);
router.put("/update-appointment", updateAppointment);
router.delete("/delete-appointment", deleteAppointment);

//feedback routes
router.post("/create-feedback", createFeedback);
router.get("/get-all-feedback", fetchFeedback);
router.get("/get-entry-feedback", fetchFeedbackForEntry);
router.get("/get-doctor-feedback", fetchDoctorFeedback);
router.put("/update-feedback", updateFeedback);
router.delete("/delete-feedback", deleteFeedback);

//review routes
router.post("/create-review", createReview);
router.get("/fetch-reviews", fetchUnrespondedReviews);

//response routes
router.post("/create-response", createResponse);
router.get("/fetch-responses", fetchResponses);
router.get("/fetch-doctor-responses", fetchDoctorResponses);
router.put("/update-response", updateResponse);
export { router as Router };
