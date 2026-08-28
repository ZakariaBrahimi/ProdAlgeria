# 003. Header, Footer, and nav promoted to the root layout

## Context

Home shipped first with its own `Header`, `Footer`, `MobileNav`, and
`NAV_LINKS` living inside `features/home/`. When Community became the second
real page, it needed the identical header and footer. Per ADR 001, a
component only moves out of a feature folder once a second feature needs it
— this was that moment.

## Decision

- `Header`, `Footer`, `MobileNav`, `NewsletterSection`, and `NewsletterForm`
  moved from `features/home/components/` to `src/components/`.
- `NAV_LINKS` moved from `features/home/constants/` to `src/constants/`; the
  `NavLink` and `CommunityMember` types moved from `features/home/types/` to
  `src/types/`, since both are now used across features, not just Home.
- `Header` and `Footer` render once from `src/app/layout.tsx` (the root
  layout), wrapping `{children}`, instead of each page importing and
  rendering them itself.
- `Header` was changed from relying on transparency over Home's hero
  gradient to an explicit `bg-dark` background of its own (and made
  `sticky`), since it can no longer assume what page content sits behind it.
- Nav hrefs were updated to match reality: `Community` became a real
  `/community` route; the remaining items (`Learn`, `Jobs`, `Events`,
  `Podcast`, `Resources`, `About`) point at `/#section` (home-then-scroll)
  instead of bare `#section`, so they still resolve correctly when clicked
  from a page other than Home.

## Alternatives Considered

- **Duplicate Header/Footer into `features/community/components/`.**
  Rejected outright: violates the "no duplicated code" rule in CLAUDE.md, and
  every future page (Jobs, Events, Auth, ...) would repeat the duplication.
- **Keep Header/Footer per-page but extract to a shared component imported by
  each page.** Rejected in favor of the root layout: Next.js's App Router
  layout system exists precisely to render persistent UI once; importing a
  shared component into every page's own JSX is strictly more boilerplate
  for the same result, and risks the two call sites drifting (e.g. one page
  forgetting the skip link).

## Consequences

- Every future page under `src/app/` gets the header, footer, and skip link
  for free — a new page's own file only needs its own content.
- A page-specific "hero wraps the header" visual (as Home originally had)
  is no longer possible without extra work, since the header now renders
  outside any single page's markup. Home's dark hero background sits directly
  below the header instead of behind it; visually indistinguishable since
  both use the same `bg-dark` token.
- Any future page-specific header behavior (e.g. a different header style on
  an auth page) needs a mechanism above per-page JSX — likely route groups
  with their own layout, not a per-page prop.
