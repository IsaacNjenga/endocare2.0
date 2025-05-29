import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  FireOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Tooltip,
  Descriptions,
  Pagination,
  Typography,
  Divider,
} from "antd";
import mealIcon from "../assets/icons/meal.png";
import medicationIcon from "../assets/icons/medication.png";
import bloodSugarIcon from "../assets/icons/bloodSugar.png";
import moodsIcon from "../assets/icons/moods.png";
import symptomsIcon from "../assets/icons/symptoms.png";
import pActivityIcon from "../assets/icons/physicalActivity.png";

const { Text, Title } = Typography;

const iconStyle = {
  width: "75px",
  heightt: "75px",
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

export const MealsEntry = ({ diaryLoading, content = [] }) => {
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
        marginBottom: 24,
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

export const MedicationsEntry = ({ diaryLoading, content = [] }) => {
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
        height: "100%",
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

export const BloodSugarEntry = ({ diaryLoading, content = [] }) => {
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
        height: "100%",
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

export const PhysicalActivityEntry = ({ diaryLoading, content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentContent = content[currentIndex - 1];

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
          <img src={pActivityIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Physical Activity Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="large">
        <Descriptions.Item label="Activity" style={descriptionLabelStyle}>
          <Text strong style={descriptionStyle}>
            {currentContent?.activity || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item label="Activity Type" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentContent?.activityType || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Duration" style={descriptionLabelStyle}>
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentContent?.durationOfActivity || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item
          label="Overall Experience"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentContent?.activityExperience || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item label="Mood After" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentContent?.moodAfter || "N/A"}
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

export const SymptomsEntry = ({ diaryLoading, content = [] }) => {
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
        height: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={symptomsIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Symptoms Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item label="Symptoms" style={descriptionLabelStyle}>
          <Text strong style={descriptionStyle}>
            {currentEntry?.symptoms || "N/A"}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item label="Severity" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentEntry?.severity || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Relief Measures Taken"
          style={descriptionLabelStyle}
        >
          <ClockCircleOutlined style={{ marginRight: 6 }} />
          <Text style={descriptionStyle}>
            {" "}
            {currentEntry?.reliefMeasures || "N/A"}
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

export const MoodsEntry = ({ diaryLoading, content = [] }) => {
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
        height: "100%",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={moodsIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Moods & Feelings Logs</span>
        </div>
      </Title>
      <Divider />
      <Descriptions column={1} bordered size="medium">
        <Descriptions.Item label="Overall Mood" style={descriptionLabelStyle}>
          <Text strong style={descriptionStyle}>
            {currentEntry?.overallMood || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Intensity Level"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.intesityLevel || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item label="Triggers" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>{currentEntry?.trigger || "N/A"}</Text>
        </Descriptions.Item>

        <Descriptions.Item label="Time" style={descriptionLabelStyle}>
          <Text style={descriptionStyle}>
            {currentEntry?.timeOfMood || "N/A"}
          </Text>
        </Descriptions.Item>

        <Descriptions.Item
          label="Relief Measures"
          style={descriptionLabelStyle}
        >
          <Text style={descriptionStyle}>
            {currentEntry?.reliefMeasures || "N/A"}
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

function diaryPageComponents() {
  return <div>diaryPageComponents</div>;
}

export default diaryPageComponents;
