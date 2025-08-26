// ✅ Server Component by default (no "use client")

import React, { Suspense } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Simulated async data fetch (3s delay)
async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { id: 1, title: "Understanding React Suspense" },
    { id: 2, title: "Streaming in Next.js" },
    { id: 3, title: "Data Fetching Best Practices" },
  ];
}

// 🔹 Async component to fetch & render posts
async function PostsList() {
  const posts = await fetchPosts();
  return (
    <div className="p-2 border rounded bg-green-50">
      <h3 className="font-bold">📚 Blog Posts</h3>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SuspenseDataFetchingPage() {
  const steps = [
    "1. Suspense lets you show a fallback UI while waiting for data to load.",
    "2. With Next.js server components, async fetching integrates seamlessly.",
    "3. In this demo, blog posts take 3 seconds to load.",
    "4. While waiting, the fallback message is shown immediately, then replaced by the data once ready.",
  ];

  const code = `
// Simulated async fetch
async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { id: 1, title: "Understanding React Suspense" },
    { id: 2, title: "Streaming in Next.js" },
    { id: 3, title: "Data Fetching Best Practices" },
  ];
}

async function PostsList() {
  const posts = await fetchPosts();
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default function SuspenseDataFetchingPage() {
  return (
    <div>
      <h2>Suspense Data Fetching Example</h2>
      <Suspense fallback={<p>⏳ Loading posts...</p>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Suspense Data Fetching in React/Next.js"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">
            Suspense Data Fetching Example
          </h2>
          <p>✅ Static UI shows instantly. Posts load after 3s.</p>

          <Suspense fallback={<p className="text-blue-500">⏳ Loading posts...</p>}>
            <PostsList />
          </Suspense>
        </div>
      }
    />
  );
}
