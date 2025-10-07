import Link from "next/link";
import { cn } from "@/lib/cn";

export function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#D4FF3F" />
      <path
        d="M8.5 22.5l4.2-13h3.1l-4.2 13zM14.4 22.5l3.3-10.2h3.1l-3.3 10.2zM20.3 22.5l2.3-7.1h3.1l-2.3 7.1z"
        fill="#0B1622"
      />
    </svg>
  );
}

export function Logo({ onLight = false }: { onLight?: boolean }) {
  return (
    <Link href="/" className={cn("logo", onLight && "on-light")} aria-label="Stride home">
      <LogoMark />
      <span>stride</span>
    </Link>
  );
}
