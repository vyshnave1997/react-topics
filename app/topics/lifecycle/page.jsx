"use client";
import React, { useState } from "react";   // ✅ Add React here
import TopicLayout from "../../../components/TopicLayout";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default function LifecyclePage() {
  const [show, setShow] = useState(true);

  const steps = [
    "Lifecycle methods are divided into Mounting, Updating, Unmounting, and Error Handling phases.",
    "Mounting: constructor → getDerivedStateFromProps → render → componentDidMount",
    "Updating: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate",
    "Unmounting: componentWillUnmount",
    "Error Handling: getDerivedStateFromError → componentDidCatch",
    "Open the browser console to see the order of execution."
  ];

  const code = `
import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
`;

  return (
    <div>
      <TopicLayout
        title="React Lifecycle Methods"
        steps={steps}
        code={code}
        result={
          <div>
            <button onClick={() => setShow(!show)}>
              {show ? "Unmount Component" : "Mount Component"}
            </button>
            {show && <LifecycleDemo />}
          </div>
        }
      />
    </div>
  );
}
