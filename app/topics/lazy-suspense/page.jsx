"use client";

import React, { Suspense, lazy, useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// 🔹 Lazy load the component
const LazyComponent = lazy(() => import("./SampleLazyComponent"));

export default function LazySuspensePage() {
  const [show, setShow] = useState(false);

  const steps = [
    "1. Use React.lazy() to dynamically import a component.",
    "2. Wrap the lazy component inside <Suspense fallback={...}>.",
    "3. React will load the component only when needed.",
    "4. Suspense shows a fallback UI while loading.",
    "5. This improves performance by code-splitting.",
  ];

  const code = `
import React, { Suspense, lazy, useState } from "react";

// Lazy load the component
const LazyComponent = lazy(() => import("./SampleLazyComponent"));

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Load Component</button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}
  `;

  return (
    <TopicLayout
      title="Lazy Loading & Suspense"
      steps={steps}
      code={code}
      result={
        <div>
          <button
            onClick={() => setShow(true)}
            className="px-3 py-2 bg-blue-500 text-white rounded"
          >
            Load Lazy Component
          </button>
          <div className="mt-4">
            <Suspense fallback={<p>Loading...</p>}>
              {show && <LazyComponent />}
            </Suspense>
          </div>
        </div>
      }
    />
  );
}
