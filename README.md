# Saumya Kumar — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Prerequisites

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Type Check

```bash
npx tsc --noEmit
```

## Resume

Place your resume PDF at:

```
public/resume/Saumya-Kumar-Resume.pdf
```

The Download Resume button links to this path. Updating the resume = replacing this file.

## Deployment

### Vercel (recommended)

1. Push to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Set the Framework Preset to **Next.js**.
4. Deploy — no environment variables required for the base portfolio.

### GitHub Pages (static export)

The project is configured with `output: "export"` in `next.config.ts` and will produce a static site in `out/`. Point GitHub Pages to the `out/` folder or use a workflow to deploy it.

## Structure

```
app/                 Next.js App Router pages
  layout.tsx         Root layout (metadata, fonts)
  page.tsx           Home page
  projects/          Project detail pages
  sitemap.ts         Sitemap
  robots.ts          robots.txt
components/          UI components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  ReliabilityMindset.tsx
  Skills.tsx
  Certifications.tsx
  Contact.tsx
  Footer.tsx
data/                Typed content files (edit here to update content)
  profile.ts
  projects.ts
  skills.ts
  certifications.ts
public/
  resume/            Place Saumya-Kumar-Resume.pdf here
  favicon.svg
```

## Content Updates

All portfolio content lives in `data/`. To update anything — experience, projects, skills — edit the relevant `.ts` file. No code changes required.
