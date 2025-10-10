import Link from "next/link";
import { Fragment } from "react";
import { footerColumns, legalLinks, site, socialLinks } from "@/lib/data/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("mailto:") || href === "#") return <a href={href}>{label}</a>;
  return <Link href={href}>{label}</Link>;
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p>{site.tagline}</p>
            <div className="social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h5>{column.title}</h5>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bot">
          <span>{site.copyright}</span>
          <span>
            {legalLinks.map((link, i) => (
              <Fragment key={link.label}>
                {i > 0 ? <> &nbsp;&middot;&nbsp; </> : null}
                <FooterLink {...link} />
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
