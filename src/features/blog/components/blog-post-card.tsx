/**
 * ------------------------------------------------------------------
 * Component: BlogPostCard
 *
 * Purpose:
 * One post preview tile: a brand-gradient header with the category
 * badge overlaid, then title, excerpt, and an author/read-time
 * footer.
 *
 * When to use:
 * Rendered by `BlogPostGrid` for each (filtered) post. Purely
 * presentational — takes a `BlogPost` and an `index` and renders it,
 * no state or data fetching of its own.
 *
 * Props:
 * - `post`: the `BlogPost` to render.
 * - `index`: the post's position in the grid, used only to pick a
 *   deterministic gradient from `GRADIENT_VARIANTS` (the same
 *   "seeded, not random" idea as `GeneratedAvatar`'s palette pick) —
 *   not a data property of the post itself.
 *
 * Known Limitation:
 * The header is a brand-gradient panel, not a photo — see ADR 004 and
 * `FeaturedPost`'s equivalent note.
 *
 * Dependencies:
 * - GeneratedAvatar
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { GeneratedAvatar } from "@/components/generated-avatar";
import type { BlogPost } from "@/features/blog/types";

/** Rotates through the brand palette so adjacent grid tiles read as visually distinct. */
const GRADIENT_VARIANTS = [
  "from-primary to-secondary",
  "from-accent to-secondary",
  "from-secondary to-accent",
  "from-secondary to-primary",
  "from-dark to-primary",
  "from-accent to-primary",
];

export function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  const gradient = GRADIENT_VARIANTS[index % GRADIENT_VARIANTS.length];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-foreground/15 hover:shadow-lg hover:shadow-foreground/5">
      <div className={`relative h-32 bg-gradient-to-br ${gradient}`}>
        <span className="absolute bottom-3 left-3.5 rounded-full bg-dark/55 px-3 py-1 text-[11px] font-semibold text-white">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-base font-bold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-1.5">
          <GeneratedAvatar
            seed={post.author.member.avatarSeed}
            name={post.author.member.name}
            size={24}
            className="rounded-full"
          />
          <p className="flex-1 truncate text-xs text-muted-foreground">
            {post.author.member.name}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {post.readTimeMinutes} min
          </p>
        </div>
      </div>
    </article>
  );
}
