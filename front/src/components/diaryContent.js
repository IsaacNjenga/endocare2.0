import React, { useState } from "react";
import { Col, Divider, Row, Typography, Button } from "antd";
import {
  MealsEntry,
  MedicationsEntry,
  BloodSugarEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
  MoodsEntry,
} from "./diaryPageComponents";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { diaryValues } from "../assets/data/data";

const colStyle = { margin: "15px 0px" };

function DiaryContent() {
  const { date } = useParams();
  const navigate = useNavigate();
  const diaryForDate = diaryValues.find(
    (entry) => entry.entryDate === format(new Date(date), "yyyy-MM-dd")
  );
  const [diaryLoading, setDiaryLoading] = useState(false);

  return (
    <div>
      {" "}
      <Button danger onClick={() => navigate("/diary")}>
        Back
      </Button>
      <Typography.Title
        style={{
          fontFamily: "Raleway",
          display: "flex",
          justifyContent: "right",
          marginBottom: 24,
        }}
      >
        {format(new Date(date), "EEEE, do MMMM yyyy")}{" "}
        {date === format(new Date(), "yyyy-MM-dd") ? `(Today)` : null}
      </Typography.Title>
      <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
      <div style={{ margin: "10px 12px" }}>
        <Row gutter={24}>
          <Col span={12} style={colStyle}>
            <MealsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.mealLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            <MedicationsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.medicationsLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            <BloodSugarEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.bloodSugarLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            <PhysicalActivityEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.physicalActivityLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            <SymptomsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.symptomsLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            <MoodsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.moodLogs}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DiaryContent;
