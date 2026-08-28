/**
 * ------------------------------------------------------------------
 * Component: ContributorsList
 *
 * Purpose:
 * The "Top contributors this month" sidebar card on Community —
 * avatar, name, role, and an achievement badge per contributor.
 *
 * When to use:
 * Community's page only, in the sidebar alongside `DiscussionFeed`.
 *
 * Known Limitation:
 * `TOP_CONTRIBUTORS` is static example data (ADR 005); "this month"
 * in the heading is aspirational copy, not a real time window yet.
 *
 * Dependencies:
 * - GeneratedAvatar, Badge
 * - TOP_CONTRIBUTORS
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";
import { TOP_CONTRIBUTORS } from "@/features/community/constants/contributors";

/** Maps each Contributor.badge value to the Badge component's visual variant. */
const BADGE_VARIANT = {
  "Top Contributor": "default",
  Mentor: "accent",
  "Rising Star": "secondary",
} as const;

export function ContributorsList() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-base font-semibold text-foreground">
        Top contributors this month
      </h2>
      <ul className="mt-4 flex flex-col gap-4">
        {TOP_CONTRIBUTORS.map((contributor) => (
          <li key={contributor.member.name} className="flex items-center gap-3">
            <GeneratedAvatar
              seed={contributor.member.avatarSeed}
              name={contributor.member.name}
              size={40}
              className="rounded-full"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                {contributor.member.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {contributor.role}
              </p>
            </div>
            <Badge variant={BADGE_VARIANT[contributor.badge]} className="shrink-0">
              {contributor.badge}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
