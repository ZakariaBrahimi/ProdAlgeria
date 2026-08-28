import Link from "next/link";

import {
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/social-icons";
import { NAV_LINKS } from "@/constants/nav-links";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-base font-bold text-white">
              P
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              ProdAlgeria
            </span>
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-dark-muted-foreground"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-dark-muted-foreground">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`ProdAlgeria on ${label}`}
                className="transition hover:text-white"
              >
                <Icon className="size-4.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-dark-border pt-6 text-xs text-dark-muted-foreground/80 sm:flex-row">
          <p>&copy; {year} ProdAlgeria. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="transition hover:text-white/70">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-white/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
