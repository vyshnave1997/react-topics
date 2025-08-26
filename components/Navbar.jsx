"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const topics = [
  { name: "JSX & Rendering", path: "/topics/jsx" },
  { name: "Components", path: "/topics/components" },
  { name: "Props & State", path: "/topics/props-state" },
  { name: "Event Handling", path: "/topics/events" },
  { name: "Conditional Rendering", path: "/topics/conditional" },
  { name: "Lists & Keys", path: "/topics/lists" },
  { name: "Forms", path: "/topics/forms" },
  { name: "Lifecycle Methods", path: "/topics/lifecycle" },
  { name: "Hooks", path: "/topics/hooks" },
  { name: "Context API", path: "/topics/context" },
  { name: "Refs", path: "/topics/refs" },
  { name: "Error Boundaries", path: "/topics/error-boundary" },
  { name: "Portals", path: "/topics/portals" },
  // Advanced Topics
  { name: "Custom Hooks", path: "/topics/custom-hooks" },
  {name: "code-splitting", path: "/topics/code-splitting"},
  { name: "Higher Order Components (HOC)", path: "/topics/hoc" },
  { name: "Render Props", path: "/topics/render-props" },
  { name: "Lazy Loading (React.lazy & Suspense)", path: "/topics/lazy-suspense" },
  { name: "Memoization", path: "/topics/memoization" },
  { name: "Concurrent Rendering", path: "/topics/concurrent" },
  { name: "Server-Side Rendering (SSR)", path: "/topics/ssr" },
  { name: "Static Site Generation (SSG)", path: "/topics/ssg" },
  { name: "Hydration & Streaming SSR", path: "/topics/hydration-ssr" },
  { name: "Server Components (RSC)", path: "/topics/rsc" },
  { name: "React Server Functions (RSF)", path: "/topics/rsf" },
  { name: "State Management", path: "/topics/state-management" },
    {name: "Automatic Batching (React 19)", path: "/topics/automatic-batching"},
    {name: "Virtualization (React Window, React Virtualized)", path: "/topics/virtualization"},
    {name: "Memoization & Pure Components", path: "/topics/memoization-pure"},
    {name: "Suspense for Data Fetching", path: "/topics/suspense-data-fetching"},
    {name: "Adaptive Hydration / Islands Architecture", path: "/topics/adaptive-hydration"},
    
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
       <h2 className="sidebar-title">
        <Link href="/">React Docs</Link>
      </h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.path}>
            <Link
              href={topic.path}
              className={pathname === topic.path ? "active" : ""}
            >
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
