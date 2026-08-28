/**
 * ------------------------------------------------------------------
 * Module: features/community/types
 *
 * Purpose:
 * Content shapes for the Community page: discussion posts, their
 * categories, and top contributors. Display types for static example
 * content today (ADR 005) — see that feature's README for how these
 * are expected to map onto real API data later.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { CommunityMember } from "@/types/member";

/**
 * The fixed set of topics discussions can be filtered by, plus the
 * "All" pseudo-category. A union, not a free string, so the filter
 * UI (`DiscussionFeed`) and each post's `category` field can never
 * drift out of sync with each other — adding a category means
 * updating this type and `DISCUSSION_CATEGORIES` together.
 */
export type DiscussionCategory =
  | "All"
  | "Product Management"
  | "Agile & Scrum"
  | "Engineering"
  | "UX / UI Design"
  | "Career Growth";

/**
 * A single discussion thread. `category` intentionally excludes
 * "All" — that value only makes sense as a filter selection, a post
 * itself always belongs to one real category.
 */
export type DiscussionPost = {
  id: string;
  author: CommunityMember;
  role: string;
  timeAgo: string;
  category: Exclude<DiscussionCategory, "All">;
  title: string;
  body: string;
  likeCount: number;
  commentCount: number;
  /** Pinned posts get a "Pinned" indicator; at most a small number should be pinned at once. */
  pinned?: boolean;
};

/** An entry in the "Top contributors this month" sidebar. */
export type Contributor = {
  member: CommunityMember;
  role: string;
  contributionCount: number;
  badge: "Top Contributor" | "Rising Star" | "Mentor";
};
