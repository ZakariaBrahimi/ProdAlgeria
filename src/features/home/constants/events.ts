import type { CommunityEvent } from "@/features/home/types";

export const UPCOMING_EVENTS: CommunityEvent[] = [
  {
    date: "Sat, May 31 · 11:00 AM",
    title: "Product Discovery Workshop",
    description:
      "Hands-on session to master discovery techniques for better products.",
    icon: "calendar-check",
    accent: "accent",
    attendees: [
      { name: "Amel", avatarSeed: 5 },
      { name: "Reda", avatarSeed: 22 },
      { name: "Nadia", avatarSeed: 41 },
    ],
    attendeeOverflow: 32,
  },
  {
    date: "Wed, Jun 5 · 7:00 PM",
    title: "Podcast Live Recording",
    description:
      "Join us live with a special guest, building products in Algeria.",
    icon: "mic",
    accent: "primary",
    attendees: [
      { name: "Sofia", avatarSeed: 15 },
      { name: "Yacine", avatarSeed: 33 },
      { name: "Meriem", avatarSeed: 60 },
    ],
    attendeeOverflow: 18,
  },
  {
    date: "Sat, Jun 14 · 5:00 PM",
    title: "Agile Meetup, Algiers",
    description:
      "Networking, experience sharing, and agile practices in the real world.",
    icon: "users",
    accent: "secondary",
    attendees: [
      { name: "Farid", avatarSeed: 8 },
      { name: "Lyna", avatarSeed: 44 },
      { name: "Bilal", avatarSeed: 57 },
    ],
    attendeeOverflow: 24,
  },
];
