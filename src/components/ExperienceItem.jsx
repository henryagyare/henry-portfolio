import React from "react";

export default function ExperienceItem({ exp, isLast }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Vertical line indicator */}
      {!isLast && (
        <div className="absolute left-[5.5px] top-6 bottom-0 w-px bg-zinc-800 group-hover:bg-indigo-900/60 transition-colors" />
      )}

      {/* Custom dot */}
      <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-indigo-400 group-hover:bg-indigo-950 transition-all duration-300" />

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-6 backdrop-blur-sm hover-card-border hover:border-zinc-700/60 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
              {exp.role}
            </h3>
            <div className="text-sm font-medium text-zinc-400 mt-1 flex items-center gap-2">
              <span className="text-zinc-200">{exp.company}</span>
              <span className="text-zinc-650">•</span>
              <span className="text-xs text-zinc-500">{exp.location}</span>
            </div>
          </div>
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500 sm:text-right bg-zinc-900 px-3 py-1 rounded-full border border-zinc-850 self-start sm:self-auto">
            {exp.dates}
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-400 font-light leading-relaxed">
              <span className="text-indigo-500 flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
