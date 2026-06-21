import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

const buttonClasses =
  "inline-block border border-gold text-platinum font-display font-medium " +
  "text-sm uppercase tracking-[0.15em] px-8 py-3.5 rounded-sm " +
  "transition-all duration-300 ease-out " +
  "hover:bg-gold hover:text-onyx-base hover:shadow-gold-glow " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function Button({ className, ...props }: ButtonProps | LinkButtonProps) {
  const classes = [buttonClasses, className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    return <Link className={classes} {...(props as LinkButtonProps)} />;
  }

  return <button className={classes} {...(props as ButtonProps)} />;
}
