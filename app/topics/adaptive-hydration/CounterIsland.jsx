"use client"; // must be at the top!

import { useState } from "react";

export default function CounterIsland() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border rounded bg-yellow-100 mt-4">
      <h3 className="font-bold">⚡ Interactive Counter (Island)</h3>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="mt-2 px-3 py-1 bg-yellow-300 rounded hover:bg-yellow-400"
      >
        Increment
      </button>
    </div>
  );
}
