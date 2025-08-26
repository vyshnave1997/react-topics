// ✅ This file is a Server Component by default (SSR enabled)

import React from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Simulate fetching server-side data
async function getServerTime() {
  return new Date().toISOString();
}

export default async function SSRPage() {
  const serverTime = await getServerTime();

  const steps = [
    "1. Server-Side Rendering (SSR) means the HTML is generated on the server for every request.",
    "2. This makes content SEO-friendly and improves first-load performance.",
    "3. In Next.js App Router, all components are SSR by default unless marked 'use client'.",
    "4. Here we fetch the current server time and render it directly.",
  ];

  const code = `
import React from "react";

// ✅ Server Component (default)
async function getServerTime() {
  return new Date().toISOString();
}

export default async function SSRPage() {
  const serverTime = await getServerTime();

  return (
    <div>
      <h2>Server-Side Rendering Example</h2>
      <p>Current server time: {serverTime}</p>
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Server-Side Rendering (SSR) in Next.js"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Server-Side Rendering Example
          </h2>
          <p>✅ This page was rendered on the server.</p>
          <p>
            <strong>Server Time:</strong> {serverTime}
          </p>
        </div>
      }
    />
  );
}
