import nodemailer from "nodemailer";
import dotenv from "dotenv";
import otpGenerator from "otp-generator";

dotenv.config({});

const user = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;
const otpStorage = new Map();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const otpRequest = async (req, res) => {
  const { to } = req.body;
  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: true,
    specialChars: false,
  });
  const expiresAt = Date.now() + 2 * 60 * 1000;
  otpStorage.set(to, { otp, expiresAt });

  try {
    const mailOptions = {
      from: user,
      to,
      subject: "Your OTP Code",
      text: `Your One-Time Password is: ${otp}. It expires in 2 minutes.`,
      html: ` <div
      style="
        font-family: Arial, sans-serif;
        line-height: 1.6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      "
    >
      <h2 style="color: #333">Your One-Time Password</h2>
      <p>Hi there,</p>
      <p>Your OTP is:</p>
      <div
        style="
          font-size: 24px;
          font-weight: bold;
          background-color: #f2f2f2;
          padding: 10px;
          display: inline-block;
          border-radius: 5px;
        "
      >
        ${otp}
      </div>
      <p style="margin-top: 10px">
        This code will expire in <strong>2 minutes</strong>.
      </p>
      <p>If you didn't request this, please ignore this email.</p>
      <hr />
      <small style="color: #999"
        >This is an automated message, please do not reply.</small
      >
    </div>`,
    };
    const otpInfo = await transporter.sendMail(mailOptions);
    console.log("OTP sent: " + otpInfo.response);
    res.status(201).json({ success: true, message: "OTP sent!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not send email" });
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const value = otpStorage.get(email);
  if (!value) {
    console.error("No value found for the provided email:", email);
    return;
  }
  const storedOtpData = value.otp;
  if (!storedOtpData) {
    return res.status(400).json({ error: "OTP not found or expired" });
  }
  if (storedOtpData !== otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  if (Date.now() > value.expiresAt) {
    otpStorage.delete(email);
    return res.status(400).json({ error: "OTP Expired" });
  }

  //OTP is valid, delete it from storage
  otpStorage.delete(email);

  res.status(200).json({ success: true, message: "OTP verified" });
};

export { otpRequest, verifyOtp };
