# Woman Health — UX prototype

Next.js (App Router) mobile-first onboarding prototype with mock data only.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If the port is busy, run `npx next dev -- -p 3001` and use that URL instead.

Main routes: `/` → `/onboarding` (автопрокрутка слайдов, затем `/auth`), `/auth`, `/login`, `/register`, `/register/step-2`, `/home`.

## Typography

Figma text styles use the family name **Stolzl** (with an extra `l`: S-t-o-l-z-**l**). That is not the same spelling as “Stolz” without the `l`. Put licensed `Stolzl-Regular.woff2` and `Stolzl-Medium.woff2` in `public/fonts/` for exact rendering; until then **Manrope** is the web fallback (Cyrillic-friendly).

## Design system (from Figma MCP)

- **Tokens:** `src/design-system/tokens.css` — colors, radii, shadows aligned with components **Button**, **Navigation Bar**, **Input Field** (e.g. nodes `205:3364`, `205:3768`, `205:3589`).
- **Typography utilities:** `src/design-system/typography.module.css` — names mirror Figma text styles (Heading/3, Paragraph/2, nav labels, captions).
- **UI primitives:** `src/components/ui/` — `Button`, `ButtonLink`, `InputField`, `NavigationBar` (+ `index.ts`). SVG slices from Figma live in `public/icons/figma/`.
- **Screens:** `/home` uses **Navigation Bar**, **Input Field**, **Button**; onboarding titles use typography utilities. Other Figma selections (Chat Bubble, Tabs, Checkbox, Switch, Radio) are not duplicated in code yet — same tokens/CSS Modules pattern applies when you add them.

## Repo remote

```bash
git remote add origin git@github.com:designsofiastrelchenko/Woman-health-mobile.git
git push -u origin main
```
