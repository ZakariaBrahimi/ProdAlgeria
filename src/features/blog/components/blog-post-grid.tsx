"use client";

/**
 * ------------------------------------------------------------------
 * Component: BlogPostGrid
 *
 * Purpose:
 * The Blog page's main content: a row of category filter tabs (plus a
 * decorative sort control) and the filtered post grid below them.
 *
 * When to use:
 * Rendered once by Blog's page (`src/app/blog/page.tsx`) with the
 * non-featured posts as a prop.
 *
 * Props:
 * - `posts`: the full, unfiltered list of grid posts (the featured
 *   post excluded — it renders separately via `FeaturedPost`).
 *   Filtering by category happens client-side against this array —
 *   see Architectural Decision below for why, and its limit.
 *
 * Side Effects:
 * None — filtering is a pure derivation of local state, no network
 * calls or subscriptions.
 *
 * Architectural Decision:
 * Filtering happens entirely in the browser (`Array.filter` over the
 * `posts` prop, re-run via `useMemo` when the category or the posts
 * themselves change), the same choice Community's `DiscussionFeed`
 * makes and for the same reason: `posts` is a small, fully loaded
 * static list (ADR 005), so there is nothing to gain from a
 * round-trip. Once posts are paginated from a real API, this needs to
 * change to a query param that triggers a new server fetch.
 *
 * Known Limitation:
 * The "Latest" sort control and the page-number row are decorative —
 * there is only one page of static example posts today, so there is
 * nothing real to sort or paginate yet (the same "present, not yet
 * wired up" treatment Header gives its "Log in" button).
 *
 * Dependencies:
 * - BlogPostCard, BLOG_CATEGORIES
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { useMemo, useState } from "react";
import { ChevronDown, Newspaper } from "lucide-react";

import { cn } from "@/lib/utils";
import { BlogPostCard } from "@/features/blog/components/blog-post-card";
import { BLOG_CATEGORIES } from "@/features/blog/constants/categories";
import type { BlogCategory, BlogPost } from "@/features/blog/types";

export function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter posts by category"
          className="flex flex-wrap gap-2"
        >
          {BLOG_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive
                    ? "bg-dark text-white"
                    : "border border-border bg-background text-foreground/75 hover:bg-muted"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground">
          Sort: Latest
          <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} index={posts.indexOf(post)} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
          <Newspaper className="size-8 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm font-medium text-foreground">
            No posts in {activeCategory} yet
          </p>
          <p className="max-w-xs text-sm text-muted-foreground">
            Be the first to pitch one for this topic.
          </p>
        </div>
      )}

      {filteredPosts.length > 0 ? (
        <nav
          aria-label="Blog pagination"
          className="mt-8 flex items-center justify-center gap-2"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            1
          </span>
          <span className="flex size-9 items-center justify-center rounded-full border border-border text-sm font-semibold text-foreground">
            2
          </span>
          <span className="flex size-9 items-center justify-center rounded-full border border-border text-sm font-semibold text-foreground">
            3
          </span>
          <span className="px-1 text-sm text-muted-foreground">…</span>
          <span className="flex h-9 items-center rounded-full border border-border px-4 text-sm font-semibold text-foreground">
            Next →
          </span>
        </nav>
      ) : null}
    </div>
  );
}
