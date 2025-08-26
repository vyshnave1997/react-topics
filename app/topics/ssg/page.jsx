// ✅ This file is a Server Component (by default → pre-rendered)

import React from "react";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Revalidate every 60 seconds → makes this page Static Site Generated (SSG)
export const revalidate = 60;

// 🔹 Simulate static data fetching
async function getBuildTime() {
  return new Date().toISOString();
}

export default async function SSGPage() {
  const buildTime = await getBuildTime();

  const steps = [
    "1. Static Site Generation (SSG) means the page is pre-rendered at build time.",
    "2. In Next.js App Router, you enable SSG using `export const revalidate = <seconds>`.",
    "3. If `revalidate` is set, Next.js will rebuild the page in the background after that time.",
    "4. This example shows the build time (when the page was generated).",
  ];

  const code = `
import React from "react";

// ✅ Mark page as SSG (regenerated every 60 seconds)
export const revalidate = 60;

async function getBuildTime() {
  return new Date().toISOString();
}

export default async function SSGPage() {
  const buildTime = await getBuildTime();

  return (
    <div>
      <h2>Static Site Generation Example</h2>
      <p>Page built at: {buildTime}</p>
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Static Site Generation (SSG) in Next.js"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Static Site Generation Example
          </h2>
          <p>✅ This page was pre-rendered at build time.</p>
          <p>
            <strong>Build Time:</strong> {buildTime}
          </p>
          <p className="text-sm text-gray-500">
            (This will update only if the page is revalidated every 60s)
          </p>
        </div>
      }
    />
  );
}
