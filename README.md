# Henry Asante — Portfolio

Personal portfolio & resume site, live at [henryasante.vercel.app](https://henryasante.vercel.app/).

Built with React + Vite + Tailwind CSS. All content (bio, experience, projects, skills) lives in a single data file, and a dedicated `/resume` route renders it as a print-friendly, ATS-style resume alongside a downloadable PDF.

## Features

- **Single source of truth** — [`src/content.js`](src/content.js) holds site copy, education, experience, projects, and skills; both the homepage and resume page read from it.
- **Resume page** (`/resume`) — a print-friendly on-page resume with a "View/Download PDF" action bar, generated from the same data as the homepage.
- **Dark/light mode** with a persisted theme toggle.
- **Contact modal** powered by [EmailJS](https://www.emailjs.com/) — no backend required.
- **Vercel Web Analytics** integration.

## Tech stack

| Layer      | Tools |
|------------|-------|
| Framework  | React 18, React Router 7 |
| Build      | Vite |
| Styling    | Tailwind CSS |
| Icons      | react-icons |
| Email      | @emailjs/browser |
| Analytics  | @vercel/analytics |
| Hosting    | Vercel |

## Getting started

```bash
npm install
npm run dev       # start the dev server
```

```bash
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

### Environment variables

The contact modal sends email via EmailJS. Copy `.env.example` to `.env` and fill in your own [EmailJS](https://www.emailjs.com/) credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these set, the site still runs — the contact modal just won't be able to send.

## Project structure

```
src/
├── components/     # Nav, Hero, About, SkillsGrid, ExperienceItem, ProjectCard, EmailModal, Footer, ...
├── pages/          # HomePage, ResumePage
├── utils/          # icon mapping, analytics helper
├── content.js      # all site copy & resume data (edit this to update content)
└── App.jsx         # routes
public/
└── Henry_Asante_Resume.pdf   # the downloadable resume PDF
```

## Customizing

- **Content** (bio, experience, projects, skills, links): edit [`src/content.js`](src/content.js).
- **Resume PDF**: replace [`public/Henry_Asante_Resume.pdf`](public/Henry_Asante_Resume.pdf) and update `site.links.resumePdf` in `content.js` if you rename the file.
- **Page title / meta**: edit `index.html`.

## Deployment

The site deploys to Vercel on push. `npm run build` outputs a static `dist/` bundle that can be hosted anywhere that serves static files with SPA fallback routing.
