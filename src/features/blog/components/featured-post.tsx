/**
 * ------------------------------------------------------------------
 * Component: FeaturedPost
 *
 * Purpose:
 * The large cover card above the post grid — the blog's single
 * `featured` post gets full-width prominence instead of a grid tile.
 *
 * When to use:
 * Blog's page only, rendered once with `BLOG_POSTS.find(p =>
 * p.featured)`.
 *
 * Props:
 * - `post`: the featured `BlogPost`.
 *
 * Known Limitation:
 * The cover is a brand-gradient panel, not a photo — see ADR 004
 * (`GeneratedAvatar`'s rationale applies equally here: no external
 * image host to depend on until there's a real cover-image upload
 * flow). "Read article" links to `#`; there is no individual-post
 * route yet.
 *
 * Dependencies:
 * - GeneratedAvatar, Badge, Button
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { Newspaper } from "lucide-react";

import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/features/blog/types";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/5 lg:grid-cols-[2fr_3fr]">
      <div className="relative flex min-h-56 items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
        <Newspaper
          className="size-16 text-white/25"
          aria-hidden="true"
          strokeWidth={1.25}
        />
        <span className="absolute left-4 top-4 rounded-full bg-dark px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-white">
          FEATURED
        </span>
      </div>

      <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">
            {post.readTimeMinutes} min read
          </span>
        </div>

        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GeneratedAvatar
              seed={post.author.member.avatarSeed}
              name={post.author.member.name}
              size={38}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {post.author.member.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.author.role} · {post.author.publishedOn}
              </p>
            </div>
          </div>
          <Button asChild>
            <a href="#">Read article</a>
          </Button>
        </div>
      </div>
    </article>
  );
}
