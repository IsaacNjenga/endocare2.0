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

export const CushingsDefinitionAndOverview = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580670552721-9ebab55f37b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1c2hpbmdzJTIwc3luZHJvbWV8ZW58MHx8MHx8fDA%3D')",
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
        <Title style={titleStyle}>What Is Cushing's Syndrome? 🧠</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <div>
          <div>
            <Paragraph style={paragraphStyle}>
              Cushing's syndrome is a condition where your body is exposed to
              too much of a hormone called cortisol. This can be because your
              body is making too much cortisol or because you have taken a lot
              of oral corticosteroid medicines. Cortisol is a hormone that is
              made by the adrenal glands. You have two adrenal glands, one
              sitting on the top of each kidney.
              <br /> Cortisol affects many different bodily functions. It is
              produced in different amounts throughout the day — levels are
              generally highest in the morning and lowest in the evening. Higher
              amounts are produced during times of stress. However, in Cushing's
              syndrome, cortisol levels remain high all the time.
              <br />
              Cushing's syndrome is rare. It affects more females than males.
            </Paragraph>
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
            The treatment depends on the cause. If you are taking steroid
            medicines, then you and your doctor will need to talk about whether
            you should reduce the dose. If you have a tumour causing Cushing's
            syndrome, your doctor may recommend treatment such as:
            <ul>
              {" "}
              <li>Surgery to remove the tumour</li>
              <li>
                Radiotherapy — if your tumour cannot be fully removed with
                surgery
              </li>
              <li>Medicine to stop your body making too much cortisol</li>
            </ul>{" "}
            After surgery, it may take some time for your body to make the right
            amount of cortisol. You might need to take corticosteroid medicines
            to boost your cortisol levels while you recover.
            <br /> Cushing's disease can come back after treatment. After you
            have recovered, you should have your cortisol levels checked
            regularly to make sure you stay healthy.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export const CushingsSignsAndSymptoms = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1718290509856-2dc12571d95c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNpZ24lMjBhbmQlMjBzeW1wdG9tc3xlbnwwfHwwfHx8MA%3D%3D')",
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
          Some people with Cushing's syndrome have a tumour (growth) in a part
          of the brain called the pituitary gland. This tumour tells the adrenal
          glands to release cortisol. This condition is known as Cushing's
          disease. Cushing's syndrome can also be caused by:
          <ul>
            <li>A tumour in the adrenal gland</li>
            <li>Overgrowth of the adrenal glands</li>
            <li>A tumour somewhere else in the body</li>
            <li>Taking corticosteroid (steroid) medicine for a long time</li>
          </ul>
          If you have Cushing's syndrome because of taking steroid medicine, do
          not stop taking it suddenly, as you could become very unwell. Talk to
          your doctor about what to do next.
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
          Symptoms of Cushing's syndrome include:
          <ul>
            <li>A rounded face</li>
            <li>Weight gain, especially around the torso</li>
            <li>A hump between the shoulders</li>
            <li>Feeling tired or moody</li>
            <li>
              Skin problems such as slow healing of wounds, bruising and stretch
              marks on the tummy or thighs
            </li>
            <li>Lower libido (sex drive)</li>
          </ul>
          Females may also have more hair on the face and body and irregular
          periods. Males may have erectile dysfunction. Children with Cushing's
          syndrome may have problems with growth.
        </Paragraph>
      </div>
    </div>
  );
};

export const CushingssDietAndLifestyle = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg')",
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
        <Title style={titleStyle}>Diet & Lifestyle 🏃‍♂️</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          You should see your doctor if you have any symptoms of Cushing's
          syndrome. It can make you very unwell if it is not treated. If you
          have been diagnosed with Cushing's syndrome, you should see your
          doctor regularly so they can monitor your condition and ensure that
          you're receiving the right treatment.
        </Paragraph>
      </div>
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(1px)",
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}></Title>
        <Paragraph style={paragraphStyle}>
          Cushing's syndrome can be caused by long-term use of high-dose
          corticosteroids to treat conditions such as asthma or rheumatoid
          arthritis. If you are taking a corticosteroid medicine, see your
          doctor regularly for monitoring. Unfortunately, you can't prevent
          Cushing's syndrome caused by a tumour.
        </Paragraph>
      </div>
    </div>
  );
};

export const CushingsTips = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5699495/pexels-photo-5699495.jpeg')",
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
          margin: 3,
          padding: 20,
          borderRadius: "12px",
        }}
      >
        <Title style={titleStyle}>What Can I Do? 🌟</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <Paragraph style={paragraphStyle}>
          If you are experiencing any of the symptoms of Cushing's Syndrome you
          should see your doctor. Cushing's syndrome can be hard to diagnose,
          because it causes symptoms that can occur in many other health
          conditions. Your doctor will talk to you, examine you and check your
          blood pressure. They may refer you for blood tests, urine tests and
          saliva tests to measure your cortisol levels.
          <br />
          It's also important to seek support for emotional concerns, such as
          anxiety or depression. Speak with your doctor to make sure you're
          getting the support you need for both your physical and emotional
          well-being. <br />
          Remember to do the following:
          <ul>
            <li>Practice meditation & yoga 🧘‍♀️</li>
            <li>Get good quality sleep 🛌</li>
            <li>Eat nutritious meals 🥗</li>
            <li>Exercise regularly 🏃‍♂️</li>
            <li>Talk to a healthcare provider 👨‍⚕️</li>
          </ul>
          Cushing's syndrome can often be cured, but untreated, it can make you
          very unwell.
        </Paragraph>
      </div>
    </div>
  );
};

function Cushings() {
  return <div></div>;
}

export default Cushings;
