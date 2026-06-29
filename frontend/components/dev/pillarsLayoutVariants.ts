export type PillarsLayoutVariant = {
  label: string;
  layout: "default" | "centred" | "right";
};

export const pillarsLayoutVariants: PillarsLayoutVariant[] = [
  { label: "Current — bottom 2 left-aligned", layout: "default" },
  { label: "Bottom 2 centred under top 3",    layout: "centred" },
  { label: "Bottom 2 right-aligned",          layout: "right" },
];
