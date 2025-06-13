import React from "react";
import GridMotion from "../components/gridMotion";

const pic =
  "https://images.pexels.com/photos/19218034/pexels-photo-19218034/free-photo-of-smiling-doctor-in-a-lab-coat-and-with-a-stethoscope.jpeg?auto=compress&cs=tinysrgb&w=900";

const pic2 =
  "https://images.pexels.com/photos/18252410/pexels-photo-18252410/free-photo-of-smiling-woman-in-doctor-gown-fixing-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=900";

const pic3 =
  "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=900";

const pic4 =
  "https://images.pexels.com/photos/5722166/pexels-photo-5722166.jpeg?auto=compress&cs=tinysrgb&w=900";

const pic5 =
  "https://plus.unsplash.com/premium_photo-1682130166544-ccbe204386ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYW4lMjBkb2N0b3J8ZW58MHx8MHx8fDA%3D";

const pic6 =
  "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljYWwlMjBjYXJlfGVufDB8fDB8fHww";

const pic7 =
  "https://images.unsplash.com/photo-1739285388427-d6f85d12a8fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljYWwlMjBjb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D";

const pic8 =
  "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljYWwlMjBjYXJlfGVufDB8fDB8fHww";

const imgStyle = {
  objectFit: "cover",
  width: "100%",
  height: "auto",
  borderRadius: "12px",
};

const pics = [
  pic,
  pic2,
  pic3,
  pic6,
  pic7,
  pic8,
  pic6,
  pic4,
  pic5,
  pic7,
  pic6,
  pic7,
  pic6,
  pic7,
  pic6,
  pic7,
  pic4,
  pic5,
  pic6,
  pic7,
  pic6,
  pic7,
  pic4,
  pic5,
  pic6,
  pic7,
  pic6,
  pic4,
  pic5,
  pic7,
  pic6,
  pic7,
  pic6,
  pic7,
  pic6,
  pic4,
  pic5,
  pic7,
  pic6,
  pic7,
  pic6,
  pic7,
  pic6,
  pic7,
];

function Home() {
  return (
    <div>
      <GridMotion
        items={[
          ...pics.map((pic, i) => (
            <div key={`item-${i}`}>
              <img src={pic} alt={`img ${i + 1}`} style={imgStyle} />
            </div>
          )),
        ]}
        gradientColor="red"
      />
    </div>
  );
}

export default Home;
