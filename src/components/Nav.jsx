import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin } from "../utils/icons.jsx";
import { site } from "../content.js";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper: if on home page, use hash links; if on other pages, go home first
  const homeLink = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-4xl px-4">
      <div className="flex items-center justify-between rounded-full border border-zinc-800/60 bg-zinc-950/70 px-6 py-3 backdrop-blur-md">
        <Link
          to="/"
          className="font-display font-bold text-sm tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          {site.name}
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-zinc-400">
          <a className="hover:text-white transition-colors" href={homeLink("#about")}>About</a>
          <a className="hover:text-white transition-colors" href={homeLink("#experience")}>Experience</a>
          <a className="hover:text-white transition-colors" href={homeLink("#projects")}>Projects</a>
          <a className="hover:text-white transition-colors" href={homeLink("#skills")}>Skills</a>
          <Link className="hover:text-white transition-colors" to="/resume">Resume</Link>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white text-zinc-455 transition-colors" href={site.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FiGithub className="h-4.5 w-4.5" />
          </a>
          <a className="hover:text-white text-zinc-455 transition-colors" href={site.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="h-4.5 w-4.5" />
          </a>
          <a
            className="bg-white hover:bg-zinc-200 text-zinc-950 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all shadow-sm"
            href={homeLink("#contact")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
