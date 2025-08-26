"use client";

import React, { useState, createContext, useContext } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ==========================
// 1️⃣ Local State
// ==========================
const localCode = `function LocalStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`;

function LocalStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="border p-2 rounded mb-2 bg-yellow-50">
      <h4 className="font-bold">Local State Counter</h4>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        +1
      </button>
    </div>
  );
}

// ==========================
// 2️⃣ Context API
// ==========================
const CountContext = createContext();
const contextCode = `const CountContext = createContext();
function ContextCounter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`;

function ContextCounter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="border p-2 rounded mb-2 bg-green-50">
      <h4 className="font-bold">Context API Counter</h4>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        +1
      </button>
    </div>
  );
}

// ==========================
// 3️⃣ Redux Toolkit
// ==========================
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const reduxSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
const reduxStore = configureStore({ reducer: { counter: reduxSlice.reducer } });

const reduxCode = `import { configureStore, createSlice } from "@reduxjs/toolkit";
const reduxSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: { increment: state => { state.value += 1 } }
});
const store = configureStore({ reducer: { counter: reduxSlice.reducer } });
function ReduxCounter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(reduxSlice.actions.increment())}>+1</button>
    </div>
  );
}`;

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="border p-2 rounded mb-2 bg-red-50">
      <h4 className="font-bold">Redux Toolkit Counter</h4>
      <p>Count: {count}</p>
      <button
        onClick={() => dispatch(reduxSlice.actions.increment())}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        +1
      </button>
    </div>
  );
}

// ==========================
// 4️⃣ Zustand
// ==========================
import { create } from "zustand";

const useZustandStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const zustandCode = `import { create } from "zustand";
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));
function ZustandCounter() {
  const { count, increment } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}`;

function ZustandCounter() {
  const { count, increment } = useZustandStore();
  return (
    <div className="border p-2 rounded mb-2 bg-purple-50">
      <h4 className="font-bold">Zustand Counter</h4>
      <p>Count: {count}</p>
      <button
        onClick={increment}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        +1
      </button>
    </div>
  );
}

// ==========================
// 5️⃣ Jotai
// ==========================
import { atom as jotaiAtom, useAtom } from "jotai";

const jotaiCounter = jotaiAtom(0);
const jotaiCode = `import { atom, useAtom } from "jotai";
const jotaiCounter = atom(0);
function JotaiCounter() {
  const [count, setCount] = useAtom(jotaiCounter);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`;

function JotaiCounter() {
  const [count, setCount] = useAtom(jotaiCounter);
  return (
    <div className="border p-2 rounded mb-2 bg-teal-50">
      <h4 className="font-bold">Jotai Counter</h4>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        +1
      </button>
    </div>
  );
}

// ==========================
// Main Page
// ==========================
export default function StateManagementPage() {
  const [option, setOption] = useState("local");
  const [countContext, setCountContext] = useState(0);

  const stepsMapping = {
    local: [
      "Local state is stored inside the component.",
      "It resets if the component unmounts.",
      "Best for small, self-contained states.",
    ],
    context: [
      "Context API shares state across multiple components.",
      "Avoids prop drilling.",
      "Works well for theming, auth, or shared data.",
    ],
    redux: [
      "Redux Toolkit provides a global predictable state store.",
      "State is immutable and updated via actions & reducers.",
      "Works for complex applications with many components sharing state.",
    ],
    zustand: [
      "Zustand provides minimalistic global state with a simple API.",
      "State updates are reactive and components re-render automatically.",
      "No boilerplate; ideal for small-medium apps.",
    ],
    jotai: [
      "Jotai uses atomic state units similar to Recoil.",
      "State is isolated and simple to manage.",
      "Easy integration for small-medium applications.",
    ],
  };

  const codeMapping = {
    local: localCode,
    context: contextCode,
    redux: reduxCode,
    zustand: zustandCode,
    jotai: jotaiCode,
  };

  const steps = stepsMapping[option];
  const code = codeMapping[option];

  return (
    <TopicLayout
      title="🗂️ React State Management Examples"
      steps={steps}
      code={code}
      result={
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-2">State Management Demo</h2>

          <label className="font-medium">Select State Management:</label>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="border p-1 rounded mb-4"
          >
            <option value="local">Local State</option>
            <option value="context">Context API</option>
            <option value="redux">Redux Toolkit</option>
            <option value="zustand">Zustand</option>
            <option value="jotai">Jotai</option>
          </select>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              {option === "local" && <LocalStateCounter />}
              {option === "context" && (
                <CountContext.Provider
                  value={{ count: countContext, setCount: setCountContext }}
                >
                  <ContextCounter />
                </CountContext.Provider>
              )}
              {option === "redux" && (
                <Provider store={reduxStore}>
                  <ReduxCounter />
                </Provider>
              )}
              {option === "zustand" && <ZustandCounter />}
              {option === "jotai" && <JotaiCounter />}
            </div>

            <div className="flex-1 border p-2 rounded bg-gray-50 overflow-auto max-h-[400px]">
              <h4 className="font-bold mb-2">Code Snippet</h4>
              <pre className="whitespace-pre-wrap">{code}</pre>
            </div>
          </div>
        </div>
      }
    />
  );
}
