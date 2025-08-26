"use client";
import { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Example 1: If/Else Rendering
function IfElseRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if (isLoggedIn) {
    message = <h3>Welcome Back! 🎉</h3>;
  } else {
    message = <h3>Please Log In 🔑</h3>;
  }

  return (
    <div>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

// ✅ Example 2: Ternary Operator Rendering
function TernaryRendering() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <h3>
        {isSubscribed ? "Thanks for Subscribing! ✅" : "Please Subscribe 🔔"}
      </h3>
      <button onClick={() => setIsSubscribed(!isSubscribed)}>
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}

// ✅ Example 3: Logical AND (&&) Rendering
function AndRendering() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <p style={{ marginTop: "10px" }}>
          Here are some hidden details revealed! 🎊
        </p>
      )}
    </div>
  );
}

export default function ConditionalRenderingPage() {
  const [type, setType] = useState("ifelse");

  const steps = {
    ifelse: [
      "In React, you can use JavaScript if/else statements to conditionally render UI.",
      "We check a condition and assign the result to a variable.",
      "Then, we render the variable inside JSX.",
    ],
    ternary: [
      "The ternary operator (`condition ? truePart : falsePart`) is commonly used in JSX.",
      "It helps write conditional rendering inline inside JSX.",
      "This is shorter and cleaner compared to if/else.",
    ],
    and: [
      "Logical AND (`&&`) is useful when rendering something only if a condition is true.",
      "If the condition is false, React ignores the expression.",
      "Useful for showing optional UI elements.",
    ],
  };

  const code = {
    ifelse: `
function IfElseRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if (isLoggedIn) {
    message = <h3>Welcome Back! 🎉</h3>;
  } else {
    message = <h3>Please Log In 🔑</h3>;
  }

  return (
    <div>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
`,
    ternary: `
function TernaryRendering() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <h3>
        {isSubscribed ? "Thanks for Subscribing! ✅" : "Please Subscribe 🔔"}
      </h3>
      <button onClick={() => setIsSubscribed(!isSubscribed)}>
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}
`,
    and: `
function AndRendering() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <p style={{ marginTop: "10px" }}>
          Here are some hidden details revealed! 🎊
        </p>
      )}
    </div>
  );
}
`,
  };

  const ResultComponent =
    type === "ifelse" ? (
      <IfElseRendering />
    ) : type === "ternary" ? (
      <TernaryRendering />
    ) : (
      <AndRendering />
    );

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Select Conditional Rendering Type:
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        >
          <option value="ifelse">If/Else</option>
          <option value="ternary">Ternary Operator</option>
          <option value="and">Logical AND (&&)</option>
        </select>
      </div>

      <TopicLayout
        title="Conditional Rendering in React"
        steps={steps[type]}
        code={code[type]}
        result={ResultComponent}
      />
    </div>
  );
}
