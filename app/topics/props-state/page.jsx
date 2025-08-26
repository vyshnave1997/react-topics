"use client";
import { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Child Component using props
function WelcomeMessage({ name }) {
  return <h3>Hello, {name}! 👋</h3>;
}

// ✅ Component with state
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  );
}

export default function PropsStatePage() {
  const [type, setType] = useState("props");

  const stepsProps = [
    "Props are short for 'properties' and are used to pass data from a parent component to a child component.",
    "They are read-only and cannot be modified by the child component.",
    "Props make components reusable by allowing dynamic data to be passed.",
    "In the example, we pass a 'name' prop to WelcomeMessage.",
  ];

  const stepsState = [
    "State is used to manage data that changes over time inside a component.",
    "Unlike props, state is internal and controlled by the component itself.",
    "We use the `useState` hook in functional components to declare state variables.",
    "In the example, we track a counter value and update it with buttons.",
  ];

  const propsCode = `
function WelcomeMessage({ name }) {
  return <h3>Hello, {name}! 👋</h3>;
}

export default function App() {
  return (
    <div>
      <WelcomeMessage name="Viki" />
      <WelcomeMessage name="Vyshnave" />
    </div>
  );
}
`;

  const stateCode = `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
`;

  const ResultComponent = type === "props" ? (
    <div>
      <WelcomeMessage name="Viki" />
      <WelcomeMessage name="Vyshnave" />
    </div>
  ) : (
    <Counter />
  );

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Select Concept:
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        >
          <option value="props">Props</option>
          <option value="state">State</option>
        </select>
      </div>

      <TopicLayout
        title="Props & State in React"
        steps={type === "props" ? stepsProps : stepsState}
        code={type === "props" ? propsCode : stateCode}
        result={ResultComponent}
      />
    </div>
  );
}
