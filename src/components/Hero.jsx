import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Layout.jsx";
import { site } from "../content.js";

export default function Hero() {
  return (
    <header id="top" className="py-12 sm:py-16">
      <Container>
        <p className="text-sm font-semibold text-[#075e56] dark:text-teal-300">
          Computer Science · Grambling State University
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I build software across applied AI, full-stack development, and systems programming.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <a href="#projects" className="rounded-md bg-[#075e56] px-4 py-3 text-white hover:bg-teal-900 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-teal-200">
            View featured work
          </a>
          <Link to={site.links.resume} className="rounded-md border border-zinc-300 px-4 py-3 hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-800">
            Résumé
          </Link>
          <a href="#contact" className="rounded-md px-4 py-3 text-[#075e56] hover:underline dark:text-teal-300">
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}
