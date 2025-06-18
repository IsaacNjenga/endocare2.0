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

export const AddisonsDefinitionAndOverview = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1714939722610-9169e8883bf8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxhZHJlbmFsJTIwZ2xhbmRzfGVufDB8fDB8fHww')",
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
        <Title style={titleStyle}>What Is Addison's Disease? 🧠</Title>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <div>
          <div>
            <Paragraph style={paragraphStyle}>
              Addison's disease is a rare condition where the adrenal glands do
              not make enough of the hormones cortisol and aldosterone (both of
              these are known as corticosteroid hormones). Addison's disease is
              also sometimes called primary adrenal insufficiency. Secondary
              adrenal insufficiency is a different condition to Addison’s
              disease. It occurs when the pituitary gland in the brain does not
              release enough of a particular hormone that stimulates the adrenal
              gland to release cortisol. Sometimes people use the term
              “Addison’s disease” to refer to both primary and secondary adrenal
              insufficiency.
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
            Addison's disease can be diagnosed in a number of ways, including:
            <ul>
              <li>
                Blood tests to check hormone and electrolyte levels in your
                blood
              </li>
              <li>A blood sugar test</li>
              <li>
                X-ray, MRI or CT scan to look at the structure of the adrenal or
                pituitary glands
              </li>
              <li>Medical and family history</li>
            </ul>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export const AddisonsSignsAndSymptoms = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1672759455602-f4a4112f60aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ltcHRvbXN8ZW58MHx8MHx8fDA%3D')",
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
          Addison's disease may be caused by anything that damages the adrenal
          glands, such as:
          <ul>
            <li>
              Autoimmune disease, where the immune system attacks some of the
              body's own tissues
            </li>
            <li>Infection</li>
            <li>Cancer</li>
            <li>Bleeding</li>
            <li>Tuberculosis</li>
            <li>Type 1 diabetes</li>
            <li>Genetic defects</li>
          </ul>
          Secondary adrenal insufficiency can be caused by anything that affects
          the pituitary gland in the brain, such as a tumour, surgery or
          radiation to the area. It can also be caused if you suddenly stop
          long-term steroid treatment for other conditions such as asthma or
          arthritis.
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
          The main symptoms are weight loss, muscle weakness, fatigue, low blood
          pressure, and sometimes darkening of the skin in both exposed and
          non-exposed parts of the body. Other symptoms include:
          <ul>
            <li>Loss of appetite and salt cravings</li>
            <li>Low blood sugar</li>
            <li>Abdominal pain and muscle or joint pains</li>
            <li>Nausea, vomiting and diarrhoea</li>
            <li>Irritability and depression</li>
            <li>Menstrual periods that become irregular or stop</li>
            <li>Hair loss</li>
          </ul>
          Addison's disease develops slowly, usually over months.
        </Paragraph>
      </div>
    </div>
  );
};

export const AddisonsDietAndLifestyle = () => {
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
          If you have Addison’s disease, you’ll need to take steroid medications
          to replace the hormones your body isn’t making. The doses of these
          medications need to be just right, and they will need to be adjusted
          at times. Steroid medications can have side effects, but following a
          healthy diet can make some of them less likely. Focus on a diet that
          is rich in fruits, vegetables, and lean protein sources, with plenty
          of calcium and vitamin D. You may also need to increase your salt
          intake. Avoid foods high in sugar and saturated fat and limit or avoid
          processed meats, refined grains, soft drinks, and fried foods.
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
        <Title style={titleStyle}>Foods To Avoid</Title>
        <Paragraph style={paragraphStyle}>
          People with Addison’s disease are at increased risk of developing
          obesity and osteoporosis because of their need for long-term steroid
          medications. Because of this, there are foods that they should try to
          avoid, or at least eat in smaller amounts. Eating a lot of foods that
          are high in sugar, fat, and calories—such as chips and baked goods—can
          cause weight gain. If you have Addison's disease, you should avoid or
          limit the amount you eat of these types of foods to help maintain a
          healthy weight.
        </Paragraph>
      </div>
    </div>
  );
};

export const AddisonsTips = () => {
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
          If you are experiencing any of the symptoms of Addison’s disease you
          should see your doctor. If you are experiencing any of the symptoms of
          an Addisonian crisis, you should go to your nearest emergency
          department immediately.
          <br />
          It's also important to seek support for emotional concerns, such as
          anxiety or depression. Speak with your doctor to make sure you're
          getting the support you need for both your physical and emotional
          well-being. Remember to do the following:
          <ul>
            <li>Practice meditation & yoga 🧘‍♀️</li>
            <li>Get good quality sleep 🛌</li>
            <li>Eat nutritious meals 🥗</li>
            <li>Exercise regularly 🏃‍♂️</li>
            <li>Talk to a healthcare provider 👨‍⚕️</li>
          </ul>
          Treatment for Addison's disease needs life-long steroid replacement
          therapy. This includes corticosteroid tablets, corticosteroid
          injections, androgen replacement and sometimes increased sodium (salt)
          intake.
        </Paragraph>
      </div>
    </div>
  );
};

function Addisons() {
  return <div></div>;
}

export default Addisons;
