import React from "react";
import { site, projects, skills, about, experience } from "./content";
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
import { Analytics } from "@vercel/analytics/next"


function ExperienceItem({ exp }) {
  return (
    <div className="relative pl-6 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-500 border-2 border-slate-900" />

      <div className="rounded-xl bg-slate-950/20 border border-slate-800/70 p-5">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
          <div>
            <div className="font-semibold text-lg">{exp.role}</div>
            <div className="text-blue-300 font-medium">{exp.company}</div>
          </div>
          <div className="text-sm text-slate-300/70 whitespace-nowrap">{exp.dates}</div>
        </div>

        <div className="mt-2 text-sm text-slate-300/70">{exp.location}</div>

        <ul className="mt-4 space-y-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-slate-500">•</span>
              <span className="text-slate-200/85">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="border-l-2 border-slate-800/50 ml-1.5 pl-4">
      {experience.map((exp, idx) => (
        <ExperienceItem key={idx} exp={exp} />
      ))}
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="mb-10">
          {eyebrow && (
            <div className="text-xs tracking-[0.25em] uppercase text-slate-300/70">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/35 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500/50";
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-glow"
      : "border border-blue-500/40 bg-slate-950/20 hover:bg-slate-900/30 text-slate-100";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <FiExternalLink className="opacity-80" />
    </a>
  );
}

function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/65 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="font-semibold tracking-wide">
            {site.name}
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-200/90">
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href={site.links.resume}>Resume</a>
            <a className="hover:text-white" href={site.links.github} aria-label="GitHub"><FiGithub /></a>
          </div>
          <a className="sm:hidden text-slate-200/90" href="#contact">Contact</a>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-14 sm:pt-16">
      <div className="absolute inset-0 opacity-90" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('/src/assets/neon-grid.svg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/60 to-slate-950" />
      </div>

      <Container>
        <div className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/35 px-4 py-2 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-glow" />
              {site.roleLine}
            </div>

            <h1 className="mt-7 text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
              {site.tagline}
            </h1>

            <p className="mt-5 max-w-2xl text-slate-200/80 leading-relaxed">
              {`Hi, I’m ${site.name}. I build reliable software, ship practical products, and love turning complex ideas into simple experiences.`}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium shadow-glow hover:bg-blue-500 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-blue-500/40 bg-slate-950/10 px-5 py-2.5 text-sm font-medium hover:bg-slate-900/30 transition">
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-200/80">
              <a className="hover:text-white inline-flex items-center gap-2" href={site.links.github}>
                <FiGithub /> GitHub
              </a>
              <a className="hover:text-white inline-flex items-center gap-2" href={site.links.linkedin}>
                <FiLinkedin /> LinkedIn
              </a>
              <a className="hover:text-white inline-flex items-center gap-2" href={`mailto:${site.email}`}>
                <FiMail /> Email
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
    Node: SiNodedotjs, // Note: lower 'd' in dotjs
    FastAPI: FiZap,
    Flask: SiFlask,
    Spring: SiSpring,
    SpringBoot: SiSpring,
    ".NET": SiDotnet, // Note: lower 'n' in dotnet
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

function ProjectCard({ p }) {
  return (
    <div className="group rounded-2xl border border-slate-800/70 bg-slate-950/20 p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] hover:shadow-glow transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-slate-300/70">{p.badge}</div>
          <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
        </div>
        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/20 border border-slate-700/60">
          {getIcon(p.badge.split(' / ')[0] || 'Project')}
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-200/75 leading-relaxed">{p.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/35 px-2.5 py-1 text-xs text-slate-200"
          >
            {getIcon(tech)}
            <span className="truncate max-w-[80px]">{tech}</span>
          </span>
        ))}
      </div>

      <div className="mt-5">
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200"
        >
          View Project <FiExternalLink className="opacity-80" />
        </a>
      </div>
    </div>
  );
}

function SkillsGrid() {
  const groups = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Cloud & Tools", items: skills.tools },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {groups.map((g) => (
        <div
          key={g.title}
          className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-5"
        >
          <div className="text-sm font-semibold">{g.title}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {g.items.map((it) => (
              <Pill key={it}>{it}</Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] items-start">
      <div className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6">
        <div className="text-sm text-slate-300/70">About</div>
        <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-tight">
          {about.heading}
        </h3>
        <p className="mt-4 text-slate-200/75 leading-relaxed">{about.body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {about.highlights.map((h) => (
            <Pill key={h}>{h}</Pill>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6">
        <div className="text-sm text-slate-300/70">Quick Links</div>
        <div className="mt-4 grid gap-3">
          <Button href={site.links.resume} variant="secondary">Open Resume</Button>
          <Button href={site.links.github} variant="secondary">GitHub</Button>
          <Button href={site.links.linkedin} variant="secondary">LinkedIn</Button>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6">
      <div className="grid gap-6 lg:grid-cols-2 items-center">
        <div>
          <div className="text-sm text-slate-300/70">Contact</div>
          <h3 className="mt-2 text-2xl font-semibold">Let’s build something.</h3>
          <p className="mt-3 text-slate-200/75 leading-relaxed">
            Want to collaborate or chat about an opportunity? Email me and I’ll respond quickly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium shadow-glow hover:bg-blue-500 transition"
          >
            <FiMail /> Email Me
          </a>
          <a
            href={site.links.linkedin}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/40 bg-slate-950/10 px-5 py-3 text-sm font-medium hover:bg-slate-900/30 transition"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-sm text-slate-300/75">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href={site.links.github}>GitHub</a>
            <a className="hover:text-white" href={site.links.linkedin}>LinkedIn</a>
            <a className="hover:text-white" href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />

      <Section id="about" eyebrow="Story" title="About Me">
        <About />
      </Section>

      <Section id="experience" eyebrow="Experience" title="Where I've Worked">
        <Experience />
      </Section>

      <Section id="projects" eyebrow="Work" title="My Projects">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
        <div className="mt-8">
          <a
            className="inline-flex items-center justify-center rounded-xl border border-blue-500/40 bg-slate-950/10 px-5 py-2.5 text-sm font-medium hover:bg-slate-900/30 transition" target="_blank"
            href={site.links.github}
          >
            View All Projects
          </a>
        </div>
      </Section>

      <Section id="skills" eyebrow="Toolbox" title="Technical Skills">
        <SkillsGrid />
      </Section>

      <section id="contact" className="py-16 sm:py-20">
        <Container>
          <Contact />
        </Container>
      </section>

      <Footer />
    </div>
  );
}
