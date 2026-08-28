/**
 * ------------------------------------------------------------------
 * Component: HeroIllustration
 *
 * Purpose:
 * The hero's background art — a stylized silhouette of the Algiers
 * skyline (referencing the Maqam Echahid monument) at dusk, in the
 * brand gradient.
 *
 * Architectural Decision:
 * A hand-drawn inline SVG, not a stock/generated photo. The hero
 * image is above-the-fold and directly affects LCP (see CLAUDE.md's
 * performance section), so a zero-request, zero-dependency asset
 * beats an external image host on both performance and reliability
 * grounds. See ADR 004 for the same reasoning applied to avatars.
 *
 * When to use:
 * Home's hero only — this is not a generic decorative component.
 *
 * Limitations:
 * Purely decorative: no props, `role="img"` with a static
 * `aria-label` describing the scene for screen readers.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */
export function HeroIllustration() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Stylized skyline of Algiers at dusk"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1020" />
          <stop offset="38%" stopColor="#2a2158" />
          <stop offset="68%" stopColor="#33447f" />
          <stop offset="100%" stopColor="#1f6f74" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="50%" cy="78%" r="45%">
          <stop offset="0%" stopColor="#7fe0cf" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7fe0cf" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#heroSky)" />
      <rect width="400" height="300" fill="url(#heroGlow)" />
      <g fill="#ffffff" opacity="0.55">
        <circle cx="46" cy="42" r="1.1" />
        <circle cx="88" cy="70" r="0.9" />
        <circle cx="140" cy="34" r="1.3" />
        <circle cx="210" cy="56" r="0.9" />
        <circle cx="270" cy="30" r="1.1" />
        <circle cx="330" cy="60" r="1" />
        <circle cx="360" cy="36" r="1.2" />
      </g>
      <g fill="#0b1020">
        <rect x="0" y="240" width="34" height="60" />
        <rect x="30" y="222" width="26" height="78" />
        <rect x="58" y="250" width="30" height="50" />
        <rect x="330" y="236" width="28" height="64" />
        <rect x="356" y="212" width="24" height="88" />
        <rect x="312" y="256" width="20" height="44" />
        <rect x="380" y="248" width="20" height="52" />
      </g>
      <g fill="#ffe9b8" opacity="0.5">
        <rect x="8" y="252" width="4" height="6" />
        <rect x="18" y="266" width="4" height="6" />
        <rect x="38" y="240" width="4" height="6" />
        <rect x="46" y="256" width="4" height="6" />
        <rect x="340" y="248" width="4" height="6" />
        <rect x="364" y="230" width="4" height="6" />
        <rect x="372" y="256" width="4" height="6" />
      </g>
      <path
        d="M200 88c-16 26-24 58-24 92 0 8 1 15 3 22h42c2-7 3-14 3-22 0-34-8-66-24-92Z"
        fill="#0b1020"
      />
      <path
        d="M148 132c-14 20-21 46-21 72 0 6 1 12 2 18h30c-1-6-2-12-2-18 0-30 7-56 21-77-11 0-21 2-30 5Z"
        fill="#0b1020"
        opacity="0.92"
      />
      <path
        d="M252 132c14 20 21 46 21 72 0 6-1 12-2 18h-30c1-6 2-12 2-18 0-30-7-56-21-77 11 0 21 2 30 5Z"
        fill="#0b1020"
        opacity="0.92"
      />
      <rect x="150" y="200" width="100" height="18" fill="#0b1020" />
      <rect x="140" y="216" width="120" height="84" fill="#0b1020" />
    </svg>
  );
}
