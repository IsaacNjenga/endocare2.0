import {
  Avatar,
  Button,
  Card,
  Divider,
  List,
  Skeleton,
  Typography,
} from "antd";
import React, { useState } from "react";
import ReviewModal from "./reviewModal";

const { Title, Text } = Typography;

const cardStyle = {
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 21, 42, 0.29)",
  background: "#fff",
  padding: "16px",
  height: "100%",
  border: "1px solid rgba(43, 44, 45, 0.31)",
};

const ipsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const pic =
  "https://images.unsplash.com/photo-1582456891925-a53965520520?w=900&auto=format&fit=crop&q=60";

const list = [
  {
    key: 1,
    firstName: "John",
    lastName: "Doe",
    avatar: "0",
    email: "email@email.com",
    reviewText: ipsum,
  },
  {
    key: 2,
    firstName: "Mary",
    lastName: "Doe",
    avatar: pic,
    email: "email@email.com",
    reviewText: ipsum,
  },
  {
    key: 3,
    firstName: "Jane",
    lastName: "Doe",
    avatar: pic,
    email: "email@email.com",
    reviewText: ipsum,
  },
  {
    key: 4,
    firstName: "David",
    lastName: "Doe",
    avatar: pic,
    email: "email@email.com",
    reviewText: ipsum,
  },
];

function Reviews() {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const viewReview = (review) => {
    setLoading(true);
    setModalContent(review);
    setOpenReviewModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <>
      <div style={{ padding: 8, margin: "10px 0px" }}>
        <Title level={1} style={{ fontFamily: "Raleway" }}>
          EndoAI Reviews
        </Title>
        <Divider style={{ borderColor: "#333" }} dashed size="large" />
        <Card style={cardStyle}>
          {" "}
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="primary"
                    onClick={() => {
                      viewReview(item.reviewText);
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
                        src={item.avatar}
                        size={60}
                        style={{ background: "#00152a" }}
                      >
                        {item.firstName.charAt(0)}
                        {item.lastName.charAt(0)}
                      </Avatar>
                    }
                    title={
                      <Text type="primary">
                        {item.firstName} {item.lastName}
                      </Text>
                    }
                    description={<>{item.email}</>}
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
        />
      </div>
    </>
  );
}

export default Reviews;
