import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";
import { TOP_CONTRIBUTORS } from "@/features/community/constants/contributors";

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
