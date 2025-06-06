import React, { useContext, useState } from "react";
import { Button, Typography, Divider, Calendar, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
// import { diaryValues,data } from "../../assets/data/data";
import useFetchDiaryData from "../../hooks/fetchDiaryData";
import { UserContext } from "../../App";
import dayjs from "dayjs";

const markerStyle = {
  display: "inline-block",
  width: 34,
  height: 34,
  borderRadius: "50%",
  margin: "auto",
};
function Diary() {
  const navigate = useNavigate();
  const [value, setValue] = useState(dayjs());
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { diaryData, diaryLoading } = useFetchDiaryData(userId);

  const onSelect = (date) => {
    setValue(date);
    // navigate(`/diary/date/${date.format("YYYY-MM-DD")}`);
  };

  const onPanelChange = (date, mode) => {
    // console.log("Panel changed to:", date.format("YYYY-MM-DD"), "Mode:", mode);
    setValue(date);
  };

  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const hasEntry = diaryData?.some((entry) => entry.entryDate === dateStr);
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <Tooltip title={hasEntry ? "Click to view entry" : "Diary not filled, click to fill"}>
          <span
            style={{
              ...markerStyle,
              background: hasEntry
                ? "#1677ff"
                : "linear-gradient(to left, #e9e8e6 0%, #ddd1d1 100%)",
              border: hasEntry ? "" : "2px dashed grey",
            }}
            onClick={() => {
              navigate(`/diary/date/${value.format("YYYY-MM-DD")}`);
            }}
          />
        </Tooltip>
      </div>
    );
  };

  if (diaryLoading) return <div>Loading...</div>;

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

      <Calendar
        value={value}
        onSelect={onSelect}
        cellRender={dateCellRender}
        onPanelChange={onPanelChange}
      />
    </>
  );
}

export default Diary;
