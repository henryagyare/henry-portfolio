import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "../utils/icons.jsx";
import { useTheme, toggleTheme } from "../utils/theme.js";

// Listed in page order, top to bottom.
const SECTIONS = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Once the top nav has scrolled out of view, this takes over at the edge of the
// screen: section dots (large screens, home page), a scroll-progress bar, and a
// small pill with the actions that used to live in the top nav.
export default function SideNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > 260);
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);

      if (!isHome) {
        setActive(null);
        return;
      }
      const threshold = window.innerHeight * 0.35;
      let current = null;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      // The last section may never reach the threshold; the bottom of the page counts as it.
      if (max > 0 && max - y < 8) current = SECTIONS[SECTIONS.length - 1].id;
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome, pathname]);

  const hiddenClasses = visible ? "opacity-100" : "invisible opacity-0";
  const pillLink =
    "rounded-full px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors";

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-x-0 top-0 z-40 h-[3px] bg-zinc-200/70 transition-opacity duration-300 dark:bg-zinc-800 ${hiddenClasses}`}
      >
        <div className="h-full bg-[#075e56] dark:bg-teal-300" style={{ width: `${progress * 100}%` }} />
      </div>

      <div
        className={`fixed right-4 top-4 z-40 flex items-center gap-1 rounded-full border border-zinc-200 bg-white/90 p-1 shadow-sm backdrop-blur-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950/80 ${hiddenClasses} ${
          visible ? "translate-y-0" : "-translate-y-2"
        }`}
      >
        {!isHome && (
          <Link to="/" className={pillLink}>
            Home
          </Link>
        )}
        {isHome && (
          <Link to="/resume" className={pillLink}>
            Résumé
          </Link>
        )}
        <a
          href={isHome ? "#contact" : "/#contact"}
          className="rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
        >
          Let's Chat
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
        >
          {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
        </button>
      </div>

      {isHome && (
        <nav
          aria-label="Page sections"
          className={`fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end transition-opacity duration-300 lg:flex ${hiddenClasses}`}
        >
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className="group flex h-8 items-center gap-2.5 rounded-full pl-2 outline-none"
              >
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-bold transition-opacity ${
                    isActive
                      ? "border-teal-800/25 bg-white text-[#075e56] opacity-100 dark:border-teal-300/30 dark:bg-zinc-950 dark:text-teal-300"
                      : "border-zinc-200 bg-white text-zinc-700 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`block rounded-full transition-all group-focus-visible:ring-2 group-focus-visible:ring-teal-600 ${
                    isActive
                      ? "h-3.5 w-3.5 bg-[#075e56] ring-4 ring-teal-800/15 dark:bg-teal-300 dark:ring-teal-300/20"
                      : "mr-[3px] h-2 w-2 bg-zinc-400 group-hover:bg-zinc-600 dark:bg-zinc-600 dark:group-hover:bg-zinc-400"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      )}
    </>
  );
}
