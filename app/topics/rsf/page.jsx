"use client"; // because we are handling form & events in client

import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Import server action from separate file
import { saveMessage } from "../../../server-actions/saveMessage";

export default function RSFPage() {
  const [status, setStatus] = useState("");

  const steps = [
    "1. Define a server function with 'use server'.",
    "2. Import that server function inside a Client Component.",
    "3. Call it directly (no fetch / API routes needed).",
    "4. Next.js handles sending the request to the server.",
    "5. Great for form submissions, DB updates, or mutations.",
  ];

  const code = `
// ✅ server-actions/saveMessage.js
"use server";

export async function saveMessage(formData) {
  const name = formData.get("name");
  console.log("Server received:", name);
  return "Message saved for " + name;
}

// ✅ app/topics/rsf/page.jsx
"use client";
import { saveMessage } from "../../../server-actions/saveMessage";

export default function RSFPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await saveMessage(formData);
    setStatus(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Enter your name" />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}
  `;

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await saveMessage(formData);
    setStatus(result);
  }

  return (
    <TopicLayout
      title="React Server Functions (RSF)"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-3">
            React Server Function Example
          </h2>
          <form onSubmit={handleSubmit} className="space-x-2">
            <input
              name="name"
              placeholder="Enter your name"
              className="border p-1 rounded"
            />
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
              Send
            </button>
          </form>
          {status && (
            <p className="mt-2 text-green-600 font-medium">{status}</p>
          )}
        </div>
      }
    />
  );
}
