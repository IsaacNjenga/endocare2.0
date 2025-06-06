import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Card, Divider, Form, Input, Popover, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const inputStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  height: 40,
  fontSize: 14,
  color: "#333",
  fontFamily: "Roboto",
  borderRadius: 8,
  paddingLeft: 10,
};

const labelStyle = {
  color: "#111827",
  fontSize: 16,
  fontWeight: 500,
  fontFamily: "Raleway",
};

function ChangePassword({ setOpen }) {
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(null);
  const [otpVerified, setOtpVerified] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [values, setValues] = useState({
    otp: "",
    newPassword: "",
    email: "",
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const getOtp = async () => {
    setOtpLoading(true);
    try {
      const emailBody = { to: values.email };
      const res = await axios.post("otp-request", emailBody);
      if (res.data.success) {
        setOtpSent(true);
        setTimeLeft(120);
        Swal.fire("Success", "OTP sent to your email", "success");
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "An unexpected error occurred. Please try again later.";

      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
      setTimeLeft(0);
    } finally {
      setOtpLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("verify-otp", {
        email: values.email,
        otp: values.otp,
      });

      if (res.data.success) {
        Swal.fire(
          "Verified",
          "OTP verified, you can set a new password",
          "success"
        );
        setOtpVerified(true);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "An unexpected error occurred. Please try again later.";

      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
      setTimeLeft(0)
    }
  };

  const [form] = Form.useForm();
  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!otpVerified) {
      return Swal.fire("Error", "Please verify your OTP first", "error");
    }
    setLoading(true);
    try {
      await axios.post("password-change", {
        email: values.email,
        newPassword: values.newPassword,
      });
      Swal.fire({
        icon: "success",
        title: "Password Successfully Changed!",
        text: "",
      });
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "An unexpected error occurred. Please try again later.";

      Swal.fire({
        icon: "warning",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
      setOpen(null);
      form.resetFields();
      setValues({ otp: "", username: "", newPassword: "", email: "" });
    }
  };

  const setClear = () => {
    form.resetFields();
    setValues({ otp: "", username: "", newPassword: "", email: "" });
  };

  return (
    <>
      <Card>
        <Divider variant="solid" style={{ borderColor: "#4f46e5" }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: "30px",
              background: "#eef2ff",
              fontFamily: "Raleway",
              fontWeight: 600,
              fontSize: 22,
              color: "#4f46e5",
            }}
          >
            <span>Change your password</span>
          </div>
        </Divider>
        <Form layout="vertical" onFinish={handleSubmit} form={form}>
          {" "}
          <Form.Item
            label={<span style={labelStyle}>Email Address</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "Email required",
              },
            ]}
          >
            <Space.Compact style={{ width: "100%" }}>
              <Input
                onChange={(e) => handleChange("email", e.target.value)}
                style={inputStyle}
              />
              <Popover title="Enter your email address to get your OTP">
                <Button
                  onClick={getOtp}
                  disabled={values.otp}
                  loading={otpLoading}
                  style={{
                    height: 40,
                  }}
                >
                  {" "}
                  {timeLeft > 0 ? (
                    <span>
                      {Math.floor(timeLeft / 60)}:{timeLeft % 60}
                    </span>
                  ) : (
                    "Get OTP"
                  )}
                </Button>
              </Popover>
            </Space.Compact>
          </Form.Item>
          <Form.Item
            label={<span style={labelStyle}>Enter OTP</span>}
            name="otp"
            rules={[
              {
                required: otpVerified ? false : true,
                message: "OTP required",
              },
            ]}
          >
            <Input.OTP
              disabled={otpSent ? false : true}
              onChange={(value) => handleChange("otp", value)}
            />{" "}
            <Button type="primary" onClick={verifyOtp} disabled={!values.otp}>
              Verify OTP
            </Button>{" "}
          </Form.Item>{" "}
          {timeLeft > 0 && (
            <span style={{ color: "red" }}>
              OTP will expire in {Math.floor(timeLeft / 60)}:{timeLeft % 60}
            </span>
          )}
          <Form.Item
            label={<span style={labelStyle}>Email Address</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input
              onChange={(e) => handleChange("email", e.target.value)}
              disabled={otpVerified ? false : true}
              style={inputStyle}
            />
          </Form.Item>
          <Form.Item
            label={<span style={labelStyle}>New Password</span>}
            name="newPassword"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}])[A-Za-z\d@$!%*?&#^()[\]{}]{8,}$/,
                message: (
                  <span>
                    <ul>
                      - Password must include:
                      <li>An uppercase character</li>
                      <li>A lowercase character</li>
                      <li>A number</li>
                      <li>A symbol</li>
                      <li>At least 8 characters long</li>
                    </ul>
                  </span>
                ),
              },
            ]}
          >
            <>
              <Input.Password
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={(e) => handleChange("newPassword", e.target.value)}
                disabled={otpVerified ? false : true}
                style={inputStyle}
              />
              {/* {renderPasswordFeedback(values.password)} */}
            </>
          </Form.Item>
          <Form.Item
            label={<span style={labelStyle}>Re-type Password</span>}
            name="confirmPassword"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
            style={{ marginTop: "20px" }}
          >
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={inputStyle}
              disabled={otpVerified ? false : true}
            />
          </Form.Item>
          <div style={{ display: "flex", gap: "20px", margin: "auto" }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                width: "45%",
                background: "#4c54b9",
                height: 40,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Change Password
            </Button>
            <Button
              type="primary"
              onClick={setClear}
              style={{
                width: "45%",
                height: 40,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Clear
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}

export default ChangePassword;
