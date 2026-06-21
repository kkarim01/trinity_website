type SectionDividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function SectionDivider({
  orientation = "horizontal",
  className,
}: SectionDividerProps) {
  const classes = [
    "border-hairline",
    orientation === "horizontal" ? "w-full border-t" : "h-full border-l",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div role="separator" aria-orientation={orientation} className={classes} />;
}
