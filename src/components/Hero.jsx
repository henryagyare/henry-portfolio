import React from "react";
import { Container } from "./Layout.jsx";
import { site } from "../content.js";
import { FiGithub, FiLinkedin, FiMail } from "../utils/icons.jsx";
import neonGrid from "../assets/neon-grid.svg";

export default function Hero({ onEmailClick }) {
  return (
    <header id="top" className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
      {/* Neon grid artwork — dark mode only, fades into the flat page background */}
      <div
        className="absolute inset-0 -z-30 hidden dark:block bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${neonGrid})` }}
      />
      <div className="absolute inset-0 -z-30 hidden dark:block bg-gradient-to-b from-transparent via-zinc-950/70 to-zinc-950" />

      {/* Background glow meshes */}
      <div className="absolute inset-0 -z-10 bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="relative flex flex-col items-start">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:border-emerald-500/30 dark:bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-sm backdrop-blur-sm transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {site.roleLine}
          </div>

          {/* Big Editorial Heading */}
          <h1 className="mt-8 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.05] max-w-4xl transition-colors duration-300">
            Building <span className="font-serif italic font-normal text-indigo-650 dark:text-indigo-300 text-glow-accent">intelligent</span> systems for the real world.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed transition-colors duration-300">
            Hi, I'm <span className="text-zinc-900 dark:text-zinc-200 font-medium">{site.name}</span>. I design high-performance software, ship practical products, and love turning complex system requirements into elegant solutions.
          </p>

          {/* Call to action & socials */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-zinc-950 text-white hover:bg-zinc-850 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 px-6 py-3 text-sm font-semibold transition-all duration-200 shadow-md">
              Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 transition-all duration-200 backdrop-blur-sm">
              Get in Touch
            </a>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800 mx-2 hidden sm:block" />
            <div className="flex items-center gap-4">
              <a className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200" href={site.links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FiGithub className="h-5 w-5" />
              </a>
              <a className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200" href={site.links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <button
                onClick={onEmailClick}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200"
                title="Email"
              >
                <FiMail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
