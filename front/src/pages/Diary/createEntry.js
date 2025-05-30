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

function CreateEntry() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const steps = [
    {
      title: "Meals",
      content: <MealsLog />,
    },
    {
      title: "Medications",
      content: <MedicationsLog />,
    },
    {
      title: "Blood Sugar",
      content: <BloodSugarLevelsLog />,
    },
    {
      title: "Phys. Activity",
      content: <PhysicalActivityLog />,
    },
    {
      title: "Symptoms",
      content: <SymptomsLog />,
    },
    {
      title: "Mood",
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
        }, 2000);
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
      <div style={{ margin: "5px 12px" }}>
        <Typography.Title
          style={{
            fontFamily: "Raleway",
            display: "flex",
            justifyContent: "right",
            marginBottom: 24,
          }}
        >
          {format(new Date(), "EEEE, do MMMM yyyy")}
        </Typography.Title>
        <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Steps current={current} style={{ margin: "45px 1px" }}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form.Item
            layout="horizontal"
            label="Select the date"
            name="entryDate"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input type="date" />
          </Form.Item>

          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{ display: index === current ? "block" : "none" }}
            >
              {step.content}
            </div>
          ))}

          <div
            style={{
              margin: "10px 10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {current > 0 && (
              <Button style={{ marginRight: 8 }} onClick={prev}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            )}
          </div>
        </Form>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Button danger onClick={() => navigate("/diary")}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateEntry;
