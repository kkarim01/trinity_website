import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  const classes = [
    "bg-onyx-raised border border-hairline rounded-md p-8",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
