import React, { useState } from "react";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { Container } from "./Layout.jsx";
import { site } from "../content.js";

export default function Contact({ onEmailClick }) {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-8 md:p-12 backdrop-blur-sm hover-card-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">
            {/* Collaboration */}
          </span>
          <h3 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
            Let's build <span className="font-serif italic font-normal text-indigo-300">something</span> meaningful.
          </h3>
          <p className="mt-4 text-zinc-400 font-light leading-relaxed">
            Interested in hiring me, collaborating on a project, or just talking shop? Drop me an email or find me on social media. I respond quickly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <button
            onClick={onEmailClick}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md group"
          >
            <FiMail className="h-4.5 w-4.5 text-zinc-800" />
            <span>Email Me</span>
          </button>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 px-7 py-4 text-sm font-semibold text-zinc-200 transition-all backdrop-blur-sm group"
          >
            <FiLinkedin className="h-4.5 w-4.5 text-zinc-400 group-hover:text-white" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
