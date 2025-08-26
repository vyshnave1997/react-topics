import TopicLayout from "../../../components/TopicLayout";

// Example Component to show JSX rendering
function Greeting() {
  const name = "Viki";
  return <h1>Hello, {name}! 👋</h1>;
}

export default function JSXPage() {
  const steps = [
    "JSX lets you write HTML-like syntax inside JavaScript.",
    "Wrap JSX in a single parent element.",
    "Use curly braces `{}` to embed JavaScript expressions.",
    "JSX is compiled to React.createElement() calls under the hood.",
  ];

  const code = `
function Greeting() {
  const name = "Viki";
  return <h1>Hello, {name}! 👋</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
`;

  const ResultComponent = () => (
    <div>
      <Greeting />
    </div>
  );

  return (
    <TopicLayout
      title="JSX & Rendering"
      steps={steps}
      code={code}
      result={<ResultComponent />}
    />
  );
}
