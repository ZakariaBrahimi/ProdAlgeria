/**
 * ------------------------------------------------------------------
 * Module: features/blog/constants/categories
 *
 * Purpose:
 * Ordered list of categories rendered as filter tabs in
 * `BlogPostGrid`. "All" always renders first and shows every post.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { BlogCategory } from "@/features/blog/types";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All",
  "Product",
  "Agile & Scrum",
  "Engineering",
  "Career",
  "AI & Data",
  "English for Tech",
];
