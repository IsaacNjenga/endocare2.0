import React, { useState } from "react";
import {
  Typography,
  Button,
  Divider,
  Row,
  Col,
  Card,
  Calendar,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const today = new Date();
  const todayFormatted = format(today, "EEEE, do MMMM yyyy");

  return (
    <div style={{ padding: 24 }}>
      {/* Header */}
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={3} style={{ fontFamily: "Raleway" }}>
            🧠 Health Diary Dashboard
          </Title>
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/diary/create-entry")}
          >
            Create Entry
          </Button>
        </Col>
      </Row>

      <Divider />

      {/* Today's Overview */}
      <Card style={{ marginBottom: 24 }}>
        <Title level={4}>📌 Today: {todayFormatted}</Title>
        <Space direction="vertical">
          <Text>Mood: 😊 Happy</Text>
          <Text>Sleep: 7 hrs</Text>
          <Text>Water Intake: 1.5L</Text>
          <Text>Cravings: Low</Text>
        </Space>
      </Card>

      {/* Entry Section (placeholder for meals, meds, etc.) */}
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="🍽️ Meals" bordered>
            <Text>No entries yet for today</Text>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="💊 Medications" bordered>
            <Text>No entries yet for today</Text>
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Calendar */}
      <Title level={4}>📅 View Past Entries</Title>
      <Calendar fullscreen={false} onSelect={handleDateSelect} />

      {selectedDate && (
        <Card style={{ marginTop: 16 }}>
          <Title level={5}>
            Entries for: {selectedDate.format("dddd, Do MMMM YYYY")}
          </Title>
          <Text>(Render diary entries here based on the selected date)</Text>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
