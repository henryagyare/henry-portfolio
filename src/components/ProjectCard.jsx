import React from "react";
import { getIcon, FiExternalLink } from "../utils/icons.jsx";
import { track } from "../utils/analytics.js";

export default function ProjectCard({ p, index }) {
  const numStr = String(index + 1).padStart(2, "0");

  return (
    <div className="group rounded-2xl border border-zinc-250 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/10 p-6 flex flex-col justify-between hover-card-border hover:bg-zinc-50 dark:hover:bg-zinc-900/20 hover:border-zinc-300 dark:hover:border-zinc-700/60 transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-none">
      {/* Decorative backdrop glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

      <div>
        <div className="flex items-start justify-between">
          <span className="text-xs font-display tracking-widest uppercase text-indigo-600 dark:text-indigo-400/80 font-bold transition-colors duration-300">
            {p.badge}
          </span>
          <span className="font-display font-bold text-4xl text-zinc-200 dark:text-zinc-800 select-none group-hover:text-zinc-400 dark:group-hover:text-zinc-700/50 transition-colors duration-300">
            {numStr}
          </span>
        </div>

        {/* Clickable project title */}
        {p.href ? (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track("project_click", {
                project: p.title,
                category: p.badge,
                stack: p.stack.join(", "),
              })
            }
            className="mt-4 block font-display font-bold text-xl text-zinc-900 dark:text-white group-hover:text-indigo-650 dark:group-hover:text-indigo-300 transition-colors hover:underline decoration-indigo-500/50 dark:decoration-indigo-400/50 underline-offset-2 duration-300"
          >
            {p.title}
          </a>
        ) : (
          <h3 className="mt-4 font-display font-bold text-xl text-zinc-900 dark:text-white group-hover:text-indigo-650 dark:group-hover:text-indigo-300 transition-colors duration-300">
            {p.title}
          </h3>
        )}

        <p className="mt-3 text-sm text-zinc-650 dark:text-zinc-400 font-light leading-relaxed transition-colors duration-300">
          {p.blurb}
        </p>
      </div>

      <div className="mt-6">
        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300 transition-all duration-300"
            >
              {getIcon(tech)}
              <span className="truncate max-w-[90px]">{tech}</span>
            </span>
          ))}
        </div>

        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track("project_click", {
                project: p.title,
                category: p.badge,
                stack: p.stack.join(", "),
              })
            }
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-750 dark:text-indigo-400 dark:hover:text-indigo-350 transition-all duration-200"
          >
            View Project <FiExternalLink className="opacity-80" />
          </a>
        )}
      </div>
    </div>
  );
}
