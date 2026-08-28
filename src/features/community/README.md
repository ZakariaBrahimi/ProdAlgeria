# Community

## Purpose

The `/community` route — a browsable feed of discussion threads from
ProdAlgeria members, filterable by topic, alongside a top-contributors
sidebar. This is priority #2 on the page roadmap in `CLAUDE.md`.

**Scope note:** this is a *browsable* page, not a working forum. There is no
posting, replying, or authentication yet — those depend on the Auth page
(priority #7) and the Django backend, both of which come later. See
[`docs/adr/005-static-content-before-backend.md`](../../../docs/adr/005-static-content-before-backend.md).

## Folder Structure

```
features/community/
  components/
    community-intro.tsx    Page heading, description, and live discussion/member counts
    discussion-feed.tsx     Client component: category filter + filtered post list
    discussion-card.tsx     A single discussion post (presentational)
    contributors-list.tsx   "Top contributors this month" sidebar
  constants/                Static example content (see ADR 005)
  types/                     DiscussionPost, DiscussionCategory, Contributor
```

## Main Components

- **`DiscussionFeed`** — the only Client Component here. Owns the active
  category filter as local state and filters the in-memory `DISCUSSIONS`
  list; renders a real empty state when a category has no matching posts.
  This is genuine client-side interactivity today, not a placeholder for a
  future API call — see its file header.
- **`DiscussionCard`** — pure presentational component, one per post.

## API Dependencies

None yet. `DISCUSSIONS` and `TOP_CONTRIBUTORS` are static example data.
When the backend exists, `DiscussionFeed` should receive its `posts` prop
from a Server Component that awaits a real fetch, rather than the static
constant — its own filtering logic does not need to change.

## State Management

Local component state only (`useState` in `DiscussionFeed` for the active
category). No global state library is needed for this feature yet.

## Future Improvements

- `DiscussionCard`'s like/comment counts are static numbers; once posting
  and reactions are real, these become live counts requiring optimistic UI
  updates.
- The category filter currently re-filters an in-memory array of 8 posts.
  Once the discussion list is paginated from a real API, filtering moves
  server-side (a query param, not client-side `Array.filter`).
- `ContributorsList` will need a real "this month" windowed query once
  contribution data is tracked.
