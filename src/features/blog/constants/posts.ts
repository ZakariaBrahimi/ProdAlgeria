/**
 * ------------------------------------------------------------------
 * Module: features/blog/constants/posts
 *
 * Purpose:
 * The blog's content — one featured post plus the grid posts below
 * it. Static example articles (ADR 005) standing in for real posts
 * until the backend and an authoring flow exist.
 *
 * Known Limitation:
 * `category` values here must exactly match an entry in
 * `constants/categories.ts` (`BLOG_CATEGORIES`) or a post silently
 * never appears under any filter tab except "All" — TypeScript
 * catches a typo'd category at compile time since both are typed
 * against the same `BlogCategory` union, but a *valid* category
 * that's simply missing from the tab list would not be caught. Keep
 * the two lists in sync (same caveat as Community's `discussions.ts`).
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { BlogPost } from "@/features/blog/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "discovery-with-four-engineers",
    category: "Product",
    title: "How we ran discovery with four engineers and no researcher",
    excerpt:
      "A working method for teams with no research budget: who to talk to, how many conversations are enough, and how to bring engineers into the interviews without slowing delivery.",
    author: {
      member: { name: "Yacine A.", avatarSeed: 3 },
      role: "Head of Product",
      publishedOn: "Aug 24, 2026",
    },
    readTimeMinutes: 12,
    featured: true,
  },
  {
    id: "sprint-reviews-nobody-dreads",
    category: "Agile & Scrum",
    title: "Sprint reviews nobody dreads",
    excerpt:
      "Cut the demo theatre. A 30-minute format that surfaces real decisions instead of status.",
    author: {
      member: { name: "Lina M.", avatarSeed: 22 },
      role: "Product Owner",
      publishedOn: "Aug 20, 2026",
    },
    readTimeMinutes: 6,
  },
  {
    id: "qa-to-product-twelve-months",
    category: "Career",
    title: "From QA to product in twelve months",
    excerpt:
      "The exact steps Amel took, what actually mattered to hiring managers, and what didn't.",
    author: {
      member: { name: "Amel L.", avatarSeed: 34 },
      role: "Product Manager",
      publishedOn: "Aug 18, 2026",
    },
    readTimeMinutes: 9,
  },
  {
    id: "first-month-engineering-manager",
    category: "Engineering",
    title: "Your first month as an engineering manager",
    excerpt:
      "What to change immediately, what to leave alone, and the questions to ask in week one.",
    author: {
      member: { name: "Karim M.", avatarSeed: 45 },
      role: "Engineering Manager",
      publishedOn: "Aug 15, 2026",
    },
    readTimeMinutes: 11,
  },
  {
    id: "roadmaps-survive-contact-with-sales",
    category: "Product",
    title: "Roadmaps that survive contact with sales",
    excerpt:
      "How to commit to outcomes without promising dates you can't hold.",
    author: {
      member: { name: "Sara B.", avatarSeed: 51 },
      role: "Senior Product Manager",
      publishedOn: "Aug 12, 2026",
    },
    readTimeMinutes: 8,
  },
  {
    id: "shipping-an-ai-feature-people-use",
    category: "AI & Data",
    title: "Shipping an AI feature people actually use",
    excerpt:
      "Scoping, evaluation and the honest conversation about what the model can't do.",
    author: {
      member: { name: "Riad B.", avatarSeed: 8 },
      role: "AI Product Lead",
      publishedOn: "Aug 8, 2026",
    },
    readTimeMinutes: 10,
  },
  {
    id: "stakeholder-meeting-second-language",
    category: "English for Tech",
    title: "Running a stakeholder meeting in your second language",
    excerpt:
      "Phrases that buy you thinking time, and how to disagree clearly without sounding blunt.",
    author: {
      member: { name: "Walid D.", avatarSeed: 63 },
      role: "Product Manager",
      publishedOn: "Aug 5, 2026",
    },
    readTimeMinutes: 7,
  },
];
