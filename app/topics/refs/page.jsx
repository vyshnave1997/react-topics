"use client";
import React, { useRef, useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

function InputFocusExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // directly focuses the input
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
      />
      <button
        onClick={handleFocus}
        style={{
          marginLeft: "10px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #333",
          cursor: "pointer",
        }}
      >
        Focus Input
      </button>
    </div>
  );
}

function CounterExample() {
  const countRef = useRef(0);
  const [, forceRender] = useState(false);

  const increment = () => {
    countRef.current += 1;
    console.log("Ref count:", countRef.current);
    forceRender((p) => !p); // trigger re-render manually
  };

  return (
    <div>
      <p>
        Ref Count (mutable, does not auto re-render):{" "}
        <b>{countRef.current}</b>
      </p>
      <button
        onClick={increment}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #333",
          cursor: "pointer",
        }}
      >
        Increment Ref Count
      </button>
    </div>
  );
}

export default function RefsPage() {
  const steps = [
    "1. Create a ref using useRef().",
    "2. Attach the ref to a DOM element using ref attribute.",
    "3. Access the element directly via ref.current (e.g., focus input).",
    "4. Refs can also store values that persist between renders without causing re-renders.",
  ];

  const code = `
function InputFocusExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

function CounterExample() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Ref count:", countRef.current);
  };

  return (
    <>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
  `;

  const result = (
    <div>
      <InputFocusExample />
      <CounterExample />
    </div>
  );

  return (
    <TopicLayout
      title="React Refs"
      steps={steps}
      code={code}
      result={result}
    />
  );
}
