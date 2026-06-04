# Portfolio (React + Vite)

This repository contains the source for my personal portfolio website built with React and Vite. The site presents my experience, skills, projects, and contact information.

---

**Author:** Kishan Prasad

**Live demo:** https://kprasad001.github.io/portfolio/#/

---

## Tech stack

- React (v19)
- Vite (dev tooling)
- react-router-dom (hash routing)
- lucide-react (icons)
- animate.css (animations)
- emailjs (contact form integration)

---

## Key features

- Single-page portfolio with sections: Home, Experience, Skills, Projects, About, Contact
- Smooth scroll navigation and section highlighting
- Resume download (`components/assets/Kishan_Prasad-Resume.pdf`)
- Social links: GitHub (https://github.com/kprasad001), LinkedIn (https://www.linkedin.com/in/kkprasad1/), email (kkprasad@ualberta.ca)
- Responsive layout and simple animations

---

## Run locally

The actual frontend app lives in the `portfolio/` folder. From the repository root run:

```powershell
cd portfolio
npm install
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173) in your browser.

Build for production:

```powershell
npm run build
npm run preview
```

---

## Project structure (relevant files)

- portfolio/index.html — App entry
- portfolio/src/main.jsx — React entry and router
- portfolio/src/App.jsx — Main layout and navigation
- portfolio/src/components/ — Sections and assets
- portfolio/package.json — scripts and dependencies

---

## Contacts & links

- GitHub: https://github.com/kprasad001
- LinkedIn: https://www.linkedin.com/in/kkprasad1/
- Email: kkprasad@ualberta.ca
- Resume (downloadable from the site): `components/assets/Kishan_Prasad-Resume.pdf`
