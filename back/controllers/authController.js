import UserModel from "../models/Users.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, username, phoneNumber, role } =
    req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ error: "This email address is already in use" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashPassword,
      username,
      phoneNumber,
      role,
    });
    const result = await newUser.save();
    result._doc.password = undefined;
    return res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.log("Error creating user:", user);
    res.status(500).json({ success: false, error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { password, email } = req.body;
    const userExists = await UserModel.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ error: `User under '${email}' not found` });
    }

    const match = await bcrypt.compare(password, userExists.password);
    if (!match) {
      return res.status(400).json({ error: "Incorrect password. Try Again" });
    }

    const token = jwt.sign(
      {
        firstName: userExists.firstName,
        lastName: userExists.lastName,
        email: userExists.email,
        username: userExists.username,
        phoneNumber: userExists.phoneNumber,
        role: userExists.role,
        id: userExists._id,
        // avatar: userExists.avatar,
        // avatarId: userExists.avatarId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "20m" }
    );

    const user = { ...userExists._doc, password: undefined };
    return res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.log("Error authenticating user:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const Auth = (req, res) => {
  return res.status(201).json({ success: true, user: { ...req.user_doc } });
};

const credentialUpdate = async (req, res) => {
  const { newPassword, email } = req.body;

  try {
    const hashPassword = await bcrypt.hash(newPassword, 12);
    const user = await UserModel.findOneAndUpdate(
      { email },
      { $set: { password: hashPassword } },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ error: ` User under ${email} not found` });
    }
    res
      .status(201)
      .json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.log("Error changing password:", user);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { registerUser, loginUser, Auth, credentialUpdate };
