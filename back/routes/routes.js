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
} from "../controllers/patientController.js";
import { chatWithCohere } from "../controllers/chatbotController.js";
import {
  fetchDiaryEntries,
  createDiaryEntry,
  fetchDiaryEntry,
  updateDiaryEntry,
  deleteDiaryEntry,
} from "../controllers/diaryController.js";
import {
  deleteDoctor,
  createDoctor,
  fetchDoctor,
  fetchAllDoctors,
  updateDoctor,
} from "../controllers/doctorController.js";
import {
  updateAppointment,
  createAppointment,
  deleteAppointment,
  fetchPatientAppointments,
  fetchDoctorAppointments,
} from "../controllers/appointmentController.js";

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
router.delete("/delete-patient-details", deletePatientDetails);
router.delete("/delete-detail", deletePatientDetail);

//doctor routes
router.post("/create-doctor-details", createDoctor);
router.get("/get-doctor-details", fetchDoctor);
router.get("/get-all-doctors", fetchAllDoctors);
router.put("/update-doctor-details", updateDoctor);
router.delete("/delete-details", deleteDoctor);

//chatbot route
router.post("/endo-ai", chatWithCohere);

//diary routes
router.post("/create-diary-entry", createDiaryEntry);
router.get("/fetch-diary-entry", fetchDiaryEntry);
router.get("/fetch-diary-entries", fetchDiaryEntries);
router.put("/update-diary-entry", updateDiaryEntry);
router.delete("/delete-diary-entry", deleteDiaryEntry);

//appointment routes
router.post("/create-appointment", createAppointment);
router.get("/fetch-doctor-appointments", fetchDoctorAppointments);
router.get("/fetch-patient-appointments", fetchPatientAppointments);
router.put("/", updateAppointment);
router.delete("/", deleteAppointment);

export { router as Router };
