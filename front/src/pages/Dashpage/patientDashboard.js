import React, { useState } from "react";
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
} from "antd";
import {
  PlusOutlined,
  CoffeeOutlined,
  MedicineBoxOutlined,
  LineChartOutlined,
  FireOutlined,
  SmileOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import useFetchDiaryData from "../../hooks/fetchDiaryData";
import dayjs from "dayjs";
import {
  BloodSugarEntry,
  MealsEntry,
  MedicationsEntry,
  MoodsEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
} from "../../components/diaryPageComponents";
import useFetchFeedbackByDiaryId from "../../hooks/fetchFeedbackByDiaryId";
import FeedbackModal from "../MyPatients/feedbackModal";
import GaugeDisplay from "./gauge";

const { Title, Text } = Typography;

const PanelItems = ({ entryData, user }) => {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const { feedback } = useFetchFeedbackByDiaryId(
    entryData._id ? entryData._id : null
  );

  const groupedFeedback =
    feedback?.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }
      acc[item.section].push(item);
      return acc;
    }, {}) || {};

  const { token } = theme.useToken();
  const iconStyle = { marginRight: 8, fontSize: 18, color: token.colorPrimary };
  const titleStyle = { color: token.colorPrimary };
  const items = [
    {
      key: "1",
      label: (
        <span style={titleStyle}>
          <CoffeeOutlined style={iconStyle} />
          Meal Logs
        </span>
      ),
      children: (
        <MealsEntry
          content={entryData?.mealLogs}
          groupedFeedback={groupedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          setModalContent={setModalContent}
          setSectionName={setSectionName}
          user={user}
          setLoading={setLoading}
        />
      ),
    },
    {
      key: "2",
      label: (
        <span style={titleStyle}>
          <MedicineBoxOutlined style={iconStyle} />
          Medications Logs
        </span>
      ),
      children: (
        <MedicationsEntry
          content={entryData?.medicationsLogs}
          groupedFeedback={groupedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          setModalContent={setModalContent}
          setSectionName={setSectionName}
          user={user}
          setLoading={setLoading}
        />
      ),
    },
    {
      key: "3",
      label: (
        <span style={titleStyle}>
          <LineChartOutlined style={iconStyle} />
          Blood Sugar Logs
        </span>
      ),
      children: (
        <BloodSugarEntry
          content={entryData?.bloodSugarLogs}
          groupedFeedback={groupedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          setModalContent={setModalContent}
          setSectionName={setSectionName}
          user={user}
          setLoading={setLoading}
        />
      ),
    },
    {
      key: "4",
      label: (
        <span style={titleStyle}>
          <FireOutlined style={iconStyle} />
          Physical Activity Logs
        </span>
      ),
      children: (
        <PhysicalActivityEntry
          content={entryData?.physicalActivityLogs}
          groupedFeedback={groupedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          setModalContent={setModalContent}
          setSectionName={setSectionName}
          user={user}
          setLoading={setLoading}
        />
      ),
    },
    {
      key: "5",
      label: (
        <span style={titleStyle}>
          <HeartOutlined style={iconStyle} />
          Symptoms Logs
        </span>
      ),
      children: (
        <SymptomsEntry
          content={entryData?.symptomsLogs}
          groupedFeedback={groupedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          setModalContent={setModalContent}
          setSectionName={setSectionName}
          user={user}
          setLoading={setLoading}
        />
      ),
    },
    {
      key: "6",
      label: (
        <span style={titleStyle}>
          <SmileOutlined style={iconStyle} />
          Mood Logs
        </span>
      ),
      children: (
        <MoodsEntry
          content={entryData?.moodLogs}
          groupedFeedback={groupedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          setModalContent={setModalContent}
          setSectionName={setSectionName}
          user={user}
          setLoading={setLoading}
        />
      ),
    },
  ];

  return (
    <>
      <Collapse
        accordion
        items={items}
        expandIconPosition="start"
        style={{
          background: token.colorBgContainer,
          borderRadius: token.borderRadiusLG,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "8px",
        }}
      />
      <FeedbackModal
        openFeedbackModal={openFeedbackModal}
        setOpenFeedbackModal={setOpenFeedbackModal}
        groupedFeedback={groupedFeedback}
        user={user}
        modalContent={modalContent}
        loading={loading}
        sectionName={sectionName}
        diaryId={entryData._id}
      />
    </>
  );
};

const PatientDashboard = ({ markerStyle, cardStyle, user }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const userId = user?._id;
  const { diaryData, diaryLoading } = useFetchDiaryData(userId);
  const [entryData, setEntryData] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const dateStr = date.format("YYYY-MM-DD");
    const hasEntry = diaryData?.some((entry) => entry.entryDate === dateStr);

    if (hasEntry) {
      const entryForDate = diaryData.find(
        (entry) => entry.entryDate === dateStr
      );
      setEntryData(entryForDate);
    } else {
      setEntryData({});
    }
  };

  const today = new Date();
  const todayFormatted = format(today, "EEEE, do MMMM yyyy");

  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const hasEntry = diaryData?.some((entry) => entry.entryDate === dateStr);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip title={hasEntry ? "Click to select" : "Diary not filled"}>
          <span
            style={{
              ...markerStyle,
              background: hasEntry ? "#1677ff" : "#f83d1200",
              cursor: hasEntry ? "pointer" : "default",
            }}
          />
        </Tooltip>
      </div>
    );
  };

  if (diaryLoading) return <Spin tip="Loading. Please Wait..." fullscreen />;

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
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/diary/create-entry")}
            size="large"
          >
            Create A Diary Entry
          </Button>
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
              📌 Don't forget to check in on your latest health stats, moods,
              logs and your specialist's feedback.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <GaugeDisplay
            cardStyle={cardStyle}
            diaryData={diaryData}
            diaryLoading={diaryLoading}
          />
        </Col>
      </Row>

      <Divider />

      {/* Calendar Section */}
      <Title level={2} style={{ marginBottom: 12 }}>
        View Past Entries
      </Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12}>
          <Card style={{ ...cardStyle, padding: 0 }}>
            <Calendar
              fullscreen={false}
              onSelect={handleDateSelect}
              cellRender={dateCellRender}
              disabledDate={(current) =>
                current && current > dayjs().endOf("day")
              }
              style={{ borderRadius: "12px" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12}>
          {selectedDate && (
            <Card style={cardStyle}>
              <Title level={5} style={{ marginBottom: 12 }}>
                📝 Entry Details for {selectedDate.format("MMM D, YYYY")}
              </Title>
              {entryData ? (
                <PanelItems entryData={entryData} user={user} />
              ) : (
                <p style={{ color: "#999" }}>No data for this date.</p>
              )}
            </Card>
          )}
        </Col>
      </Row>

      <Divider />

      {/* Chart Section */}
      {/* <Card style={{ ...cardStyle, marginTop: 24 }}>
        <Title level={4} style={{ marginBottom: 12 }}>
          📈 Trends & Insights
        </Title>
        <Chart
          cardStyle={cardStyle}
          diaryData={diaryData}
          diaryLoading={diaryLoading}
        />
      </Card> */}
    </div>
  );
};

export default PatientDashboard;
