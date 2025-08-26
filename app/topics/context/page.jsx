"use client";
import React, { createContext, useContext, useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// --------------------
// 1. Create Context
// --------------------
const ThemeContext = createContext();

// --------------------
// 2. Context Provider
// --------------------
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// --------------------
// 3. Consumer Components
// --------------------
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "1px solid #999",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Current Theme: {theme.toUpperCase()} (Click to Toggle)
    </button>
  );
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);
  return (
    <p style={{ marginTop: "1rem", fontSize: "18px" }}>
      The theme is now <b>{theme}</b>
    </p>
  );
}

// --------------------
// Page Component
// --------------------
export default function ContextAPIPage() {
  const steps = [
    "1. Create a Context using createContext().",
    "2. Wrap your app or part of app with Context.Provider.",
    "3. Pass a value (state/functions) to the Provider.",
    "4. Use useContext inside any child component to consume it.",
    "This avoids prop drilling (passing props through many levels).",
  ];

  const code = `
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);
  return <p>The theme is now {theme}</p>;
}
  `;

  const result = (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <ThemedButton />
        <ThemedText />
      </div>
    </ThemeProvider>
  );

  return (
    <TopicLayout
      title="React Context API"
      steps={steps}
      code={code}
      result={result}
    />
  );
}
