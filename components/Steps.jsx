"use client";

export default function Steps({ steps }) {
  return (
    <details className="steps">
      <summary>📖 How it Works (Step by Step)</summary>
      <ol>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </details>
  );
}
