import React, { useEffect, useState, useRef } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image as AntImage, Input, Modal, Row, Spin } from "antd";
import * as tmImage from "@teachablemachine/image";
import Swal from "sweetalert2";

const TM_MODEL_URL = "https://teachablemachine.withgoogle.com/models/Sd52grr24/"; 
const MODEL_JSON = TM_MODEL_URL + "model.json";
const METADATA_JSON = TM_MODEL_URL + "metadata.json";

function UploadFileComponent({ uploadModal, setUploadModal }) {
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); 
  const [predictions, setPredictions] = useState({}); 
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(null);
  const modelRef = useRef(null);
  const [form] = Form.useForm();
  const idCounterRef = useRef(0);

  // Load Teachable Machine 
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        modelRef.current = await tmImage.load(MODEL_JSON, METADATA_JSON);
        if (!cancelled) setModelLoaded(true);
      } catch (err) {
        console.error("Failed to load TM model:", err);
        setModelError(err?.message || "Failed to load model");
      }
    })();
    return () => {
      cancelled = true;
      // optional: dispose model if API supports it in future
      modelRef.current = null;
    };
  }, []);

  // helper: pick top prediction
  const topPrediction = (preds) => {
    if (!Array.isArray(preds) || preds.length === 0) return null;
    let best = preds[0];
    for (let p of preds) if (p.probability > best.probability) best = p;
    return best;
  };

  // handle file input
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Convert to items with unique id + object URL
    const items = files.map((file) => {
      const id = idCounterRef.current++;
      const url = URL.createObjectURL(file);
      return { id, file, url };
    });

    // append new items
    setSelectedImages((prev) => [...prev, ...items]);

    // If model loaded, predict each image
    for (let item of items) {
      // create an HTMLImageElement to feed tmImage
      const imgEl = new window.Image();
      imgEl.crossOrigin = "anonymous";
      imgEl.src = item.url;

      // wait for load
      await new Promise((resolve) => {
        imgEl.onload = resolve;
        imgEl.onerror = resolve; // resolve on error to avoid hang
      });

      // if model ready, run prediction; otherwise store placeholder
      if (modelRef.current) {
        try {
          const preds = await modelRef.current.predict(imgEl);
          const top = topPrediction(preds);
          setPredictions((prev) => ({
            ...prev,
            [item.id]: top
              ? { label: top.className || top.class, prob: top.probability ?? top.prob }
              : { label: "Unknown", prob: 0 },
          }));
        } catch (err) {
          console.error("Prediction failed for", item, err);
          setPredictions((prev) => ({
            ...prev,
            [item.id]: { label: "Prediction error", prob: 0 },
          }));
        }
      } else {
        setPredictions((prev) => ({
          ...prev,
          [item.id]: { label: "Model not loaded", prob: 0 },
        }));
      }
    }
  };

  // Upload button (placeholder)
  const submitImage = async () => {
    if (selectedImages.length === 0) {
      Swal.fire({ icon: "info", title: "No images", text: "Please select images first." });
      return;
    }
    setLoading(true);
    try {
      // TODO: send files to backend if desired (FormData)
      Swal.fire({ icon: "success", title: "Uploaded (demo)", text: "Images handled locally." });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Upload failed", text: err.message || "Unknown error" });
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (e, id) => {
    e.preventDefault();
    setSelectedImages((prev) => {
      const toKeep = prev.filter((it) => it.id !== id);
      // revoke URL for removed items
      prev.forEach((it) => {
        if (it.id === id) URL.revokeObjectURL(it.url);
      });
      return toKeep;
    });
    setPredictions((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  // cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      selectedImages.forEach((it) => URL.revokeObjectURL(it.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      footer={null}
      open={uploadModal}
      onCancel={() => setUploadModal(false)}
      width={1200}
      confirmLoading={loading}
      style={{ maxWidth: "95vw" }}
    >
      <div style={{ margin: 15 }}>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={10}>
            <Form form={form}>
              <Form.Item label="Upload your images" help="Retina / foot / other diabetic-related images">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
              </Form.Item>

              <div style={{ marginTop: 8 }}>
                {!modelLoaded && !modelError && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Spin size="small" /> <span>Loading AI model...</span>
                  </div>
                )}
                {modelError && <div style={{ color: "red" }}>Model load error: {modelError}</div>}
                {modelLoaded && <div style={{ color: "green" }}>Model loaded and ready.</div>}
              </div>
            </Form>
          </Col>

          <Col xs={24} sm={24} md={14}>
            {selectedImages.length > 0 ? (
              <Row gutter={[16, 16]}>
                {selectedImages.map((item) => {
                  const pred = predictions[item.id];
                  const label = pred?.label ?? null;
                  const prob = pred?.prob ?? null;
                  return (
                    <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                      <div style={{ position: "relative", borderRadius: 8, overflow: "hidden" }}>
                        <Button
                          icon={<DeleteOutlined />}
                          type="text"
                          danger
                          shape="circle"
                          style={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            zIndex: 2,
                            background: "white",
                            border: "1px solid red",
                          }}
                          onClick={(e) => removeImage(e, item.id)}
                        />
                        <AntImage
                          src={item.url}
                          alt="uploaded_img"
                          style={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <div style={{ padding: 8, textAlign: "center", minHeight: 48 }}>
                          {label ? (
                            <div>
                              <div style={{ fontWeight: 600 }}>{label}</div>
                              {typeof prob === "number" && (
                                <div style={{ fontSize: 12, color: "#555" }}>
                                  {(prob * 100).toFixed(1)}% confidence
                                </div>
                              )}
                            </div>
                          ) : (
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <Spin size="small" />
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <div style={{ padding: 20, color: "#666" }}>No images selected yet.</div>
            )}
          </Col>
        </Row>

        {/* {selectedImages.length > 0 && (
          <Button
            type="primary"
            onClick={submitImage}
            block
            style={{ marginTop: 10 }}
            loading={loading}
          >
            {selectedImages.length > 1 ? "Upload Images" : "Upload Image"}
          </Button>
        )} */}
      </div>
    </Modal>
  );
}

export default UploadFileComponent;
