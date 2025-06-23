import { TeamOutlined } from "@ant-design/icons";
import {
  Avatar,
  Statistic,
  Typography,
  Card,
  Tooltip,
  Divider,
  Button,
} from "antd";
import React from "react";

const { Title, Text } = Typography;

const iconStyle = {
  padding: "6px",
  fontSize: 24,
};

function DocGauge({ myPatients, navigate }) {
  const myPatientsCount = myPatients?.length;

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Title level={3} style={{ margin: 0, fontFamily: "Raleway" }}>
              My Patients
            </Title>
            <Text type="secondary">Total assigned to you</Text>
          </div>
          <div>
            <Button type="primary" onClick={() => navigate(`/my-patients`)}>
              View all my patients
            </Button>
          </div>
        </div>
      </div>

      <Statistic
        value={myPatientsCount}
        precision={0}
        valueStyle={{
          color: "#3f8600",
          fontSize: 28,
          marginTop: 12,
          fontWeight: "bold",
        }}
        suffix=""
      />

      <Divider style={{ margin: "5px 0" }} />

      <Text
        strong
        style={{ fontFamily: "Roboto", marginBottom: 8, display: "block" }}
      >
        Recent Patients
      </Text>

      <Avatar.Group
        size="large"
        max={{
          count: 4,
          style: {
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            cursor: "pointer",
          },
          popover: { trigger: "click" },
        }}
      >
        {myPatients?.map((patient, index) => (
          <Tooltip
            key={index}
            title={`${patient?.createdBy?.firstName} ${patient?.createdBy?.lastName}`}
          >
            <Avatar
              size={60}
              src={patient?.createdBy?.avatar}
              style={{ cursor: "pointer", fontWeight: 600 }}
              onClick={() => {
                navigate(`/my-patients/${patient?.createdBy?._id}`);
              }}
            >
              {patient?.createdBy?.firstName?.[0]}
              {patient?.createdBy?.lastName?.[0]}
            </Avatar>
          </Tooltip>
        ))}
      </Avatar.Group>
    </>
  );
}

export default DocGauge;
