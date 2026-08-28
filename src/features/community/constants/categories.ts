/**
 * ------------------------------------------------------------------
 * Module: features/community/constants/categories
 *
 * Purpose:
 * Ordered list of categories rendered as filter tabs in
 * `DiscussionFeed`. "All" always renders first and shows every post.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { DiscussionCategory } from "@/features/community/types";

export const DISCUSSION_CATEGORIES: DiscussionCategory[] = [
  "All",
  "Product Management",
  "Agile & Scrum",
  "Engineering",
  "UX / UI Design",
  "Career Growth",
];
