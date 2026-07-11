import React, { useState } from "react";
import { Container, Section } from "../components/Layout.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import ExperienceItem from "../components/ExperienceItem.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SkillsGrid from "../components/SkillsGrid.jsx";
import Contact from "../components/Contact.jsx";
import EmailModal from "../components/EmailModal.jsx";
import { site, experience, projects } from "../content.js";
import { FiGithub } from "../utils/icons.jsx";

export default function HomePage() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      <Hero onEmailClick={() => setEmailOpen(true)} />

      <Section id="about" eyebrow="Story" title="About Me">
        <About />
      </Section>

      <Section id="experience" eyebrow="Experience" title="Where I've Worked">
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} isLast={idx === experience.length - 1} />
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Work" title="My Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} p={p} index={idx} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/20 px-8 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 transition-colors backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
            href={site.links.github}
          >
            <FiGithub className="h-4 w-4" />
            View All Projects on GitHub
          </a>
        </div>
      </Section>

      <Section id="skills" eyebrow="Toolbox" title="Technical Skills">
        <SkillsGrid />
      </Section>

      <section id="contact" className="py-20">
        <Container>
          <Contact onEmailClick={() => setEmailOpen(true)} />
        </Container>
      </section>

      <EmailModal isOpen={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  );
}
