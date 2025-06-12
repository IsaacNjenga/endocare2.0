import React from "react";
import { Tabs } from "antd";
import { endocrineIllnesses } from "../../assets/data/data";
import parse from "html-react-parser";

function Resources() {
  return (
    <>
      <Tabs
        tabPosition="left"
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
      />
    </>
  );
}

export default Resources;
