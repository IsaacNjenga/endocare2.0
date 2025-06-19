import React, { useContext, useState } from "react";
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
import Chart from "./chart";
import { UserContext } from "../../App";
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

const { Title } = Typography;

const markerStyle = {
  display: "inline-block",
  width: 6,
  height: 6,
  borderRadius: "50%",
  margin: "auto",
};

const cardStyle = { width: "100%", boxShadow: "2px 5px 6px 0px #00152a" };

const PanelItems = ({ entryData, user }) => {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sectionName, setSectionName] = useState("");

  const { feedback, feedbackLoading } = useFetchFeedbackByDiaryId(
    entryData._id
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

  if (feedbackLoading) return <Spin tip="Loading. Please Wait..." fullscreen />;

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

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useContext(UserContext);
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
    <div style={{ padding: 24 }}>
      {/* Header */}
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={3} style={{ fontFamily: "Raleway" }}>
            Dashboard
          </Title>
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/diary/create-entry")}
          >
            Create An Entry
          </Button>
        </Col>
      </Row>

      <Divider />

      {/* Today's Overview */}
      <Card style={cardStyle}>
        <Title level={4}>📌 Today: {todayFormatted}</Title>
      </Card>

      <Divider />

      {/* Calendar */}
      <Title level={4}>📅 View Past Entries</Title>
      <Row gutter={[20, 20]}>
        <Col xs={28} sm={24} md={18} lg={12}>
          <div
            style={{
              padding: 10,
              background: "rgb(0,0,0,0)",
              borderRadius: "8px",
            }}
          >
            <Calendar
              fullscreen={false}
              onSelect={handleDateSelect}
              style={cardStyle}
              cellRender={dateCellRender}
              disabledDate={(current) =>
                current && current > dayjs().endOf("day")
              }
            />
          </div>
        </Col>
        <Col xs={28} sm={24} md={18} lg={12}>
          {selectedDate && (
            <div style={cardStyle}>
              {entryData && <PanelItems entryData={entryData} user={user} />}
            </div>
          )}
        </Col>
      </Row>

      <Divider />
      <Chart cardStyle={cardStyle} />
    </div>
  );
};

export default Dashboard;
