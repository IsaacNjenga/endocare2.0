import React, { useContext } from "react";
import GridMotion from "../components/gridMotion";
import {
  pic,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
} from "../assets/data/data";
import { Typography, Row, Col, Card } from "antd";

import Aurora from "../components/auroraComponent";

const { Title, Paragraph } = Typography;

const imgStyle = {
  objectFit: "cover",
  width: "100%",
  height: "200px",
  borderRadius: "12px",
};

const pics = [
  pic,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic4,
  pic3,
  pic2,
  pic,
  pic8,
  pic,
  pic6,
  pic7,
  pic8,
  pic9,
  pic2,
  pic3,
  pic4,
  pic5,
];

function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Image Banner */}
      <div style={{ position: "relative" }}>
        <div>
          <GridMotion
            items={[
              ...pics.map((pic, i) => (
                <div key={`item-${i}`}>
                  <img src={pic} alt={`img-${i}`} style={imgStyle} />
                </div>
              )),
            ]}
          />
        </div>

        {/* Hero Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: 5,
            padding: "0 0px",
            fontFamily: "Raleway",
            position: "absolute",
            top: 0,
            zIndex: 10,
            margin: "10px 70px",
            background: "#00152a",
            alignContent: "center",
            borderRadius: "12px",
          }}
        >
          <Aurora
            colorStops={["#3A29FF", "#c5c2c9", "#1c74f1"]}
            blend={0.2}
            amplitude={0.2}
            speed={2}
          />
          <Title
            level={1}
            style={{ fontFamily: "Raleway", color: "whitesmoke" }}
          >
            Welcome to EndoCare Medical
          </Title>
          <Paragraph
            style={{
              maxWidth: 800,
              margin: "0 auto",
              fontSize: "20px",
              color: "#fff",
            }}
          >
            A smart medical platform for both patients and doctors — enabling
            personalized healthcare management, record tracking, and AI-enhanced
            diagnostics.
          </Paragraph>
          {/* Role-Based Feature Cards */}
          <div
            style={{ maxWidth: 1200, margin: "48px auto", padding: "0 24px" }}
          >
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12}>
                <Card
                  style={{
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <ul
                    style={{
                      paddingLeft: 20,
                      color: "#fff",
                      textAlign: "left",
                    }}
                  >
                    <li>Book and manage appointments</li>
                    <li>Log meals, blood sugar, and symptoms</li>
                    <li>Upload medical images for AI analysis</li>
                    <li>Receive feedback from your doctor</li>
                    <li>Access treatment history securely</li>
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card
                  style={{
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <ul
                    style={{
                      paddingLeft: 20,
                      color: "#fff",
                      textAlign: "left",
                    }}
                  >
                    <li>View patient logs and records</li>
                    <li>Provide medical feedback and recommendations</li>
                    <li>Review uploaded images for insights</li>
                    <li>Track multiple patient profiles</li>
                    <li>Manage your appointments and schedule</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
