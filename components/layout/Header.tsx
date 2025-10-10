"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { mainNav, mobileNav } from "@/lib/data/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);

  return (
    <header className="nav">
      <div className="wrap">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(pathname === link.href && "active")}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link href="/pricing" className="btn btn-volt">
            Start free week
          </Link>
          <details className="menu" ref={menuRef}>
            <summary aria-label="Open menu">
              <span />
            </summary>
            <div className="menu-panel">
              {mobileNav.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/pricing" className="btn btn-volt">
                Start free week
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
