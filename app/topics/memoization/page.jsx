"use client";

import React, { useState, useMemo, useCallback } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Child component wrapped with React.memo
const Child = React.memo(({ onClick, value }) => {
  console.log("Child rendered 🚀");
  return (
    <div className="p-2 border rounded bg-green-100 mt-2">
      <p>Child Value: {value}</p>
      <button
        onClick={onClick}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Increase Value
      </button>
    </div>
  );
});

export default function MemoizationPage() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // 🔹 useMemo example: Expensive calculation
  const expensiveCalc = useMemo(() => {
    console.log("Expensive calculation running 🧮");
    return count * 10;
  }, [count]);

  // 🔹 useCallback example: Memoize function
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const steps = [
    "1. React.memo: Prevents unnecessary re-renders of child components.",
    "2. useMemo: Memoizes expensive calculations so they don't re-run unnecessarily.",
    "3. useCallback: Memoizes functions so they don't get recreated on every render.",
    "4. Together, these improve performance in React apps.",
  ];

  const code = `
import React, { useState, useMemo, useCallback } from "react";

// Child wrapped in React.memo
const Child = React.memo(({ onClick, value }) => {
  console.log("Child rendered 🚀");
  return (
    <div>
      <p>Child Value: {value}</p>
      <button onClick={onClick}>Increase Value</button>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // useMemo - Expensive calculation
  const expensiveCalc = useMemo(() => {
    console.log("Expensive calculation running 🧮");
    return count * 10;
  }, [count]);

  // useCallback - Memoize function
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Expensive Value: {expensiveCalc}</h3>
      <Child onClick={handleClick} value={count} />

      <button onClick={() => setOther(other + 1)}>
        Increase Other: {other}
      </button>
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Memoization in React"
      steps={steps}
      code={code}
      result={
        <div>
          <h2 className="text-lg font-bold">Count: {count}</h2>
          <h3 className="mb-2">Expensive Value: {expensiveCalc}</h3>

          {/* Child component */}
          <Child onClick={handleClick} value={count} />

          {/* This button updates unrelated state */}
          <button
            onClick={() => setOther(other + 1)}
            className="px-3 py-1 mt-3 bg-purple-500 text-white rounded"
          >
            Increase Other: {other}
          </button>
        </div>
      }
    />
  );
}
