import React, { useState } from "react";
import { Col, Divider, Row, Typography, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  MealsEntry,
  MedicationsEntry,
  BloodSugarEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
  MoodsEntry,
} from "../../components/diaryPageComponents";
import useFetchDiaryData from "../../hooks/fetchDiaryData";

const colStyle = { margin: "15px 0px" };

function MyPatientsDiary() {
  const { date, id } = useParams();
  const navigate = useNavigate();
  const { diaryData, diaryLoading } = useFetchDiaryData(id);

  const diaryForDate = diaryData.find(
    (entry) => entry.entryDate === format(new Date(date), "yyyy-MM-dd")
  );

  return (
    <>
      <Button
        danger
        onClick={() => {
          navigate(`/my-patients/${id}`);
        }}
      >
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
        {date === format(new Date(), "yyyy-MM-dd") ? `(Today)` : null}{" "}
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
    </>
  );
}

export default MyPatientsDiary;
