/**
 * ------------------------------------------------------------------
 * Component: DiscussionCard
 *
 * Purpose:
 * One discussion thread preview: author, role, timestamp, pinned
 * indicator, category badge, title, body, and like/comment counts.
 *
 * When to use:
 * Rendered by `DiscussionFeed` for each post in the (filtered) list.
 * Purely presentational — takes a `DiscussionPost` and renders it,
 * no state or data fetching of its own.
 *
 * Props:
 * - `post`: the `DiscussionPost` to render.
 *
 * Known Limitation:
 * The like/comment counts and their icons are display-only — this is
 * a card, not a control. There is no click handler on the heart or
 * comment icon; liking and opening the thread to view/add comments
 * both require the (not-yet-built) individual-thread view and
 * real auth, so they're intentionally not wired up here.
 *
 * Dependencies:
 * - GeneratedAvatar, Badge
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { Heart, MessageCircle, Pin } from "lucide-react";

import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";
import type { DiscussionPost } from "@/features/community/types";

export function DiscussionCard({ post }: { post: DiscussionPost }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition hover:border-foreground/15 hover:shadow-lg hover:shadow-foreground/5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <GeneratedAvatar
            seed={post.author.avatarSeed}
            name={post.author.name}
            size={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {post.author.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {post.role} · {post.timeAgo}
            </p>
          </div>
        </div>
        {post.pinned ? (
          <span className="flex items-center gap-1 text-xs font-medium text-primary">
            <Pin className="size-3.5" aria-hidden="true" />
            Pinned
          </span>
        ) : null}
      </div>

      <Badge variant="secondary" className="mt-4">
        {post.category}
      </Badge>

      <h3 className="mt-3 text-lg font-semibold text-foreground">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {post.body}
      </p>

      <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Heart className="size-4" aria-hidden="true" />
          {post.likeCount}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle className="size-4" aria-hidden="true" />
          {post.commentCount}
        </span>
      </div>
    </article>
  );
}
