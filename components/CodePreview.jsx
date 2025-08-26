"use client";

export default function CodePreview({ title, steps = [], code, children }) {
  return (
    <div className="p-6 border rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Left: Steps */}
        <div className="p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">📝 Steps</h2>
          <ol className="list-decimal list-inside space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>

        {/* Right: Code + Example */}
        <div className="space-y-4">
          {/* Example (live) */}
          <div className="p-4 border rounded bg-white shadow">
            {children}
          </div>

          {/* Code */}
          <pre className="p-4 border rounded bg-black text-green-300 overflow-x-auto text-sm">
            {code}
          </pre>
        </div>
      </div>
    </div>
  );
}
