# Trinity Process Solutions — Brand Guidelines
**Dark Luxury IT Consultancy | v1.0 — Dev Handoff Edition**

> This document is written as a direct technical reference for building the Trinity Process Solutions website. Every value below (hex, HSL, spacing, type scale) is extracted from the approved brand assets (`Initial_Logo.png`, `Updated_Email_Banner.png`, `Website_Silhouette_B.png`) and is ready to paste into CSS, Tailwind config, or design tooling.

---

## 1. Brand Foundation

**Name:** Trinity Process Solutions
**Domain:** trinityprocess.solutions
**Category:** Boutique IT consultancy — custom development, business process automation, IT support, infrastructure, managed services.

**Taglines**
| Status | Line |
|---|---|
| **Current / primary** | "Boutique Solutions. Built For Your Business. Everything You Need. **One Trusted Partner.**" |
| Legacy (initial logo) | "IT Solutions. One Trusted Partner. Everything You Need." |

The current tagline structure works as 2 short statements + 1 emphasized closing phrase ("One Trusted Partner" set in the accent gold). Keep this rhythm in hero copy: **claim → claim → emphasized promise**.

**Service Pillars** (use as primary nav / sitemap structure — pulled directly from the brand banner iconography):
1. Custom Development
2. Business Process Automation
3. IT Support
4. Infrastructure
5. Managed Services

**Brand Personality:** Quiet authority, precision, craftsmanship, trust. Think private banking or bespoke tailoring — not a typical loud "tech startup." Confident through restraint, not through noise.

**Voice & Tone**
- Confident, structured, understated — never hypey or full of exclamation points.
- Short declarative sentences for headlines; clear, professional explanation in body copy.
- Avoid generic SaaS clichés ("supercharge," "game-changing," "revolutionize"). Prefer words like *trusted, precise, tailored, dependable, boutique.*
- Always capitalize "One Trusted Partner" as a brand phrase when it appears.

---

## 2. Logo System

**Primary mark:** A triquetra (trinity knot) rendered as interlocking gold loops — symbolizing the three core pillars of the brand (development, infrastructure, support) unified as one partner.

**Lockups available:**
- **Stacked lockup** (`Initial_Logo.png`): mark above wordmark above tagline + icon row. Use for square/social placements, favicons (mark only), loading screens.
- **Horizontal lockup** (`Updated_Email_Banner.png`): mark left, wordmark + tagline center, 5 service icons right, separated by thin vertical gold rules. Use for site header/nav, email headers, wide banners, footer.

**Wordmark typography:** "TRINITY" in platinum/champagne, "PROCESS SOLUTIONS" in gold beneath it, both in a light-weight, wide-tracked, all-caps **sans-serif** (no serifs — confirmed on pixel inspection). See Section 3 for the exact typeface recommendation.

**Clear space:** Maintain minimum clear space equal to the height of one triquetra "petal" loop on all sides — no text, icons, or edges inside this zone.

**Minimum size:**
- Horizontal lockup: 240px wide minimum (web), 1.5in minimum (print).
- Mark only (favicon/app icon): 32px minimum; simplify to a flat single-gold-tone version below 64px (texture/foil detail will not render legibly).

**Backgrounds:** The mark is designed for **dark surfaces only** (charcoal/onyx). Always place on `--color-bg-base` or darker. Never place the gold mark on white or light backgrounds — produce a reversed/all-dark variant if a light-mode section is ever required, rather than placing the existing asset on light.

**Don'ts**
- ❌ Don't recolor the triquetra anything other than the gold family defined below.
- ❌ Don't stretch, skew, or rotate the mark.
- ❌ Don't drop a stroke/outline or drop-shadow style around the mark — it's designed to sit flush on the textured dark background.
- ❌ Don't place the horizontal lockup below ~240px wide — the icon row will clutter.
- ❌ Don't change the tracking (letter-spacing) of the wordmark.

---

## 3. Color System

The palette is a **near-black charcoal field with a single muted antique-gold accent family** — no secondary brand color, no bright/saturated colors anywhere. This restraint *is* the brand.

### Core palette (sampled directly from approved assets)

| Token | Name | Hex | RGB | HSL | Usage |
|---|---|---|---|---|---|
| `--color-bg-base` | Onyx (background) | `#141413` | 20,20,19 | 60° 3% 8% | Page background, default canvas |
| `--color-bg-raised` | Charcoal (surface) | `#1E1E1D` | 30,30,29 | 60° 2% 12% | Cards, panels, nav bar, modals |
| `--color-bg-sunken` | Deep Black | `#0D0D0C` | 13,13,12 | — | Footer, deepest sections, video overlays |
| `--color-gold` | **Antique Gold (primary accent)** | `#8A7255` | 138,114,85 | 33° 24% 44% | Logo mark, primary CTA, links, icon strokes, dividers |
| `--color-gold-light` | Brass Highlight | `#B4966E` | 180,150,110 | 34° 32% 57% | Hover states, gradients, glow accents |
| `--color-platinum` | Champagne / Platinum | `#A19688` | 161,150,136 | 34° 12% 58% | Primary wordmark color, headline text on dark |
| `--color-text-primary` | Off-white | `#EDEAE4` | 237,234,228 | — | Body copy on dark backgrounds (warm-tinted white, not pure `#FFF`) |
| `--color-text-muted` | Warm Grey | `#8C8884` | 140,136,132 | — | Secondary/meta text, captions |
| `--color-border` | Hairline Gold (10% opacity) | `rgba(138,114,85,0.18)` | — | — | Card borders, section dividers, table rules |

### Usage ratio (keep the "luxury" feel)
- **~85–90%** charcoal/onyx (`bg-base`, `bg-raised`, `bg-sunken`)
- **~7–10%** gold accent (logo, CTAs, icon strokes, dividers, hover states — *used sparingly, like foil-stamping*)
- **~3–5%** off-white/platinum text

Gold should always read as an **accent**, never a fill. Avoid large gold blocks/buttons with solid fill — prefer outlined or text-only gold treatments with a subtle fill only on primary CTA hover.

### Ready-to-paste CSS

```css
:root {
  --color-bg-base: #141413;
  --color-bg-raised: #1E1E1D;
  --color-bg-sunken: #0D0D0C;

  --color-gold: #8A7255;
  --color-gold-light: #B4966E;
  --color-platinum: #A19688;

  --color-text-primary: #EDEAE4;
  --color-text-muted: #8C8884;
  --color-border: rgba(138, 114, 85, 0.18);

  --color-gold-glow: rgba(180, 150, 110, 0.25); /* for subtle box-shadow glows on hover */
}
```

### Tailwind config snippet

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        onyx: { base: '#141413', raised: '#1E1E1D', sunken: '#0D0D0C' },
        gold: { DEFAULT: '#8A7255', light: '#B4966E' },
        platinum: '#A19688',
        ink: { primary: '#EDEAE4', muted: '#8C8884' },
      },
      ringColor: { gold: '#8A7255' },
      borderColor: { hairline: 'rgba(138,114,85,0.18)' },
    },
  },
};
```

### Accessibility note
`--color-text-primary` (#EDEAE4) on `--color-bg-base` (#141413) gives a contrast ratio of ~14.7:1 — passes AAA. `--color-gold` (#8A7255) on `--color-bg-base` gives ~4.6:1 — passes AA for large text/UI components but is **borderline for small body text**; use `--color-gold-light` (#B4966E, ~6.8:1) instead of `--color-gold` for any gold text below 18px, and reserve `--color-gold` for icons, borders, and large display text.

---

## 4. Typography

Pixel inspection of the wordmark confirms a **light-weight, wide-tracked, geometric sans-serif in all caps** — no serifs on the letterforms. This is the signature "fashion-house wordmark" treatment (think Cartier/Aesop-style restraint).

### Recommended typefaces (free, web-safe, closest match to brand mark)

| Role | Typeface | Source | Notes |
|---|---|---|---|
| **Display / Headings** | **Montserrat** (weights 200–300) or **Jost** (weight 300) | Google Fonts | Use ALL CAPS with wide letter-spacing (0.15–0.25em) for H1/logo-adjacent headlines to match the wordmark exactly |
| **Body copy** | **Inter** (400/500) | Google Fonts | Clean, highly legible at small sizes on dark backgrounds — Montserrat Thin is too delicate for paragraph text |
| **Optional serif accent** (pull-quotes, taglines only) | **Cormorant** (300 italic) | Google Fonts | Use sparingly for an editorial/luxury touch on quotes or section eyebrows — not for UI text |

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&family=Inter:wght@400;500;600;700&family=Jost:wght@300;400&display=swap');

:root {
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Type scale & treatment

| Element | Font | Weight | Size (desktop) | Letter-spacing | Case |
|---|---|---|---|---|---|
| Logo wordmark / Hero H1 | Display | 200–300 | 48–72px | 0.2em | UPPERCASE |
| H2 (section headers) | Display | 300 | 32–40px | 0.12em | UPPERCASE |
| H3 (card/feature titles) | Display | 400 | 20–24px | 0.06em | Title Case |
| Body | Body | 400 | 16–18px | normal | Sentence case |
| Eyebrow / label (e.g. "OUR SERVICES") | Display | 400 | 12–13px | 0.25em | UPPERCASE, gold color |
| Button label | Display | 500 | 14px | 0.15em | UPPERCASE |

**Rule:** the wider the letter-spacing, the lighter the font-weight should be — this is what keeps the brand feeling refined rather than cramped. Never set Montserrat Thin/Light below 18px (legibility drops); switch to Inter for anything smaller.

---

## 5. Imagery & Iconography Style

### Linework illustration style (from `Website_Silhouette_B.png`)
- Thin, single-weight gold outline illustrations on a flat charcoal/black background — no fills, no gradients, no shading inside the figures.
- Subject matter: professional/business scenes rendered as minimal contour silhouettes (e.g., two people in a meeting at a laptop).
- Use this style for: about-page hero graphics, process-explainer illustrations, section dividers, empty states.
- **Do not** mix this linework style with photographic imagery in the same section — pick one register per section for visual consistency.

### Photography style (from `Website_Video_A.mp4` reference footage)
- Cinematic, warm golden-hour lighting; shallow depth of field; glass-walled modern office with city skyline visible through windows.
- Subjects: professionals in business-casual/formal attire, engaged in focused, deliberate work (tablet/laptop use, note-taking) — calm and competent, not staged "stock photo smiling."
- Color-grade any photography toward warm highlights / desaturated shadows so it sits naturally against the charcoal-and-gold palette. Add a subtle dark vignette or a `rgba(13,13,12,0.4)` overlay when photography sits behind text.

### Iconography
- Thin single-line (1.5–2px stroke) outline icons only — matches the monitor/network/cloud/shield/headset icon set used in the logo lockups.
- Icon color: `--color-gold` at rest, `--color-gold-light` on hover.
- Recommended icon library to match the existing style: **Lucide** (already available in this build environment) — set `strokeWidth={1.5}` and size 24–32px to match brand weight.

---

## 6. Layout, Spacing & Surface System

**Spacing scale** (4px base unit, use consistently instead of arbitrary values):
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

**Radius:** Keep corners mostly sharp or very subtly rounded — this is a precision/luxury brand, not a soft consumer-app brand.
- Cards/panels: `4px–6px` radius max.
- Buttons: `2px–4px` radius, or fully square for a more architectural feel.
- Avoid large pill-shaped buttons or heavily rounded (16px+) cards — reads as "consumer SaaS," not boutique consultancy.

**Dividers:** Use 1px hairline rules in `--color-border` (gold at 18% opacity) to separate sections — visible in both logo lockups as the vertical rules between the mark, wordmark, and icon row. This is a strong, repeatable brand signature — use it generously between nav items, footer columns, and stat blocks.

**Section backgrounds:** Alternate subtly between `--color-bg-base` and `--color-bg-raised` (a ~6% lightness step) to separate sections without ever introducing a hard visual break or a different hue.

**Texture:** The source assets use a fine paper/noise texture (`grain`) over the charcoal background. Optionally replicate this with a low-opacity (3–5%) SVG noise overlay across the page background for material authenticity — but keep it subtle enough that it never competes with text legibility.

---

## 7. Motion & Interaction Principles

- **Slow and deliberate**, never bouncy or playful. Use `ease-out` or `cubic-bezier(0.25, 0.1, 0.25, 1)` easing, 300–500ms durations for section reveals.
- Hover states: gold borders/text brighten from `--color-gold` → `--color-gold-light`; avoid scale/bounce transforms — prefer a subtle opacity/brightness shift or a thin gold underline that extends on hover.
- Page transitions and scroll-reveals should fade/slide in gently (8–16px translate + opacity), echoing the calm, unhurried tone of the brand.

---

## 8. Core UI Components

**Primary button**
```css
.btn-primary {
  background: transparent;
  border: 1px solid var(--color-gold);
  color: var(--color-platinum);
  font-family: var(--font-display);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 14px;
  padding: 14px 32px;
  border-radius: 2px;
  transition: all 0.3s ease-out;
}
.btn-primary:hover {
  background: var(--color-gold);
  color: var(--color-bg-base);
  box-shadow: 0 0 24px var(--color-gold-glow);
}
```

**Card**
```css
.card {
  background: var(--color-bg-raised);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 32px;
}
```

**Navigation:** Horizontal logo lockup on the left, nav links in Display font (uppercase, 0.1em tracking, 14px), with the 1px gold hairline divider style separating logo from nav links — mirroring the existing banner asset exactly.

---

## 9. Asset Inventory

| File | Use |
|---|---|
| `Initial_Logo.png` | Square stacked lockup — favicon source, social profile image, loading/splash screen |
| `Updated_Email_Banner.png` | Horizontal lockup — site header, email signature/header, wide footer banner |
| `Website_Silhouette_B.png` | Linework illustration — about/process section hero graphic |
| `Website_Video_A.mp4` | Reference photography style for hero background video or photography shoot brief (8s, 1280×720, 24fps) — treat as a style reference for sourcing/shooting final hero footage, color-graded per Section 5 |

> **Note:** Source files are textured/foil-stamped renders rather than flat vector exports. For crisp web rendering (favicons, retina logos, SVG icons), recreate the triquetra mark and wordmark as clean vector/SVG using the exact hex values in Section 3, reserving the textured PNG versions for hero/marketing placements where the paper-grain effect is a deliberate atmospheric choice.

---

## 10. Quick-Reference Don'ts

- ❌ No bright/saturated colors anywhere — stay within the charcoal + antique gold family.
- ❌ No rounded "bubbly" UI — sharp/architectural, not soft consumer-app.
- ❌ No stock-photo smiling/"jazz hands" business photography — calm, focused, competent.
- ❌ No bold/heavy display type — the brand's confidence comes from light weight + wide tracking, not boldness.
- ❌ No exclamation points or hype language in copy.
- ❌ No gold-on-gold or platinum-on-gold text combinations — always gold/platinum text on the dark surfaces, never the reverse.
