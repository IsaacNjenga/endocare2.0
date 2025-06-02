import React, { useState } from "react";
import { Col, Divider, Row, Typography, Button } from "antd";
import {
  MealsEntry,
  MedicationsEntry,
  BloodSugarEntry,
  PhysicalActivityEntry,
  SymptomsEntry,
  MoodsEntry,
} from "./diaryPageComponents";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
//import { diaryValues } from "../assets/data/data";
import UpdateDiary from "../pages/Diary/updateDiary";
import useFetchDiaryData from "../hooks/fetchDiaryData";
import { useContext } from "react";
import { UserContext } from "../App";

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
  const { diaryData, diaryLoading } = useFetchDiaryData(userId);

  const diaryForDate = diaryData.find(
    (entry) => entry.entryDate === format(new Date(date), "yyyy-MM-dd")
  );

  return (
    <>
      <div>
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
      />
    </>
  );
}

export default DiaryContent;
