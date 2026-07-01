# Trinity Process Solutions — Project Context

Boutique IT consultancy. Dark-luxury aesthetic (near-black + antique gold).
Full brand spec: see Trinity_Process_Solutions_Brand_Guidelines.md in this repo.
Treat its hex values and font choices as anchor points, not a hard lock —
generate full tint/shade ramps from the anchor colors, and feel free to
propose alternative font pairings that better fit a dark-luxury boutique
consultancy feel, as long as the wide-tracked/light-weight character of the
existing wordmark is preserved. Show options before locking in a change.

Architecture: monorepo, /frontend (Next.js, App Router, TypeScript, Tailwind)
and /backend (Node/Express, TypeScript) — see Project Architecture section
of the build guide. Single-page homepage for now, built from composable
section components under /frontend/components/sections, so any section can
later be lifted into its own route (e.g. /frontend/app/about/page.tsx) with
minimal rework. Don't hardcode sections directly into app/page.tsx.

Brand color anchors: bg #141413, raised surface #1E1E1D, gold #8A7255,
gold-light #B4966E, platinum #A19688, body text #EDEAE4.
Display font (starting point): Montserrat (200-300 weight, uppercase, wide
tracking). Body font (starting point): Inter.

## Progress log

**2026-06-22** — Initial monorepo + frontend scaffold complete.
- Root shell: `/frontend`, `/backend`, root `README.md`, `.gitignore`, and
  `package.json` with a `dev` script (`concurrently`) for local dev.
- `/frontend`: Next.js (App Router, TypeScript), Tailwind pinned to v3 so
  `tailwind.config.ts` can use classic `theme.extend` ramps. Full 50–900
  tint/shade ramps generated for `gold`, `platinum`, and `charcoal`,
  anchored exactly at the brand hex values.
- Font pairing locked in: Montserrat (200–500) + Inter (400–700), loaded
  via `next/font/google` as `--font-display` / `--font-body`.
- `/frontend/components/ui`: `Button`, `Card`, `SectionDivider` primitives
  built to the brand doc's Section 8 specs. `/frontend/components/sections`
  scaffolded empty, ready for homepage sections.
- Brand assets reorganized into `public/brand`, `public/images`,
  `public/video`.
- Repo initialized and pushed to `https://github.com/kkarim01/trinity_website`.

**2026-06-23** — Backend scaffold, site header, and full homepage section build-out.
- `/backend`: Express + TypeScript scaffold (`tsx watch` for dev). `GET
  /api/health`, `POST /api/contact` (validates name/email/message shape,
  rejects honeypot-filled submissions server-side), CORS via
  `ALLOWED_ORIGIN`, centralized error-handling middleware, `.env.example`
  documenting `PORT`, `ALLOWED_ORIGIN`, `ZOHO_SMTP_USER/PASS`,
  `CONTACT_RECEIVER_EMAIL`. Email sending still stubbed — TODO.
- `/frontend/components/layout`: `Header` (transparent over hero, solidifies
  ~90% of a viewport scrolled, 350ms ease-out), `Logo` (mark + hairline
  divider + stacked wordmark), `NavLinks` (config-driven, anchors named to
  match future route slugs), `Footer` (logo lockup + Sitemap/Services/Contact
  columns divided by hairlines, brand tagline with "One Trusted Partner" in
  gold).
- `/frontend/components/icons/TriquetraMark.tsx`: the triquetra rebuilt as a
  vector (stroked vesica-piscis arcs) since the brand PNGs have no alpha
  channel — true transparency, recolorable, apex correctly oriented up.
- `/frontend/components/sections`: `Hero` (full-bleed looping muted video,
  gradient overlay, headline/subhead/CTA), `OurApproach` (silhouette
  background, "established since" badge — placeholder year, scroll-triggered
  stat counters in `StatCounters.tsx` — placeholder values, all marked
  `TODO`), `Pillars` (3 service cards + leaner "Why Trinity" badge strip for
  the 2 differentiators, Lucide icons), `Contact` (form posts to
  `${NEXT_PUBLIC_API_URL}/api/contact`, loading/success/error states,
  honeypot field).
- Added `lucide-react` dependency. `frontend/.env.local` (gitignored) holds
  `NEXT_PUBLIC_API_URL=http://localhost:4000` for local dev.
- Outstanding TODOs left in code: real founding year, team-experience/
  satisfaction/response-time stats, contact email + phone in the footer,
  Zoho SMTP wiring for the contact endpoint.

**2026-06-23 (later)** — Pillars section rebuilt for the new 5-service lineup.
- `Pillars.tsx` rebuilt as a clean, equal-weight 5-card grid. Added AI
  Integration & Automation (`Brain` icon), MVP & Rapid Prototyping
  (`Rocket` icon), and Digital Process Consulting (`BarChart2` icon).
- Client-Centric and No Outsourcing removed from the site entirely — the
  separate "Why Trinity" badge strip is gone.
- `Footer.tsx`'s services column updated to match the new 5-service list.
- `Email_Banner_C.png` added to `public/brand/` as the current horizontal
  lockup reference asset.

**2026-06-23 (later still)** — Header background tuning + a text-legibility
variant lab (WIP, not yet cleaned up).
- `Header.tsx`'s unscrolled state no longer goes fully transparent — a
  baseline gradient scrim + `backdrop-blur-sm` is always present, deepening
  to the existing solid state on scroll.
- Added a temporary, removable preview rig in `/frontend/components/dev/`
  (`HeaderTextVariantContext`, `HeaderTextVariantToggle`,
  `headerTextVariantStyles.ts`) to compare 15 different treatments for the
  nav links and wordmark side by side — press **V** at `localhost:3000`,
  or click the bottom-center pill, to cycle Default through Variant N
  (text stroke, borders/capsules, gradient fill, header-surface strength,
  color/opacity hierarchy, text-shadow, nameplate panel, etc.).
- This is intentionally WIP: once a direction is picked, the `dev/` folder,
  the provider/toggle wiring in `page.tsx`, and the `variant` prop plumbing
  in `Header.tsx`/`Logo.tsx`/`NavLinks.tsx` should all be removed.

**2026-06-29** — OurApproach redesign, Pillars card style lock-in + layout
toggle, new background assets.
- `OurApproach.tsx` rebuilt as a two-column flex layout: 520px text column
  (badge, headline, subhead, CTA) on the left; 560px compact card column on
  the right (5 cards: Boutique by Design, Australia-Based, Senior-Led,
  Client-Centric, No Outsourcing). Cards use a hairline-border box with gold
  icon row layout. Background swapped to `Website_Silhouette_C.png`
  (1672×941, `object-top`). Headline: "Built to Grow With Your Business."
- `Pillars.tsx` card style locked in permanently: minimal left-border
  treatment (`border-l-2 border-gold/40 bg-onyx-raised/80`), 24px gold
  icons, sm title/desc text. Background swapped to `Website_Services_B.png`.
  Headline: "Everything Your Business Needs, Under One Roof." Top padding
  reduced to `pt-16 md:pt-20`; `scroll-mt-[60px]` added for the Services
  nav anchor.
- Dev toggle (WIP): `PillarsLayout*` files in `/frontend/components/dev/`
  let you press **V** to cycle 3 layouts for the bottom 2 service cards —
  default (left-aligned), centred (cols 2–3 of a 3-col grid), right-aligned.
  Remove `dev/` folder and `PillarsLayoutWrapper` from `page.tsx` once a
  layout is chosen.
- New assets committed to `public/`: `Website_Silhouette_C.png`,
  `Website_Services_B.png`, `Website_Silhouette_Video.mp4`.

**2026-06-29 (later)** — Pillars layout locked in, dev toggle removed.
- Centred layout chosen and rendered directly in `Pillars.tsx`: 6-column
  grid (`grid-cols-6`), all 5 cards use `col-span-2 flex` so widths are
  identical. Card 4 uses `col-start-2` to centre the bottom two under the
  top three.
- `cardClass` updated with `h-full w-full` so each card fills its flex
  container, equalising heights across the row.
- `"use client"` directive removed from `Pillars.tsx` (was only needed for
  the layout-toggle hook).
- `PillarsLayout*` dev files deleted (`/frontend/components/dev/` now
  empty and removed). `PillarsLayoutWrapper` stripped from `page.tsx`;
  `Pillars` rendered directly.
- `scroll-mt` on the Services section set to `[40px]`.

**2026-07-01** — Contact section rebuilt with full-bleed background and locked-in copy/style.
- `Contact.tsx` rebuilt: full-bleed `Website_Contact.png` background with
  `bg-gradient-to-t from-onyx-base/90 via-onyx-base/60 to-onyx-base/20`
  overlay. `scroll-mt-[-36px]` on the section for nav-anchor alignment.
- Headline updated to "Start the Conversation." Subhead updated to "Tell us
  what you're working on and we'll take it from there."
- Headline and subhead wrapped in `inline` spans with a locked-in gold-hairline
  charcoal pill treatment: `border border-gold/60 bg-onyx-base/70 px-3 py-1
  rounded-sm leading-relaxed`. Chosen via a 10-variant V-key dev toggle
  (background-layout toggle + text-highlight toggle), both removed after
  lock-in.
- New assets committed to `public/`: `Website_Contact.png`,
  `Website_Contact_Image.png`, `Website_Contact_Video.mp4`.
