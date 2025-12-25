import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

// ---- Helpers ----
function isExternalLink(a) {
  try {
    const url = new URL(a.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function track(eventName, params = {}) {
  // GA4 (if you installed gtag in index.html)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Optional: Vercel Web Analytics custom events (only if you choose to use them)
  // Vercel Analytics focuses on pageviews/perf; custom event support depends on product settings.
  // If you later add another client analytics SDK, you can also send events here.
}

// ---- Make external links open in new tab (use CAPTURE so it happens before navigation) ----
document.addEventListener(
  "click",
  (e) => {
    const a = e.target.closest("a");
    if (!a || !a.href) return;

    // Track clicks
    const href = a.getAttribute("href") || "";
    const text = (a.textContent || "").trim().slice(0, 80);

    // ignore hash-only nav for external click tracking logic (we still might track it)
    const external = isExternalLink(a);

    // Track key actions
    if (href.includes("resume")) {
      track("resume_click", { href });
    } else if (external) {
      track("external_link_click", { href, text, domain: new URL(a.href).hostname });
    } else if (href.startsWith("#")) {
      track("section_nav_click", { section: href.replace("#", "") });
    }

    // External links open new tab safely
    if (external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  },
  true // capture phase
);
