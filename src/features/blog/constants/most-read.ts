/**
 * ------------------------------------------------------------------
 * Module: features/blog/constants/most-read
 *
 * Purpose:
 * The sidebar's "Most read this month" list. Illustrative example
 * content (ADR 005) — a real "most read" ranking needs page-view
 * analytics this project doesn't have yet, so these three are
 * hand-picked rather than computed, the same treatment
 * `CommunityIntro` gives its hard-coded "1,248+ members" line.
 *
 * Known Limitation:
 * None of these three titles need to exist in `constants/posts.ts` —
 * this list is independent of `BLOG_POSTS` on purpose, since a real
 * "most read" ranking will eventually span posts far outside whatever
 * small set is featured on the page at a given time.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { MostReadArticle } from "@/features/blog/types";

export const MOST_READ_ARTICLES: MostReadArticle[] = [
  {
    title: "Writing a PRD your engineers will read",
    category: "Product",
    readTimeMinutes: 7,
  },
  {
    title: "Estimating without lying to yourself",
    category: "Agile & Scrum",
    readTimeMinutes: 5,
  },
  {
    title: "Negotiating your first PM salary in Algiers",
    category: "Career",
    readTimeMinutes: 9,
  },
];
