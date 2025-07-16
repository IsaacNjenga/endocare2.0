import { Button, Divider, Form, Input, Steps, Typography } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MoodsLog,
  BloodSugarLevelsLog,
  MealsLog,
  MedicationsLog,
  PhysicalActivityLog,
  SymptomsLog,
} from "../../components/diaryFormComponents";
import Swal from "sweetalert2";
import { format } from "date-fns";
import axios from "axios";
import { UserContext } from "../../App";

const { Step } = Steps;

const inputStyle = {
  fontFamily: "Roboto",
  fontSize: "1rem",
  lineHeight: 1.6,
  fontWeight: 500,
  borderRadius: 8,
  height: 40,
};

const labelStyle = {
  fontFamily: "Raleway",
  lineHeight: 1.6,
  fontWeight: 500,
  fontSize: "1.1rem",
};

const btnStyle = {
  width: "40%",
  height: 40,
  fontFamily: "Raleway",
  fontSize: 18,
};

function CreateEntry() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const steps = [
    {
      title: <span style={{ fontSize: 14 }}>Meals</span>,
      content: <MealsLog />,
    },
    {
      title: <span style={{ fontSize: 14 }}>Medications</span>,
      content: <MedicationsLog />,
    },
    {
      title: <span style={{ fontSize: 14 }}>Blood Sugar</span>,
      content: <BloodSugarLevelsLog />,
    },
    {
      title: <span style={{ fontSize: 14 }}>Phys. Activity</span>,
      content: <PhysicalActivityLog />,
    },
    {
      title: <span style={{ fontSize: 14 }}>Symptoms</span>,
      content: <SymptomsLog />,
    },
    {
      title: <span style={{ fontSize: 14 }}>Mood</span>,
      content: <MoodsLog />,
    },
  ];

  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch(() => {
        Swal.fire({
          icon: "warning",
          title: "Wait",
          text: "Please complete the current step before continuing.",
        });
      });
  };

  const prev = () => setCurrent(current - 1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = form.getFieldsValue();
      const allValues = { ...values, createdBy: user._id };
      console.log(allValues);
      const res = await axios.post("create-diary-entry", allValues);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your entry has been saved successfully",
        });
        setTimeout(() => {
          navigate(`/diary/date/${format(new Date(), "yyyy-MM-dd")}`);
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  return (
    <>
      <div style={{ margin: "5px 8px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Button
              type="primary"
              onClick={() => navigate("/diary")}
              style={{ background: "red", color: "white" }}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Typography.Title
              style={{
                fontFamily: "Raleway",
                display: "flex",
                justifyContent: "right",
                marginBottom: 12,
              }}
            >
              {format(new Date(), "EEEE, do MMMM yyyy")}
            </Typography.Title>
          </div>
        </div>
        <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{
            background: "linear-gradient(90deg, #eef2ff 0%, #f8fafc 100%)",
            padding: 24,
            margin: "24px auto",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(79,70,229,0.10)",
            border: "1px solid #00152a",
          }}
        >
          <Steps
            current={current}
            style={{
              margin: "40px 0px",
              padding: "18px 10px",
              borderRadius: 24,
              background: "rgba(0,0,0,0)",
              boxShadow: "0 2px 12px rgba(79,70,229,0.20)",
              border: "1px solid #00152a",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form.Item
            layout="vertical"
            label={<span style={{ ...labelStyle }}>Select the date</span>}
            name="entryDate"
            rules={[{ required: true, message: "This field is required" }]}
            style={{ padding: "0px 18px" }}
          >
            <Input type="date" style={{ ...inputStyle }} />
          </Form.Item>

          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                display: index === current ? "block" : "none",
              }}
            >
              {step.content}
            </div>
          ))}

          <div
            style={{
              margin: "15px 10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {current > 0 && (
              <Button style={{ ...btnStyle, marginRight: 12 }} onClick={prev}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next} style={btnStyle}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={btnStyle}
              >
                Submit
              </Button>
            )}
          </div>
        </Form>{" "}
      </div>
    </>
  );
}

export default CreateEntry;
