"use client";
import React from "react";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Error Boundary Class Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI is shown
    return { hasError: true, errorMessage: error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            border: "1px solid red",
            padding: "20px",
            borderRadius: "6px",
            background: "#ffe5e5",
            color: "#b00000",
          }}
        >
          <h3>⚠ Something went wrong!</h3>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ✅ A Buggy Component that throws error
function BuggyComponent({ throwError }) {
  if (throwError) {
    throw new Error("Simulated error: BuggyComponent crashed!");
  }
  return <p>✅ Component is working fine!</p>;
}

// ✅ Page
export default function ErrorBoundaryPage() {
  const steps = [
    "1. Create a class component with state `hasError`.",
    "2. Use `getDerivedStateFromError` to update state when error happens.",
    "3. Use `componentDidCatch` to log error details.",
    "4. Wrap child components inside <ErrorBoundary>.",
    "5. When an error occurs, show fallback UI instead of crashing app.",
  ];

  const code = `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3>⚠ Something went wrong!</h3>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <BuggyComponent throwError={true} />
</ErrorBoundary>
  `;

  const result = (
    <div>
      <h4>Without Error:</h4>
      <ErrorBoundary>
        <BuggyComponent throwError={false} />
      </ErrorBoundary>

      <h4 style={{ marginTop: "20px" }}>With Error:</h4>
      <ErrorBoundary>
        <BuggyComponent throwError={true} />
      </ErrorBoundary>
    </div>
  );

  return (
    <TopicLayout
      title="React Error Boundaries"
      steps={steps}
      code={code}
      result={result}
    />
  );
}
