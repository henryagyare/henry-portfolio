import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin, FiSun, FiMoon } from "../utils/icons.jsx";
import { site } from "../content.js";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Initialize theme from localStorage or system prefers-color-scheme
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Helper: if on home page, use hash links; if on other pages, go home first
  const homeLink = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-4xl px-4">
      <div className="flex items-center justify-between rounded-full border border-zinc-200 bg-white/80 dark:border-zinc-800/60 dark:bg-zinc-950/70 px-6 py-3 backdrop-blur-md transition-all duration-300 shadow-sm dark:shadow-none">
        <Link
          to="/"
          className="font-display font-bold text-sm tracking-tight text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          {site.name}
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href={homeLink("#about")}>About</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href={homeLink("#experience")}>Experience</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href={homeLink("#projects")}>Projects</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href={homeLink("#skills")}>Skills</a>
          <Link className="hover:text-zinc-900 dark:hover:text-white transition-colors" to="/resume">Resume</Link>
        </div>
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FiSun className="h-4.5 w-4.5" />
            ) : (
              <FiMoon className="h-4.5 w-4.5" />
            )}
          </button>
          <a className="hover:text-zinc-900 dark:hover:text-white text-zinc-500 dark:text-zinc-400 transition-colors" href={site.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FiGithub className="h-4.5 w-4.5" />
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-white text-zinc-500 dark:text-zinc-400 transition-colors" href={site.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="h-4.5 w-4.5" />
          </a>
          <a
            className="bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all shadow-sm"
            href={homeLink("#contact")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
