import {
  Avatar,
  Button,
  Card,
  Empty,
  List,
  Skeleton,
  Spin,
  Tooltip,
  Typography,
} from "antd";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App.js";
import { UndoOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import useFetchPatientResponses from "../../hooks/fetchPatientResponses.js";
import ReviewModal from "../Reviews/reviewModal.js";

const { Text } = Typography;

const cardStyle = {
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 21, 42, 0.29)",
  background: "#fff",
  padding: "16px",
  height: "100%",
  border: "1px solid rgba(43, 44, 45, 0.31)",
};

function Responses() {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { allResponses, allResponsesLoading, responsesRefresh } =
    useFetchPatientResponses(userId);

  console.log(allResponses);

  const flattened = (allResponses || []).filter((r) => r && r._id);

  const viewReview = (response) => {
    const review = {
      review: response?.reviewId.review,
      response: response?.response,
      diaryId: response?.diaryId,
      patientId: response?.patientId._id,
      reviewId: response?.reviewId._id,
    };
    setLoading(true);
    setModalContent(review);
    setOpenReviewModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  if (!allResponsesLoading && flattened.length === 0)
    return (
      <div>
        <Empty />
      </div>
    );
  if (allResponsesLoading)
    return <Spin fullscreen tip="Loading. Please wait..." />;

  return (
    <>
      <div style={{ padding: 8, margin: "0px" }}>
        <Card style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "0px 10px",
            }}
          >
            <Tooltip title="Refresh">
              <Button
                icon={<UndoOutlined />}
                danger
                onClick={() => {
                  responsesRefresh();
                }}
              />
            </Tooltip>
          </div>

          <List
            itemLayout="horizontal"
            dataSource={flattened}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="primary"
                    onClick={() => {
                      viewReview(item);
                    }}
                  >
                    View
                  </Button>,
                ]}
              >
                <Skeleton avatar title={false} loading={false} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={item.patientId.avatar}
                        size={60}
                        style={{ background: "#00152a" }}
                      >
                        {item.patientId.firstName.charAt(0)}
                        {item.patientId.lastName.charAt(0)}
                      </Avatar>
                    }
                    title={
                      <Text type="primary">
                        Diary Date: {item.diaryId.entryDate}
                      </Text>
                    }
                    description={
                      <>
                        Responded On:{" "}
                        {format(new Date(item.createdAt), "yyyy-MM-dd, p")}
                      </>
                    }
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        </Card>
        <ReviewModal
          openReviewModal={openReviewModal}
          loading={loading}
          modalContent={modalContent}
          setOpenReviewModal={setOpenReviewModal}
          user={user}
        />
      </div>
    </>
  );
}

export default Responses;
