"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Lazy chunk only loads when this component is rendered
const LazyHeavyChart = dynamic(() => import("./HeavyChart"), {
  loading: () => (
    <div className="p-3 border rounded bg-yellow-50">
      ⏳ Loading chart chunk...
    </div>
  ),
  ssr: false, // ensure client-only (it's interactive & heavy)
});

export default function ToggleChart() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 border rounded bg-yellow-100">
      <h3 className="font-bold">⚡ Code Splitting: Dynamic Import</h3>
      <p className="text-sm">
        The chart’s JavaScript is loaded only after you click the button.
      </p>
      <button
        onClick={() => setShow((s) => !s)}
        className="mt-2 px-3 py-1 bg-yellow-300 rounded hover:bg-yellow-400"
      >
        {show ? "Hide Chart (Unmount)" : "Load Chart (Lazy)"}
      </button>

      <div className="mt-3">{show ? <LazyHeavyChart /> : null}</div>
    </div>
  );
}
