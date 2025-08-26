import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/React.png"
          alt="React Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <h1 className={styles.title}>Welcome to React Documentation Hub ⚛️</h1>
        <p className={styles.subtitle}>
          Learn React step by step — from fundamentals to advanced concepts.
        </p>
      </section>

      {/* News Section */}
      <section>
        <h2 className={styles.sectionTitle}>📢 Latest News & Releases</h2>
        <ul className={styles.cardList}>
          <li className={styles.card}>
            <span className={styles.highlight}>React 19 (Beta)</span> – New features like Actions, Compiler,
            and simplified data fetching.
          </li>
          <li className={styles.card}>
            <span className={styles.highlight}>Server Components</span> – Fully stable in Next.js with app router.
          </li>
          <li className={styles.card}>
            <span className={styles.highlight}>New Docs</span> – Official React docs now focus on Hooks first.
          </li>
        </ul>
      </section>

      {/* Documentation */}
      <section>
        <h2 className={styles.sectionTitle}>📚 Documentation</h2>
        <div className={styles.grid}>
          <div className={styles.gridCard}>
            <h3>Core Concepts</h3>
            <ul>
              <li>JSX & Rendering</li>
              <li>Components</li>
              <li>Props & State</li>
              <li>Events</li>
            </ul>
          </div>
          <div className={styles.gridCard}>
            <h3>Hooks</h3>
            <ul>
              <li>useState</li>
              <li>useEffect</li>
              <li>useContext</li>
              <li>useReducer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep Topics */}
      <section>
        <h2 className={styles.sectionTitle}>🔎 Deep Dive Topics</h2>
        <div className={styles.grid3}>
          <div className={styles.topicCard}>
            <h3>React Fiber</h3>
            <p>Learn how React reconciles UI efficiently with its Fiber architecture.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Concurrent Rendering</h3>
            <p>Explore how React renders UI without blocking user interactions.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Server Components</h3>
            <p>Understand React Server Components for modern frameworks like Next.js.</p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className={styles.sectionTitle}>🚀 Learning Resources</h2>
        <ul className={styles.links}>
          <li>
            <a href="https://react.dev" target="_blank">Official React Docs</a>
          </li>
          <li>
            <a href="https://beta.reactjs.org" target="_blank">React Beta Docs</a>
          </li>
          <li>
            <a href="https://nextjs.org/docs" target="_blank">Next.js Documentation</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
