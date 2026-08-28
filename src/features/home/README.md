# Home

## Purpose

The `/` route — ProdAlgeria's marketing landing page. Introduces the
community, shows social proof (stats, testimonials, trusted-by logos),
upcoming events, and drives sign-ups via the hero CTAs and the newsletter
form.

## Folder Structure

```
features/home/
  components/
    hero.tsx                   Hero section: headline, CTAs, activity cards
    hero-illustration.tsx       Inline SVG skyline illustration for the hero
    activity-card.tsx           Floating "recent activity" card used in the hero
    stats-bar.tsx                Member/discussion/event counts + interest tags
    growth-section.tsx           "A community built for your growth" pillars
    events-section.tsx           Upcoming events grid
    testimonials-section.tsx     Wraps the testimonial carousel
    testimonials-carousel.tsx    Client component: scrollable, motion-animated
    trusted-by-section.tsx       "Trusted by" company logos strip
  constants/                    Static example content (see ADR 005)
  types/                        Types local to Home's own content shapes
```

Shared, cross-page pieces this feature uses but does not own — `Header`,
`Footer`, `NewsletterSection`, `AvatarStack`, `GeneratedAvatar`, and the UI
primitives (`Button`, `Badge`, ...) — live in `src/components/` (see ADR 003)
and `src/components/ui/`.

## Main Components

- **`Hero`** — the only component with meaningful visual complexity; see its
  own file header for the section breakdown.
- **`TestimonialsCarousel`** — the one Client Component in this feature that
  does real interactive work (horizontal scroll-snap carousel with
  `whileInView` scroll-reveal via Motion).

## API Dependencies

None yet. All content is static example data — see
[`docs/adr/005-static-content-before-backend.md`](../../../docs/adr/005-static-content-before-backend.md).

## State Management

None. Every component here is a Server Component except
`TestimonialsCarousel`, whose only state is which testimonial card is
scrolled into view (owned locally via a DOM ref, not a state library).

## Future Improvements

- Replace `constants/events.ts` and `constants/testimonials.ts` with real
  data once the backend exists (Events and a testimonials/reviews source).
- `constants/interest-tags.ts` currently renders as static pills; once Jobs
  and Community both support topic filtering, consider whether these should
  link to a shared filtered view instead of `href="#"`.
