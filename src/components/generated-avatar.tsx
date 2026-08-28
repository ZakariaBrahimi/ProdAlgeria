const PALETTE = ["#6c4dff", "#2563eb", "#10b981", "#8b6bf2", "#38bdf8"];

type GeneratedAvatarProps = {
  seed: number;
  name: string;
  size?: number;
  className?: string;
};

/**
 * Deterministic placeholder avatar (gradient + silhouette) for community
 * members without an uploaded photo. Swap for the real profile photo once
 * the Profile feature ships.
 */
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
