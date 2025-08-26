"use client";
import { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Event Components
function ClickEvent() {
  const handleClick = () => alert("Button Clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}

function ChangeEvent() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

function SubmitEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

function MouseOverEvent() {
  const [message, setMessage] = useState("Hover over the box!");
  return (
    <div
      onMouseOver={() => setMessage("Mouse is over the box 🖱️")}
      onMouseOut={() => setMessage("Mouse left the box ❌")}
      style={{
        width: "200px",
        height: "100px",
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      {message}
    </div>
  );
}

export default function EventsPage() {
  const [type, setType] = useState("click");

  const steps = {
    click: [
      "Click events are triggered when the user clicks an element.",
      "React uses `onClick` instead of HTML’s `onclick`.",
      "We define a handler function and pass it to the event attribute.",
    ],
    change: [
      "Change events occur when the value of an input changes.",
      "React uses `onChange` for form inputs.",
      "We can update state dynamically based on user input.",
    ],
    submit: [
      "Submit events are triggered when a form is submitted.",
      "React uses `onSubmit` and requires `preventDefault()` to stop page reload.",
      "Useful for handling forms in React apps.",
    ],
    mouse: [
      "Mouse events occur when the user interacts with an element using the mouse.",
      "Examples: `onMouseOver`, `onMouseOut`, `onMouseEnter`, etc.",
      "We can use these to show tooltips, highlight items, etc.",
    ],
  };

  const code = {
    click: `
function ClickEvent() {
  const handleClick = () => alert("Button Clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}
`,
    change: `
import { useState } from "react";

function ChangeEvent() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
`,
    submit: `
function SubmitEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}
`,
    mouse: `
import { useState } from "react";

function MouseOverEvent() {
  const [message, setMessage] = useState("Hover over the box!");
  return (
    <div
      onMouseOver={() => setMessage("Mouse is over the box 🖱️")}
      onMouseOut={() => setMessage("Mouse left the box ❌")}
      style={{ width: "200px", height: "100px", border: "2px solid black" }}
    >
      {message}
    </div>
  );
}
`,
  };

  const ResultComponent =
    type === "click" ? (
      <ClickEvent />
    ) : type === "change" ? (
      <ChangeEvent />
    ) : type === "submit" ? (
      <SubmitEvent />
    ) : (
      <MouseOverEvent />
    );

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Select Event Type:
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        >
          <option value="click">Click Event</option>
          <option value="change">Change Event</option>
          <option value="submit">Submit Event</option>
          <option value="mouse">MouseOver Event</option>
        </select>
      </div>

      <TopicLayout
        title="Event Handling in React"
        steps={steps[type]}
        code={code[type]}
        result={ResultComponent}
      />
    </div>
  );
}
