// ✅ This is a Server Component (no "use client")

import React from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Simulated server data fetch
async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s delay
  return [
    { id: 1, title: "Next.js 15 Released!" },
    { id: 2, title: "Understanding React Server Components" },
    { id: 3, title: "Hydration vs Streaming SSR" },
  ];
}

// 🔹 Server Component that fetches data
async function PostsList() {
  const posts = await getPosts();
  return (
    <ul className="list-disc pl-6">
      {posts.map((post) => (
        <li key={post.id} className="mb-1">
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default function RSCPage() {
  const steps = [
    "1. This page is a Server Component (no 'use client').",
    "2. `PostsList` fetches data directly on the server (no API call needed).",
    "3. The HTML of the list is streamed to the browser.",
    "4. No JavaScript for `PostsList` is sent to the client.",
    "5. The client only hydrates interactive parts (if we add 'use client').",
  ];

  const code = `
async function getPosts() {
  await new Promise((r) => setTimeout(r, 2000));
  return [
    { id: 1, title: "Next.js 15 Released!" },
    { id: 2, title: "Understanding React Server Components" },
    { id: 3, title: "Hydration vs Streaming SSR" },
  ];
}

async function PostsList() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function RSCPage() {
  return (
    <div>
      <h2>React Server Components Example</h2>
      <PostsList />
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="React Server Components (RSC)"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            React Server Components Example
          </h2>
          <PostsList />
        </div>
      }
    />
  );
}
