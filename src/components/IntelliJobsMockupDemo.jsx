import React, { useState } from "react";

// High-fidelity mobile mockups from the IntelliJobs design work. Each screen is a
// standalone HTML file in /public/demos/intellijobs, shown in a phone-sized frame.
const screens = [
  { id: "today", label: "Today", file: "today-home.html", caption: "A daily command center: urgent tasks, the top recommendation, and upcoming deadlines." },
  { id: "jobs", label: "Jobs", file: "jobs-discovery.html", caption: "Ranked opportunities with a fit score and an eligibility check on every listing." },
  { id: "detail", label: "Job detail", file: "job-company-intelligence.html", caption: "Job detail with its source, freshness, and breakdown tabs for fit and eligibility." },
  { id: "agent", label: "Agent", file: "agent-approval-queues.html", caption: "An approval queue that holds automated applications until the user reviews them." },
];

const FRAME_WIDTH = 390;
const FRAME_HEIGHT = 844;
const SCALE = 0.8;

export default function IntelliJobsMockupDemo() {
  const [activeId, setActiveId] = useState(screens[0].id);
  const active = screens.find((screen) => screen.id === activeId);

  return (
    <div className="flex flex-col items-center">
      <div role="tablist" aria-label="IntelliJobs mockup screens" className="mb-4 flex flex-wrap justify-center gap-2 text-sm font-semibold">
        {screens.map((screen) => (
          <button
            key={screen.id}
            role="tab"
            aria-selected={screen.id === activeId}
            onClick={() => setActiveId(screen.id)}
            className={`rounded-md px-3 py-2 ${
              screen.id === activeId
                ? "bg-[#075e56] text-white dark:bg-teal-300 dark:text-teal-950"
                : "border border-zinc-300 hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-800"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <div
        className="overflow-hidden rounded-[2rem] border-4 border-zinc-900 bg-white shadow-lg dark:border-zinc-600"
        style={{ width: FRAME_WIDTH * SCALE, height: FRAME_HEIGHT * SCALE }}
      >
        <iframe
          key={active.id}
          title={`IntelliJobs mockup: ${active.label}`}
          src={`/demos/intellijobs/${active.file}`}
          sandbox="allow-scripts"
          loading="lazy"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            border: 0,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        />
      </div>

      <p className="mt-3 max-w-xs text-center text-xs leading-relaxed text-zinc-700 dark:text-zinc-300" aria-live="polite">
        {active.caption}
      </p>
      <p className="mt-1 text-center text-xs text-zinc-600 dark:text-zinc-400">
        Design mockups with sample data. Tap around inside the frame.
      </p>
    </div>
  );
}
