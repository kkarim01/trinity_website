import type { SVGProps } from "react";

type TriquetraMarkProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "children">;

// One vesica-piscis arc: two circles of radius r, centers spaced d apart on
// an equilateral triangle around the origin. Stroking this lens (rather than
// filling it) is what gives the three rotated copies their woven, pointed-
// leaf cusps — a filled union would read as a flat three-blade pinwheel.
const PETAL_PATH = "M0,-22 A38.105,38.105 0 0 1 0,44 A38.105,38.105 0 0 1 0,-22 Z";

export function TriquetraMark({ className, ...props }: TriquetraMarkProps) {
  return (
    <svg
      viewBox="-50 -50 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={9}
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* rotate(180): PETAL_PATH's long pointed tip lands opposite its short
          tip, so the unrotated group put the sharp cusps at 2/6/10 o'clock
          instead of 12/4/8 — this flips them up to match the brand mark. */}
      <g transform="rotate(180)">
        <path d={PETAL_PATH} />
        <path d={PETAL_PATH} transform="rotate(120)" />
        <path d={PETAL_PATH} transform="rotate(240)" />
      </g>
    </svg>
  );
}
