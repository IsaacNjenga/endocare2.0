import React, { useContext } from "react";
import GridMotion from "../components/gridMotion";
import {
  //homeImages,
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
import { Typography, Row, Col, Card, Divider } from "antd";
//import Aurora from "../components/auroraComponent";
import { UserContext } from "../App";
//import Masonry from "../components/masonry";

const { Title, Paragraph } = Typography;

const imgStyle = {
  objectFit: "cover",
  width: "120%",
  height: "230px",
  borderRadius: "12px",
};

const cardStyle = {
  borderRadius: 12,
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
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
  const { user } = useContext(UserContext);
  const userRole = user?.role;
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
        {/* <div>
          <Masonry
            items={homeImages}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div> */}

        {/* Hero Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: 10,
            padding: "30px",
            fontFamily: "Raleway",
            position: "absolute",
            top: 0,
            zIndex: 10,
            margin: "20px 80px",
            background: "rgb(0,21,42,0.56)",
            alignContent: "center",
            borderRadius: "12px",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* <Aurora
            colorStops={["#3A29FF", "#c5c2c9", "#1c74f1"]}
            blend={0.2}
            amplitude={0.2}
            speed={2}
          /> */}
          <Title
            level={1}
            style={{ fontFamily: "Raleway", color: "whitesmoke" }}
          >
            Welcome to EndoCare Medical
          </Title>
          <Divider style={{ borderColor: "whitesmoke" }} />
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
            style={{ maxWidth: 1200, margin: "30px auto", padding: "0 24px" }}
          >
            <Row gutter={[32]}>
              {userRole === "patient" ? (
                <Col>
                  <Card style={cardStyle}>
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
              ) : (
                <Col>
                  <Card style={cardStyle}>
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
              )}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
