# 005. Static example content on Home and Community until the backend exists

## Context

Home and Community both display content that will eventually be
backend-driven: community stats, upcoming events, testimonials, discussion
threads, top contributors. The Django + PostgreSQL backend (see CLAUDE.md's
tech stack) does not exist yet, and Auth (priority #7) comes well before any
of these pages would have a real API to call.

CLAUDE.md prohibits mock implementations unless explicitly requested, and
requires every API layer to handle loading, error, and empty states.

## Decision

Home and Community ship with realistic, hand-written example content as
plain TypeScript constants (`features/home/constants/*.ts`,
`features/community/constants/*.ts`), rendered directly by Server
Components. This is presented honestly as illustrative content — the same
treatment a real marketing/community page gives its "trusted by" logos or
sample testimonials — not as a simulated API response.

Concretely, this means:

- No `fetch`, no API client, no loading/error states are written for this
  data, because there is no request happening. Adding those would be
  simulating a backend that doesn't exist, which is what CLAUDE.md's "no
  mock implementations" rule is guarding against.
- The one genuinely interactive, backend-shaped feature so far — Community's
  category filter — filters the static in-memory list client-side, and
  *does* implement a real empty state (`DiscussionFeed`'s
  `data-discussion-empty` / "No discussions in {category} yet" branch),
  because that UI state is real and reachable today, unlike a network error
  that can't occur without a network call.
- The newsletter form (`NewsletterForm`) validates and shows success/error
  purely client-side, with no submission endpoint, for the same reason.

## Alternatives Considered

- **Build a fake API client now that returns hard-coded data, ready to swap
  for a real one later.** Rejected: this is exactly the "mock
  implementation" CLAUDE.md rules out. It would add an abstraction layer
  (loading states, error boundaries, a `services/` folder) with nothing real
  underneath it, for no present benefit — the swap to a real API client when
  the backend exists is a contained, well-scoped change either way.
- **Block Home/Community entirely until the backend exists.** Rejected: it
  contradicts the page-priority roadmap, which puts Home and Community
  before Auth and the backend.

## Consequences

- When the real API layer is built, each feature's `constants/*.ts` data
  gets replaced by a `services/` call and the Server Components that render
  it become `async` — the component tree and props shapes were designed to
  make that swap mechanical (e.g. `DiscussionFeed` already takes `posts: DiscussionPost[]` as a prop, it doesn't know or care where they came from).
- Until then, nothing on these pages should be mistaken for working
  backend-integrated functionality — the per-page trade-off is called out
  explicitly wherever it applies (see each feature's `README.md`).
