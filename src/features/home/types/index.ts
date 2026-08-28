/**
 * ------------------------------------------------------------------
 * Module: features/home/types
 *
 * Purpose:
 * Content shapes for Home's own sections. These are display types
 * for static example content today (ADR 005), not API/DTO types —
 * when a real backend exists, expect a parallel DTO type per shape
 * with its own mapping into these, rather than reusing these
 * directly as the API contract.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { CommunityMember } from "@/types/member";

/** A single "recent activity" post shown in the hero's floating cards. */
export type ActivityPost = {
  author: CommunityMember;
  role: string;
  timeAgo: string;
  body: string;
  likeCount?: number;
  commentCount?: number;
  tag?: string;
};

/** One pill in the stats bar's "Explore by interest" list. */
export type InterestTag = {
  label: string;
  href: string;
};

/** One of the four cards in the "built for your growth" section. */
export type GrowthPillar = {
  title: string;
  description: string;
  icon: "message-circle" | "users" | "book-open" | "trending-up";
  accent: "primary" | "secondary" | "accent";
};

/** One card in the "Upcoming Events" grid. */
export type CommunityEvent = {
  date: string;
  title: string;
  description: string;
  icon: "calendar-check" | "mic" | "users";
  accent: "primary" | "secondary" | "accent";
  attendees: CommunityMember[];
  /** Count shown as "+N" beyond the visible attendee avatars. */
  attendeeOverflow: number;
};

/** One card in the testimonials carousel. */
export type Testimonial = {
  quote: string;
  member: CommunityMember;
  role: string;
  /** 0-5, half-steps allowed (e.g. 4.5) — rendered as full/half stars. */
  rating: number;
  accent: "primary" | "secondary" | "accent";
};

/** One wordmark in the "Trusted by" logo strip. */
export type TrustedCompany = {
  name: string;
  /** Typographic treatment matching the source design's varied logo styles. */
  style?: "italic" | "light";
};
