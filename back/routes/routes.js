import express from "express";
import {
  Auth,
  credentialUpdate,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import { VerifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

//authentication routes
router.post("/sign-up", registerUser);
router.post("/sign-in", loginUser);
router.get("/verify", VerifyUser, Auth);
router.post("/password-change", credentialUpdate);

export { router as Router };
