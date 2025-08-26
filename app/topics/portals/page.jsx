"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import TopicLayout from "../../../components/TopicLayout";

// ✅ Portal Component
function Portal({ children }) {
  const portalRoot = document.getElementById("portal-root");
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
}

// ✅ Modal Component using Portal
function Modal({ onClose }) {
  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            minWidth: "300px",
          }}
        >
          <h3>🚀 This Modal is rendered using React Portal!</h3>
          <button
            onClick={onClose}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              background: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
}

// ✅ Main Page
export default function PortalsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    "1. Create a <Portal> component using ReactDOM.createPortal.",
    "2. Ensure you have a <div id='portal-root'></div> in your HTML (e.g., in layout.js or _document.js).",
    "3. Create a Modal component that uses the Portal.",
    "4. Open/close modal by toggling state.",
    "5. The modal is rendered outside the normal React DOM hierarchy.",
  ];

  const code = `
function Portal({ children }) {
  const portalRoot = document.getElementById("portal-root");
  return ReactDOM.createPortal(children, portalRoot);
}

function Modal({ onClose }) {
  return (
    <Portal>
      <div className="overlay">
        <div className="modal">
          <h3>🚀 Portal Modal</h3>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Portal>
  );
}

// Usage
{isOpen && <Modal onClose={() => setIsOpen(false)} />}
  `;

  const result = (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );

  return (
    <TopicLayout title="React Portals" steps={steps} code={code} result={result} />
  );
}
