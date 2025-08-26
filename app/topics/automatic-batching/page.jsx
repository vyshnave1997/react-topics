"use client"; // batching demo must run in the browser

import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

function BatchingDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleMultipleUpdates() {
    // ✅ In React 18+, these updates are batched automatically (even inside setTimeout, promises, etc.)
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setText("Updated!");
  }

  return (
    <div className="p-2 border rounded bg-yellow-50">
      <h3 className="font-bold">Automatic Batching Demo</h3>
      <p>🔢 Count: {count}</p>
      <p>📝 Text: {text}</p>
      <button
        onClick={handleMultipleUpdates}
        className="mt-2 px-3 py-1 bg-yellow-300 rounded hover:bg-yellow-400"
      >
        Trigger Multiple Updates
      </button>
    </div>
  );
}

export default function AutomaticBatchingPage() {
  const steps = [
    "1. Before React 18, state updates inside async callbacks were not batched.",
    "2. React 18+ (and React 19) automatically batches all state updates — even in promises, setTimeout, event handlers, etc.",
    "3. This means fewer re-renders and better performance.",
    "4. In this example, clicking the button triggers 3 state updates, but React re-renders only once.",
  ];

  const code = `
"use client";
import React, { useState } from "react";

function BatchingDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleMultipleUpdates() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setText("Updated!");
  }

  return (
    <div>
      <h3>Automatic Batching Demo</h3>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={handleMultipleUpdates}>Trigger Multiple Updates</button>
    </div>
  );
}

export default function AutomaticBatchingPage() {
  return <BatchingDemo />;
}
  `;

  return (
    <TopicLayout
      title="Automatic Batching in React 19"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Automatic Batching Example
          </h2>
          <p>✅ Multiple state updates are merged into a single render.</p>
          <BatchingDemo />
        </div>
      }
    />
  );
}
