"use client";
import React, { useState, useEffect } from "react";
import TopicLayout from "../../../components/TopicLayout";

//
// 🔹 1. Custom Hook - useCounter
//
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

//
// 🔹 2. Custom Hook - useLocalStorage
//
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

//
// 🔹 3. Custom Hook - useFetch
//
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

//
// 🔹 Components to Display Result
//
function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("name", "Guest");
  return (
    <div>
      <h3>Stored Name: {name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}

function FetchDemo() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h3>Fetched Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

//
// 🔹 Main Page Component
//
export default function CustomHooksPage() {
  const [selected, setSelected] = useState("counter");

  const steps = [
    "1. Create a function with `use` prefix to define a custom hook.",
    "2. Use React hooks (`useState`, `useEffect`, etc.) inside it.",
    "3. Return values or functions to be used in components.",
    "4. Reuse custom hooks across multiple components for cleaner logic.",
    "5. Example hooks: useCounter, useLocalStorage, useFetch.",
  ];

  const code = `
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return { data, loading };
}
  `;

  let result;
  if (selected === "counter") result = <CounterDemo />;
  else if (selected === "localStorage") result = <LocalStorageDemo />;
  else result = <FetchDemo />;

  return (
    <TopicLayout title="Custom Hooks in React" steps={steps} code={code} result={
      <div>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{ marginBottom: "10px", padding: "6px" }}
        >
          <option value="counter">useCounter</option>
          <option value="localStorage">useLocalStorage</option>
          <option value="fetch">useFetch</option>
        </select>
        {result}
      </div>
    } />
  );
}
