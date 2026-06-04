# AGENTS.md

Clover Moda is a 100% static, mobile-first product catalog. The full project specification lives in `guia.md`; the design system lives in `DESING.md`. Read both before making non-trivial changes — this file only captures the constraints an agent is most likely to get wrong.

## Stack (non-negotiable)

- **React + Tailwind CSS only.** No UI libraries (Material, Shadcn, Radix, etc.), no state managers, no backend, no DB, no routers beyond what React/Vite provide by default.
- **Data source is a local JSON file** (e.g. `products.json`). Do not mock `fetch`/`axios`/async; import the JSON directly.
- **No additional dependencies** without explicit authorization.

## Design tokens (use these exact values)

Defined in `DESING.md`. Do not invent variants.

| Token            | Value      | Tailwind              |
| ---------------- | ---------- | --------------------- |
| Surface          | `#FFFFFF`  | `bg-white`            |
| On-Surface       | `#000000`  | `text-black`          |
| Surface-Dim      | `#F3F3F4`  | `bg-[#F3F3F4]`        |
| Purple (primary) | `#7C3AED`  | `violet-600` / `bg-[#7C3AED]` |
| Blue (info)      | `#3B82F6`  | `blue-500`            |
| Yellow (alert)   | `#FACC15`  | `yellow-400`          |

Trap: `#7C3AED` is **violet-600** in Tailwind, not `purple-600` (`#9333EA`). The spec's `border-purple-600` references in `DESING.md` are illustrative — match the hex.

- **Font:** `Hanken Grotesk` (load via Google Fonts or `@fontsource/hanken-grotesk`). Not Inter, not the system default.
- **Radius:** `rounded` (4px) on cards, buttons, inputs.
- **Container padding:** `px-6` (1.5rem) on mobile.
- **Section spacing:** `space-y-8` (2rem) vertical rhythm.

## Mobile-first rules

- Design for **360–430px first**, then scale up with `sm:` / `md:` / `lg:`.
- Grid: **2 columns on mobile, 4 on desktop.**
- Headlines: bold, uppercase, `tracking-[-0.02em]` (e.g. hero "UNFILTERED STYLE").
- Subheadings: medium weight, sentence case.
- Labels (tags like "NEW", "BESTSELLER"): bold, uppercase, small.
- Interactive states: `active:scale-95` + color transition on tap/hover.

## Required catalog structure

1. **Header** — sticky. Logo left, horizontally scrollable category bar center, utility icons (search, profile, bag) right.
2. **Category bar** — active item uses `border-b-2 border-[#7C3AED]`.
3. **Product grid** — 2-col mobile / 4-col desktop. Cards have: square image, name, sub-category, price, circular purple "Add to Cart" button anchored bottom-right of the image.
4. **Product detail** — modal or static route. Mobile: stacked with image carousel. Desktop: image left, info right. Include size/color selectors.
5. **Footer** — physical address, opening hours, social links.

The **"Add to Cart" button is decorative / mock**. Do not implement real cart state, persistence, or checkout logic. The same goes for the contact methods (social links, phone) — they are direct links, not in-app flows.

## Coding conventions

- Small, semantic React components. No monolithic files.
- Consume `products.json` directly via ES `import`. No async wrappers, no `useEffect` data loading.
- Tailwind utility-first; avoid `@apply` and arbitrary CSS unless necessary.
- Do not introduce colors outside the palette above.

## Definition of Done (per task)

- Layout verified at 360–430px width (Chrome DevTools mobile sim).
- Build / lint pass with no warnings or errors.
- `products.json` schema unchanged unless the task explicitly modifies it.
- No new third-party dependencies added.

## Reference files

- `guia.md` — full agent spec (stack, philosophy, guardrails).
- `DESING.md` — design system (colors, typography, spacing, components, layout patterns).
- `.agents/skills/frontend-design/SKILL.md` — UI design conventions.
- `.agents/skills/accessibility/SKILL.md` — a11y checks (run before declaring done).
- `.agents/skills/seo/SKILL.md` — meta tags and structured data for the static catalog.
