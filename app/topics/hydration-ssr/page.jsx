// ✅ Server Component by default (no "use client")

import React, { Suspense } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Simulated slow server fetch
async function fetchUser() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3s delay
  return { name: "Vyshnave", role: "Frontend Developer" };
}

// 🔹 Component that waits for server data
async function UserProfile() {
  const user = await fetchUser();
  return (
    <div className="p-2 border rounded bg-green-50">
      <h3 className="font-bold">User Profile (Streamed)</h3>
      <p>👤 Name: {user.name}</p>
      <p>💼 Role: {user.role}</p>
    </div>
  );
}

export default function HydrationSSRPage() {
  const steps = [
    "1. Next.js first sends HTML to the client (hydration happens when React takes over).",
    "2. With Streaming SSR, components are sent to the browser as soon as they're ready.",
    "3. In this example, the static text appears immediately.",
    "4. The user profile is delayed (3s), but it streams in without blocking the whole page.",
  ];

  const code = `
import React, { Suspense } from "react";

// 🔹 Simulated server fetch
async function fetchUser() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name: "Vyshnave", role: "Frontend Developer" };
}

async function UserProfile() {
  const user = await fetchUser();
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default function HydrationSSRPage() {
  return (
    <div>
      <h2>Hydration & Streaming SSR Example</h2>
      <p>✅ This text shows immediately (hydrated).</p>

      <Suspense fallback={<p>⏳ Loading profile...</p>}>
        {/* User profile will stream in after 3 seconds */}
        <UserProfile />
      </Suspense>
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Hydration & Streaming SSR in Next.js"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Hydration & Streaming SSR Example
          </h2>
          <p>✅ This static text shows instantly (hydrated).</p>

          <Suspense fallback={<p className="text-blue-500">⏳ Loading profile...</p>}>
            <UserProfile />
          </Suspense>
        </div>
      }
    />
  );
}
