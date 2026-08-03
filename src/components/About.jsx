import React from "react";
import { Link } from "react-router-dom";
import { site, about } from "../content.js";
import { FiExternalLink, FiGithub, FiLinkedin } from "../utils/icons.jsx";

export default function About({ onEmailClick }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div className="space-y-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-100 leading-snug transition-colors duration-300">
          {about.heading}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base font-light transition-colors duration-300">
          {about.body}
        </p>
        <div className="pt-4 flex flex-wrap gap-2.5">
          {about.highlights.map((h, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/30 px-3.5 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 transition-all duration-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-250 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/10 p-6 backdrop-blur-sm relative hover-card-border transition-all duration-300 shadow-sm dark:shadow-none">
        <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-6 transition-colors duration-300">
          Access & Connections
        </h4>
        <div className="grid gap-4">
          <Link
            to="/resume"
            className="flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:bg-zinc-100 hover:border-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 px-5 py-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all duration-200 group"
          >
            <span className="flex items-center gap-3">
              <FiExternalLink className="h-4 w-4 text-indigo-500 dark:text-indigo-400 group-hover:rotate-45 transition-transform" />
              Open Resume
            </span>
            <span className="text-xs text-zinc-450 dark:text-zinc-500">View CV</span>
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:bg-zinc-100 hover:border-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 px-5 py-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all duration-200 group"
          >
            <span className="flex items-center gap-3">
              <FiGithub className="h-4 w-4 text-indigo-550 dark:text-indigo-400" />
              Explore GitHub
            </span>
            <span className="text-xs text-zinc-450 dark:text-zinc-500">Codebases</span>
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:bg-zinc-100 hover:border-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 px-5 py-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all duration-200 group"
          >
            <span className="flex items-center gap-3">
              <FiLinkedin className="h-4 w-4 text-indigo-550 dark:text-indigo-400" />
              Connect on LinkedIn
            </span>
            <span className="text-xs text-zinc-450 dark:text-zinc-500">Network</span>
          </a>
        </div>
      </div>
    </div>
  );
}
