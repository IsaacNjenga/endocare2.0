import React from "react";
import useFetchMyPatientDiary from "../../hooks/fetchMyPatientDiary";
import { Avatar, Button, Divider, List, Skeleton, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { format, formatDistanceToNow, formatRelative, parse } from "date-fns";

function SinglePatientDiary({ patientId }) {
  const navigate = useNavigate();
  const { myPatientDiary, patientDiaryLoading } =
    useFetchMyPatientDiary(patientId);

  const flattened = (myPatientDiary || []).filter((d) => d && d._id);

  const renderDate = (date) => {
    const formatted = `${formatDistanceToNow(new Date(date))} ago`;
    return formatted;
  };

  // If no entries, skip rendering completely
  if (!patientDiaryLoading && flattened.length === 0) return null;

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={flattened}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  navigate(
                    `/my-patients/${item.createdBy._id}/date/${item.entryDate}`
                  );
                }}
              >
                View
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={patientDiaryLoading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.createdBy.avatar} size={60}>
                    {item.createdBy.firstName} {item.createdBy.lastName}
                  </Avatar>
                }
                title={
                  <Typography.Text type="primary">
                    {item.createdBy.firstName} {item.createdBy.lastName}
                  </Typography.Text>
                }
                description={
                  <>
                    {item.createdBy.email}
                    <Divider type="vertical" />
                    {renderDate(item.entryDate)} ({item.entryDate})
                  </>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}

export default SinglePatientDiary;
