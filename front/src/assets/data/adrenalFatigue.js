import { Typography } from "antd";
import React from "react";
import { SmileOutlined, HeartOutlined, AppleOutlined, AlertOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const titleStyle = {
  fontFamily: "Raleway",
  letterSpacing: "1px",
  color: "#fff",
  fontWeight: "800",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};
const paragraphStyle = {
  fontFamily: "Roboto",
  color: "whitesmoke",
  fontSize: "16px",
  lineHeight: 1.7,
};

export const DefinitionAndOverview = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1631837197166-aebd5caa9b35?w=900&auto=format&fit=crop&q=60')",
        backgroundSize: "cover",
        minHeight: "100vh",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(3px)",
          minHeight: "100vh",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}><AlertOutlined /> What Is Adrenal Fatigue? 🧠</Title>
        <Paragraph style={paragraphStyle}>
          Adrenal fatigue is a term used by alternative health practitioners to
          explain tiredness and other symptoms which are thought to be due to
          chronic stress 🧘‍♀️. However, it is not a recognised medical diagnosis. 🏥
        </Paragraph>

        <Title style={titleStyle}><HeartOutlined /> Adrenal Insufficiency 💉</Title>
        <Paragraph style={paragraphStyle}>
          Your adrenal glands sit on top of each kidney. They produce hormones,
          including adrenaline and noradrenaline ⚡. Adrenal insufficiency
          (Addison’s disease) occurs when these glands don’t make enough hormones.
        </Paragraph>
      </div>
    </div>
  );
};

export const SignsAndSymptoms = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1726761733495-4db42fe8275b?w=900&auto=format&fit=crop&q=60')",
        backgroundSize: "cover",
        minHeight: "100vh",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          minHeight: "100vh",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}><AlertOutlined /> What Causes Adrenal Fatigue? 😓</Title>
        <Paragraph style={paragraphStyle}>
          Thought to be caused by chronic stress (mental, emotional, physical),
          adrenal fatigue remains a theory. No scientific proof exists for this condition.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          Symptoms may include:
          <ul>
            <li>😴 Trouble falling or staying asleep</li>
            <li>😫 Chronic tiredness</li>
            <li>🍭 Salt and sugar cravings</li>
            <li>⚖️ Weight gain</li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export const DietAndLifestyle = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554977931-e266ae4f624e?w=900&auto=format&fit=crop&q=60')",
        backgroundSize: "cover",
        minHeight: "100vh",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(3px)",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}><AppleOutlined /> The Adrenal Fatigue (AF) Diet 🥗</Title>
        <Paragraph style={paragraphStyle}>
          This diet includes lean proteins, vegetables, and whole grains to naturally boost energy ⚡.
          Although not proven to reduce adrenal stress, balanced eating improves overall well-being.
        </Paragraph>
      </div>
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(3px)",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}><AlertOutlined /> Foods to Avoid 🚫</Title>
        <Paragraph style={paragraphStyle}>
          Limit sugary drinks, fried and processed food, and skip artificial sweeteners. 🍩🥤❌
          Try to eat balanced meals regularly to maintain energy. ✅
        </Paragraph>
      </div>
    </div>
  );
};

export const Tips = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1585421514672-627b3e98e82b?w=900&auto=format&fit=crop&q=60')",
        backgroundSize: "cover",
        minHeight: "100vh",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(2px)",
          minHeight: "100vh",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}><SmileOutlined /> What Can I Do? 🌟</Title>
        <Paragraph style={paragraphStyle}>
          Even without medical recognition, managing stress is vital. 🧘‍♂️ Try:
          <ul>
            <li>Meditation & Yoga 🧘‍♀️</li>
            <li>Better Sleep 🛌</li>
            <li>Nutritious Meals 🥗</li>
            <li>Regular Exercise 🏃‍♂️</li>
            <li>Talking to a healthcare provider 👨‍⚕️</li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

function AdrenalFatigue() {
  return <div>AdrenalFatigue</div>;
}

export default AdrenalFatigue;
