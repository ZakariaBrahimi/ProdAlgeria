/**
 * ------------------------------------------------------------------
 * Module: features/blog/constants/topics
 *
 * Purpose:
 * The sidebar's "Topics" list — one row per real category (mirrors
 * `BLOG_CATEGORIES` minus "All") with a post count.
 *
 * Known Limitation:
 * `postCount` is illustrative example data (ADR 005), not
 * `BLOG_POSTS.filter(...).length` — the counts here represent a
 * fuller catalog than the handful of example posts in
 * `constants/posts.ts`, the same "aspirational number, honestly not
 * derived" treatment `CommunityIntro` gives its member count. Once
 * real posts exist, replace this with a computed count from the API
 * response instead of hand-maintaining it here.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { Topic } from "@/features/blog/types";

export const BLOG_TOPICS: Topic[] = [
  { category: "Product", postCount: 28 },
  { category: "Agile & Scrum", postCount: 19 },
  { category: "Engineering", postCount: 16 },
  { category: "Career", postCount: 14 },
  { category: "AI & Data", postCount: 9 },
  { category: "English for Tech", postCount: 7 },
];
