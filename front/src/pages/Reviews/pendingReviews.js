import {
  Avatar,
  Button,
  Card,
  Empty,
  List,
  Skeleton,
  Spin,
  Typography,
} from "antd";
import React, { useContext, useState } from "react";
import ReviewModal from "./reviewModal";
import { UserContext } from "../../App.js";
import useFetchReviews from "../../hooks/fetchReviews.js";

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

function PendingReviews() {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { allReviews, reviewsLoading, reviewsRefresh } =
    useFetchReviews(userId);

  const flattened = (allReviews || []).filter((r) => r && r._id);

  const viewReview = (review) => {
    setLoading(true);
    setModalContent(review);
    setOpenReviewModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  if (!reviewsLoading && flattened.length === 0)
    return (
      <div>
        <Empty description="No pending responses" />
      </div>
    );
  if (reviewsLoading) return <Spin fullscreen tip="Loading. Please wait..." />;

  return (
    <>
      <div style={{ padding: 8, margin: "0px" }}>
        <Card style={cardStyle}>
          {" "}
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
                        src={item.createdBy.avatar}
                        size={60}
                        style={{ background: "#00152a" }}
                      >
                        {item.createdBy.firstName.charAt(0)}
                        {item.createdBy.lastName.charAt(0)}
                      </Avatar>
                    }
                    title={
                      <Text type="primary">
                        {item.createdBy.firstName} {item.createdBy.lastName}
                      </Text>
                    }
                    description={<>{item.createdBy.email}</>}
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
          reviewsRefresh={reviewsRefresh}
        />
      </div>
    </>
  );
}

export default PendingReviews;
