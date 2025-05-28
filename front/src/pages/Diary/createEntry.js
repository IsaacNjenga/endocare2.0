import { Button, Form, Steps } from "antd";
import React, { useState } from "react";
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
// import UserContext from "../../App.js";

const { Step } = Steps;

function CreateEntry() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  //   const { user } = useContext(UserContext);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

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
      title: "Physical Activity",
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
      //   const allValues = { ...values, createdBy: user._id };
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => navigate("/diary")}>Cancel</Button>
      <div>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Steps current={current} style={{ marginBottom: 24 }}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>

          <div>{steps[current].content}</div>

          <div style={{ marginTop: 24 }}>
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
        </Form>
      </div>
    </>
  );
}

export default CreateEntry;
