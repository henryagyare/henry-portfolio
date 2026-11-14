import React from "react";
import JobRankingDemo from "./JobRankingDemo.jsx";

export default function ProjectSpotlight({ project }) {
  return (
    <article className="mb-8 grid gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-8 md:grid-cols-2 dark:border-teal-300/20 dark:bg-teal-950/30">
      <div className="self-center">
        <p className="text-sm font-semibold text-[#075e56] dark:text-teal-300">Featured project</p>
        <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-zinc-700 dark:text-zinc-300">
          A web and mobile job search app that brings listings from four hiring platforms into one ranked feed.
        </p>
        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">{project.stack.join(" · ")}</p>
      </div>
      <JobRankingDemo />
    </article>
  );
}
