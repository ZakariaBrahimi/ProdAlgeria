/**
 * ------------------------------------------------------------------
 * Module: features/home/constants/interest-tags
 *
 * Purpose:
 * Pills shown in the stats bar's "Explore by interest" row.
 *
 * Known Limitation:
 * Every tag links to `href: "#"` — there is no topic-filtered view
 * to link to yet. Once Community or Jobs support filtering by topic,
 * these should link there instead of being inert.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { InterestTag } from "@/features/home/types";

export const INTEREST_TAGS: InterestTag[] = [
  { label: "Product Management", href: "#" },
  { label: "Agile & Scrum", href: "#" },
  { label: "Engineering", href: "#" },
  { label: "UX / UI Design", href: "#" },
  { label: "QA & Testing", href: "#" },
  { label: "AI & Data", href: "#" },
  { label: "Career Growth", href: "#" },
  { label: "English for Tech", href: "#" },
];
