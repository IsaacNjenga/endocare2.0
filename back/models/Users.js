import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    username: { type: String },
    phoneNumber: { type: String },
    role: { type: String },
  },
  { collection: "users", timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
