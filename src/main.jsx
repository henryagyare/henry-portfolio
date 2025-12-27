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
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    ...params,
    page_location: window.location.href
  });
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
    if (href.includes("github.com")) {
      track("github_click", { href });
    } else if (href.includes("linkedin.com")) {
      track("linkedin_click", { href });
    } else if (href.startsWith("mailto:")) {
      track("contact_click", { method: "email" });
    }

    // External links open new tab safely
    if (external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  },
  true // capture phase
);


const seenSections = new Set();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const section = entry.target.dataset.trackSection;
      if (!section || seenSections.has(section)) return;

      seenSections.add(section);
      track("section_view", { section });
    });
  },
  { threshold: 0.35 }
);

window.addEventListener("load", () => {
  document
    .querySelectorAll("[data-track-section]")
    .forEach((el) => observer.observe(el));
});
