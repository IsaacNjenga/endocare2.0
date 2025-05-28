import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Diary() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/diary/create-entry")}>
        Create an Entry
      </Button>
      <div>Diary</div>
    </>
  );
}

export default Diary;
