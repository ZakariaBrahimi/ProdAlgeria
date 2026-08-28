import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AvatarStack } from "@/components/avatar-stack";
import { HeroIllustration } from "@/features/home/components/hero-illustration";
import { ActivityCard } from "@/features/home/components/activity-card";
import type { ActivityPost, CommunityMember } from "@/features/home/types";

const HERO_MEMBERS: CommunityMember[] = [
  { name: "Amel", avatarSeed: 32 },
  { name: "Reda", avatarSeed: 51 },
  { name: "Nadia", avatarSeed: 14 },
  { name: "Sofia", avatarSeed: 48 },
];

const DISCUSSION_MEMBERS: CommunityMember[] = [
  { name: "Yacine", avatarSeed: 25 },
  { name: "Meriem", avatarSeed: 36 },
  { name: "Farid", avatarSeed: 9 },
];

const ACTIVITY_POSTS: ActivityPost[] = [
  {
    author: { name: "Yasmine B.", avatarSeed: 47 },
    role: "Product Owner",
    timeAgo: "2h",
    body: "Just finished a great session on User Story Mapping. Here are my key takeaways.",
    likeCount: 12,
    commentCount: 8,
  },
  {
    author: { name: "Karim M.", avatarSeed: 13 },
    role: "Engineering Manager",
    timeAgo: "5h",
    body: "Looking for recommendations on product analytics tools. What do you all use?",
    tag: "Discussion",
  },
];

export function Hero() {
  return (
    <section className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
        <div>
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-h1 font-extrabold leading-[1.05] tracking-tight text-white">
            Algeria&apos;s Home for
            <span className="block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Product, Tech &amp; Agile
              </span>{" "}
              Professionals
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-body leading-relaxed text-white/65">
            Learn, connect, and grow with like-minded professionals. Access
            resources, share ideas, get help, and build the future of tech in
            Algeria, together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#join">
                <Users aria-hidden="true" />
                Join the Community
              </a>
            </Button>
            <Button size="lg" variant="outline-inverse" asChild>
              <a href="#community">Explore Community</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <AvatarStack members={HERO_MEMBERS} ringClassName="ring-dark" />
            <p className="text-sm text-white/70">
              <span className="font-semibold text-accent">+1,248</span>{" "}
              professionals{" "}
              <br className="hidden sm:block" />
              already part of the community
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-x-10 -top-16 h-72 rounded-full bg-[conic-gradient(from_200deg_at_50%_100%,rgba(108,77,255,0.55),rgba(37,99,235,0.35)_35%,rgba(16,185,129,0.4)_65%,transparent_80%)] blur-2xl"
            aria-hidden="true"
          />

          <div className="relative aspect-4/3 overflow-hidden rounded-4xl shadow-2xl shadow-black/40">
            <HeroIllustration />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-primary/20"
              aria-hidden="true"
            />
          </div>

          <ActivityCard
            post={ACTIVITY_POSTS[0]}
            className="absolute -right-3 top-6 sm:-right-8"
          />
          <ActivityCard
            post={ACTIVITY_POSTS[1]}
            className="absolute -right-2 bottom-6 sm:-right-6 sm:bottom-10"
          />

          <div className="mt-6 flex items-center gap-3 lg:hidden">
            <AvatarStack
              members={DISCUSSION_MEMBERS}
              size={32}
              ringClassName="ring-dark"
            />
            <p className="flex items-center gap-1.5 text-sm text-white/65">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Active discussions every day
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 hidden max-w-7xl items-center gap-3 lg:flex">
        <AvatarStack
          members={DISCUSSION_MEMBERS}
          size={32}
          ringClassName="ring-dark"
        />
        <p className="flex items-center gap-1.5 text-sm text-white/65">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Active discussions every day
        </p>
      </div>
    </section>
  );
}
