import React, { useContext, useState } from "react";
import { Col, Divider, Row, Typography, Button, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  MealsEntry,
  MedicationsEntry,
  BloodSugarEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
  MoodsEntry,
} from "../../components/diaryPageComponents";
import useFetchDiaryData from "../../hooks/fetchDiaryData";
import { UserContext } from "../../App";
import FeedbackModal from "./feedbackModal";
import useFetchFeedbackByDiaryId from "../../hooks/fetchFeedbackByDiaryId";

const colStyle = { margin: "15px 0px" };

// const sectionNames = [
//   "mealLogs",
//   "bloodSugarLogs",
//   "physicalActivityLogs",
//   "symptomsLogs",
//   "moodLogs",
//   "medicationsLogs",
// ];

function MyPatientsDiary() {
  const { date, id } = useParams();
  const navigate = useNavigate();
  const { diaryData, diaryLoading, diaryRefresh } = useFetchDiaryData(id);
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { user } = useContext(UserContext);

  const diaryForDate = diaryData.find(
    (entry) => entry.entryDate === format(new Date(date), "yyyy-MM-dd")
  );

  const diaryId = diaryForDate?._id;
  const { feedback, feedbackLoading, feedbackRefresh } =
    useFetchFeedbackByDiaryId(diaryId);

  const groupedFeedback =
    feedback?.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }
      acc[item.section].push(item);
      return acc;
    }, {}) || {};

  //console.log(groupedFeedback);
  // sectionNames.forEach((section) => {
  //   const sectionFeedback = groupedFeedback[section] || [];
  //   console.log(sectionFeedback);
  // });

  if (diaryLoading || feedbackLoading)
    return <Spin tip="Loading. Please wait..." fullscreen />;

  return (
    <div style={{ margin: 10 }}>
      <Button
        danger
        onClick={() => {
          navigate(`/my-patients/${id}`);
        }}
      >
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
        {date === format(new Date(), "yyyy-MM-dd") ? `(Today)` : null}{" "}
      </Typography.Title>
      <Divider style={{ borderColor: "#00152a" }} dashed size="large" />
      <div style={{ margin: "10px 12px" }}>
        <Row gutter={24}>
          <Col span={12} style={colStyle}>
            <MealsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.mealLogs}
              user={user}
              setOpenFeedbackModal={setOpenFeedbackModal}
              setModalContent={setModalContent}
              setSectionName={setSectionName}
              setLoading={setLoading}
              groupedFeedback={groupedFeedback}
              currentDiaryId={diaryId}
              diaryRefresh={diaryRefresh}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <MedicationsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.medicationsLogs}
              user={user}
              setOpenFeedbackModal={setOpenFeedbackModal}
              setModalContent={setModalContent}
              setSectionName={setSectionName}
              setLoading={setLoading}
              groupedFeedback={groupedFeedback}
              currentDiaryId={diaryId}
              diaryRefresh={diaryRefresh}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <BloodSugarEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.bloodSugarLogs}
              user={user}
              setOpenFeedbackModal={setOpenFeedbackModal}
              setModalContent={setModalContent}
              setSectionName={setSectionName}
              setLoading={setLoading}
              groupedFeedback={groupedFeedback}
              currentDiaryId={diaryId}
              diaryRefresh={diaryRefresh}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <PhysicalActivityEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.physicalActivityLogs}
              user={user}
              setOpenFeedbackModal={setOpenFeedbackModal}
              setModalContent={setModalContent}
              setSectionName={setSectionName}
              setLoading={setLoading}
              groupedFeedback={groupedFeedback}
              currentDiaryId={diaryId}
              diaryRefresh={diaryRefresh}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <SymptomsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.symptomsLogs}
              user={user}
              setOpenFeedbackModal={setOpenFeedbackModal}
              setModalContent={setModalContent}
              setSectionName={setSectionName}
              setLoading={setLoading}
              groupedFeedback={groupedFeedback}
              currentDiaryId={diaryId}
              diaryRefresh={diaryRefresh}
            />
          </Col>
          <Col span={12} style={colStyle}>
            <MoodsEntry
              diaryLoading={diaryLoading}
              content={diaryForDate?.moodLogs}
              user={user}
              setOpenFeedbackModal={setOpenFeedbackModal}
              setModalContent={setModalContent}
              setSectionName={setSectionName}
              setLoading={setLoading}
              groupedFeedback={groupedFeedback}
              currentDiaryId={diaryId}
              diaryRefresh={diaryRefresh}
            />
          </Col>
        </Row>
      </div>
      {/* <div>
        {groupedFeedback &&
          sectionNames?.map((section) => (
            <div key={section}>
              <h3>{section}</h3>
              {groupedFeedback[section]?.length > 0 ? (
                groupedFeedback[section].map((fb) => (
                  <p key={fb._id}>{fb.feedback}</p>
                ))
              ) : (
                <p>No feedback yet.</p>
              )}
            </div>
          ))}
      </div> */}

      <FeedbackModal
        openFeedbackModal={openFeedbackModal}
        setOpenFeedbackModal={setOpenFeedbackModal}
        user={user}
        modalContent={modalContent}
        loading={loading}
        sectionName={sectionName}
        diaryId={diaryId}
        feedbackRefresh={feedbackRefresh}
        groupedFeedback={groupedFeedback}
      />
    </div>
  );
}

export default MyPatientsDiary;
