"use client";
import React from "react";
import "./TopicLayout.css";

export default function TopicLayout({ title, steps, code, result }) {
  return (
    <div className="topic-container">
      {/* Heading */}
      <h1 className="topic-heading">{title}</h1>

      {/* Steps + Code side by side */}
      <div className="topic-content">
        <div className="steps-box">
          <h2>Steps</h2>
          <ol>
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="code-box">
          <h2>Code</h2>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* Result */}
      <div className="result-box">
        <h2>Result</h2>
        <div>{result}</div>
      </div>
    </div>
  );
}
