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

export const Diabetes2DefinitionAndOverview = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6545623/pexels-photo-6545623.jpeg')",
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
          backdropFilter: "blur(0px)",
          minHeight: "auto",
          margin: 5,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Is Type 2 Diabetes? 🧠</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
          }}
        >
          <div style={{ width: "55%" }}>
            <Paragraph style={paragraphStyle}>
              Type 2 Diabetes is a condition that occurs when your body cannot
              maintain healthy blood glucose (sugar) levels. Type 2 diabetes
              develops when your body:
              <ul>
                <li>Does not respond properly to insulin</li>
                <li>Gradually stops making enough insulin</li>
              </ul>
              Insulin is a hormone that controls the amount of glucose in your
              blood. Insulin helps glucose move from your blood into your cells,
              where it can be used for energy. In type 2 diabetes, your cells do
              not respond properly to insulin. This is known as ‘insulin
              resistance'. It causes glucose to stay in your blood, leading to
              high blood glucose levels. This is known as hyperglycaemia.
              <br /> <br /> Your chance of having type 2 diabetes increases with
              age. But it is possible for young people and even children to have
              type 2 diabetes.
            </Paragraph>
          </div>
          <div style={{ width: "45%" }}>
            <Image
              src="https://media.healthdirect.org.au/images/inline/original/type-2-diabetes-4e1449.jpg"
              alt="type2_diabetes_img"
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
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(0px)",
          minHeight: "auto",
          margin: 5,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>Diagnosis 💉</Title>

        <div>
          <Paragraph style={paragraphStyle}>
            Your doctor will ask about your symptoms and examine you. They will
            also ask about your general health and family medical history. Your
            doctor will do blood glucose tests. You may have a:
            <ul>
              <li>
                Fasting blood glucose test — where you don't eat for several
                hours before the test
              </li>
              <li>
                Random blood glucose test — where you don't need to stop eating
                before the test
              </li>
              <li>
                Oral glucose tolerance test — where you have blood glucose tests
                after you drink a sugary drink
              </li>
              <li>
                HbA1C test — which indicates how much sugar has been in your
                blood over the past few months
              </li>
            </ul>
            Depending on whether you have symptoms, you may need to have a
            repeat test. Other blood tests may be done to check for
            complications of type 2 diabetes. In some cases, you may also be
            asked to do a urine test.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export const Diabetes2SignsAndSymptoms = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6942071/pexels-photo-6942071.jpeg')",
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
          The exact cause of type 2 diabetes is not known. But risk factors for
          developing type 2 diabetes include:
          <ul>
            <li>Increasing age</li>
            <li>Family history of diabetes</li>
            <li>
              Being overweight or obese, especially with excess weight around
              your waist
            </li>
            <li>A low level of physical activity</li>
            <li>A poor diet</li>
            <li>Smoking</li>
            <li>Having high blood pressure or high cholesterol</li>
          </ul>
        </Paragraph>
      </div>
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
        <Title style={titleStyle}>What are the symptoms?</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          Many people with type 2 diabetes do not have any symptoms at first. It
          may go undiagnosed for years. Symptoms of type 2 diabetes can include:
          <ul>
            <li>Being very thirsty</li>
            <li>Passing urine (doing a wee) more often than usual</li>
            <li>Feeling tired</li>
            <li>Feeling hungry</li>
            <li>Blurred vision</li>
            <li>
              Frequent infections, including urinary tract infections (UTIs)
            </li>
            <li>Having wounds that heal slowly</li>
          </ul>
          Over time, diabetes can lead to complications, which can cause other
          symptoms.
        </Paragraph>
      </div>
    </div>
  );
};

export const Diabetes2DietAndLifestyle = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg')",
        backgroundSize: "100%",
        minHeight: "100vh",
        borderRadius: "12px",
        padding: 24,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(1px)",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>Lifestyle 🏃‍♂️</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          Following a healthy lifestyle is very important in managing type 2
          diabetes. It‘s important for controlling your blood glucose levels. It
          can also help to prevent complications. Lifestyle measures include:
          <ul>
            <li>Eating a healthy diet</li>
            <li>Being physically active</li>
            <li>Losing weight if you are overweight or obese</li>
            <li>Quitting smoking</li>
            <li>Limiting how much alcohol you drink</li>
          </ul>
          If you are overweight or obese, losing even 5% to 10% of your body
          weight can significantly improve your blood sugar control. If you
          follow lifestyle recommendations and lose weight, your diabetes can go
          into remission. This means that your blood glucose levels are well
          controlled for at least 3 months without needing medicines. <br />
          Your doctor or dietitian can advise you on what to eat to meet your
          nutritional needs and control your blood sugar levels
        </Paragraph>
      </div>
    </div>
  );
};

export const Diabetes2Tips = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8981324/pexels-photo-8981324.jpeg')",
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
          Living with diabetes means managing both physical and emotional
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
          Type 2 Diabetes can affect your long-term health if left untreated and
          may increase your risk of health problems. See your doctor as soon as
          possible if you have any symptoms of type 2 diabetes.
        </Paragraph>
      </div>
    </div>
  );
};

function Diabetes2() {
  return <div></div>;
}

export default Diabetes2;
