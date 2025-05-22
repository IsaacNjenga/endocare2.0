import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    username: { type: String },
    phoneNumber: { type: String },
    role: { type: String },
    dob: { type: String },
    address: { type: String },
    emergencyName: { type: String },
    emergencyPhoneNumber: { type: String },
    emergencyEmail: { type: String },
    avatar: { type: String },
    avatarId: { type: String },
    gender: { type: String },
  },
  { collection: "users", timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
