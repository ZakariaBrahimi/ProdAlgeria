/**
 * ------------------------------------------------------------------
 * Module: constants/nav-links
 *
 * Purpose:
 * The single source of truth for primary navigation, consumed by
 * Header, MobileNav, and Footer so all three always agree.
 *
 * Business Decision:
 * `Community` points at a real route (`/community`) because that
 * page exists. Every other item points at `/#section` — a Home
 * anchor that doesn't exist yet — rather than a route, because those
 * pages aren't built (see the page-priority order in CLAUDE.md). The
 * leading `/` (not a bare `#section`) matters: it makes the link
 * resolve correctly when clicked from a page other than Home (it
 * navigates home, then would scroll), instead of silently failing on
 * a hash that only makes sense on `/`. As each page ships, its entry
 * here should be updated to a real route.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { NavLink } from "@/types/nav";

export const NAV_LINKS: NavLink[] = [
  { label: "Community", href: "/community", badge: "New" },
  { label: "Learn", href: "/#learn" },
  { label: "Jobs", href: "/#jobs" },
  { label: "Events", href: "/#events" },
  { label: "Podcast", href: "/#podcast" },
  { label: "Resources", href: "/#resources" },
  { label: "About", href: "/#about" },
];
