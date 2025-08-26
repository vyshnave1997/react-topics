// ✅ Server Component (default)

import React from "react";
import TopicLayout from "../../../components/TopicLayout";
import CounterIsland from "./CounterIsland"; // import the client "island"

// 🔹 Non-interactive section (Server Component - no hydration)
function StaticHero() {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <h2 className="text-2xl font-bold">🌍 Welcome to Our Site</h2>
      <p>This section is 100% static (server-rendered, no JS needed).</p>
    </div>
  );
}

export default function IslandsPage() {
  const steps = [
    "1. Adaptive Hydration (Islands Architecture) means hydrating only the interactive parts of a page.",
    "2. Server Components render static content without shipping JS to the client.",
    "3. Client Components (like the counter) are hydrated and interactive.",
    "4. This improves performance: less JS → faster load → better UX.",
  ];

  const code = `
// ✅ Server Component
function StaticHero() {
  return <h2>🌍 Static Content</h2>;
}

// 🔹 Client Component (separate file with "use client")
export default function CounterIsland() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}

// 🔹 Page (mixing islands)
export default function IslandsPage() {
  return (
    <div>
      <StaticHero />
      <CounterIsland />
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Adaptive Hydration / Islands Architecture"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <StaticHero />
          <CounterIsland />
        </div>
      }
    />
  );
}
