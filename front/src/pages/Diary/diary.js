import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Tooltip,
  Descriptions,
  Pagination,
  Typography,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  FireOutlined,
  StarOutlined,
} from "@ant-design/icons";
import mealIcon from "../../assets/icons/meal.png";

const { Text, Title } = Typography;

const colStyle = { margin: "15px 0px" };

const iconStyle = {
  width: "70px",
  height: "70px",
  padding: "9px",
  borderRadius: "50%",
  marginRight: "5px",
  border: "1px solid green",
};

const titleStyle = {
  margin: 0,
  fontSize: "1.33rem",
  letterSpacing: "1px",
  fontFamily: "Raleway",
  color: "#3c3b39",
  textDecoration: "underline",
};

const descriptionStyle = { fontFamily: "Roboto" };

const descriptionLabelStyle = { fontFamily: "Raleway", fontWeight: 600 };

const actions = [
  <Tooltip title="Edit this entry" key="edit">
    <Button type="primary" icon={<EditOutlined />} />
  </Tooltip>,
  <Tooltip title="Delete this entry" key="delete">
    <Button danger icon={<DeleteOutlined />} />
  </Tooltip>,
];

const diaryValues = {
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
      sideEffects: "sg",
      compliance: "yes",
    },
  ],
  bloodSugarLogs: [
    {
      context: "beforeMeal",
      timeOfTest: "11:21",
      meal: "35",
      unit: "mmol/L",
      activityBefore: "light",
      symptoms: "wrwr",
      notes: "gsgg",
    },
  ],
  physicalActivityLogs: [
    {
      meal: "wrwr",
      mealType: "Strength Training",
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
  ],
  moodLogs: [
    {
      severity: "Excited",
      intensityLevel: 4,
      trigger: ["qr", "qqr"],
      timeOfMood: "11:22",
      notes: "qqe",
      reliefMeasures: "walk",
    },
  ],
};

const MealsEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentMeal = content[currentIndex - 1];

  return (
    <Card
      hoverable
      loading={diaryLoading}
      actions={actions}
      style={{ borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={mealIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Meal Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item label="Meal Name" style={descriptionLabelStyle}>
          <Text strong style={descriptionStyle}>
            {currentMeal?.meal || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Meal Type" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>{currentMeal?.mealType || "N/A"}</Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Meal Experience"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentMeal?.mealExperience || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time of Meal" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentMeal?.timeOfMeal || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Mood After Meal"
          style={descriptionLabelStyle}
        >
          <SmileOutlined style={{ marginRight: 6, color: "green" }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentMeal?.moodAfter || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Craving Level" style={descriptionLabelStyle}>
          <FireOutlined style={{ marginRight: 6, color: "red" }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentMeal?.cravingLevel || 0}/10
          </Text>
        </Descriptions.Item>
      </Descriptions>
      {content.length > 1 && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Pagination
            align="center"
            current={currentIndex}
            pageSize={1}
            total={content.length}
            onChange={(page) => setCurrentIndex(page)}
            size="small"
          />
        </div>
      )}
    </Card>
  );
};

const MedicationsEntry = ({ diaryLoading, content }) => {
  return (
    <Card hoverable loading={diaryLoading} actions={actions}>
      Medication:{content.medicationName}
      MedicationType:{content.medicationType}
      dosage Taken:{content.dosage}
      time take:{content.timeOfMedication}
      Route administered:{content.route}
      purpose of medication:{content.purpose}
      SideEffect Experienced:{content.sideEffects}
      compliance with intructions:{content.compliance}
    </Card>
  );
};

const BloodSugarEntry = ({ diaryLoading }) => {
  return (
    <Card hoverable loading={diaryLoading} actions={actions}>
      BloodSugar
    </Card>
  );
};

const PhysicalActivityEntry = ({ diaryLoading }) => {
  return (
    <Card hoverable loading={diaryLoading} actions={actions}>
      Phys A
    </Card>
  );
};

const SymptomsEntry = ({ diaryLoading }) => {
  return (
    <Card hoverable loading={diaryLoading} actions={actions}>
      Symptoms
    </Card>
  );
};

const MoodsEntry = ({ diaryLoading }) => {
  return (
    <Card hoverable loading={diaryLoading} actions={actions}>
      Moods
    </Card>
  );
};

function Diary() {
  const navigate = useNavigate();
  const [diaryLoading, setDiaryLoading] = useState(false);

  return (
    <>
      <Button onClick={() => navigate("/diary/create-entry")}>
        Create an Entry
      </Button>
      <div style={{ margin: "10px 12px" }}>
        <Row gutter={20}>
          <Col span={12} style={colStyle}>
            <MealsEntry
              diaryLoading={diaryLoading}
              content={diaryValues.mealLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            {diaryValues.medicationsLogs.map((medication) => (
              <MedicationsEntry
                diaryLoading={diaryLoading}
                content={medication}
              />
            ))}
          </Col>
          <Col span={12} style={colStyle}>
            <BloodSugarEntry diaryLoading={diaryLoading} />
          </Col>
          <Col span={12} style={colStyle}>
            <PhysicalActivityEntry diaryLoading={diaryLoading} />
          </Col>
          <Col span={12} style={colStyle}>
            <SymptomsEntry diaryLoading={diaryLoading} />
          </Col>
          <Col span={12} style={colStyle}>
            <MoodsEntry diaryLoading={diaryLoading} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Diary;
