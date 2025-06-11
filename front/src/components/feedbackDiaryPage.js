import React from "react";
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

const renderListAsTags = (items, color) => (
  <Space wrap>
    {items?.map((item, idx) => (
      <Tag key={idx} color={color} style={descriptionStyle}>
        {item}
      </Tag>
    ))}
  </Space>
);

export const MealsComponent = ({ content, currentIndex, setCurrentIndex }) => {
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

export const MedicationsComponent = ({
  content,
  currentIndex,
  setCurrentIndex,
}) => {
  const currentEntry = content[currentIndex - 1];
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={medicationIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Medication Logs</span>
        </div>
      </Title>
      <Divider />{" "}
      {content.length === 0 ? (
        <Empty
          description={<Typography.Text>No logs for this day</Typography.Text>}
        />
      ) : (
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item
            label="Medication Name"
            style={descriptionLabelStyle}
          >
            <Text strong style={descriptionStyle}>
              {currentEntry?.medicationName || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item
            label="Medication Type"
            style={descriptionLabelStyle}
          >
            <Text style={descriptionStyle}>
              {currentEntry?.medicationType || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="Dosage" style={descriptionLabelStyle}>
            <Text style={descriptionStyle}>
              {currentEntry?.dosage || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="Route" style={descriptionLabelStyle}>
            <Text style={descriptionStyle}>{currentEntry?.route || "N/A"}</Text>
          </Descriptions.Item>

          <Descriptions.Item label="Time Taken" style={descriptionLabelStyle}>
            <ClockCircleOutlined style={{ marginRight: 6 }} />
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.timeOfMedication || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item
            label="Medicinal Purpose"
            style={descriptionLabelStyle}
          >
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.purpose || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="As advised?" style={descriptionLabelStyle}>
            <Text style={descriptionStyle}>
              {currentEntry?.compliance || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="Side Effects" style={descriptionLabelStyle}>
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.sideEffects || 0}
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

export const BloodSugarComponent = ({
  content,
  currentIndex,
  setCurrentIndex,
}) => {
  const currentEntry = content[currentIndex - 1];
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={bloodSugarIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Blood Sugar Level Logs</span>
        </div>
      </Title>
      <Divider />
      {content.length === 0 ? (
        <Empty
          description={<Typography.Text>No logs for this day</Typography.Text>}
        />
      ) : (
        <>
          <Descriptions column={1} bordered size="small">
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
          </Descriptions>
          <Collapse style={{ marginTop: "0.2rem" }}>
            <Panel
              header={
                <span style={descriptionLabelStyle}>Additional Notes</span>
              }
              key="1"
            >
              <p style={descriptionStyle}>{currentEntry?.notes}</p>
            </Panel>
          </Collapse>
        </>
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

export const PhysicalActivityComponent = ({
  content,
  currentIndex,
  setCurrentIndex,
}) => {
  const currentEntry = content[currentIndex - 1];
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={pActivityIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Physical Activity Logs</span>
        </div>
      </Title>
      <Divider />
      {content.length === 0 ? (
        <Empty
          description={<Typography.Text>No logs for this day</Typography.Text>}
        />
      ) : (
        <Descriptions column={1} bordered size="large">
          <Descriptions.Item label="Activity" style={descriptionLabelStyle}>
            <Text strong style={descriptionStyle}>
              {currentEntry?.activity || "N/A"}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item
            label="Activity Type"
            style={descriptionLabelStyle}
          >
            <Text style={descriptionStyle}>
              {currentEntry?.activityType || "N/A"}
            </Text>
          </Descriptions.Item>

          <Descriptions.Item label="Duration" style={descriptionLabelStyle}>
            <ClockCircleOutlined style={{ marginRight: 6 }} />
            <Text style={descriptionStyle}>
              {" "}
              {currentEntry?.durationOfActivity || "N/A"}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item
            label="Overall Experience"
            style={descriptionLabelStyle}
          >
            <Text style={descriptionStyle}>
              {currentEntry?.activityExperience || "N/A"}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item label="Mood After" style={descriptionLabelStyle}>
            <Text style={descriptionStyle}>
              {currentEntry?.moodAfter || "N/A"}
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

export const SymptomsComponent = ({
  content,
  currentIndex,
  setCurrentIndex,
}) => {
  const currentEntry = content[currentIndex - 1];
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={symptomsIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Symptoms Logs</span>
        </div>
      </Title>
      <Divider />
      {content.length === 0 ? (
        <Empty
          description={<Typography.Text>No logs for this day</Typography.Text>}
        />
      ) : (
        <Descriptions column={1} bordered size="medium">
          <Descriptions.Item label="Symptoms" style={descriptionLabelStyle}>
            {/* <Text strong style={descriptionStyle}>
                {currentEntry?.symptoms || "N/A"}
              </Text> */}
            {renderListAsTags(currentEntry?.symptoms, "red")}
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
            <Text style={descriptionStyle}>
              {currentEntry?.reliefMeasures || "N/A"}
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

export const MoodsComponent = ({ content, currentIndex, setCurrentIndex }) => {
  const currentEntry = content[currentIndex - 1];
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={moodsIcon} alt="meal_icon" style={iconStyle} />
          <span style={titleStyle}>Moods & Feelings Logs</span>
        </div>
      </Title>
      <Divider />{" "}
      {content.length === 0 ? (
        <Empty
          description={<Typography.Text>No logs for this day</Typography.Text>}
        />
      ) : (
        <>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item
              label="Overall Mood"
              style={descriptionLabelStyle}
            >
              <Text strong style={descriptionStyle}>
                {currentEntry?.overallMood || "N/A"}
              </Text>
            </Descriptions.Item>

            <Descriptions.Item
              label="Intensity Level"
              style={descriptionLabelStyle}
            >
              <Text style={descriptionStyle}>
                {currentEntry?.intensityLevel || "N/A"}
              </Text>
            </Descriptions.Item>

            <Descriptions.Item label="Triggers" style={descriptionLabelStyle}>
              {renderListAsTags(currentEntry?.trigger, "orange")}
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
          </Descriptions>{" "}
          <Collapse style={{ marginTop: "0.2rem" }}>
            <Panel
              header={
                <span style={descriptionLabelStyle}>Additional Notes</span>
              }
              key="1"
            >
              <p style={descriptionStyle}>{currentEntry?.notes || "N/A"}</p>
            </Panel>
          </Collapse>
        </>
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

function FeedbackDiaryPage() {
  return <div>FeedbackDiaryPage</div>;
}

export default FeedbackDiaryPage;
