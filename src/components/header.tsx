/**
 * ------------------------------------------------------------------
 * Component: Header
 *
 * Purpose:
 * Site-wide primary navigation. Renders once from the root layout
 * (`src/app/layout.tsx`) so every page gets it — see ADR 003 for why
 * it moved here from being Home-specific.
 *
 * When to use:
 * Never imported directly by a page — it's wired into the root
 * layout. A page should not render its own header.
 *
 * Responsibilities:
 * - Logo / home link
 * - Desktop nav (`NAV_LINKS`, hidden below `lg`)
 * - Desktop "Log in" / "Join Community" actions (hidden below `lg`)
 * - Delegates the equivalent mobile UI to `MobileNav`
 *
 * Known Limitation:
 * "Log in" and "Join Community" render as real `Button`s but have no
 * `href`/`onClick` — there is no Auth page yet (CLAUDE.md priority
 * #7) for them to link to. They're present for visual/brand
 * completeness; wire them up once Auth exists.
 *
 * Dependencies:
 * - Button, Badge
 * - MobileNav
 * - NAV_LINKS
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import Link from "next/link";
import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NAV_LINKS } from "@/constants/nav-links";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-dark">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-base font-bold text-white">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            ProdAlgeria
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
              {link.badge ? (
                <Badge className="px-2 py-0.5 text-[11px]">{link.badge}</Badge>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline-inverse" size="sm">
            Log in
          </Button>
          <Button size="sm">
            <Users aria-hidden="true" />
            Join Community
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
