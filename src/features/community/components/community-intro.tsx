import { MessagesSquare, Users } from "lucide-react";

import { DISCUSSIONS } from "@/features/community/constants/discussions";

export function CommunityIntro() {
  const discussionCount = DISCUSSIONS.length;

  return (
    <section className="border-b border-border bg-muted/40 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-balance text-4xl sm:text-5xl lg:text-h2 font-extrabold tracking-tight text-foreground">
          Where the conversation happens
        </h1>
        <p className="mt-4 max-w-2xl text-body leading-relaxed text-muted-foreground">
          Real questions from product managers, engineers, designers, and QA
          professionals building in Algeria. Browse by topic, or scroll the
          full feed below.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MessagesSquare className="size-4 text-primary" aria-hidden="true" />
            {discussionCount} active discussions
          </span>
          <span className="flex items-center gap-2">
            <Users className="size-4 text-secondary" aria-hidden="true" />
            1,248+ members
          </span>
        </div>
      </div>
    </section>
  );
}
