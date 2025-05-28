import { Card, Input, Button, Typography, Space, Spin } from "antd";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

const { Text } = Typography;

const renderMessageContent = (msg) => (
  <ReactMarkdown
    children={msg.content}
    components={{
      code({ inline, children, ...props }) {
        return !inline ? (
          <SyntaxHighlighter
            style={oneDark}
            language="javascript"
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code style={{ backgroundColor: "#eee", padding: "2px 4px" }}>
            {children}
          </code>
        );
      },
      ol: ({ children }) => <ol style={{ paddingLeft: 20 }}>{children}</ol>,
      ul: ({ children }) => <ul style={{ paddingLeft: 20 }}>{children}</ul>,
    }}
  />
);

function ChatBot({
  input,
  setInput,
  sendMessage,
  loading,
  setOpenBot,
  messages,
}) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <Card
      extra={<CloseOutlined onClick={() => setOpenBot(false)} />}
      bodyStyle={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      style={{
        position: "fixed",
        bottom: 100,
        right: 24,
        width: 500,
        height: 450,
        display: "flex",
        flexDirection: "column",
        zIndex: 1001,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        backgroundColor: "rgb(255,255,255,0.9)",
      }}
    >
      {/* Scrollable messages area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "3px",
              fontFamily: msg.role === "user" ? "Raleway" : "Roboto",
            }}
          >
            <div
              style={{
                backgroundColor:
                  msg.role === "user" ? "#1677ff" : "rgba(0, 140, 0, 0.6)",
                color: "#fff",
                padding: "6px 10px",
                borderRadius: "10px",
                maxWidth: "70%",
                wordBreak: "break-word",
              }}
            >
              <Text
                strong
                style={{
                  display: "block",
                  marginBottom: 0,
                  fontFamily: msg.role === "user" ? "Raleway" : "Roboto",
                }}
              >
                {msg.role === "user" ? "You" : "EndoAI"}
              </Text>
              {renderMessageContent(msg)}
            </div>
          </div>
        ))}

        {loading && <Spin size="large" style={{ margin: "20px auto" }} />}
        <div ref={chatEndRef} />
      </div>

      {/* Sticky input area */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          padding: "15px",
          backgroundColor: "rgb(255,255,255,0.9)",
        }}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPressEnter={sendMessage}
            disabled={loading}
            style={{
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <Button
            icon={<SendOutlined />}
            type="primary"
            onClick={sendMessage}
            disabled={loading}
            style={{ padding: "0px 30px" }}
          />
        </Space.Compact>
      </div>
    </Card>
  );
}

export default ChatBot;
