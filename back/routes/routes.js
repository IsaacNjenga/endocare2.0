import express from "express";
import {
  Auth,
  credentialUpdate,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import { VerifyUser } from "../middleware/verifyUser.js";
import {
  deleteUser,
  fetchUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

//authentication routes
router.post("/sign-up", registerUser);
router.post("/sign-in", loginUser);
router.post("/password-change", credentialUpdate);

//user routes
router.put("/update-user", updateUser);
router.get("/fetch-user", fetchUser);
router.delete("/delete-user", deleteUser);

export { router as Router };
