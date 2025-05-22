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

export { router as Router };
