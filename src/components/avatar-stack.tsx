/**
 * ------------------------------------------------------------------
 * Component: AvatarStack
 *
 * Purpose:
 * Overlapping row of member avatars — "N people are here" social
 * proof, used in the hero, event cards, and the newsletter CTA.
 *
 * When to use:
 * Any place that shows "these people + optionally a remaining
 * count" (the count itself, e.g. "+32", is rendered by the caller,
 * not this component — see `EventsSection` for that pattern).
 *
 * Props:
 * - `members`: rendered left-to-right, overlapping via negative
 *   margin (`-space-x-3`).
 * - `size`: avatar diameter in pixels, forwarded to `GeneratedAvatar`.
 * - `ringClassName`: the color of the ring separating overlapping
 *   avatars — must match the background they sit on (e.g.
 *   `ring-dark` on the dark hero, `ring-card` inside a white card),
 *   or the overlap will show a visible seam.
 * - `className`: forwarded to the wrapping `<div>`.
 *
 * Dependencies:
 * - GeneratedAvatar
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { GeneratedAvatar } from "@/components/generated-avatar";
import { cn } from "@/lib/utils";
import type { CommunityMember } from "@/types/member";

type AvatarStackProps = {
  members: CommunityMember[];
  size?: number;
  ringClassName?: string;
  className?: string;
};

export function AvatarStack({
  members,
  size = 36,
  ringClassName = "ring-background",
  className,
}: AvatarStackProps) {
  return (
    <div className={cn("flex -space-x-3", className)}>
      {members.map((member) => (
        <GeneratedAvatar
          key={member.name}
          seed={member.avatarSeed}
          name={member.name}
          size={size}
          className={cn("rounded-full ring-2", ringClassName)}
        />
      ))}
    </div>
  );
}
