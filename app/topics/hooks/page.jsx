"use client";
import React, { useState, useEffect, useReducer, createContext, useContext } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Hook Demos
// ----------------------

// useState Demo
function UseStateDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// useEffect Demo
function UseEffectDemo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <h3>Current Time: {time}</h3>;
}

// useContext Demo
const MyContext = createContext();
function ContextProvider() {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ContextChild />
    </MyContext.Provider>
  );
}
function ContextChild() {
  const msg = useContext(MyContext);
  return <h3>{msg}</h3>;
}

// useReducer Demo
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function HooksPage() {
  const [selectedHook, setSelectedHook] = useState("useState");

  const hookExamples = {
    useState: {
      steps: [
        "useState lets you add state to functional components.",
        "It returns a state variable and a setter function.",
        "Example: const [count, setCount] = useState(0)"
      ],
      code: `
function UseStateDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
      `,
      result: <UseStateDemo />
    },
    useEffect: {
      steps: [
        "useEffect lets you perform side effects in functional components.",
        "It runs after rendering and can return a cleanup function.",
        "Example: updating time every second."
      ],
      code: `
function UseEffectDemo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <h3>Current Time: {time}</h3>;
}
      `,
      result: <UseEffectDemo />
    },
    useContext: {
      steps: [
        "useContext lets you consume values from React Context.",
        "Useful for global data like themes, user info, etc.",
        "Example: passing a message through context."
      ],
      code: `
const MyContext = createContext();

function ContextProvider() {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ContextChild />
    </MyContext.Provider>
  );
}

function ContextChild() {
  const msg = useContext(MyContext);
  return <h3>{msg}</h3>;
}
      `,
      result: <ContextProvider />
    },
    useReducer: {
      steps: [
        "useReducer is an alternative to useState for complex state logic.",
        "It takes a reducer function and an initial state.",
        "Example: simple counter with increment and decrement."
      ],
      code: `
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
      `,
      result: <UseReducerDemo />
    }
  };

  const { steps, code, result } = hookExamples[selectedHook];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>React Hooks Examples</h2>
      <select
        value={selectedHook}
        onChange={(e) => setSelectedHook(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="useState">useState</option>
        <option value="useEffect">useEffect</option>
        <option value="useContext">useContext</option>
        <option value="useReducer">useReducer</option>
      </select>
      <TopicLayout title={selectedHook} steps={steps} code={code} result={result} />
    </div>
  );
}
