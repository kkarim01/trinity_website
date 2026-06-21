import type { Config } from "tailwindcss";

// Full 50-900 ramps generated from the brand guideline's three anchor
// colors (gold #8A7255, platinum #A19688, charcoal #1E1E1D family).
// 500 always equals the anchor hex exactly; other stops interpolate
// lightness/saturation around it for hover states, borders, and
// background hierarchy. See Trinity_Process_Solutions_Brand_Guidelines.md
// Section 3 for the source values.

const gold = {
  50: "#f7f3ed",
  100: "#efe6dc",
  200: "#e1d3c1",
  300: "#c9b59c",
  400: "#b4956e", // ≈ brand "gold-light" (#B4966E)
  500: "#8a7255", // brand anchor — "gold"
  600: "#745e44",
  700: "#5c4c38",
  800: "#43392d",
  900: "#2f2922",
};

const platinum = {
  50: "#f4f2f0",
  100: "#ebe8e5",
  200: "#dcd7d1",
  300: "#c9c3ba",
  400: "#b5aca1",
  500: "#a19688", // brand anchor — "platinum"
  600: "#8e8171",
  700: "#736a5e",
  800: "#59524a",
  900: "#423e38",
};

const charcoal = {
  50: "#e1e1e0",
  100: "#b9b9b6",
  200: "#8f8f8a",
  300: "#686864",
  400: "#4e4e4b",
  500: "#393937",
  600: "#2a2a28",
  700: "#1e1e1d", // brand anchor — "bg-raised"
  800: "#141413", // brand anchor — "bg-base"
  900: "#0d0d0c", // brand anchor — "bg-sunken"
};

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { ...gold, DEFAULT: gold[500], light: gold[400] },
        platinum: { ...platinum, DEFAULT: platinum[500] },
        charcoal,
        onyx: {
          base: charcoal[800],
          raised: charcoal[700],
          sunken: charcoal[900],
        },
        ink: {
          primary: "#EDEAE4",
          muted: "#8C8884",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderColor: {
        hairline: "rgba(138, 114, 85, 0.18)",
      },
      ringColor: {
        gold: gold[500],
      },
      boxShadow: {
        "gold-glow": "0 0 24px rgba(180, 150, 110, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
