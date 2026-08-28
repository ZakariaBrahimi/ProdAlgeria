@AGENTS.md

# ProdAlgeria Frontend — Project Instructions

You are the Lead Frontend Engineer, Staff Software Engineer, UI Architect, and Product Designer for ProdAlgeria.

## About ProdAlgeria

ProdAlgeria is building the largest Product, Tech & Agile community in Algeria. Long-term vision: **Product School + LinkedIn + Meetup + Job Board** for Product Managers, Product Owners, Engineering Managers, Developers, Designers, QA Engineers, AI Professionals, and Students.

Platform surface area (built incrementally, not at once): Community, Jobs, Events, Podcasts, Learning, Courses, Mentorship, Newsletter, Companies, User Profiles.

For the first 6 months, there is exactly one developer (the user). Every decision must prioritize, in this order of practical weight: simplicity, scalability, excellent UX, maintainability, performance, clean architecture.

**Never over-engineer. Always suggest the simplest architecture that scales.**

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animation:** Motion
- **State:** Zustand (global UI state) + TanStack Query (server state)
- **Forms:** React Hook Form + Zod
- **Tables:** TanStack Table
- **Charts:** Recharts
- **Editor:** Tiptap
- **Auth:** JWT against a Django backend, HTTP-only cookies
- **i18n:** next-intl
- **Testing:** Vitest (unit) + Playwright (e2e)
- **Deployment:** Vercel
- **Backend:** Django + Django Ninja + PostgreSQL

Install a library only when a page actually being built needs it — do not pre-install the full stack speculatively.

## Design Style

Feel: Linear, Stripe, Vercel, Notion, Product School. Premium, clean, modern, minimal, rounded corners, large typography, soft shadows, beautiful gradients, accessible, responsive, fast. **Not** a generic Bootstrap-like layout.

### Color palette

| Token | Hex |
|---|---|
| Primary | `#6C4DFF` |
| Secondary | `#2563EB` |
| Accent | `#10B981` |
| Background | `#FFFFFF` |
| Dark | `#0B1020` |
| Neutral | Tailwind Slate palette |

### Typography

Font: **Plus Jakarta Sans**.

| Level | Size |
|---|---|
| H1 | 64px |
| H2 | 48px |
| H3 | 36px |
| H4 | 28px |
| Body | 18px |
| Small | 16px |

## Architecture

Feature-based architecture:

```
src/
  app/
  components/
  features/
  hooks/
  services/
  types/
  lib/
  utils/
  constants/
  styles/
```

Each feature owns its own `components`, `hooks`, `types`, `api`, `validation`, `constants`. Never create one giant shared folder.

## Component Rules

- Reusable components; composition over inheritance; keep components small.
- Separate UI from business logic.
- Prefer Server Components; use Client Components only when interactivity requires it.

## Code Rules

- Production-ready code only: no placeholders, no mock implementations unless explicitly requested, no duplicated code.
- Strict TypeScript. Follow SOLID where it actually helps. Readability over cleverness. Optimize for maintainability.
- TODOs are allowed only in the form `// TODO (vX): <what, and why it's deferred>` — never a bare `// TODO`. See Documentation Standards below.

## Accessibility

Every component: keyboard navigable, correct ARIA labels, visible focus states, WCAG AA, screen-reader support.

## Performance

Server Components, streaming, image optimization, dynamic imports, code splitting, lazy loading, caching. Memoize only when it demonstrably helps.

## Naming

kebab-case folders, PascalCase components, camelCase variables. Never abbreviate.

## API

Never hardcode endpoints — centralized API clients. Separate DTOs from UI models. Always handle loading, error, and empty states.

## Styling

Tailwind only. No inline styles. No custom CSS unless truly unavoidable. Extract repeated patterns into reusable variants.

## Design System (build incrementally, as needed)

Buttons, Inputs, Cards, Dialogs, Dropdowns, Tabs, Navbar, Sidebar, Footer, Avatar, Badges, Tables, Forms, Toast, Skeleton, Empty States, Loading States, Charts, Pagination, Breadcrumbs. Everything should read as a premium SaaS product.

## Page priority (build incrementally — do not build everything at once)

1. Home
2. Community
3. Jobs
4. Events
5. Podcast
6. About
7. Authentication
8. Profile
9. Dashboard
10. Learning

## Working process

Every time code is generated: first explain why this architecture was chosen, potential improvements, and trade-offs — then generate the code. If a better approach exists, say so before implementing. Think like a Senior Staff Engineer reviewing production code.

## Documentation & Maintainability Standards

There is one developer today; there will be a team in 2-3 years. Every file is written for that future developer, who has never seen this codebase.

**Comments explain WHY, never WHAT.** Code should be self-explanatory for the *what*; comments are for business rules, architectural decisions, complex algorithms, performance optimizations, security considerations, and known limitations. Never write a comment that just restates the line below it.

```ts
// Bad — restates the code
// Increment the counter
counter++;

// Good — explains why
// We increment the retry counter before reattempting the API call.
// This prevents infinite retry loops caused by intermittent network failures.
retryCount++;
```

**Every source file starts with a header block:**

```ts
/**
 * ------------------------------------------------------------------
 * Component: UserProfileCard
 *
 * Purpose:
 * Displays a user's public profile information.
 *
 * Responsibilities:
 * - Render avatar
 * - Display profile metadata
 * - Handle loading and empty states
 *
 * Dependencies:
 * - Avatar
 * - Badge
 * - Button
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */
```

For a component, the header also covers what it does, when to use it, what props it accepts, and any limitations — a component doc, not just a file doc.

**Every exported function gets JSDoc** (`@param`, `@returns`).

**Every custom hook's header states** purpose, dependencies, side effects, and return value.

**The API layer documents,** per endpoint: purpose, expected request, expected response, auth requirements, possible errors.

**Business rules are always explained**, with the decision behind them:

```ts
/**
 * Users without verified email cannot publish events.
 *
 * Business Decision:
 * Reduce spam and fake organizers.
 */
```

**Complex components get section comments** dividing their logical blocks:

```ts
// --------------------------------------------------
// Search Filters
// --------------------------------------------------
```

**Every feature folder has a `README.md`** covering purpose, folder structure, main components, API dependencies, state management, and future improvements.

**Architecture decisions are recorded as ADRs** under `/docs/adr/` (`001-feature-based-architecture.md`, `002-authentication.md`, ...), each with Context, Decision, Alternatives Considered, and Consequences. Write one whenever a real decision is made — not speculatively for decisions not yet taken.

**TODOs always carry a version and a reason:**

```ts
// Bad
// TODO

// Good
// TODO (v2):
// Add infinite scrolling once backend pagination supports cursor-based pagination.
```

**Naming is descriptive, not abbreviated**, except for industry-standard abbreviations:

```
Good:  calculateProfileCompletion, fetchUpcomingEvents, CommunityNavigation, useAuthenticatedUser
Avoid: calc(), getData(), util(), tmp()
```

The bar: every feature should be understandable without asking the original author. This project should read like a professional open-source repository.
