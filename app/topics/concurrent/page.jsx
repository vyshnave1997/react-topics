"use client";

import React, { useState, useTransition, useDeferredValue } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Fake heavy list component
function List({ input }) {
  const deferredInput = useDeferredValue(input); // Defer expensive updates
  const items = Array(20000)
    .fill(null)
    .map((_, i) => (
      <div key={i} className="border p-1">
        {deferredInput} - Item {i}
      </div>
    ));

  return (
    <div className="h-60 overflow-auto border mt-2">{items}</div>
  );
}

export default function ConcurrentPage() {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  const steps = [
    "1. Concurrent Rendering in React 18 allows multiple UI updates to be interrupted and resumed.",
    "2. useTransition lets you mark some state updates as 'non-urgent' so urgent updates (like typing) stay responsive.",
    "3. useDeferredValue lets you defer updating an expensive child component.",
    "4. In this example, typing stays fast while the large list renders in the background.",
  ];

  const code = `
import React, { useState, useTransition, useDeferredValue } from "react";

function List({ input }) {
  const deferredInput = useDeferredValue(input);
  const items = Array(20000).fill(null).map((_, i) => (
    <div key={i}>{deferredInput} - Item {i}</div>
  ));
  return <div>{items}</div>;
}

export default function App() {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    // Mark expensive updates as non-urgent
    startTransition(() => {
      setText(value);
    });
  }

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Type here..." />
      {isPending && <p>Rendering list...</p>}
      <List input={text} />
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Concurrent Rendering in React"
      steps={steps}
      code={code}
      result={
        <div>
          <input
            type="text"
            onChange={(e) => {
              const value = e.target.value;
              startTransition(() => {
                setText(value);
              });
            }}
            placeholder="Type here..."
            className="border p-2 mb-2 w-full"
          />
          {isPending && <p className="text-red-500">Rendering list...</p>}
          <List input={text} />
        </div>
      }
    />
  );
}
