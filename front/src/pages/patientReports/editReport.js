import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function EditReport() {
  const navigate = useNavigate();
  return (
    <>
      <Button danger onClick={() => navigate("/patient-reports")}>
        Back
      </Button>
      <div>EditReport</div>
    </>
  );
}

export default EditReport;
