import { useSyncExternalStore } from "react";

// One shared theme store so the top nav and the side nav always agree.
// Light is the default; only an explicit saved "dark" turns dark mode on.
const listeners = new Set();

function readStoredTheme() {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

let current = typeof window === "undefined" ? "light" : readStoredTheme();

export function toggleTheme() {
  current = current === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", current === "dark");
  try {
    localStorage.setItem("theme", current);
  } catch {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => current,
    () => "light",
  );
}
