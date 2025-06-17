import { Divider, Typography } from "antd";
import React from "react";

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
          backdropFilter: "blur(2px)",
          minHeight: "auto",
          margin: 5,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Is Adrenal Fatigue? 🧠</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          Adrenal fatigue is a term used by alternative health practitioners to
          explain tiredness and other symptoms which are thought to be due to
          chronic stress. However, it is not a recognised medical diagnosis.
          Many studies have failed to prove that adrenal fatigue is a medical
          condition
        </Paragraph>

        <Title style={titleStyle}>Adrenal Insufficiency 💉</Title>
        <Paragraph style={paragraphStyle}>
          Your adrenal glands sit on top of each kidney. They produce hormones,
          including adrenaline and noradrenaline. Adrenal insufficiency
          (Addison’s disease) occurs when these glands don’t make enough
          hormones. This can be due to disease or surgery. Addison’s disease is
          a rare but serious disease. Some people think that adrenal fatigue is
          a mild form of adrenal insufficiency. Addison’s disease can be
          diagnosed through blood tests that show low levels of adrenal
          hormones. These tests are usually normal in people who are told they
          have adrenal fatigue.
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
          minHeight: "auto",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Causes Adrenal Fatigue? 😓</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          Adrenal fatigue is thought to be caused by ‘overuse’ of the adrenal
          glands. This is thought to be due to ongoing exposure to: mental
          stress, emotional stress or physical stress. However, at the moment
          there is no scientific evidence that this condition exists.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          Symptoms may include:
          <ul>
            <li>😴 Trouble falling or staying asleep</li>
            <li>😫 Chronic tiredness</li>
            <li>🍭 Salt and sugar cravings</li>
            <li>⚖️ Weight gain</li>
          </ul>
          These symptoms are common with lots of other conditions. It’s
          important to discuss these symptoms with your doctor to try to find a
          cause.
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
        <Title style={titleStyle}>The Adrenal Fatigue (AF) Diet 🥗</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          This adrenal fatigue diet provides guidelines similar to other
          balanced diets, which generally include: lean sources of protein
          vegetables whole grains The purported goal is to increase your energy
          levels naturally so you don’t burn stored nutrients.
          <br /> Keep in mind that the adrenal fatigue diet has not been
          evaluated for its ability to decrease stress on the adrenal glands.
          But it has been proven that eating a more balanced diet and adopting
          certain lifestyle changes can make you feel better physically and
          mentally.
          <br />
          <br />
          Some foods to eat on the adrenal fatigue diet include:
          <ul>
            <li>
              Protein sources: Lean meats, fish, eggs, dairy, nuts and legumes
            </li>
            <li>Leafy greens and vegetables</li>
            <li>Whole grains</li>
            <li>Low sugar fruits</li>
            <li>Sea salt (in moderation)</li>
            <li>Healthy fats: Olive oil and Avocado</li>
          </ul>
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
        <Title style={titleStyle}>What to Avoid 🚫</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          If you decide to try a diet for adrenal fatigue, it’s generally
          recommended to limit foods and drinks high in refined and processed
          sugar and unhealthy fats.
          <br />
          Some foods to limit include:
          <ul>
            <li>Sugar and Sodas</li>
            <li>Flour</li>
            <li>Fried food</li>
            <li>Processed food</li>
            <li>Artificial sweeteners</li>
          </ul>
          It’s also recommended to time your meals properly to help manage your
          blood sugar levels. It may help to eat breakfast, and eat regularly
          throughout the day. Skipping lunch forces your body to burn stored
          nutrients and may reduce your energy levels. If you eat regular,
          balanced meals and snacks, you can maintain your energy levels all
          day. Keep in mind that it’s also very important to talk with your
          doctor before making any changes to your diet to ensure your
          nutritional needs are fully met.
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
          minHeight: "auto",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Can I Do? 🌟</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          Even if "adrenal fatigue" isn't a medical diagnosis, addressing
          chronic stress and its impact on the body is important for overall
          health and well-being. Strategies for managing stress and improving
          adrenal function include
          <ul>
            <li>Meditation & Yoga 🧘‍♀️</li>
            <li>Better Sleep 🛌</li>
            <li>Nutritious Meals 🥗</li>
            <li>Regular Exercise 🏃‍♂️</li>
            <li>Talking to a healthcare provider 👨‍⚕️</li>
          </ul>
          If stress is related to a specific issue, such as work or
          relationships, try to find healthy ways to address it like talking to
          a certified healthcare provider.
        </Paragraph>
      </div>
    </div>
  );
};

function AdrenalFatigue() {
  return <div>AdrenalFatigue</div>;
}

export default AdrenalFatigue;
