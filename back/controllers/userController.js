import UserModel from "../models/Users.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const updateUser = () => {
  try {
  } catch (error) {
    console.log("Error updating user:", user);
    res.status(500).json({ success: false, error: error.message });
  }
};

const fetchUser = () => {
  try {
  } catch (error) {
    console.log("Error fetching user:", user);
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteUser = () => {
  try {
  } catch (error) {
    console.log("Error deleting user:", user);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { updateUser, fetchUser, deleteUser };
