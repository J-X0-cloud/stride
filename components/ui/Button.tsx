import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Variant = "volt" | "blue" | "ghost" | "line" | "ink";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ href, variant = "volt", arrow = false, className, children }: ButtonLinkProps) {
  const classes = cn("btn", `btn-${variant}`, className);
  const content = (
    <>
      {children}
      {arrow ? <Icon name="arrow" strokeWidth={2} /> : null}
    </>
  );
  if (href.startsWith("mailto:") || href === "#") {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
