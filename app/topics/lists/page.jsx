"use client";
import { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Example: Rendering a list of items with keys
function ListWithKeys() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "🍎 Apple" },
    { id: 2, name: "🍌 Banana" },
    { id: 3, name: "🍇 Grapes" },
    { id: 4, name: "🍊 Orange" },
  ]);

  return (
    <div>
      <h3>Fruit List:</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li> // ✅ Unique "key" for each item
        ))}
      </ul>
    </div>
  );
}

export default function ListsKeysPage() {
  const steps = [
    "In React, lists are usually rendered using the JavaScript .map() function.",
    "Each list item must have a unique 'key' prop to help React identify changes.",
    "Keys should be something stable and unique (like an ID).",
    "Avoid using the index as a key unless absolutely necessary.",
  ];

  const code = `
function ListWithKeys() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "🍎 Apple" },
    { id: 2, name: "🍌 Banana" },
    { id: 3, name: "🍇 Grapes" },
    { id: 4, name: "🍊 Orange" },
  ]);

  return (
    <div>
      <h3>Fruit List:</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li> // ✅ Key used here
        ))}
      </ul>
    </div>
  );
}
`;

  return (
    <TopicLayout
      title="Rendering Lists with Keys in React"
      steps={steps}
      code={code}
      result={<ListWithKeys />}
    />
  );
}
