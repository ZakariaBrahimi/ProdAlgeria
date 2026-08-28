import type { Metadata } from "next";

import { NewsletterSection } from "@/components/newsletter-section";
import { CommunityIntro } from "@/features/community/components/community-intro";
import { DiscussionFeed } from "@/features/community/components/discussion-feed";
import { ContributorsList } from "@/features/community/components/contributors-list";
import { DISCUSSIONS } from "@/features/community/constants/discussions";

export const metadata: Metadata = {
  title: "Community - ProdAlgeria",
  description:
    "Browse discussions from product managers, engineers, designers, and QA professionals building in Algeria.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityIntro />

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-10 lg:grid-cols-[1fr_320px]">
          <DiscussionFeed posts={DISCUSSIONS} />
          <aside>
            <ContributorsList />
          </aside>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
