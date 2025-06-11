import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  FireOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Tooltip,
  Descriptions,
  Pagination,
  Typography,
  Divider,
  Collapse,
  Empty,
  Space,
  Tag,
} from "antd";
import mealIcon from "../assets/icons/meal.png";
import medicationIcon from "../assets/icons/medication.png";
import bloodSugarIcon from "../assets/icons/bloodSugar.png";
import moodsIcon from "../assets/icons/moods.png";
import symptomsIcon from "../assets/icons/symptoms.png";
import pActivityIcon from "../assets/icons/physicalActivity.png";

const { Text, Title } = Typography;
const { Panel } = Collapse;

const iconStyle = {
  width: "50px",
  heightt: "50px",
  padding: "5px",
  borderRadius: "50%",
  marginRight: "5px",
  border: "2px solid #343d8b",
};

const titleStyle = {
  margin: 0,
  fontSize: "1.3rem",
  letterSpacing: "1px",
  fontFamily: "Raleway",
  color: "#343d8b",
  textDecoration: "underline",
  fontWeight: 600,
};

const descriptionStyle = { fontFamily: "Roboto", fontSize: 15 };

const descriptionLabelStyle = { fontFamily: "Raleway", fontWeight: 500 };

export const MealsComponent = ({ content,currentIndex, setCurrentIndex }) => {
  const currentEntry = content[currentIndex - 1];

  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        height: "auto",
        marginBottom: 18,
      }}
    >
      <Title level={4} style={{ marginBottom: 0 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={mealIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Meal Logs</span>
        </div>
      </Title>
      <Divider />
      {content.length === 0 ? (
        <Empty
          description={<Typography.Text>No logs for this day</Typography.Text>}
        />
      ) : (
        <Descriptions column={1} bordered size="medium">
          <Descriptions.Item label="Meal Name" style={descriptionLabelStyle}>
            <Text strong style={descriptionStyle}>
              {currentEntry?.meal || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="Meal Type" style={descriptionLabelStyle}>
            <Text style={descriptionStyle}>
              {currentEntry?.mealType || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item
            label="Meal Experience"
            style={descriptionLabelStyle}
          >
            <Text style={descriptionStyle}>
              {currentEntry?.mealExperience || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="Time of Meal" style={descriptionLabelStyle}>
            <ClockCircleOutlined style={{ marginRight: 6 }} />
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.timeOfMeal || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item
            label="Mood After Meal"
            style={descriptionLabelStyle}
          >
            <SmileOutlined style={{ marginRight: 6, color: "green" }} />
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.moodAfter || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item
            label="Craving Level"
            style={descriptionLabelStyle}
          >
            <FireOutlined style={{ marginRight: 6, color: "red" }} />
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.cravingLevel || 0}/10
            </Text>
          </Descriptions.Item>
        </Descriptions>
      )}

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

export const MedicationsComponent = () => {
  return <div>Medications</div>;
};

export const BloodSugarComponent = () => {
  return <div>BloodSugar</div>;
};

export const PhysicalActivityComponent = () => {
  return <div>PhysicalActivity</div>;
};

export const SymptomsComponent = () => {
  return <div>Symptoms</div>;
};

export const MoodsComponent = () => {
  return <div>Moods</div>;
};

function FeedbackDiaryPage() {
  return <div>FeedbackDiaryPage</div>;
}

export default FeedbackDiaryPage;
