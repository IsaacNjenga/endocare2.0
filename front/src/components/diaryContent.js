import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import {
  MealsEntry,
  MedicationsEntry,
  BloodSugarEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
  MoodsEntry,
} from "./diaryPageComponents";
import { useParams } from "react-router-dom";

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
        context: "beforeMeal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
      {
        context: "beforeMeal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
      {
        context: "beforeMeal",
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
        symptoms: ["Dizziness"],
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
  const diaryForDate = diaryValues[date];
  const [diaryLoading, setDiaryLoading] = useState(false);

  return (
    <div>
      <Typography.Title level={2}>Diary for {date}</Typography.Title>
      <div style={{ margin: "10px 12px", display: "none" }}>
        <Row gutter={24}>
          {diaryForDate?.mealLogs.map((meal, idx) => (
            <Col span={12} style={colStyle} key={idx}>
              <MealsEntry diaryLoading={diaryLoading} content={[meal]} />
            </Col>
          ))}

          {diaryForDate?.medicationsLogs.map((medication, idx) => (
            <Col span={12} style={colStyle} key={idx}>
              <MedicationsEntry
                diaryLoading={diaryLoading}
                content={[medication]}
              />
            </Col>
          ))}

          {diaryForDate?.bloodSugarLogs.map((bloodSugar, idx) => (
            <Col span={12} style={colStyle} key={idx}>
              <BloodSugarEntry
                diaryLoading={diaryLoading}
                content={[bloodSugar]}
              />
            </Col>
          ))}

          {diaryForDate?.physicalActivityLogs.map((physical, idx) => (
            <Col span={12} style={colStyle} key={idx}>
              <PhysicalActivityEntry
                diaryLoading={diaryLoading}
                content={[physical]}
              />
            </Col>
          ))}

          {diaryForDate?.symptomsLogs.map((symptoms, idx) => (
            <Col span={12} style={colStyle} key={idx}>
              <SymptomsEntry diaryLoading={diaryLoading} content={[symptoms]} />
            </Col>
          ))}

          {diaryForDate?.moodLogs.map((mood, idx) => (
            <Col span={12} style={colStyle} key={idx}>
              <MoodsEntry diaryLoading={diaryLoading} content={[mood]} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default DiaryContent;
