import type { CommunityMember } from "@/types/member";

export type DiscussionCategory =
  | "All"
  | "Product Management"
  | "Agile & Scrum"
  | "Engineering"
  | "UX / UI Design"
  | "Career Growth";

export type DiscussionPost = {
  id: string;
  author: CommunityMember;
  role: string;
  timeAgo: string;
  category: Exclude<DiscussionCategory, "All">;
  title: string;
  body: string;
  likeCount: number;
  commentCount: number;
  pinned?: boolean;
};

export type Contributor = {
  member: CommunityMember;
  role: string;
  contributionCount: number;
  badge: "Top Contributor" | "Rising Star" | "Mentor";
};
