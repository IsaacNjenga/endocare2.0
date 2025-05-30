import React, { useState } from "react";
import { Button, Typography, Divider, Calendar, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { diaryValues } from "../../assets/data/data";

const markerStyle = {
  display: "inline-block",
  width: 18,
  height: 18,
  borderRadius: "50%",
  margin: "auto",
};
function Diary() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const onSelect = (date) => {
    setValue(date);
    navigate(`/diary/date/${date.format("YYYY-MM-DD")}`);
  };

  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const hasEntry = diaryValues.some((entry) => entry.entryDate === dateStr);
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <Tooltip title={hasEntry ? "Click to view entry" : "Diary not filled"}>
          <span
            style={{
              ...markerStyle,
              background: hasEntry
                ? "#1677ff"
                : "linear-gradient(to left, #e9e8e6 0%, #ddd1d1 100%)",
              border: hasEntry ? "" : "2px dashed grey",
            }}
          />
        </Tooltip>
      </div>
    );
  };

  return (
    <>
      <Button type="primary" onClick={() => navigate("/diary/create-entry")}>
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

      <Calendar value={value} onSelect={onSelect} cellRender={dateCellRender} />
    </>
  );
}

export default Diary;
