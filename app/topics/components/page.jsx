"use client";
import { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";
import React from "react";

// Functional Component
function FunctionalGreeting() {
  return <h2>Hello from Functional Component 👋</h2>;
}

// Class Component
class ClassGreeting extends React.Component {
  render() {
    return <h2>Hello from Class Component 👋</h2>;
  }
}

export default function ComponentsPage() {
  const [type, setType] = useState("functional");

  const steps = [
    "Components are building blocks of React applications.",
    "They can be defined as **Functional Components** or **Class Components**.",
    "Functional components are simple JS functions returning JSX.",
    "Class components use ES6 classes and extend React.Component.",
    "Both can accept props and manage state (class uses this.state, functional uses hooks).",
  ];

  const functionalCode = `
function FunctionalGreeting() {
  return <h2>Hello from Functional Component 👋</h2>;
}

export default function App() {
  return (
    <div>
      <FunctionalGreeting />
    </div>
  );
}
`;

  const classCode = `
import React from "react";

class ClassGreeting extends React.Component {
  render() {
    return <h2>Hello from Class Component 👋</h2>;
  }
}

export default function App() {
  return (
    <div>
      <ClassGreeting />
    </div>
  );
}
`;

  // ✅ store the component reference (not JSX)
  const ResultComponent =
    type === "functional" ? FunctionalGreeting : ClassGreeting;

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Select Component Type:
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        >
          <option value="functional">Functional Component</option>
          <option value="class">Class Component</option>
        </select>
      </div>

      <TopicLayout
        title="React Components"
        steps={steps}
        code={type === "functional" ? functionalCode : classCode}
        result={<ResultComponent />}
      />
    </div>
  );
}
