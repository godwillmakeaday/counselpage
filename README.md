# CounselPage — by MatterHouse Studio

Digital business cards and professional websites for lawyers, chambers, and legal institutions.

A premium, mobile-first marketing site built with **Vite + React + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # type-checks, then bundles to /dist
npm run preview    # serves the built /dist locally
```

## Deploy to Vercel

This is a standard Vite project — Vercel detects it automatically.

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

From the CLI: `vercel` (preview) or `vercel --prod`. Or push to GitHub and import the repo in the Vercel dashboard. No environment variables are required.

## Brand system

The palette and type tokens live in two places:

- `tailwind.config.js` — exposes them as Tailwind utilities (`text-navy`, `bg-ivory`, `text-brass`, `font-display`, etc.).
- `src/index.css` — the full brand layer: the embossed-plate signature, section furniture, cards, packages, and the `§` index used across the page.

| Token | Value |
| --- | --- |
| Ink Navy | `#0E1B2C` |
| Ivory (paper) | `#F5F1E8` |
| Brass (accent) | `#B08D4F` |
| Ink (text) | `#16202B` |
| Display face | Cormorant Garamond |
| Body face | Manrope |

Fonts load from Google Fonts via `<link>` tags in `index.html`.

## Structure

```
src/
  App.tsx                 # composes every section
  main.tsx                # entry
  index.css               # Tailwind + brand layer
  data.ts                 # typed content (packages, features, samples, process…)
  types.ts                # shared interfaces
  lib/scroll.ts           # smooth-scroll helper for nav
  components/
    Header.tsx  Hero.tsx  ProfileCard.tsx
    SectionTitle.tsx  Eyebrow.tsx  Seal.tsx
    FeatureCard.tsx  PackageCard.tsx  SampleCard.tsx  ProcessStep.tsx
    LeadForm.tsx  Footer.tsx
```

## Notes

- The lead form is front-end only (React state) and shows a success state on submit. To capture
  submissions, wire `submit()` in `src/components/LeadForm.tsx` to an email service, a form
  endpoint (e.g. Formspree), or your own API.
- All copy is intentionally ethics-conscious: professional visibility and dignified presentation,
  never guaranteed outcomes or improper inducement.

— MatterHouse Studio
