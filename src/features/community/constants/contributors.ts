/**
 * ------------------------------------------------------------------
 * Module: features/community/constants/contributors
 *
 * Purpose:
 * Content for the "Top contributors this month" sidebar. Static
 * example data (ADR 005) — real contribution counts require posting
 * and reactions to exist first.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { Contributor } from "@/features/community/types";

export const TOP_CONTRIBUTORS: Contributor[] = [
  {
    member: { name: "Nadia F.", avatarSeed: 41 },
    role: "Scrum Master",
    contributionCount: 86,
    badge: "Top Contributor",
  },
  {
    member: { name: "Karim M.", avatarSeed: 13 },
    role: "Engineering Manager",
    contributionCount: 71,
    badge: "Mentor",
  },
  {
    member: { name: "Yasmine B.", avatarSeed: 47 },
    role: "Product Owner",
    contributionCount: 64,
    badge: "Top Contributor",
  },
  {
    member: { name: "Farid A.", avatarSeed: 9 },
    role: "UX Designer",
    contributionCount: 22,
    badge: "Rising Star",
  },
];
