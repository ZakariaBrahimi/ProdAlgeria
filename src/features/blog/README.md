# Blog

## Purpose

The `/blog` route — field notes on product, agile and engineering
leadership written by the community. One featured post above a
filterable grid of the rest, with a sidebar for "most read", topic
counts, and a pitch-an-article CTA.

## Folder Structure

```
features/blog/
  components/
    blog-hero.tsx        Dark header: eyebrow badge, title, search field
    featured-post.tsx     Large cover card for the one `featured` post
    blog-post-grid.tsx    Client component: category tabs + filtered post grid
    blog-post-card.tsx    One grid tile: gradient header, title, excerpt, author
    blog-sidebar.tsx      Most read / Topics / Write-for-the-blog CTA
  constants/               Static example content (see ADR 005)
  types/                   Types local to Blog's own content shapes
```

Shared, cross-page pieces this feature uses but does not own —
`Header`, `Footer`, `NewsletterSection`, and the UI primitives
(`Button`, `Badge`, ...) — live in `src/components/` (see ADR 003) and
`src/components/ui/`.

## Main Components

- **`BlogPostGrid`** — the one Client Component here, for the same
  reason as Community's `DiscussionFeed`: category filtering needs
  local state. It filters client-side against the full `posts` prop
  it's given.
- **`FeaturedPost`** / **`BlogPostCard`** — purely presentational,
  take a `BlogPost` and render it. Both use a brand-gradient panel
  instead of a cover photo — see ADR 004; the same "no external image
  host to depend on yet" reasoning that produced `GeneratedAvatar`
  applies here too, until there's a real cover-image upload flow.

## API Dependencies

None yet. All content is static example data — see
[`docs/adr/005-static-content-before-backend.md`](../../../docs/adr/005-static-content-before-backend.md).

## State Management

None beyond `BlogPostGrid`'s local `activeCategory` state (which
category tab is selected) — the same scope Community's
`DiscussionFeed` keeps.

## Future Improvements

- Replace `constants/posts.ts`, `constants/most-read.ts`, and
  `constants/topics.ts` with real data once the backend and an
  authoring flow exist; `Topic.postCount` should become a computed
  count from the API response rather than hand-maintained.
- Wire up the hero's search input, the grid's "Sort: Latest" control,
  and its pagination row — all three are currently decorative (see
  each component's own "Known Limitation" note). None of them do
  anything meaningful yet against a handful of static example posts.
- Give each post a real detail route once one exists — grid tiles
  don't link anywhere yet, and the featured post's "Read article"
  button points at `#`.
