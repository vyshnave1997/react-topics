"use client";

import React, { useMemo } from "react";

// Simulate a heavy component (big calc)
export default function HeavyChart() {
  const points = useMemo(() => {
    // generate 8k pseudo-random points (heavy-ish)
    const data = [];
    let x = 0, y = 0;
    for (let i = 0; i < 8000; i++) {
      x += Math.sin(i / 12) * 0.7 + Math.cos(i / 33) * 0.4;
      y += Math.cos(i / 17) * 0.6 + Math.sin(i / 27) * 0.5;
      data.push({ x, y });
    }
    return data;
  }, []);

  return (
    <div className="p-3 border rounded bg-green-50">
      <h3 className="font-bold mb-2">📈 HeavyChart (Lazy Loaded)</h3>
      <p className="text-sm mb-2">
        Rendered {points.length} points. (Simulated heavy work)
      </p>
      <div className="h-40 overflow-auto border rounded p-2 bg-white">
        {points.slice(0, 120).map((p, i) => (
          <div key={i} className="text-xs">
            ({p.x.toFixed(2)}, {p.y.toFixed(2)})
          </div>
        ))}
      </div>
    </div>
  );
}
