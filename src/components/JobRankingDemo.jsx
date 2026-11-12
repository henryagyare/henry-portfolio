import React, { useState } from "react";

const sampleListings = [
  { title: "Backend Engineering Intern", location: "Remote", technologies: "Python · FastAPI", fit: 3 },
  { title: "Full-Stack Engineering Intern", location: "On-site", technologies: "React · TypeScript", fit: 3 },
  { title: "Software Engineering Intern", location: "Remote", technologies: "Java · SQL", fit: 2 },
];

export default function JobRankingDemo() {
  const [preference, setPreference] = useState("Remote");
  const rankedListings = sampleListings
    .map((listing) => {
      const matchesLocation = listing.location === preference;
      return { ...listing, score: listing.fit + (matchesLocation ? 2 : 0) };
    })
    .sort((first, second) => second.score - first.score);

  return (
    <div className="rounded-xl border border-teal-900/15 bg-white p-4 dark:border-teal-300/20 dark:bg-zinc-900">
      <p className="mb-3 text-sm font-semibold">Ranking demo · Sample listings</p>
      <label className="flex flex-wrap items-center justify-between gap-2 text-sm">
        Preferred location
        <select
          value={preference}
          onChange={(event) => setPreference(event.target.value)}
          className="rounded-md border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800"
        >
          <option>Remote</option>
          <option>On-site</option>
        </select>
      </label>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
        {rankedListings.map((listing) => (
          <li key={listing.title} className="border-t border-zinc-200 pt-2 dark:border-zinc-700">
            <span className="font-semibold">{listing.title}</span>
            <p className="text-xs text-zinc-700 dark:text-zinc-300">
              {listing.location} · {listing.technologies}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300" aria-live="polite">
        {rankedListings[0].title} ranks first. This demo adds two points to the sample skills score for a location match.
      </p>
    </div>
  );
}
