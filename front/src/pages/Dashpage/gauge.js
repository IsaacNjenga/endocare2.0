import React, { useMemo } from "react";
import { Gauge } from "@mui/x-charts";
import { Card, Spin, Typography } from "antd";
import { FireOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function GaugeDisplay({ cardStyle, diaryData, diaryLoading }) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const daysLoggedThisMonth = useMemo(() => {
    if (!diaryData || diaryData.length === 0) return 0;

    const uniqueDays = new Set();
    diaryData.forEach((entry) => {
      const date = new Date(entry.entryDate);
      if (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      ) {
        const key = date.toISOString().split("T")[0];
        uniqueDays.add(key);
      }
    });

    return uniqueDays.size;
  }, [diaryData, currentMonth, currentYear]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

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
              <Text type="secondary">Your current diary logging streak</Text>
            </div>

            <Gauge
              value={daysLoggedThisMonth}
              valueMax={daysInMonth}
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
