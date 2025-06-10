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

const colStyle = { margin: "15px 0px" };

function MyPatientsDiary() {
  const { date, id } = useParams();
  const navigate = useNavigate();
  const { diaryData, diaryLoading } = useFetchDiaryData(id);
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { user } = useContext(UserContext);

  const diaryForDate = diaryData.find(
    (entry) => entry.entryDate === format(new Date(date), "yyyy-MM-dd")
  );

  if (diaryLoading) return <Spin tip="Loading. Please wait..." />;

  return (
    <>
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
            />
          </Col>
        </Row>
      </div>

      <FeedbackModal
        openFeedbackModal={openFeedbackModal}
        setOpenFeedbackModal={setOpenFeedbackModal}
        user={user}
        modalContent={modalContent}
        loading={loading}
        sectionName={sectionName}
      />
    </>
  );
}

export default MyPatientsDiary;
