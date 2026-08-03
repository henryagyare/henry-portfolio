import React from "react";

export function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      {children}
    </div>
  );
}

export function Section({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      data-track-section={id}
      className="py-20 border-t border-zinc-200 dark:border-zinc-900/65 relative overflow-hidden transition-colors duration-300"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-12 gap-2">
          <div>
            {eyebrow && (
              <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-indigo-550 dark:text-indigo-400">
                {/* {eyebrow} */}
              </span>
            )}
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
              {title}
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-zinc-200 dark:from-zinc-800/80 to-transparent flex-grow md:ml-8 hidden md:block" />
        </div>
        {children}
      </Container>
    </section>
  );
}
