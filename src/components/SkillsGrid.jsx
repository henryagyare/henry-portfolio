import React from "react";
import { getIcon } from "../utils/icons.jsx";
import { skills } from "../content.js";

export default function SkillsGrid() {
  const groups = [
    { title: "Languages & Frameworks", items: skills.languages },
    { title: "AI & Dev Tools", items: skills.aiTools },
    { title: "Data & Infrastructure", items: skills.tools },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {groups.map((g) => (
        <div
          key={g.title}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/10 p-6 backdrop-blur-sm hover-card-border hover:border-zinc-300 dark:hover:border-zinc-700/60 transition-all duration-300 shadow-sm dark:shadow-none"
        >
          <h3 className="font-display font-bold text-sm text-zinc-700 dark:text-zinc-300 tracking-wider uppercase border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-4 transition-colors duration-300">
            {g.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((it) => (
              <span
                key={it}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 hover:text-zinc-950 dark:hover:border-zinc-700 dark:hover:text-white transition-all duration-150"
              >
                {getIcon(it)}
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
