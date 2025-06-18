import React from "react";
import { BarChart, LineChart } from "@mui/x-charts";
import { Card, Col, Row, Typography } from "antd";
const { Title } = Typography;


function Chart({cardStyle}) {
  return (
    <div style={{}}>
      <Row gutter={[20, 20]}>
        <Col xs={28} sm={24} md={18} lg={12}>
          <Card hoverable style={cardStyle}>
            <Title level={3}>📈 Trends</Title>
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={300}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"] }]}
            />
          </Card>
        </Col>
        <Col xs={28} sm={24} md={18} lg={12}>
          <Card hoverable style={cardStyle}>
            <Title level={3}>📈 Trends</Title>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              height={300}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Chart;
