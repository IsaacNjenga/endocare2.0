import React, { useState } from "react";
import { Button, Card, Col, Divider, Image, Row, Typography } from "antd";
import ResourceModal from "./resourceModal";
import {
  AdrenalFatigue,
  Cortisol,
  Diabetes1,
  Diabetes2,
  PCOS,
} from "./resourcesData";
// import parse from "html-react-parser";

const { Meta } = Card;
const { Paragraph, Title } = Typography;

const cardStyle = {
  boxShadow: "0px 4px 10px rgb(1, 7, 14)",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(175, 190, 205, 0)",
  backdropFilter: "blur(10px)",
};

const titleStyle = {
  fontFamily: "Raleway",
  fontWeight: 700,
  letterSpacing: "1px",
  fontSize: "1.4rem",
};

const descStyle = { fontFamily: "Roboto" };

const buttonStyle = {
  fontFamily: "Raleway",
  fontWeight: 500,
  boxShadow: "0px 4px 5px rgb(1, 7, 14)",
};

const ellipsisStyle = {
  color: "#1890ff",
  cursor: "pointer",
  textAlign: "right",
  margin: 0,
  padding: 0,
  fontWeight: "bold",
};

const endocrineDisorders = [
  {
    key: 1,
    name: "Adrenal Fatigue",
    desc: "This is a term used by alternative health practitioners to explain tiredness and other symptoms which are thought to be chronic. It suggests that the adrenal glands are exhausted and unable to produce adequate quantities of hormones, primarily cortisol, due to chronic stress or infections.",
    image:
      "https://images.unsplash.com/photo-1715529282062-773305ae0178?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRyZW5hbCUyMGdsYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
    content: <AdrenalFatigue />,
  },
  {
    key: 2,
    name: "PCOS",
    desc: `Polycystic ovary syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It usually starts during adolescence, but symptoms may fluctuate over time.PCOS can cause hormonal imbalances, irregular periods, excess androgen levels and cysts in the ovaries. Irregular periods, usually with a lack of ovulation, can make it difficult to become pregnant. PCOS is a leading cause of infertility.`,
    image:
      "https://images.unsplash.com/photo-1716930138567-606d08a4dfd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBvbHljeXN0aWMlMjBPdmFyeSUyMFN5bmRyb21lfGVufDB8fDB8fHww",
    content: <PCOS />,
  },
  {
    key: 3,
    name: "Type 1 Diabetes",
    desc: `A chronic condition in which the pancreas produces little or no insulin. It typically appears in adolescence. Symptoms include increased thirst, frequent urination, hunger, fatigue and blurred vision. Treatment aims at maintaining normal blood sugar levels through regular monitoring, insulin therapy, diet and exercise.`,
    image:
      "https://plus.unsplash.com/premium_photo-1718606568830-cda64cd9bf7c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY3JlYXNlfGVufDB8fDB8fHww",
    content: <Diabetes1 />,
  },
  {
    key: 4,
    name: "Type 2 Diabetes",
    desc: "Type 2 diabetes happens when the body cannot use insulin correctly and sugar builds up in the blood. It was once called adult-onset diabetes. Type 2 diabetes affects how your body uses sugar (glucose) for energy. It stops the body from using insulin properly, which can lead to high levels of blood sugar, if not treated.",
    image:
      "https://images.unsplash.com/photo-1685967836908-7d3b4921a670?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRpYWJldGVzfGVufDB8fDB8fHww",
    content: <Diabetes2 />,
  },
  {
    key: 5,
    name: "Cortisol",
    desc: ` Cortisol is a steroid hormone in the glucocorticoid class of hormones and a stress hormone. When used as medication, it is known as hydrocortisone. Cortisol is produced in many animals, mainly by the zona fasciculata of the adrenal cortex in an adrenal gland. In other tissues, it is produced in lower quantities.`,
    image:
      "https://images.unsplash.com/photo-1714939722610-9169e8883bf8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnRpc29sfGVufDB8fDB8fHww",
    content: <Cortisol />,
  },
];

function Resources() {
  const [openResourceModal, setOpenResourceModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ellipsisMap, setEllipsisMap] = useState(
    endocrineDisorders.reduce((acc, item) => {
      acc[item.key] = true;
      return acc;
    }, {})
  );

  const toggleEllipsis = (key) => {
    setEllipsisMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const viewMore = (content) => {
    setLoading(true);
    setOpenResourceModal(true);
    setModalContent(content);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <>
      <div style={{ margin: 10, padding: "1rem" }}>
        <Title>Resources</Title>
        <Divider dashed style={{ borderColor: "#00152a" }} size="large" />
        <Row gutter={[20, 20]}>
          {endocrineDisorders.map((disorder) => (
            <Col xs={32} sm={24} md={16} lg={8}>
              <Card
                hoverable
                key={disorder.key}
                style={cardStyle}
                cover={
                  <Image
                    src={disorder.image}
                    alt={`${disorder.name}_img`}
                    style={{ objectFit: "cover", height: 250 }}
                  />
                }
              >
                <Meta
                  title={<span style={titleStyle}>{disorder.name}</span>}
                  description={
                    <span style={descStyle}>
                      <Paragraph
                        ellipsis={
                          ellipsisMap[disorder.key] ? { rows: 3 } : false
                        }
                      >
                        {disorder.desc}
                      </Paragraph>
                    </span>
                  }
                />
                <p
                  onClick={() => toggleEllipsis(disorder.key)}
                  style={ellipsisStyle}
                >
                  {ellipsisMap[disorder.key] ? "more" : "less"}
                </p>
                <div>
                  <Button
                    type="primary"
                    style={buttonStyle}
                    onClick={() => {
                      viewMore(disorder.content);
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <ResourceModal
        setOpenResourceModal={setOpenResourceModal}
        openResourceModal={openResourceModal}
        modalContent={modalContent}
        loading={loading}
      />
    </>
  );
}

export default Resources;

/* <Tabs
        tabPosition="right"
        items={endocrineIllnesses.map((illness, index) => ({
          label: (
            <p style={{ fontFamily: "Raleway" }}>
              <strong>{illness.name}</strong>
            </p>
          ),
          key: String(index),
          children: (
            <Tabs
              type="card"
              items={Object.entries(illness.sections).map(
                ([sectionTitle, html], subIndex) => ({
                  label: <p style={{ fontFamily: "Roboto" }}>{sectionTitle}</p>,
                  key: `${index}-${subIndex}`,
                  children: <div>{parse(html)}</div>,
                })
              )}
            />
          ),
        }))}
      /> */
