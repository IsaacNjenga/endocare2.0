import { Button, Form } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MealLogs } from "../../components/diaryFormComponents";
// import UserContext from "../../App.js";

function CreateEntry() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  //   const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

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
          <MealLogs />
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateEntry;
