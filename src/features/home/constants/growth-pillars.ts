/**
 * ------------------------------------------------------------------
 * Module: features/home/constants/growth-pillars
 *
 * Purpose:
 * Content for GrowthSection's four "built for your growth" cards.
 * Copy, not data — there's no backend concept of a "growth pillar,"
 * this is fixed marketing content and is expected to stay static.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { GrowthPillar } from "@/features/home/types";

export const GROWTH_PILLARS: GrowthPillar[] = [
  {
    title: "Ask & Share",
    description:
      "Ask questions, get answers, and share your knowledge with the community.",
    icon: "message-circle",
    accent: "primary",
  },
  {
    title: "Connect",
    description:
      "Build meaningful connections with peers, mentors, and experts.",
    icon: "users",
    accent: "secondary",
  },
  {
    title: "Learn Together",
    description:
      "Access resources, discussions, and practical insights every day.",
    icon: "book-open",
    accent: "accent",
  },
  {
    title: "Grow Your Career",
    description:
      "Discover opportunities, get feedback, and advance your career.",
    icon: "trending-up",
    accent: "primary",
  },
];
