import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Layout.jsx";
import EmailModal from "../components/EmailModal.jsx";
import { site, education, experience, projects, skills } from "../content.js";
import { getIcon, FiGithub, FiLinkedin, FiMail, FiExternalLink } from "../utils/icons.jsx";

// ─── Small helpers ─────────────────────────────────────────────────────────

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-indigo-400 whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-grow bg-gradient-to-r from-zinc-800 to-transparent" />
    </div>
  );
}

function SkillPill({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-all">
      {getIcon(label)}
      {label}
    </span>
  );
}

// ─── Resume Experience item (compact) ──────────────────────────────────────

function ResumeExperience({ exp }) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <div>
          <span className="font-display font-bold text-base text-white">{exp.role}</span>
          <span className="text-zinc-500 mx-2">·</span>
          <span className="font-medium text-zinc-300 text-sm">{exp.company}</span>
          <span className="text-zinc-600 mx-2 text-xs">·</span>
          <span className="text-zinc-500 text-xs">{exp.location}</span>
        </div>
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide whitespace-nowrap">
          {exp.dates}
        </span>
      </div>
      <ul className="space-y-1.5 ml-3">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-indigo-500 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Resume Project item (compact) ─────────────────────────────────────────

function ResumeProject({ proj }) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <div className="flex items-center gap-2">
          {proj.href ? (
            <a
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-base text-white hover:text-indigo-300 transition-colors flex items-center gap-1.5 group"
            >
              {proj.title}
              <FiExternalLink className="h-3.5 w-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <span className="font-display font-bold text-base text-white">{proj.title}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {proj.stack.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-500 bg-zinc-950/40">
              {t}
            </span>
          ))}
        </div>
      </div>
      <ul className="space-y-1.5 ml-3">
        {(proj.bullets || []).map((b, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-indigo-500 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Resume Page ───────────────────────────────────────────────────────

export default function ResumePage() {
  const [emailOpen, setEmailOpen] = useState(false);

  // Only the 3 resume projects (first 3 in the projects array)
  const resumeProjects = projects.slice(0, 3);
  // Only the 4 resume experiences (first 4)
  const resumeExperiences = experience.slice(0, 4);

  return (
    <>
      <div className="min-h-screen py-12">
        <Container>
          {/* ── Action buttons bar ─────────────────────────────────────────── */}
          <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.links.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-200 transition-all"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View PDF
              </a>
              <a
                href={site.links.resumePdf}
                download="HenryAsante_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-200 transition-all"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-300 transition-all"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                LaTeX Template
              </a>
            </div>
          </div>

          {/* ── Resume card ─────────────────────────────────────────────────── */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 backdrop-blur-sm overflow-hidden">
            {/* Top accent gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500" />

            <div className="p-8 md:p-12">
              {/* ── Header / Contact ──────────────────────────────────────── */}
              <div className="text-center mb-10 pb-8 border-b border-zinc-800/60">
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
                  {site.name}
                </h1>
                <p className="mt-2 text-zinc-400 text-sm font-light">
                  {education.location} · {site.phone} ·{" "}
                  <a href={`mailto:${site.email}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {site.email}
                  </a>
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-indigo-300 transition-colors"
                  >
                    <FiLinkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-indigo-300 transition-colors"
                  >
                    <FiGithub className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <button
                    onClick={() => setEmailOpen(true)}
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-indigo-300 transition-colors"
                  >
                    <FiMail className="h-3.5 w-3.5" />
                    Email
                  </button>
                </div>
              </div>

              {/* ── Education ─────────────────────────────────────────────── */}
              <div className="mb-10">
                <SectionHeader title="Education" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <p className="font-display font-bold text-base text-white">{education.institution}</p>
                    <p className="text-zinc-400 text-sm">{education.degree}</p>
                    <p className="text-zinc-500 text-xs mt-1">
                      Relevant Coursework: {education.coursework.join(", ")}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{education.location}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{education.graduation}</p>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                      GPA: {education.gpa}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Skills ─────────────────────────────────────────────────── */}
              <div className="mb-10">
                <SectionHeader title="Technical Skills" />
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-3">Languages & Frameworks</span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {skills.languages.map((s) => <SkillPill key={s} label={s} />)}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-3">AI & Dev Tools</span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {skills.aiTools.map((s) => <SkillPill key={s} label={s} />)}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-3">Data & Infrastructure</span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {skills.tools.map((s) => <SkillPill key={s} label={s} />)}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Experience ─────────────────────────────────────────────── */}
              <div className="mb-10">
                <SectionHeader title="Experience" />
                {resumeExperiences.map((exp, i) => (
                  <ResumeExperience key={i} exp={exp} />
                ))}
              </div>

              {/* ── Projects ───────────────────────────────────────────────── */}
              <div>
                <SectionHeader title="Projects" />
                {resumeProjects.map((proj, i) => (
                  <ResumeProject key={i} proj={proj} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom action bar ─────────────────────────────────────────── */}
          <div className="no-print mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.links.resumePdf}
              download="HenryAsante_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            <button
              onClick={() => setEmailOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-all"
            >
              <FiMail className="h-4 w-4 text-indigo-400" />
              Get in Touch
            </button>
          </div>
        </Container>
      </div>

      <EmailModal isOpen={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  );
}
