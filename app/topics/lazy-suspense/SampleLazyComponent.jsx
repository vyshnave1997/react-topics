"use client";

import React from "react";

export default function SampleLazyComponent() {
  return (
    <div className="p-4 border rounded bg-green-100">
      <h3>🌟 Lazy Component Loaded!</h3>
      <p>This component was loaded only when you clicked the button.</p>
    </div>
  );
}
