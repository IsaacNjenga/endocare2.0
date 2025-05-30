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

const diaryValues = {
  "2025-05-29": {
    mealLogs: [
      {
        meal: "Eggs and Bacon",
        mealType: "Lunch",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
      {
        meal: "Eggs and Ugali",
        mealType: "Dinner",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20 pm",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
      {
        meal: "Milk",
        mealType: "Breakfast",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
    ],
    medicationsLogs: [
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
      {
        medicationName: "Mara Moja",
        medicationType: "Pain Killer",
        dosage: "2 tablets",
        timeOfMedication: "10:20",
        route: "Oral",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
    ],
    bloodSugarLogs: [
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
    ],
    physicalActivityLogs: [
      {
        activity: "Running",
        activityType: "Cardio Training",
        durationOfActivity: "07:00 - 14:00",
        moodAfter: "Content",
        activityExperience: "Challenging",
      },
      {
        activity: "Strength Training",
        activityType: "Strength Training",
        durationOfActivity: "07:00 - 14:00",
        moodAfter: "Content",
        activityExperience: "Challenging",
      },
    ],
    symptomsLogs: [
      {
        symptoms: ["Dizziness", "Headaches", "Stomach Upset"],
        severity: "Manageable",
        reliefMeasures: "qeqe",
      },
      {
        symptoms: ["Dizziness"],
        severity: "Manageable",
        reliefMeasures: "qeqe",
      },
    ],
    moodLogs: [
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
    ],
  },
};

const colStyle = { margin: "15px 0px" };

function DiaryContent() {
  const { date } = useParams();
  const navigate = useNavigate();
  const diaryForDate = diaryValues[date];
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
        {format(new Date(date), "EEEE, do MMMM yyyy")}
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
