# Trinity Process Solutions — Claude Code Build Guide
**Full-stack edition: project scaffolding through deployment**

> Use this alongside `Trinity_Process_Solutions_Brand_Guidelines.md`. Copy that file into the project root before Prompt 0 — Claude Code will read it directly instead of you re-typing tokens into every prompt.

---

## Project Architecture

A monorepo with two top-level folders, mirroring the frontend/backend split you already use on My Fitness College:

```
trinity-website/
├── frontend/     → Next.js site (deploys to Vercel)
├── backend/      → Node/Express API — contact form email handling now,
│                    room for a blog API, client portal, etc. later
├── README.md
└── .gitignore
```

The site itself is a single-page marketing site with no real data layer yet, so the backend stays intentionally small (one route: handling the contact form). It exists as its own service from day one so it can grow without a rewrite — same reasoning as why the homepage is built from composable sections instead of one big page file.

---

## A Note on Color & Typography Flexibility

The hex values in the brand guidelines are **anchor points, not a hard lock**. Give Claude Code room to:
- Generate a full tint/shade ramp (e.g. `gold-100` through `gold-900`, `charcoal-100` through `charcoal-900`) from each anchor color, instead of reusing only the 3 flat hex codes everywhere. More shades means better hierarchy — subtle background steps, hover/active/disabled states, borders at different weights.
- Propose a different font pairing than Montserrat + Inter, if the frontend-design skill's judgment suggests something that better captures the "dark luxury boutique consultancy" feel while keeping the same wide-tracked, light-weight character as the existing wordmark. Ask it to show 2-3 options before locking one in, rather than silently picking.

This permission is folded directly into Prompt 1 below so it's established from the start of the build, rather than something you have to re-grant every time.

---

## Before You Start (manual — outside Claude Code)

### 1. Install the two prebuilt skills
Run in Claude Code (terminal, or the VS Code extension's chat panel):

**Frontend Design (official Anthropic skill)**
```
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins
```

**ui-ux-pro-max (community skill by nextlevelbuilder)** — third-party, not Anthropic-maintained, worth a quick skim before installing, same as any new dependency.
```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```
Confirm both with `/plugin` (no arguments).

### 2. Drop these into the project
Copy your 5 local files into `/frontend/public` using these paths — every prompt below references the path on the right, so this mapping is the only place asset filenames live:

| Local file | Project path | Use |
|---|---|---|
| `Website_Video_A.mp4` | `/frontend/public/video/trinity-hero.mp4` | Hero background video |
| `Website_Silhouette_B.png` | `/frontend/public/images/trinity-silhouette.png` | "Our Approach" section background |
| `Email_Banner_B.png` | `/frontend/public/brand/trinity-logo-wide.png` | Horizontal lockup — header & footer (current pillar set + tagline) |
| `Initial_Logo_A.png` | `/frontend/public/brand/trinity-mark.png` | Clean isolated triquetra — favicon & vector-rebuild source |
| `Initial_Logo.png` | `/frontend/public/brand/trinity-logo-stacked.png` | Stacked square lockup — kept as a shape/layout reference only (see note) |

**Two things worth knowing before you hand these to Claude Code:**
- `Initial_Logo_A.png` sits on a flat pure-black background (`#000000`), not the textured onyx (`#141413`) used everywhere else — fine as the cleanest available source for a vector/SVG rebuild of the mark, but don't drop the PNG itself in as a favicon without adding transparency or matching it to the page background first.
- `Initial_Logo.png`'s tagline ("IT Solutions. One Trusted Partner. Everything You Need.") and icon row are an earlier version of the messaging — `Email_Banner_B.png` carries the current tagline and pillar set. Treat `Initial_Logo.png` as a stacked-layout shape reference only, not as a source of current text/content.

### 3. Have your SMTP credentials ready
Your Zoho SMTP credentials for `ahmed@trinityprocess.solutions` (`smtp.zoho.com.au`, AU data center) — needed for the backend's contact-form email step. Don't paste the password into a Claude Code prompt; you'll add it as an environment variable when we get there (Prompt 9).

### 4. Create a `CLAUDE.md` in the repo root
This auto-loads as context for every Claude Code session, so brand and architecture decisions don't need repeating in each prompt:
```markdown
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
```

---

## The Prompt Sequence

Paste these into Claude Code one at a time, in order. Review each diff before accepting, same as your usual workflow.

### Phase A — Foundation

**Prompt 0 — Monorepo scaffold**
```
Create a new monorepo for Trinity Process Solutions with this top-level
structure: /frontend, /backend, a root README.md describing both, and a root
.gitignore covering node_modules, .env, .next, dist, and build for both
folders. Add a root package.json with a "dev" script that runs frontend and
backend concurrently (use the concurrently package) for local development.
Don't scaffold either app's internals yet — just the shell.
```

**Prompt 1 — Frontend scaffold + design tokens**
```
Inside /frontend, scaffold a Next.js 14+ project (App Router, TypeScript,
Tailwind CSS). Read CLAUDE.md and Trinity_Process_Solutions_Brand_Guidelines.md
in the repo root first.

Treat the brand guideline's hex values as anchor colors, not a fixed palette:
generate a full tint/shade ramp (50-900) in tailwind.config.ts for the gold,
charcoal, and platinum families, so there's real range to work with for
hover states, borders, and background hierarchy beyond the 3 flat tokens.

For typography, Montserrat (light weights) + Inter is the starting
recommendation, but you have latitude here — if a different pairing better
captures a dark-luxury boutique-consultancy feel while keeping the same
wide-tracked, light-weight character as the existing wordmark, propose 2-3
alternative pairings with a one-line rationale each before we lock one in.

Set up /frontend/components/sections for homepage sections and
/frontend/components/ui for reusable primitives (Button, Card,
SectionDivider). Load fonts via next/font/google. Don't build page content
yet — just the foundation and theme tokens.
```

**Prompt 2 — Backend scaffold**
```
Inside /backend, scaffold a Node + Express API in TypeScript (to match the
frontend). Include: a /api/health endpoint returning { status: "ok" }, CORS
configured via an ALLOWED_ORIGIN environment variable, a .env.example file
documenting the env vars we'll need (PORT, ALLOWED_ORIGIN, ZOHO_SMTP_USER,
ZOHO_SMTP_PASS, CONTACT_RECEIVER_EMAIL), a basic error-handling middleware,
and a dev script using nodemon/tsx for hot reload. Stub out a POST
/api/contact route that just validates the request body shape for now (name,
email, message) and returns a placeholder success response — we'll wire up
the actual email sending in a later prompt.
```

### Phase B — Frontend Sections

**Prompt 3 — Header & navigation**
```
Build the site header using the frontend-design skill. Use the horizontal
logo lockup style: the triquetra mark + "TRINITY PROCESS SOLUTIONS" wordmark
on the left (reference /frontend/public/brand/trinity-logo-wide.png for the
overall lockup, or rebuild it in SVG/CSS if you can reproduce the triquetra
cleanly — /frontend/public/brand/trinity-mark.png is the cleanest source for
that since it's an isolated mark with no surrounding text or texture, ask me
first if you want to attempt a vector rebuild), nav links on the right in the
display font (uppercase, wide tracking), separated from the logo by a 1px
hairline gold divider — this hairline-divider motif appears throughout the
brand assets, use it consistently in the header.

Nav links (anchor-based since this is single-page for now, but name the
components so each section could become its own route later): Our Approach,
Services, Contact. Header should be transparent over the hero and pick up a
solid raised background with a subtle shadow once scrolled past the hero —
slow, understated transition (300-400ms ease-out), nothing bouncy.
```

**Prompt 4 — Hero section (video background, vapi.ai-style)**
```
Build the homepage hero as a full-viewport-height section with a looping,
autoplaying, muted background video at
/frontend/public/video/trinity-hero.mp4 (object-fit: cover, no controls).
Reference: vapi.ai's homepage hero — full-bleed video filling the first
viewport, a dark gradient overlay over the video so text stays legible, with
a large bold headline and a single primary CTA on top.

We want their video-hero *treatment* only (full-bleed looping video + dark
overlay + bold type) — not their interactive call-demo widget, that's
product-specific to a voice-AI company and doesn't belong here.

Write 2-3 headline options positioning Trinity as a boutique, trusted,
all-in-one IT partner — avoid generic SaaS phrasing. Pair with a one-line
subhead and a gold-outline CTA button that fills gold with a soft glow on
hover.
```

**Prompt 5 — "Our Approach" section (PND Engineers-style, silhouette)**
```
Build the second homepage section as its own component
(/frontend/components/sections/OurApproach.tsx) so it can later be promoted
to /frontend/app/about/page.tsx with minimal changes.

Reference: the top section of pndengineers.com — a full-bleed background
graphic behind a bold headline + subheadline + CTA, an established-since
style badge, and a row of 3 animated counting stats underneath.

Adapt this using /frontend/public/images/trinity-silhouette.png (the gold
linework illustration of two people at a meeting table) as the full-bleed
background — it's a single flat graphic, so keep it simpler than PND's
layered/parallax treatment: dark gradient overlay, then headline + subhead +
CTA on top.

Write a headline communicating "one trusted partner, every IT need." Add 3
stat counters with placeholder values and clear TODO comments for me to fill
in with real numbers (combined team experience, client satisfaction, average
response time). Animate the counters to count up on scroll-into-view via a
simple intersection observer — keep it slow and understated.
```

**Prompt 6 — Services & value pillars section**
```
Build a section presenting Trinity's pillars exactly as they appear on the
current brand banner (/frontend/public/brand/trinity-logo-wide.png): Custom
Development, Business Process Automation, Cloud Services, Client-Centric,
No Outsourcing.

Heads up before you build this: the first 3 are genuine services, the last 2
("Client-Centric", "No Outsourcing") are differentiators/positioning
statements, not services — so they probably shouldn't read as identical
cards. Pick whichever of these two reads better once it's built, your call:
  (a) A single 5-up row mirroring the banner exactly — simplest, most
      literal match to the approved brand asset.
  (b) A 3-card "Services" grid (Custom Development, Business Process
      Automation, Cloud Services) plus a smaller 2-item "Why Trinity" trust
      strip (Client-Centric, No Outsourcing) styled more like badges than
      full cards — semantically clearer, a bit more design effort.

Use thin single-line Lucide icons (strokeWidth 1.5, gold at rest, gold-light
on hover), matching the banner's icon choices: code brackets for Custom
Development, a refresh/cycle icon for Business Process Automation, a cloud
icon for Cloud Services, a people icon for Client-Centric, a shield-check
icon for No Outsourcing. Cards/badges use the raised-surface background,
hairline gold border, and the radius scale from the brand guidelines — not
rounded "consumer SaaS" cards. Write one-sentence copy for each — I'll
refine after.
```

**Prompt 7 — CTA / contact section (frontend form UI)**
```
Build a closing CTA section before the footer: a confident headline, and a
contact form (Name, Email, Message) styled consistently with the rest of the
site — raised-surface inputs, gold focus rings, no bright colors. On submit,
POST to the backend at `${process.env.NEXT_PUBLIC_API_URL}/api/contact` with
the form data, show a loading state on the button while it's in flight, and a
success/error message after. Add an empty honeypot field for basic spam
protection (hidden input that should stay empty — reject submissions where
it's filled). Create /frontend/.env.local with
NEXT_PUBLIC_API_URL=http://localhost:4000 (or whatever port the backend
ends up on) for local development.
```

**Prompt 8 — Footer**
```
Build the footer using the wide horizontal lockup as the visual anchor (logo
+ wordmark left, hairline-gold-divided columns for Sitemap, Services, and
Contact info on the right) — mirror the divider rhythm from
/frontend/public/brand/trinity-logo-wide.png. Include the tagline "Boutique
Solutions. Built For Your Business. Everything You Need. One Trusted
Partner." in small type at the bottom, with "One Trusted Partner" in gold.
Background should be the deepest charcoal shade to anchor the page.
```

### Phase C — Backend Implementation

**Prompt 9 — Contact form email handling**
```
Implement the real logic for POST /api/contact in /backend. Use Nodemailer
with a Zoho SMTP transporter (host smtp.zoho.com.au, port 465, secure) for
the AU data center, authenticated with ZOHO_SMTP_USER and ZOHO_SMTP_PASS from
environment variables (don't hardcode credentials). Send the form submission
to CONTACT_RECEIVER_EMAIL (ahmed@trinityprocess.solutions). Reject the
request if the honeypot field is filled. Validate name/email/message are
present and the email is a plausible format before sending. Add basic rate
limiting (express-rate-limit) on this route to deter spam. Return clear JSON
success/error responses the frontend can show to the user.
```

**Prompt 10 — Connect frontend and backend locally**
```
Wire up local development end-to-end: confirm CORS on the backend allows
http://localhost:3000 (or whatever port the frontend dev server uses) via
ALLOWED_ORIGIN, confirm the frontend's NEXT_PUBLIC_API_URL points to the
backend's local port, and walk me through testing a full contact-form
submission locally — what env vars I need to set in /backend/.env (not
committed to git) to actually receive a test email.
```

### Phase D — Polish & QA

**Prompt 11 — Polish & QA pass**
```
Do a full pass over the site: 1) Accessibility — contrast ratios against the
dark palette, keyboard navigation, alt text on the silhouette graphic and
video (described as decorative/illustrative), reduced-motion fallback for
the stat counters and scroll animations, proper form labels/error
announcements on the contact form. 2) Responsive check at 375px, 768px, and
1440px — hero video and silhouette section especially. 3) Hero video
file size/format check for web performance, recompress with ffmpeg if
needed. 4) Audit against generic AI-design tells: any purple, any
default-Inter-only typography without the chosen display pairing, any
centered-hero-with-button-below that doesn't match our video treatment, any
unintentionally bouncy motion that conflicts with the brand's "slow and
deliberate" principle. 5) Confirm the backend returns sensible error states
(network failure, validation failure, SMTP failure) and the frontend handles
all three gracefully.
```

### Phase E — Deployment

```
Prepare both apps for deployment: /frontend for Vercel (same as your other
project), /backend for Render. For the frontend: confirm build command,
output settings, and that NEXT_PUBLIC_API_URL is read from a Vercel
environment variable rather than hardcoded. For the backend: confirm a start
script, a health-check endpoint Render can ping, and document which
environment variables (PORT, ALLOWED_ORIGIN, ZOHO_SMTP_USER, ZOHO_SMTP_PASS,
CONTACT_RECEIVER_EMAIL) need to be set in the Render dashboard. Remind me to
update ALLOWED_ORIGIN to the production frontend domain and
NEXT_PUBLIC_API_URL to the production backend URL once both are deployed.
```
Note: Render's free tier cold-starts after inactivity, same as your My Fitness College backend — fine for a low-traffic contact form, just expect the first submission after idle time to take a few extra seconds.

---

## When You're Ready to Expand to Multi-Page

Because each section already lives in its own component, this prompt is short:
```
Promote the OurApproach component into its own route at
/frontend/app/about/page.tsx with its own metadata (title, description).
Update the header nav links from anchor hrefs (#approach) to real routes
(/about), and add a condensed version of the section back on the homepage
that links through to the full About page with a "Learn more" CTA.
```
Repeat the same pattern for Services and Contact when you're ready to split those out too.

## Future Backend Expansion (when needed, not now)
The /backend folder is intentionally minimal today. When the site grows, it's already positioned to take on: a blog/CMS API, a client login portal, newsletter signup, or CRM webhook integration — each as its own route added the same way the contact route was built, without restructuring what's already there.
