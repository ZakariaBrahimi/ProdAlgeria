# 004. Generated inline-SVG avatars instead of photo placeholders

## Context

Home and Community both need avatar imagery for example community members
(hero activity cards, testimonials, discussion authors, top contributors).
There is no user-photo-upload feature yet (that belongs to the Profile page,
priority #8), so there are no real photos to show.

The common placeholder pattern is a photo service like `i.pravatar.cc` or
`picsum.photos`. That was the approach used in this project's very first
prototype (a static Vite build, since replaced — see the Next.js migration
commit).

## Decision

Avatars and the hero illustration are generated inline SVG
(`src/components/generated-avatar.tsx`): a gradient circle in the brand
palette plus a simple silhouette, seeded deterministically per member so the
same person always gets the same colors. The Home hero's background is a
hand-drawn SVG skyline illustration
(`features/home/components/hero-illustration.tsx`) rather than a stock photo.

## Alternatives Considered

- **External placeholder photo services** (`pravatar.cc`, `picsum.photos`).
  Rejected for the current build: it adds an external network dependency for
  content that is going to be replaced by real user photos anyway once
  Profile ships, and (specific to the sandboxed build environment used for
  this project so far) those hosts are blocked by the sandbox's outbound
  network policy, making local development and screenshot verification
  unreliable. A generated placeholder needed no network access at all.
- **Generic "person" icon (Lucide `User` or similar) for every avatar.**
  Rejected: reads as more generic than a colored, per-person silhouette, and
  the design-taste guidance this project follows explicitly discourages
  generic user icons as a placeholder pattern.

## Consequences

- Zero external image requests anywhere in Home or Community today — no
  `next.config.ts` `images.remotePatterns` needed yet.
- Every `CommunityMember` (`{ name, avatarSeed }`) renders consistently
  wherever it's used, without fetching anything.
- When the Profile feature ships with real uploaded photos, `GeneratedAvatar`
  becomes the *empty-state* fallback (a member with no uploaded photo) rather
  than being removed — the same component, a narrower job.
