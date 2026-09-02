/**
 * ------------------------------------------------------------------
 * Module: features/blog/types
 *
 * Purpose:
 * Content shapes for the Blog page: posts, their categories, most-read
 * articles, and topic counts. Display types for static example content
 * today (ADR 005) — see that feature's README for how these are
 * expected to map onto real API data later.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { CommunityMember } from "@/types/member";

/**
 * The fixed set of topics posts can be filtered by, plus the "All"
 * pseudo-category. A union, not a free string, so the filter UI
 * (`BlogPostGrid`) and each post's `category` field can never drift
 * out of sync with each other — adding a category means updating this
 * type and `BLOG_CATEGORIES` together (same discipline as Community's
 * `DiscussionCategory`).
 */
export type BlogCategory =
  | "All"
  | "Product"
  | "Agile & Scrum"
  | "Engineering"
  | "Career"
  | "AI & Data"
  | "English for Tech";

/** The post's author, alongside their role and byline date. */
export type BlogPostAuthor = {
  member: CommunityMember;
  role: string;
  /** Pre-formatted for display (e.g. "Aug 24, 2026") — not a Date, since nothing here computes relative time. */
  publishedOn: string;
};

/**
 * A single blog post. `category` intentionally excludes "All" — that
 * value only makes sense as a filter selection, a post itself always
 * belongs to one real category.
 */
export type BlogPost = {
  id: string;
  category: Exclude<BlogCategory, "All">;
  title: string;
  excerpt: string;
  author: BlogPostAuthor;
  readTimeMinutes: number;
  /**
   * At most one post should be featured at a time — it renders in the
   * large cover slot above the grid instead of as a grid tile.
   */
  featured?: boolean;
};

/** An entry in the "Most read this month" sidebar list. */
export type MostReadArticle = {
  title: string;
  category: Exclude<BlogCategory, "All">;
  readTimeMinutes: number;
};

/** A topic's post count, shown in the sidebar's "Topics" list. */
export type Topic = {
  category: Exclude<BlogCategory, "All">;
  postCount: number;
};
