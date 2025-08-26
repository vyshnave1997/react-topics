"use client";

import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

//
// 🔹 Render Props Component
//
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ border: "1px solid black", height: "200px", padding: "20px" }}
    >
      {/* 🔥 Instead of rendering directly, we call the render() prop */}
      {render(position)}
    </div>
  );
}

//
// 🔹 Page Component
//
export default function RenderPropsPage() {
  const steps = [
    "1. Create a component that accepts a function as a prop (called render).",
    "2. Inside that component, define some reusable logic (e.g., track mouse position).",
    "3. Instead of returning JSX directly, call render() and pass data.",
    "4. The parent component decides how to render that data.",
    "5. This pattern allows logic to be shared in a flexible way.",
  ];

  const code = `
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "200px" }}>
      {render(position)}
    </div>
  );
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse Position: X: {x}, Y: {y}</p>
)} />
  `;

  return (
    <TopicLayout
      title="Render Props"
      steps={steps}
      code={code}
      result={
        <div>
          <h3>Example with Render Props:</h3>
          <MouseTracker
            render={({ x, y }) => (
              <p>
                Mouse Position: <strong>X: {x}, Y: {y}</strong>
              </p>
            )}
          />
        </div>
      }
    />
  );
}
