import type { CommunityMember } from "@/types/member";

export type ActivityPost = {
  author: CommunityMember;
  role: string;
  timeAgo: string;
  body: string;
  likeCount?: number;
  commentCount?: number;
  tag?: string;
};

export type InterestTag = {
  label: string;
  href: string;
};

export type GrowthPillar = {
  title: string;
  description: string;
  icon: "message-circle" | "users" | "book-open" | "trending-up";
  accent: "primary" | "secondary" | "accent";
};

export type CommunityEvent = {
  date: string;
  title: string;
  description: string;
  icon: "calendar-check" | "mic" | "users";
  accent: "primary" | "secondary" | "accent";
  attendees: CommunityMember[];
  attendeeOverflow: number;
};

export type Testimonial = {
  quote: string;
  member: CommunityMember;
  role: string;
  rating: number;
  accent: "primary" | "secondary" | "accent";
};

export type TrustedCompany = {
  name: string;
  style?: "italic" | "light";
};
