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
import medicationIcon from "../../assets/icons/medication.png";
import bloodSugarIcon from "../../assets/icons/bloodSugar.png";
import moodsIcon from "../../assets/icons/moods.png";
import symptomsIcon from "../../assets/icons/symptoms.png";
import pActivityIcon from "../../assets/icons/physicalActivity.png";

const { Text, Title } = Typography;

const colStyle = { margin: "15px 0px" };

const iconStyle = {
  width: "75px",
  height: "75px",
  padding: "7px",
  borderRadius: "50%",
  marginRight: "7px",
  border: "2px solid #343d8b",
};

const titleStyle = {
  margin: 0,
  fontSize: "1.33rem",
  letterSpacing: "1px",
  fontFamily: "Raleway",
  color: "#343d8b",
  textDecoration: "underline",
  fontWeight: 600,
};

const descriptionStyle = { fontFamily: "Roboto", fontSize: 15 };

const descriptionLabelStyle = { fontFamily: "Raleway", fontWeight: 500 };

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
      meal: "headache",
      mealType: "Strength Training",
      durationOfActivity: "07:00 - 14:00",
      moodAfter: "Content",
      activityExperience: "Challenging",
    },
    {
      meal: "headache",
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
    {
      severity: "Excited",
      intensityLevel: 4,
      trigger: ["qr", "qqr"],
      timeOfMood: "11:22",
      notes: "qqe",
      reliefMeasures: "walk",
    },
    {
      severity: "Excited",
      intensityLevel: 4,
      trigger: ["qr", "qqr"],
      timeOfMood: "11:22",
      notes: "qqe",
      reliefMeasures: "walk",
    },
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
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        height: "100%",
      }}
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

const MedicationsEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentMedication = content[currentIndex - 1];

  return (
    <Card
      hoverable
      loading={diaryLoading}
      actions={actions}
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        heigh: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={medicationIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Medication Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="small">
        <Descriptions.Item
          label="Medication Name"
          style={descriptionLabelStyle}
        >
          <Text strong style={descriptionStyle}>
            {currentMedication?.medicationName || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Medication Type"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentMedication?.medicationType || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Dosage" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentMedication?.dosage || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Route" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentMedication?.route || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time Taken" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentMedication?.timeOfMedication || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Medicinal Purpose"
          style={descriptionLabelStyle}
        >
          <SmileOutlined style={{ marginRight: 6, color: "green" }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentMedication?.purpose || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="As advised?" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentMedication?.compliance || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Side Effects" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {" "}
            {currentMedication?.sideEffects || 0}
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

const BloodSugarEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentEntry = content[currentIndex - 1];

  return (
    <Card
      hoverable
      loading={diaryLoading}
      actions={actions}
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        heigh: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={bloodSugarIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Blood Sugar Level Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item
          label="Context of Test"
          style={descriptionLabelStyle}
        >
          <Text strong style={descriptionStyle}>
            {currentEntry?.context || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Blood Sugar Level"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.sugarLevel || "N/A"}
            {currentEntry?.unit}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time Taken" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentEntry?.timeOfTest || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Activity Before Test"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.activityBefore || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Symptoms Experienced"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.symptoms || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Additional Notes"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}> {currentEntry?.notes || "N/A"}</Text>
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

const PhysicalActivityEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentEntry = content[currentIndex - 1];

  return (
    <Card
      hoverable
      loading={diaryLoading}
      actions={actions}
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        heigh: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={pActivityIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Blood Sugar Level Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item
          label="Context of Test"
          style={descriptionLabelStyle}
        >
          <Text strong style={descriptionStyle}>
            {currentEntry?.context || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Blood Sugar Level"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.sugarLevel || "N/A"}
            {currentEntry?.unit}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time Taken" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentEntry?.timeOfTest || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Activity Before Test"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.activityBefore || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Symptoms Experienced"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.symptoms || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Additional Notes"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}> {currentEntry?.notes || "N/A"}</Text>
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

const SymptomsEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentEntry = content[currentIndex - 1];

  return (
    <Card
      hoverable
      loading={diaryLoading}
      actions={actions}
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        heigh: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={symptomsIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Blood Sugar Level Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item
          label="Context of Test"
          style={descriptionLabelStyle}
        >
          <Text strong style={descriptionStyle}>
            {currentEntry?.context || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Blood Sugar Level"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.sugarLevel || "N/A"}
            {currentEntry?.unit}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time Taken" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentEntry?.timeOfTest || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Activity Before Test"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.activityBefore || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Symptoms Experienced"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.symptoms || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Additional Notes"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}> {currentEntry?.notes || "N/A"}</Text>
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

const MoodsEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentEntry = content[currentIndex - 1];

  return (
    <Card
      hoverable
      loading={diaryLoading}
      actions={actions}
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        heigh: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={moodsIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Blood Sugar Level Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item
          label="Context of Test"
          style={descriptionLabelStyle}
        >
          <Text strong style={descriptionStyle}>
            {currentEntry?.context || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Blood Sugar Level"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.sugarLevel || "N/A"}
            {currentEntry?.unit}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time Taken" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentEntry?.timeOfTest || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Activity Before Test"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.activityBefore || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Symptoms Experienced"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.symptoms || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Additional Notes"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}> {currentEntry?.notes || "N/A"}</Text>
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

function Diary() {
  const navigate = useNavigate();
  const [diaryLoading, setDiaryLoading] = useState(false);

  return (
    <>
      <Button onClick={() => navigate("/diary/create-entry")}>
        Create an Entry
      </Button>
      <div style={{ margin: "10px 12px" }}>
        <Row gutter={24}>
          <Col span={12} style={colStyle}>
            <MealsEntry
              diaryLoading={diaryLoading}
              content={diaryValues.mealLogs}
            />
          </Col>

          <Col span={12} style={colStyle}>
            <MedicationsEntry
              diaryLoading={diaryLoading}
              content={diaryValues.medicationsLogs}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <BloodSugarEntry
              diaryLoading={diaryLoading}
              content={diaryValues.bloodSugarLogs}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <PhysicalActivityEntry
              diaryLoading={diaryLoading}
              content={diaryValues.physicalActivityLogs}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <SymptomsEntry
              diaryLoading={diaryLoading}
              content={diaryValues.symptomsLogs}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <MoodsEntry
              diaryLoading={diaryLoading}
              content={diaryValues.moodLogs}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Diary;
