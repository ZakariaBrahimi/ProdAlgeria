/**
 * ------------------------------------------------------------------
 * Component: GeneratedAvatar
 *
 * Purpose:
 * Deterministic placeholder avatar — a two-color gradient circle
 * plus a simple silhouette — for community members who have no
 * uploaded profile photo. See ADR 004 for why generated SVG was
 * chosen over a photo placeholder service.
 *
 * When to use:
 * Anywhere a `CommunityMember` needs a visual representation and no
 * real photo exists (which is everywhere today — see ADR 004/005).
 * Once the Profile feature ships real photo uploads, this becomes
 * the fallback for a member *without* a photo, not the default for
 * everyone.
 *
 * Props:
 * - `seed`: deterministic input driving the gradient's two colors
 *   (via `PALETTE`) and the SVG `<linearGradient>` id. The same seed
 *   always produces the same avatar. Not a real user id — see
 *   `CommunityMember.avatarSeed`.
 * - `name`: used only as the SVG's accessible name (`aria-label`),
 *   never rendered as visible text (e.g. initials).
 * - `size`: pixel width/height (square). Defaults to 40.
 * - `className`: forwarded to the `<svg>` root.
 *
 * Limitations:
 * Only 5 base colors in `PALETTE`, combined pairwise via `seed` and
 * `seed + 2` — with more than a handful of members on screen at once
 * (e.g. a future full member directory), expect visible color
 * repetition. Not a concern for the small counts (3-4 avatars) used
 * today.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

const PALETTE = ["#6c4dff", "#2563eb", "#10b981", "#8b6bf2", "#38bdf8"];

type GeneratedAvatarProps = {
  seed: number;
  name: string;
  size?: number;
  className?: string;
};

export function GeneratedAvatar({
  seed,
  name,
  size = 40,
  className,
}: GeneratedAvatarProps) {
  const from = PALETTE[seed % PALETTE.length];
  const to = PALETTE[(seed + 2) % PALETTE.length];
  const gradientId = `avatar-gradient-${seed}`;

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label={name}
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={`url(#${gradientId})`} />
      <circle cx="20" cy="16.5" r="6.2" fill="#ffffff" fillOpacity="0.92" />
      <path
        d="M7 34.5c1.6-7.4 7-11 13-11s11.4 3.6 13 11"
        fill="#ffffff"
        fillOpacity="0.92"
      />
    </svg>
  );
}
