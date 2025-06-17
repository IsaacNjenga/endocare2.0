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

export const Diabetes1DefinitionAndOverview = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661266890061-ef7caab08054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhYmV0ZXMlMjBzdWdhcnxlbnwwfHwwfHx8MA%3D%3D')",
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
        <Title style={titleStyle}>What Is Type 1 Diabetes? 🧠</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />

        <div>
          <Paragraph style={paragraphStyle}>
            Diabetes is a condition that occurs when your body can’t maintain
            healthy levels of glucose (sugar) in your blood. In type 1 diabetes,
            your pancreas doesn’t make insulin. Insulin is a hormone that moves
            glucose out of your blood and into your cells, to be used for
            energy. Without insulin, glucose stays in your blood. This causes
            hyperglycaemia (high blood sugar). Type 1 diabetes can happen at any
            age but is more commonly diagnosed in young people. The most common
            age for diagnosis is 10 to 14 years. While there is currently no
            cure for type 1 diabetes, treatments are available.
          </Paragraph>
        </div>

        <Title style={titleStyle}>Diagnosis 💉</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "75%" }}>
            <Paragraph style={paragraphStyle}>
              Your doctor will ask about your symptoms and examine you. If they
              think you may have type 1 diabetes, they will:{" "}
              <ul>
                <li>
                  Do a finger-prick blood test to quickly check your blood
                  glucose level
                </li>
                <li>Test your urine for glucose and ketones</li>
              </ul>
              If these tests show high levels of glucose, your doctor will
              recommend you go to the nearest hospital emergency department for
              more tests and treatment.
            </Paragraph>
          </div>

          <div style={{ width: "25%" }}>
            <Image
              src="https://images.unsplash.com/photo-1683122927014-d48a76cc6a65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxnbHVjb3NlfGVufDB8fDB8fHww"
              alt="finger_prick_test"
              style={{
                width: "100%",
                borderRadius: "12px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Diabetes1SignsAndSymptoms = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1583947215172-b3880c534af4?w=900&auto=format&fit=crop&q=60')",
        backgroundSize: "cover",
        minHeight: "auto",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(0px)",
          minHeight: "auto",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Causes It?</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          The exact cause of type 1 diabetes is not known. Type 1 diabetes is
          usually an autoimmune condition. Your body’s immune system attacks
          your pancreas and destroys the cells that make insulin. There is a
          genetic component to type 1 diabetes. That means you have a higher
          chance of having type 1 diabetes if a close family member has the
          condition.
        </Paragraph>
      </div>
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
        <Title style={titleStyle}>What are the symptoms?</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          You may have the following symptoms of type 1 diabetes, which are
          known as the four 'Ts':
          <ul>
            <li>Thirst — being very thirsty (and possibly hungry)</li>
            <li>Toilet — urinating (doing a wee) more often</li>
            <li>
              Thinner — weight loss when you haven’t been trying to lose weight
            </li>
            <li>Tired — feeling unusually tired or weak</li>
          </ul>
          Some people also report to have blurred vision. You may have these
          symptoms due to high blood glucose for a few days or a few weeks.
        </Paragraph>
      </div>
    </div>
  );
};

export const Diabetes1DietAndLifestyle = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519200231261-82fb9f2fa287?w=900&auto=format&fit=crop&q=60')",
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
        <Title style={titleStyle}>Lifestyle 🥗</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          Being diagnosed with type 1 diabetes can be overwhelming. But you will
          have a team of healthcare professionals to help you manage your
          condition. Type 1 diabetes management includes:
          <ul>
            <li>
              Learning to manage and monitor your blood glucose levels — a
              diabetes educator will help with this
            </li>
            <li>
              Maintaining a healthy diet — you should see a dietitian for advice{" "}
            </li>
            <li>
              Being physically active — an exercise physiologist can help choose
              the right exercise for you
            </li>
            <li>
              Seeing your doctor for regular health checks, including monitoring
              your blood pressure and kidney function
            </li>
            <li>
              Having a podiatrist monitor your feet for ulcers and other
              problems
            </li>
            <li>
              Having regular eye health checks with an optometrist or
              ophthalmologist
            </li>
            <li>Psychological support</li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export const Diabetes1Tips = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1685061981570-f2b0e045d3ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGRpYWJldGVzfGVufDB8fDB8fHww')",
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
          backdropFilter: "blur(1px)",
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
          Type 1 Diabetes can affect your long-term health if left untreated and
          may increase your risk of health problems. See your doctor as soon as
          possible if you have any symptoms of type 1 diabetes.
        </Paragraph>
      </div>
    </div>
  );
};

function PCOS() {
  return <div></div>;
}

export default PCOS;
