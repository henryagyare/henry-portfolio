import React from "react";
import { Container } from "./Layout.jsx";
import { site } from "../content.js";
import { FiGithub, FiLinkedin } from "../utils/icons.jsx";

export default function Footer() {
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
