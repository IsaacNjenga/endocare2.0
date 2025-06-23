import React from "react";
import {
  Typography,
  Button,
  Divider,
  Row,
  Col,
  Card,
  Calendar,
  Tooltip,
  Spin,
  Collapse,
  theme,
  Statistic,
} from "antd";
import {
  PlusOutlined,
  CoffeeOutlined,
  MedicineBoxOutlined,
  LineChartOutlined,
  FireOutlined,
  SmileOutlined,
  HeartOutlined,
  EyeOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import DocGauge from "./docGauge";
import useFetchMyPatients from "../../hooks/fetchMyPatients";

const { Title, Text } = Typography;

function DoctorDashboard({ markerStyle, cardStyle, user }) {
  const navigate = useNavigate();
  const userId = user?._id;
  const { myPatients, myPatientsLoading } = useFetchMyPatients(userId);

  const today = new Date();
  const todayFormatted = format(today, "EEEE, do MMMM yyyy");

  if (myPatientsLoading)
    return <Spin tip="Loading. Please wait..." fullscreen size="large" />;

  return (
    <div
      style={{
        padding: "32px 24px",
        background: "#f5f8fc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Title level={1} style={{ fontFamily: "Raleway", marginBottom: 0 }}>
            Dashboard
          </Title>
        </Col>
      </Row>
      <Divider />
      {/* Today’s Overview */}
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12}>
          <Card style={cardStyle}>
            <Title level={2} style={{ marginBottom: 20 }}>
              Today: {todayFormatted}
            </Title>
            <Text type="secondary" style={{ fontSize: "20px", color: "#333" }}>
              📌 Don't forget to check in on your patients' health stats and
              logs. They are awaiting your feedback.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Card style={cardStyle}>
            <DocGauge myPatients={myPatients} navigate={navigate} />
          </Card>
        </Col>
      </Row>
      <Divider />
      <br /> Upcoming appointments
      <br /> Pending Feedback
    </div>
  );
}

export default DoctorDashboard;
