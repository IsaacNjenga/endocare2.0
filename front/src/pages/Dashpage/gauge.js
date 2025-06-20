import React from "react";
import { Gauge } from "@mui/x-charts";
import { Card, Spin, Typography } from "antd";
import { FireOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function GaugeDisplay({ cardStyle, diaryData, diaryLoading }) {
  console.log(diaryData);
  return (
    <>
      <Card
        style={{
          ...cardStyle,
          borderRadius: "12px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        {diaryLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="middle" />
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: 2 }}>
              <Title
                level={4}
                style={{ fontFamily: "Raleway", marginBottom: 0 }}
              >
                <FireOutlined style={{ color: "#fa541c", marginRight: 8 }} />
                Days Logged This Month
              </Title>
              <Text type="secondary">Your current logging streak</Text>
            </div>

            <Gauge
              value={diaryData?.daysLogged || 12}
              valueMax={30}
              startAngle={-110}
              endAngle={110}
              sx={{
                fontSize: 28,
                transform: "translate(0px, 0px)",
                fontFamily: "Raleway",
                "& .MuiChartsGauge-valueText": {
                  fill: "#333",
                },
              }}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
          </div>
        )}
      </Card>
    </>
  );
}

export default GaugeDisplay;
