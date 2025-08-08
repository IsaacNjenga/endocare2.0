import React, { useState } from "react";
import { Button, Divider, Typography, Row, Col, Card } from "antd";
import UploadFileComponent from "../../components/uploadFileComponent";

const { Title, Text, Paragraph } = Typography;

function AIUploads() {
  const [uploadModal, setUploadModal] = useState(false);

  return (
    <div style={{ padding: "20px", margin: "20px 0" }}>
      <Title level={1} style={{ fontFamily: "Raleway", marginBottom: 0 }}>
        AI Image Prediction
      </Title>
      <Text type="secondary" style={{ fontSize: 16 }}>
        Get instant predictions powered by our AI model
      </Text>

      <Divider style={{ borderColor: "#333" }} dashed />

      <Row gutter={[24, 24]}>
        <Col xs={24} md={14}>
          <Title level={3}>How It Works</Title>
          <Paragraph>
            Our AI has been trained on thousands of images to recognize patterns
            and provide quick, reliable predictions. Simply upload one or more
            images, and our system will process them instantly.
          </Paragraph>

          <Paragraph>
            While our model strives for high accuracy, please remember:
            <ul style={{ marginTop: 8 }}>
              <li>
                AI predictions are <b>advisory only</b> and should be confirmed
                by a professional if necessary.
              </li>
              <li>
                Uploading clear, high-quality images will improve the results.
              </li>
              <li>
                You can upload multiple images at once to compare predictions.
              </li>
            </ul>
          </Paragraph>

          <Button
            type="primary"
            size="large"
            onClick={() => setUploadModal(true)}
            style={{ marginTop: 10 }}
          >
            Upload Images
          </Button>
        </Col>

        <Col xs={24} md={10}>
          <Card
            style={{
              background: "#fafafa",
              borderRadius: 8,
              padding: "12px 16px",
              height: "100%",
            }}
          >
            <Title level={4}>Steps to Get Started</Title>
            <ol style={{ paddingLeft: 18, marginBottom: 0 }}>
              <li>Click the <b>Upload Images</b> button.</li>
              <li>Select one or more images from your device.</li>
              <li>Wait for our AI to process and display the results.</li>
            </ol>
          </Card>
        </Col>
      </Row>

      <UploadFileComponent
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
      />
    </div>
  );
}

export default AIUploads;
