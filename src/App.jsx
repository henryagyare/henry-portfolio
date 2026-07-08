import React from "react";
import { site, projects, skills, about, experience } from "./content";
import { track } from "./utils/analytics.js";
import {
  SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiFlask, SiSpring,
  SiTensorflow, SiPytorch, SiDocker, SiKubernetes,
  SiLinux, SiGit, SiArduino, SiRust, SiGoogle, SiPostgresql, SiRedis,
  SiTailwindcss, SiVercel,
  SiNodedotjs, SiDotnet,
} from "react-icons/si";

import {
  FiGithub, FiLinkedin, FiMail, FiCpu, FiZap, FiGlobe, FiDatabase,
  FiHexagon, FiExternalLink,
  FiBarChart2, FiLayers, FiRepeat, FiMonitor
} from "react-icons/fi";

import { FaBots, FaAws, FaMicrochip, FaNetworkWired, FaJava, FaCloud } from "react-icons/fa6";
import { GiMicrochip } from "react-icons/gi";

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      data-track-section={id}
      className="py-20 border-t border-zinc-900/65 relative overflow-hidden"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-12 gap-2">
          <div>
            {eyebrow && (
              <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">
                // {eyebrow}
              </span>
            )}
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-zinc-800/80 to-transparent flex-grow md:ml-8 hidden md:block" />
        </div>
        {children}
      </Container>
    </section>
  );
}

function Nav() {
  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-4xl px-4">
      <div className="flex items-center justify-between rounded-full border border-zinc-800/60 bg-zinc-950/70 px-6 py-3 backdrop-blur-md">
        <a href="#top" className="font-display font-bold text-sm tracking-tight text-white hover:text-indigo-400 transition-colors">
          {site.name}
        </a>
        <div className="hidden sm:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-zinc-400">
          <a className="hover:text-white transition-colors" href="#about">About</a>
          <a className="hover:text-white transition-colors" href="#experience">Experience</a>
          <a className="hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="hover:text-white transition-colors" href="#skills">Skills</a>
          <a className="hover:text-white transition-colors" href={site.links.resume}>Resume</a>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white text-zinc-455 transition-colors" href={site.links.github} aria-label="GitHub"><FiGithub className="h-4.5 w-4.5" /></a>
          <a className="hover:text-white text-zinc-455 transition-colors" href={site.links.linkedin} aria-label="LinkedIn"><FiLinkedin className="h-4.5 w-4.5" /></a>
          <a className="bg-white hover:bg-zinc-200 text-zinc-950 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all shadow-sm" href="#contact">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
      {/* Background glow meshes */}
      <div className="absolute inset-0 -z-10 bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="relative flex flex-col items-start">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {site.roleLine}
          </div>

          {/* Big Editorial Heading */}
          <h1 className="mt-8 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl">
            Building <span className="font-serif italic font-normal text-indigo-300 text-glow-accent">intelligent</span> systems for the real world.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Hi, I’m <span className="text-zinc-200 font-medium">{site.name}</span>. I design high-performance software, ship practical products, and love turning complex system requirements into elegant code.
          </p>

          {/* Call to action & socials */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-all duration-200 shadow-md">
              Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all duration-200 backdrop-blur-sm">
              Get in Touch
            </a>
            <div className="h-8 w-px bg-zinc-800 mx-2 hidden sm:block" />
            <div className="flex items-center gap-4">
              <a className="text-zinc-400 hover:text-white transition-colors duration-200" href={site.links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FiGithub className="h-5 w-5" />
              </a>
              <a className="text-zinc-400 hover:text-white transition-colors duration-200" href={site.links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a className="text-zinc-400 hover:text-white transition-colors duration-200" href={`mailto:${site.email}`} title="Email">
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

function getIcon(tech) {
  const iconMap = {
    // Languages
    Python: SiPython,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Java: FaJava,
    C: FiCpu,
    "C++": FiCpu,
    Rust: SiRust,
    Go: SiGoogle,
    Kotlin: FiCpu,
    SQL: FiDatabase,
    R: FiBarChart2,

    // Frameworks & Libs
    React: SiReact,
    Next: SiNextdotjs,
    Node: SiNodedotjs,
    FastAPI: FiZap,
    Flask: SiFlask,
    Spring: SiSpring,
    SpringBoot: SiSpring,
    ".NET": SiDotnet,
    KMM: FiLayers,
    Redis: SiRedis,
    PostgreSQL: SiPostgresql,
    Tailwind: SiTailwindcss,

    // AI/ML
    TensorFlow: SiTensorflow,
    PyTorch: SiPytorch,
    LLM: FaBots,
    Groq: FiGlobe,
    GenAI: FaBots,
    Unsloth: FiZap,
    LoRA: FaBots,

    // Embedded / Hardware
    Arduino: SiArduino,
    FPGA: GiMicrochip,
    SystemVerilog: FaMicrochip,
    Vivado: FaMicrochip,
    I2C: FiCpu,
    SPI: FiCpu,

    // DevOps & Cloud
    Docker: SiDocker,
    AWS: FaAws,
    Azure: FaCloud,
    Kubernetes: SiKubernetes,
    Linux: SiLinux,
    Git: SiGit,
    CI: FiRepeat,
    CD: FiRepeat,
    Vercel: SiVercel,
    GNS3: FaNetworkWired,
    Wireshark: FiMonitor,
  };

  const Icon = iconMap[tech] || FiHexagon;
  return <Icon className="h-3.5 w-3.5 flex-shrink-0" />;
}

function ProjectCard({ p, index }) {
  const numStr = String(index + 1).padStart(2, "0");
  
  return (
    <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-6 flex flex-col justify-between hover-card-border hover:bg-zinc-900/20 hover:border-zinc-700/60 transition-all duration-300 relative overflow-hidden">
      
      {/* Decorative backdrop glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

      <div>
        <div className="flex items-start justify-between">
          <span className="text-xs font-display tracking-widest uppercase text-indigo-400/80 font-bold">
            {p.badge}
          </span>
          <span className="font-display font-bold text-4xl text-zinc-800 select-none group-hover:text-zinc-700/50 transition-colors">
            {numStr}
          </span>
        </div>

        <h3 className="mt-4 font-display font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
          {p.title}
        </h3>

        <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
          {p.blurb}
        </p>
      </div>

      <div className="mt-6">
        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950/40 px-2.5 py-1 text-xs text-zinc-300"
            >
              {getIcon(tech)}
              <span className="truncate max-w-[90px]">{tech}</span>
            </span>
          ))}
        </div>

        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            track("project_click", {
              project: p.title,
              category: p.badge,
              stack: p.stack.join(", ")
            });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-350 transition-all duration-200"
        >
          View Project <FiExternalLink className="opacity-80" />
        </a>
      </div>
    </div>
  );
}

function ExperienceItem({ exp, isLast }) {
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

function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      {experience.map((exp, idx) => (
        <ExperienceItem key={idx} exp={exp} isLast={idx === experience.length - 1} />
      ))}
    </div>
  );
}

function SkillsGrid() {
  const groups = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks & Libs", items: skills.frameworks },
    { title: "Cloud & Tools", items: skills.tools },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {groups.map((g) => (
        <div
          key={g.title}
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-6 backdrop-blur-sm hover-card-border hover:border-zinc-700/60 transition-all duration-300"
        >
          <h3 className="font-display font-bold text-sm text-zinc-300 tracking-wider uppercase border-b border-zinc-800 pb-3 mb-4">
            {g.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((it) => (
              <span
                key={it}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-all duration-150"
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

function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div className="space-y-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
          {about.heading}
        </h3>
        <p className="text-zinc-400 leading-relaxed text-base font-light">
          {about.body}
        </p>
        <div className="pt-4 flex flex-wrap gap-2.5">
          {about.highlights.map((h, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 px-3.5 py-1.5 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-6 backdrop-blur-sm relative hover-card-border">
        <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-zinc-400 mb-6">
          Access & Connections
        </h4>
        <div className="grid gap-4">
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900 hover:border-zinc-700 px-5 py-4 text-sm font-medium text-zinc-200 transition-all duration-200 group"
          >
            <span className="flex items-center gap-3">
              <FiExternalLink className="h-4 w-4 text-indigo-400 group-hover:rotate-45 transition-transform" />
              Open Resume (PDF)
            </span>
            <span className="text-xs text-zinc-500">View CV</span>
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900 hover:border-zinc-700 px-5 py-4 text-sm font-medium text-zinc-200 transition-all duration-200 group"
          >
            <span className="flex items-center gap-3">
              <FiGithub className="h-4 w-4 text-indigo-400" />
              Explore GitHub
            </span>
            <span className="text-xs text-zinc-500">Codebases</span>
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900 hover:border-zinc-700 px-5 py-4 text-sm font-medium text-zinc-200 transition-all duration-200 group"
          >
            <span className="flex items-center gap-3">
              <FiLinkedin className="h-4 w-4 text-indigo-400" />
              Connect on LinkedIn
            </span>
            <span className="text-xs text-zinc-500">Network</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-8 md:p-12 backdrop-blur-sm hover-card-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">
            // Collaboration
          </span>
          <h3 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
            Let's build <span className="font-serif italic font-normal text-indigo-300">something</span> meaningful.
          </h3>
          <p className="mt-4 text-zinc-400 font-light leading-relaxed">
            Interested in hiring me, collaborating on a project, or just talking shop? Drop me an email or find me on social media. I respond quickly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md group animate-none"
          >
            <FiMail className="h-4.5 w-4.5 text-zinc-800" />
            <span>Email Me</span>
          </a>
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

function Footer() {
  return (
    <footer className="border-t border-zinc-900/65 bg-zinc-950/40 py-12">
      <Container>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between text-xs text-zinc-500 font-semibold tracking-wider uppercase">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-zinc-300 transition-colors" href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-zinc-300 transition-colors" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hover:text-zinc-300 transition-colors" href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/20 antialiased bg-zinc-950 text-zinc-100 font-sans pb-10">
      {/* Editorial grid lines background */}
      <div className="fixed inset-0 dark-grid-lines pointer-events-none -z-20 opacity-70" />
      
      <div className="pt-6">
        <Nav />
      </div>
      
      <Hero />

      <Section id="about" eyebrow="Story" title="About Me">
        <About />
      </Section>

      <Section id="experience" eyebrow="Experience" title="Where I've Worked">
        <Experience />
      </Section>

      <Section id="projects" eyebrow="Work" title="My Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} p={p} index={idx} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/20 px-8 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 transition-colors backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
            href={site.links.github}
          >
            View All Projects on GitHub
          </a>
        </div>
      </Section>

      <Section id="skills" eyebrow="Toolbox" title="Technical Skills">
        <SkillsGrid />
      </Section>

      <section id="contact" className="py-20">
        <Container>
          <Contact />
        </Container>
      </section>

      <Footer />
    </div>
  );
}
