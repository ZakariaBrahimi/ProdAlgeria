import { GeneratedAvatar } from "@/components/generated-avatar";
import { cn } from "@/lib/utils";
import type { CommunityMember } from "@/features/home/types";

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
