import React, { useState } from "react";
import { Button, Typography, Divider, Calendar } from "antd";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

function Diary() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const onSelect = (date) => {
    setValue(date);
    navigate(`/diary/date/${date.format("YYYY-MM-DD")}`);
  };

  return (
    <>
      <Button onClick={() => navigate("/diary/create-entry")}>
        Create an Entry
      </Button>
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

      <Calendar value={value} onSelect={onSelect} />
    </>
  );
}

export default Diary;
