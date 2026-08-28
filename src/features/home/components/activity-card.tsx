import { Heart, MessageCircle } from "lucide-react";

import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ActivityPost } from "@/features/home/types";

export function ActivityCard({
  post,
  className,
}: {
  post: ActivityPost;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-64 rounded-2xl border border-white/12 bg-white/6 p-4 shadow-xl backdrop-blur-xl sm:w-72",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <GeneratedAvatar
            seed={post.author.avatarSeed}
            name={post.author.name}
            size={36}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-white">
              {post.author.name}
            </p>
            <p className="text-xs text-white/60">{post.role}</p>
          </div>
        </div>
        <span className="shrink-0 text-xs text-white/45">{post.timeAgo}</span>
      </div>

      <p className="mt-3 text-sm leading-snug text-white/85">{post.body}</p>

      {post.likeCount !== undefined ? (
        <div className="mt-3 flex items-center gap-4 text-xs text-white/55">
          <span className="flex items-center gap-1">
            <Heart className="size-3.5" aria-hidden="true" />
            {post.likeCount}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="size-3.5" aria-hidden="true" />
            {post.commentCount}
          </span>
        </div>
      ) : null}

      {post.tag ? (
        <Badge variant="secondary" className="mt-3">
          {post.tag}
        </Badge>
      ) : null}
    </div>
  );
}
