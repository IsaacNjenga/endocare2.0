import { Divider, Image, Typography } from "antd";
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

export const PCOSDefinitionAndOverview = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1718605230245-2c40e9640599?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9seWN5c3RpYyUyMG92YXJpYW4lMjBzeW5kcm9tZXxlbnwwfHwwfHx8MA%3D%3D')",
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
          backdropFilter: "blur(0px)",
          minHeight: "auto",
          margin: 5,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Is PCOS? 🧠</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "70%" }}>
            <Paragraph style={paragraphStyle}>
              Polycystic ovarian syndrome (PCOS) is a common hormonal condition
              that affects how your ovaries work. It can start as early as the
              teenage years and may lead to disruptions to your menstrual cycle
              as well as to your skin and hair. PCOS is one of the most common
              causes of infertility in females. Many people don't know they have
              it, as PCOS is often not diagnosed. While PCOS can't be cured, you
              and your doctor can manage many of its symptoms.
            </Paragraph>
          </div>
          <div style={{ width: "40%" }}>
            <Image
              src="https://media.healthdirect.org.au/images/inline/original/polycystic-ovarian-syndrome-pcos-a0470f.png"
              alt="pcos_pic"
              style={{ width: "80%" }}
            />
          </div>
        </div>

        <Title style={titleStyle}>Diagnosis 💉</Title>
        <Paragraph style={paragraphStyle}>
          To diagnose PCOS, your doctor may ask about your symptoms and medical
          history. They may also refer you for tests. They may also try to rule
          out other conditions that could cause similar symptoms.
          <br /> Diagnosing PCOS may be difficult because symptoms can vary
          widely. You don't need to have all the symptoms to be diagnosed with
          the condition. Your doctor may use specific criteria to diagnose PCOS.
          <br />
          At least 2 of the following must be present:
          <ul>
            <li>Irregular periods or no periods</li>
            <li>
              Signs of high androgen levels (male hormones), such as excess
              facial hair, or high hormone levels found in a blood test
            </li>
            <li>
              The appearance of at least 20 partly formed eggs per ovary (fluid
              filled sacks called follicles) seen on an ultrasound
            </li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export const PCOSSignsAndSymptoms = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587720552294-41348a97cd32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9seWN5c3RpYyUyMG92YXJpYW4lMjBzeW5kcm9tZXxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        minHeight: "auto",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(1px)",
          minHeight: "auto",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Causes PCOS?</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          The exact cause of PCOS is unknown. It is thought to happen due to a
          mix of genetic (inherited), hormonal, lifestyle and environmental
          factors.
          <Title style={titleStyle} level={4}>
            Genetic & Hormonal Factors
          </Title>
          <li>
            Hormonal problems — high levels of androgens (male hormones) and
            insulin may interfere with ovulation.
          </li>
          <li>
            Family history — if a close family member has PCOS or a similar
            condition, your risk may be higher.{" "}
          </li>
          <li>
            Inflammation — ongoing inflammation can disrupt your hormone levels.
          </li>
          <Title style={titleStyle} level={4}>
            Lifestyle & Environmental Factors
          </Title>
          <li>
            Diet and weight — an unhealthy diet or living with obesity can make
            hormone issues worse.
          </li>
          <li>
            Pollution — certain chemicals and air pollution may upset your
            balance of hormones.
          </li>
          <li>
            Gut health — changes in gut bacteria may affect your metabolism and
            inflammation. This can make PCOS worse.
          </li>
          These causes often combine, making PCOS different for everyone.
        </Paragraph>
      </div>
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
        <Title style={titleStyle}>What are the symptoms?</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          PCOS affects the ovaries and hormones in your body. This can lead to a
          wide range of symptoms that can affect your skin, menstrual cycle and
          overall health. The condition can look different for each person. Some
          symptoms are visible, while others may not be as noticeable.
          <Title style={titleStyle} level={4}>
            Symptoms you can see
          </Title>
          PCOS can lead to visible changes in your appearance and skin. Symptoms
          may include:
          <ul>
            <li>
              Excess hair growth on your face, chest, stomach or back
              (hirsutism)
            </li>
            <li>Thinning hair or baldness (alopecia)</li>
            <li>Acne or oily skin on your face and body</li>
            <li>Weight gain or difficulty losing weight</li>
            <li>
              Dark, velvety patches of skin in areas such as your neck,
              underarms or groin
            </li>
          </ul>
          <Title style={titleStyle} level={4}>
            Symptoms you may not notice
          </Title>{" "}
          Some symptoms of PCOS are inside your body. They may be more difficult
          to notice but can affect your health and wellbeing. These symptoms may
          include:
          <ul>
            <li>
              Irregular periods or missed periods for many months (amenorrhea)
            </li>
            <li>Difficulty conceiving </li>
            <li>
              Enlarged ovaries with multiple small follicles (fluid-filled
              sacs), called polycystic ovaries
            </li>
            <li>Tiredness or low energy levels </li>
            <li>Mood changes, such as depression, anxiety or mood swings</li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export const PCOSDietAndLifestyle = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661963709043-57e3ce0fb7cd?w=900&auto=format&fit=crop&q=60')",
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
        <Title style={titleStyle}>Diet 🥗</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          A healthy lifestyle is important to manage PCOS: lean sources of
          protein vegetables whole grains The purported goal is to manage your
          weight and lower risk of complications.
          <br /> Eat a healthy diet to improve symptoms such as irregular
          periods and weight gain. Regular exercise may help your body use
          insulin better, which can lower the effects of PCOS
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
    </div>
  );
};

export const PCOSTips = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534806596185-c4a911703708?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjB3b21hbiUyMHJlbGF4aW5nfGVufDB8fDB8fHww')",
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
          Living with PCOS means managing both physical and emotional
          challenges. With the right care, you can lead a normal life.
          Treatments and lifestyle changes, such as staying active and eating
          well, can help improve your symptoms. It's also important to seek
          support for emotional concerns, such as anxiety or depression. Speak
          with your doctor to make sure you're getting the support you need for
          both your physical and emotional well-being. Remember to do the
          following:
          <ul>
            <li>Practice meditation & yoga 🧘‍♀️</li>
            <li>Get good quality sleep 🛌</li>
            <li>Eat nutritious meals 🥗</li>
            <li>Exercise regularly 🏃‍♂️</li>
            <li>Talk to a healthcare provider 👨‍⚕️</li>
          </ul>
          PCOS can affect your long-term health if left untreated and may
          increase your risk of health problems.
        </Paragraph>
      </div>
    </div>
  );
};

function PCOS() {
  return <div></div>;
}

export default PCOS;
