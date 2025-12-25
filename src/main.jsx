import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --- Global External Link Handler ---
document.addEventListener('click', (e) => {
  // Find the closest anchor tag from the click target
  const anchor = e.target.closest('a');
  
  if (anchor && anchor.href) {
    const url = new URL(anchor.href);
    // Check if the link is external (different domain)
    if (url.origin !== window.location.origin) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }
  }
});