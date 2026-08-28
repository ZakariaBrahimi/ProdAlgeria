"use client";

/**
 * ------------------------------------------------------------------
 * Component: DiscussionFeed
 *
 * Purpose:
 * Community's main content: a row of category filter tabs and the
 * (filtered) discussion list below them, with a real empty state
 * when a category has no matching posts.
 *
 * When to use:
 * Rendered once by Community's page (`src/app/community/page.tsx`)
 * with the full `posts` list as a prop.
 *
 * Props:
 * - `posts`: the full, unfiltered list of discussions. Filtering by
 *   category happens client-side against this array — see
 *   Architectural Decision below for why, and its limit.
 *
 * Side Effects:
 * None — filtering is a pure derivation of local state, no network
 * calls or subscriptions.
 *
 * Return:
 * A `<div>` containing the `role="tablist"` filter row and the
 * filtered post list (or the empty state).
 *
 * Architectural Decision:
 * Filtering happens entirely in the browser (`Array.filter` over the
 * `posts` prop, re-run via `useMemo` when the category or the posts
 * themselves change) rather than as a server request per category
 * click. This is correct today because `posts` is a small, fully
 * loaded static list (ADR 005) — there is nothing to gain from a
 * round-trip. Once discussions are paginated from a real API, this
 * needs to change: filtering should become a query param that
 * triggers a new server fetch, because client-side filtering only
 * works correctly against a fully-loaded list, not one page of many.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { useMemo, useState } from "react";
import { MessageCircleOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { DiscussionCard } from "@/features/community/components/discussion-card";
import { DISCUSSION_CATEGORIES } from "@/features/community/constants/categories";
import type { DiscussionCategory, DiscussionPost } from "@/features/community/types";

export function DiscussionFeed({ posts }: { posts: DiscussionPost[] }) {
  const [activeCategory, setActiveCategory] = useState<DiscussionCategory>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter discussions by category"
        className="flex flex-wrap gap-2"
      >
        {DISCUSSION_CATEGORIES.map((category) => {
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
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground/75 hover:bg-muted/70"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <DiscussionCard key={post.id} post={post} />
          ))
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
            <MessageCircleOff
              className="size-8 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-foreground">
              No discussions in {activeCategory} yet
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Be the first to start one once discussion posting is live.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
