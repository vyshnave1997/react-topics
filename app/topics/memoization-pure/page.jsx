"use client"; // runs in the browser

import React, { useState, memo } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Child Component (memoized)
const Child = memo(function Child({ value }) {
  console.log("🔄 Child re-rendered with value:", value);
  return (
    <div className="p-2 border rounded bg-green-50">
      <p>📦 Child Component</p>
      <p>Value: {value}</p>
    </div>
  );
});

function ParentDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <div className="p-2 border rounded bg-blue-50">
      <h3 className="font-bold">Memoization & Pure Components Demo</h3>
      <p>🔢 Parent Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="mt-2 px-3 py-1 bg-blue-300 rounded hover:bg-blue-400"
      >
        Increment Count
      </button>

      <button
        onClick={() => setText("Updated!")}
        className="mt-2 ml-2 px-3 py-1 bg-green-300 rounded hover:bg-green-400"
      >
        Update Text
      </button>

      {/* ✅ Child only re-renders if "text" changes */}
      <Child value={text} />
    </div>
  );
}

export default function MemoizationPage() {
  const steps = [
    "1. React re-renders child components when parent re-renders, even if props don’t change.",
    "2. `React.memo` (or Pure Components) prevent re-renders when props remain the same.",
    "3. In this demo, clicking 'Increment Count' re-renders the parent but NOT the child.",
    "4. The child only re-renders when its prop (`text`) actually changes.",
  ];

  const code = `
"use client";
import React, { useState, memo } from "react";

const Child = memo(function Child({ value }) {
  console.log("🔄 Child re-rendered with value:", value);
  return <p>Value: {value}</p>;
});

function ParentDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
      <button onClick={() => setText("Updated!")}>Update Text</button>
      <Child value={text} />
    </div>
  );
}

export default function MemoizationPage() {
  return <ParentDemo />;
}
  `;

  return (
    <TopicLayout
      title="Memoization & Pure Components in React"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Memoization & Pure Components Example
          </h2>
          <p>
            ✅ Child only re-renders when its props change (check console logs).
          </p>
          <ParentDemo />
        </div>
      }
    />
  );
}
