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
