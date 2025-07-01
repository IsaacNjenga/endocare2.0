import { useContext } from "react";
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
import { UserContext } from "../App";

const { Title, Text } = Typography;

const imgStyle = {
  objectFit: "cover",
  width: "120%",
  height: "230px",
  borderRadius: "12px",
};

const cardStyle = {
  borderRadius: 12,
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  maxWidth: "1200px",
  width: "100%",
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

const ulStyle = {
  paddingLeft: 20,
  color: "#fff",
  textAlign: "left",
  fontFamily: "Roboto",
  fontSize: "20px",
};

const homeImage =
  "https://plus.unsplash.com/premium_photo-1682130171029-49261a5ba80a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYW4lMjBwYXRpZW50fGVufDB8fDB8fHww";
const patientImage =
  "https://images.unsplash.com/photo-1684607631635-44399dee5ac9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMHBhdGllbnR8ZW58MHx8MHx8fDA%3D";

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

        {/* Hero Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: 5,
            padding: "20px",
            fontFamily: "Raleway",
            position: "absolute",
            top: 0,
            zIndex: 10,
            margin: "5px 20px",
            background: "rgba(0, 21, 42, 0.43)",
            borderRadius: "16px",
            backdropFilter: "blur(3px)",
            border: "1px solid rgba(255, 255, 255, 0)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
          }}
        >
          <div style={{ margin: "0px 20px" }}>
            <Title
              style={{
                color: "#fff",
                textAlign: "left",
                fontFamily: "Raleway",
                fontSize: "2rem",
                lineHeight: "1.4",
              }}
            >
              Empowering personalized care through smart health tracking, AI
              diagnostics, and doctor-patient collaboration.
            </Title>
            <Text
              style={{
                color: "#ccc",
                textAlign: "left",
                fontSize: "1.4rem",
                display: "block",
                marginTop: "12px",
                fontFamily: "Raleway",
              }}
            >
              {userRole === "patient"
                ? "Stay on top of your health with seamless tools for tracking and feedback."
                : "Support your patients with timely insights and personalized care guidance."}
            </Text>
          </div>
          <div
            style={{ maxWidth: 1200, margin: "20px auto", padding: "0 18px" }}
          >
            <Card style={cardStyle}>
              <Row gutter={[32, 32]}>
                <Col xs={24} sm={20} md={18} lg={12}>
                  <div>
                    {userRole === "patient" ? (
                      <ul style={{ ...ulStyle, listStyle: "none", padding: 0 }}>
                        {[
                          "Book and manage appointments",
                          "Log meals, blood sugar, and symptoms",
                          "Upload medical diaries for AI analysis",
                          "Receive feedback from your doctor",
                          "Access treatment history securely",
                        ].map((item, index) => (
                          <li
                            key={index}
                            style={{
                              marginBottom: 12,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "1.1rem",
                                color: "#00b96b",
                                marginRight: 8,
                              }}
                            >
                              ✔
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul style={{ ...ulStyle, listStyle: "none", padding: 0 }}>
                        {[
                          "View patient logs and records",
                          "Provide medical feedback and recommendations",
                          "Review uploaded AI responses for insights",
                          "Track multiple patient profiles",
                          "Manage your appointments and schedules",
                        ].map((item, index) => (
                          <li
                            key={index}
                            style={{
                              marginBottom: 12,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "1.1rem",
                                color: "#00b96b",
                                marginRight: 8,
                              }}
                            >
                              ✔
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Col>
                <Col xs={24} sm={20} md={18} lg={12}>
                  <img
                    src={userRole === "patient" ? homeImage : patientImage}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "14px",
                      objectFit: "contain",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
