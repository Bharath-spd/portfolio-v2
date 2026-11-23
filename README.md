# Portfolio

A premium, animated personal portfolio built with React, TypeScript, and Vite.
Styling is done with **CSS Modules + SCSS** (no Tailwind, no styled-components)
— each component owns a `Component.module.scss` file next to it.

Visual identity: deep-navy dark theme (with a light mode), floating aurora
gradient blobs, glassmorphic cards, a magnetic-button hero, and motion
throughout via Framer Motion.

## Stack

- React 19 + TypeScript
- Vite (build tool)
- React Router (client-side routing: `/`, `/blog`, `/blog/:slug`)
- Framer Motion (animation)
- Lucide React (icons — brand/social icons are hand-drawn SVGs in
  `src/components/icons/SocialIcons.tsx`, since lucide-react no longer ships
  those)
- CSS Modules + Sass (`.module.scss` per component)
- Self-hosted fonts via `@fontsource` (Sora, Inter, JetBrains Mono) — no
  runtime calls to Google Fonts

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
npm test          # unit/component tests (Vitest + Testing Library)
npm run lint      # oxlint
npm run typecheck # tsc -b
```

CI (`.github/workflows/ci.yml`) runs lint, tests and the build on every push/PR.

> Windows note: run Vitest from a shell whose working directory uses an
> uppercase drive letter (`D:\...`). A lowercase `d:` path loads Vitest twice
> and fails with "failed to find the current suite".

## Editing your content

Almost everything text-based lives in `src/data/`:

| File | Contains |
|---|---|
| `profile.ts` | Name, roles, bio, fun facts, stats, social links |
| `skills.ts` | Skill categories and proficiency levels |
| `experience.ts` | Work history timeline + education |
| `projects.ts` | Project cards (title, description, tech, links) |
| `misc.ts` | Services, testimonials, certifications, blog posts |

Edit these files and the whole site updates — no need to touch components
for a content change.

## Live widgets (GitHub, Spotify, LeetCode, weather)

The "Right now" section (`src/components/sections/LiveWidgets`) currently
runs on **mock data** from `src/lib/mockIntegrations.ts`. Each export in that
file has a comment noting exactly which real API it stands in for:

- GitHub contributions/stats -> GitHub GraphQL API (needs a personal access
  token; fetch this server-side, not from the browser)
- Spotify now-playing -> Spotify Web API (`/me/player/currently-playing`,
  needs OAuth + a refresh token, best done via a small serverless function)
- LeetCode stats -> LeetCode's unofficial GraphQL endpoint or a public wrapper
- Codeforces stats -> Codeforces's public `user.rating` API (no auth needed)
- Weather -> any provider (Open-Meteo has a free, no-key tier)

Swap the mock functions/objects for real fetch calls once you have the
credentials; the components consuming them don't need to change shape.

## Structure

```
src/
  App.tsx              Layout shell + routes
  main.tsx              Entry point, providers
  context/
    ThemeContext.tsx    Dark/light theme (persisted to localStorage)
  hooks/                useScrollProgress, useMousePosition, useTypewriter,
                         useCountUp
  data/                 <-- edit your content here
  lib/
    mockIntegrations.ts  Mock external API data (see above)
  components/
    layout/              Navbar, Footer, AuroraBackground, CursorSpotlight,
                          ScrollProgress, PageLoader, CommandPalette (Cmd+K),
                          BackToTop, ThemeToggle
    sections/            Hero, About, Skills, Experience, Projects, Services,
                          LiveWidgets, Testimonials, Certifications,
                          BlogPreview, Contact
    ui/                  Button, GlassCard, SectionHeading, AnimatedCounter,
                          MagneticButton, Badge
    icons/               Hand-drawn social/brand icon SVGs
  pages/                 HomePage, BlogPage, BlogPostPage, NotFoundPage
```

## Notable interactions

- **Cmd+K / Ctrl+K** opens a command palette to jump to any section, toggle
  theme, or open your social links.
- Cursor spotlight and magnetic buttons are automatically disabled on
  touch/coarse-pointer devices.
- All motion respects `prefers-reduced-motion`.
- The contact form validates client-side; swap the `handleSubmit` function
  in `Contact.tsx` for a real endpoint (API route, Formspree, Resend, etc.)
  when you're ready to receive messages.

## Deploying

This is a static Vite build — `npm run build` outputs to `dist/`, which
deploys as-is to Vercel, Netlify, Cloudflare Pages, or any static host. If
your host doesn't rewrite unknown paths to `index.html` automatically, add
an SPA fallback rule (Vercel and Netlify both do this by default for Vite
apps).
