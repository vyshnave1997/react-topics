"use client"; // virtualization happens in the browser

import React from "react";
import { FixedSizeList as List } from "react-window";
import TopicLayout from "../../../components/TopicLayout";

function VirtualizedList() {
  // 10,000 rows (normally too heavy for DOM)
  const items = Array.from({ length: 10000 }, (_, i) => `Row #${i + 1}`);

  return (
    <div className="border rounded">
      <List
        height={300}       // viewport height
        itemCount={items.length}
        itemSize={35}      // each row height
        width="100%"
      >
        {({ index, style }) => (
          <div
            style={style}
            className={`p-2 border-b ${
              index % 2 ? "bg-gray-50" : "bg-white"
            }`}
          >
            {items[index]}
          </div>
        )}
      </List>
    </div>
  );
}

export default function VirtualizationPage() {
  const steps = [
    "1. Rendering thousands of DOM nodes at once slows down apps.",
    "2. Virtualization only renders what is visible in the viewport.",
    "3. Libraries like React Window & React Virtualized handle this efficiently.",
    "4. Scroll down — only visible rows are mounted, others are recycled.",
  ];

  const code = `
"use client";
import React from "react";
import { FixedSizeList as List } from "react-window";

function VirtualizedList() {
  const items = Array.from({ length: 10000 }, (_, i) => \`Row #\${i + 1}\`);

  return (
    <List height={300} itemCount={items.length} itemSize={35} width="100%">
      {({ index, style }) => (
        <div style={style}>
          {items[index]}
        </div>
      )}
    </List>
  );
}

export default function VirtualizationPage() {
  return <VirtualizedList />;
}
  `;

  return (
    <TopicLayout
      title="Virtualization in React (React Window)"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Virtualized List Example
          </h2>
          <p>✅ Scroll through 10,000 items without performance issues.</p>
          <VirtualizedList />
        </div>
      }
    />
  );
}
