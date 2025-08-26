// ✅ Server Component by default

import React from "react";
import TopicLayout from "../../../components/TopicLayout";
import ToggleChart from "./ToggleChart"; // client island that lazy-loads HeavyChart

function StaticHero() {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <h2 className="text-2xl font-bold">🧩 Code Splitting (Dynamic Import)</h2>
      <p>
        Static content renders immediately with zero client JS. Interactive
        parts load their JS on demand.
      </p>
    </div>
  );
}

export default function CodeSplittingPage() {
  const steps = [
    "1. Keep the page as a Server Component → no hydration cost for static UI.",
    "2. Put interactivity in a small Client Component island.",
    "3. Use next/dynamic to lazy-load the heavy component when it’s actually needed.",
    "4. Result: smaller initial JS, faster TTI — the heavy chunk loads only on demand.",
  ];

  const code = `// Client island
import dynamic from "next/dynamic";
const LazyHeavy = dynamic(() => import("./Heavy"), { loading: () => <p>Loading…</p>, ssr: false });

export default function Toggle() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>
        {show ? "Hide" : "Load Heavy"}
      </button>
      {show ? <LazyHeavy /> : null}
    </>
  );
}`.trim();

  return (
    <TopicLayout
      title="Code Splitting with next/dynamic"
      steps={steps}
      code={code}
      result={
        <div className="p-4 border rounded">
          <StaticHero />
          <div className="mt-4">
            <ToggleChart />
          </div>
        </div>
      }
    />
  );
}
