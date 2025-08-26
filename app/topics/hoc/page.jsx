"use client";

import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

//
// 🔹 Higher Order Component (HOC)
//
function withCounter(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    const increment = () => setCount((c) => c + 1);

    return <WrappedComponent count={count} increment={increment} {...props} />;
  };
}

//
// 🔹 Normal Components to wrap
//
function ClickCounter({ count, increment }) {
  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

function HoverCounter({ count, increment }) {
  return (
    <div>
      <p>Hovered {count} times</p>
      <h3
        onMouseOver={increment}
        style={{
          display: "inline-block",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        Hover Over Me
      </h3>
    </div>
  );
}

//
// 🔹 Wrap components using HOC
//
const EnhancedClickCounter = withCounter(ClickCounter);
const EnhancedHoverCounter = withCounter(HoverCounter);

//
// 🔹 Page Component (MUST be default export)
//
export default function HocPage() {
  const steps = [
    "1. Create a Higher Order Component (HOC) function.",
    "2. It takes another component as input.",
    "3. Add extra logic inside the HOC (state, functions, etc).",
    "4. Return the original component with new props injected.",
    "5. Example: withCounter adds counter logic to multiple components.",
  ];

  const code = `
function withCounter(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(c => c + 1);

    return <WrappedComponent count={count} increment={increment} {...props} />;
  };
}

function ClickCounter({ count, increment }) {
  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

function HoverCounter({ count, increment }) {
  return (
    <div>
      <p>Hovered {count} times</p>
      <h3 onMouseOver={increment}>Hover Over Me</h3>
    </div>
  );
}

const EnhancedClickCounter = withCounter(ClickCounter);
const EnhancedHoverCounter = withCounter(HoverCounter);
  `;

  return (
    <TopicLayout
      title="Higher Order Components (HOC)"
      steps={steps}
      code={code}
      result={
        <div>
          <EnhancedClickCounter />
          <EnhancedHoverCounter />
        </div>
      }
    />
  );
}
