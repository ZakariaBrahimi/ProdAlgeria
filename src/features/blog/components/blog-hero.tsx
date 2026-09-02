/**
 * ------------------------------------------------------------------
 * Component: BlogHero
 *
 * Purpose:
 * The Blog page's dark header: eyebrow badge, title, description, and
 * a search field, rendered inside the same dark-hero wrapper pattern
 * Home uses for its own hero (radial glow background owned by the
 * page, not this component — see `src/app/blog/page.tsx`).
 *
 * When to use:
 * Blog's page only, as the first section.
 *
 * Known Limitation:
 * The search input has no `onChange`/submit handler — there is no
 * search implementation yet (client-side substring filtering vs. a
 * backend-indexed search is a real decision to make once the post
 * catalog is larger than the handful of examples in
 * `constants/posts.ts`), the same "present, not yet wired up"
 * treatment Header gives its "Log in" button.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { Search } from "lucide-react";

export function BlogHero() {
  return (
    <section className="px-4 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-end justify-between gap-8 sm:flex-row">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="flex w-fit items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-dark-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Written by the community
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-h2">
            The <span className="text-primary">Blog</span>
          </h1>
          <p className="text-balance text-sm leading-relaxed text-dark-muted-foreground sm:text-base">
            Field notes on product, agile and engineering leadership —
            written by people doing the work in Algeria. No listicles, no
            theory without a case behind it.
          </p>
        </div>

        <div className="flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
          <Search
            className="size-4 shrink-0 text-dark-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="text"
            placeholder="Search articles"
            className="w-full bg-transparent text-sm text-white placeholder:text-dark-muted-foreground/70 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
}
