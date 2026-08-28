# 001. Feature-based architecture

## Context

ProdAlgeria will grow into a multi-page product (Home, Community, Jobs, Events,
Podcast, Learning, Auth, Profile, Dashboard, ...) built by a single developer
today and a team within 2-3 years. The codebase needs a structure that stays
navigable as pages are added one at a time, without requiring a restructure
each time.

## Decision

Organize `src/` by feature, not by technical layer:

```
src/
  app/          Next.js App Router routes
  components/   Shared, cross-page primitives (Button, Header, Footer, ...)
  features/     One folder per product feature (home, community, jobs, ...)
  hooks/        Shared hooks
  lib/          Framework-agnostic utilities (cn(), etc.)
  types/        Shared cross-cutting types
  constants/    Shared cross-cutting constants
```

Each feature folder owns its own `components/`, `constants/`, `types/`, and
(as they're needed) `hooks/`, `api/`, `validation/`. A component, constant, or
type that is only used by one feature lives inside that feature's folder. It
is promoted to the shared top-level folder only once a second feature needs
it (see ADR 003 for the first case this happened).

## Alternatives Considered

- **Layer-based (`components/`, `hooks/`, `pages/` at the top level, all
  features intermixed).** Rejected: as pages are added one at a time per the
  product roadmap, a shared `components/` folder becomes a dumping ground and
  it stops being obvious which components belong to which feature.
- **Monorepo with a package per feature.** Rejected as premature: the
  operational overhead (separate `package.json`s, workspace tooling) isn't
  justified for a single Next.js app with one developer.

## Consequences

- Adding a new page (e.g. Jobs) means adding a new `features/jobs/` folder,
  not touching existing feature folders.
- A component used by exactly one feature stays there; nothing is promoted to
  `src/components/` speculatively "in case something else needs it later."
- Reviewers can tell from the import path alone whether a piece of code is
  feature-local or intentionally shared.
