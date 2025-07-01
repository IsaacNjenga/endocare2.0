import React, { useState } from "react";
import { Col, Divider, Row, Typography, Button, Spin } from "antd";
import {
  MealsEntry,
  MedicationsEntry,
  BloodSugarEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
  MoodsEntry,
} from "../../components/diaryPageComponents";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import UpdateDiary from "./updateDiary";
import useFetchDiaryData from "../../hooks/fetchDiaryData";
import { useContext } from "react";
import { UserContext } from "../../App";
import useFetchFeedbackByDiaryId from "../../hooks/fetchFeedbackByDiaryId";
import FeedbackModal from "../MyPatients/feedbackModal";

const colStyle = { margin: "15px 0px" };

function DiaryContent() {
  const { date } = useParams();
  const navigate = useNavigate();
  const [openDiaryModal, setOpenDiaryModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const { diaryData, diaryLoading, diaryRefresh } = useFetchDiaryData(userId);

  const diaryForDate = diaryData.find(
    (entry) => entry.entryDate === format(new Date(date), "yyyy-MM-dd")
  );

  const currentDiaryId = diaryForDate?._id;
  const { feedback, feedbackLoading } =
    useFetchFeedbackByDiaryId(currentDiaryId);

  const groupedFeedback =
    feedback?.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }
      acc[item.section].push(item);
      return acc;
    }, {}) || {};

  if (diaryLoading || feedbackLoading)
    return <Spin tip="Loading. Please wait..." fullscreen />;
  return (
    <>
      <div style={{ margin: 10 }}>
        {" "}
        <Button danger onClick={() => navigate("/diary")}>
          Back
        </Button>
        <Typography.Title
          style={{
            fontFamily: "Raleway",
            display: "flex",
            justifyContent: "right",
            marginBottom: 24,
          }}
        >
          {format(new Date(date), "EEEE, do MMMM yyyy")}{" "}
          {date === format(new Date(), "yyyy-MM-dd") ? `(Today)` : null}
        </Typography.Title>
        <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
        <div style={{ margin: "10px 12px" }}>
          <Row gutter={24}>
            <Col span={12} style={colStyle}>
              <MealsEntry
                diaryLoading={diaryLoading}
                content={diaryForDate?.mealLogs}
                setOpenDiaryModal={setOpenDiaryModal}
                setModalContent={setModalContent}
                setLoading={setLoading}
                setSectionName={setSectionName}
                user={user}
                groupedFeedback={groupedFeedback}
                setOpenFeedbackModal={setOpenFeedbackModal}
              />
            </Col>

            <Col span={12} style={colStyle}>
              <MedicationsEntry
                diaryLoading={diaryLoading}
                content={diaryForDate?.medicationsLogs}
                setOpenDiaryModal={setOpenDiaryModal}
                setModalContent={setModalContent}
                setLoading={setLoading}
                setSectionName={setSectionName}
                user={user}
                groupedFeedback={groupedFeedback}
                setOpenFeedbackModal={setOpenFeedbackModal}
              />
            </Col>

            <Col span={12} style={colStyle}>
              <BloodSugarEntry
                diaryLoading={diaryLoading}
                content={diaryForDate?.bloodSugarLogs}
                setOpenDiaryModal={setOpenDiaryModal}
                setModalContent={setModalContent}
                setSectionName={setSectionName}
                setLoading={setLoading}
                user={user}
                groupedFeedback={groupedFeedback}
                setOpenFeedbackModal={setOpenFeedbackModal}
              />
            </Col>

            <Col span={12} style={colStyle}>
              <PhysicalActivityEntry
                diaryLoading={diaryLoading}
                content={diaryForDate?.physicalActivityLogs}
                setOpenDiaryModal={setOpenDiaryModal}
                setModalContent={setModalContent}
                setSectionName={setSectionName}
                setLoading={setLoading}
                user={user}
                groupedFeedback={groupedFeedback}
                setOpenFeedbackModal={setOpenFeedbackModal}
              />
            </Col>

            <Col span={12} style={colStyle}>
              <SymptomsEntry
                diaryLoading={diaryLoading}
                content={diaryForDate?.symptomsLogs}
                setOpenDiaryModal={setOpenDiaryModal}
                setModalContent={setModalContent}
                setSectionName={setSectionName}
                setLoading={setLoading}
                user={user}
                groupedFeedback={groupedFeedback}
                setOpenFeedbackModal={setOpenFeedbackModal}
              />
            </Col>

            <Col span={12} style={colStyle}>
              <MoodsEntry
                diaryLoading={diaryLoading}
                content={diaryForDate?.moodLogs}
                setOpenDiaryModal={setOpenDiaryModal}
                setModalContent={setModalContent}
                setSectionName={setSectionName}
                setLoading={setLoading}
                user={user}
                groupedFeedback={groupedFeedback}
                setOpenFeedbackModal={setOpenFeedbackModal}
              />
            </Col>
          </Row>
        </div>
      </div>

      <UpdateDiary
        openDiaryModal={openDiaryModal}
        setOpenDiaryModal={setOpenDiaryModal}
        modalContent={modalContent}
        loading={loading}
        sectionName={sectionName}
        user={user}
        currentDiaryId={currentDiaryId}
        diaryRefresh={diaryRefresh}
      />

      <FeedbackModal
        openFeedbackModal={openFeedbackModal}
        setOpenFeedbackModal={setOpenFeedbackModal}
        groupedFeedback={groupedFeedback}
        user={user}
        modalContent={modalContent}
        loading={loading}
        sectionName={sectionName}
        diaryId={currentDiaryId}
      />
    </>
  );
}

export default DiaryContent;
