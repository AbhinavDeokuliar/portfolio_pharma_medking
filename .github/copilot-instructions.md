# Copilot Instructions for `portfolio_pharma`

## Build, lint, and test commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Lint the codebase: `npm run lint`
- Preview built app: `npm run preview`
- Tests: no test runner or test script is currently configured in `package.json`, so there is no full-suite or single-test command yet.

## High-level architecture

- This is a **Vite + React SPA** with client-side routing in `src/App.jsx`.
- `App.jsx` defines a shared layout (`Navbar` + `Footer`) around all routes and mounts `ScrollToTop` so route changes reset scroll position.
- Most page content is **data-driven** from:
  - `src/data/divisions.js` (division metadata + division product catalogs)
  - `src/data/products.js` (therapeutic categories + product catalogs + formulation summary cards)
- Dynamic detail pages use URL slugs and local data lookups:
  - `/divisions/:slug` -> `DivisionDetailPage` reads from `divisions`
  - `/products/:slug` -> `TherapeuticDetailPage` reads from `therapeuticCategories`
  - Unknown slugs are redirected with `<Navigate />`.
- Home and marketing sections are composed from reusable components under `src/components/home/` and `src/components/layout/`.
- Contact form submission is frontend-only (`src/pages/ContactPage.jsx`) and posts with `axios` to `import.meta.env.VITE_FORMSPREE_ENDPOINT`.

## Key repository conventions

- **Tailwind-first styling**: shared UI primitives and utility classes live in `src/index.css` (`.btn-primary`, `.card`, `.section-title`, `.page-hero`, etc.). Prefer reusing these classes over introducing new bespoke styles.
- **Theme tokens in Tailwind config**: custom `teal` and `navy` palettes and display/sans fonts are defined in `tailwind.config.js`; keep new styling aligned to these tokens.
- **Scroll-reveal animation pattern**:
  - Components typically use `useScrollAnimation()` from `src/hooks/useScrollAnimation.js`.
  - Elements use `animate-on-scroll` + `visible` class toggling.
  - Transition delay is encoded via utility classes like `delay-100`, `delay-200`, etc. from `src/index.css`.
- **Icon convention**:
  - Data files store icon names as strings (`icon: "Pill"`).
  - Components render them with `LucideIcon` (`src/components/common/LucideIcon.jsx`), which resolves names from `lucide-react`.
  - Preserve string icon names in data objects instead of importing icon components into data files.
- **Content gating for incomplete division catalogs**:
  - `divisions` entries use `isDataAvailable` to control UI behavior.
  - When `false`, pages show “contact us” messaging instead of full product tables.
- **Routing fallback**:
  - Unknown routes (`*`) currently render `HomePage` instead of a dedicated 404 page.
- `README.md` is currently the default Vite template; rely on source/config files in this repo as the primary implementation reference.
