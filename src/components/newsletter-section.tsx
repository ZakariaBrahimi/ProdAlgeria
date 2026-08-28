import { Mail } from "lucide-react";

import { AvatarStack } from "@/components/avatar-stack";
import { NewsletterForm } from "@/components/newsletter-form";
import type { CommunityMember } from "@/types/member";

const NEWSLETTER_MEMBERS: CommunityMember[] = [
  { name: "Nassim", avatarSeed: 19 },
  { name: "Imane", avatarSeed: 27 },
  { name: "Hocine", avatarSeed: 6 },
];

export function NewsletterSection() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-dark px-6 py-12 sm:px-12 lg:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
            <Mail className="size-6" aria-hidden="true" />
          </span>

          <div>
            <h2 className="text-2xl sm:text-h4 font-bold text-white">Stay in the loop</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-dark-muted-foreground">
              Get the best of ProdAlgeria in your inbox. Weekly updates on
              events, jobs, podcasts, and community highlights.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <AvatarStack
                members={NEWSLETTER_MEMBERS}
                size={28}
                ringClassName="ring-dark"
              />
              <p className="text-xs text-dark-muted-foreground">
                Join 1,000+ professionals who get our weekly newsletter
              </p>
            </div>
          </div>

          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
