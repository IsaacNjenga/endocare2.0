import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function RenderContent(markdownText) {
  return (
    <ReactMarkdown
      children={markdownText}
      components={{
        h2: ({ children }) => (
          <h2
            style={{
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              color: "white",
              fontFamily: "Raleway",
              textDecoration: "underline",
            }}
          >
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p
            style={{
              lineHeight: 1.6,
              marginBottom: "1rem",
              fontFamily: "Roboto",
              color: "white",
            }}
          >
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong style={{ fontWeight: 600, color: "white" }}>
            {children}
          </strong>
        ),
        li: ({ children }) => (
          <li
            style={{
              marginBottom: "0.5rem",
              lineHeight: 1.5,
              fontFamily: "Roboto",
              color: "white",
            }}
          >
            {children}
          </li>
        ),
        ul: ({ children }) => (
          <ul style={{ paddingLeft: "1.2rem", fontFamily: "Roboto" }}>
            {children}
          </ul>
        ),
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
            <code
              style={{
                backgroundColor: "#eee",
                padding: "2px 4px",
                borderRadius: 4,
              }}
            >
              {children}
            </code>
          );
        },
      }}
    />
  );
}

export default RenderContent;
