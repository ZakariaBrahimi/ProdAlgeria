import type { SVGProps } from "react";

/**
 * lucide-react dropped brand/social marks, so these small, static glyphs
 * live here instead of pulling in a whole extra icon package for four
 * footer links.
 */

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.9 8.6H3.7V20h3.2V8.6Zm-1.6-5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 20h-3.2v-5.9c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.8 1.3-.1.2-.1.6-.1.9V20h-3.2s.1-10.4 0-11.4h3.2v1.6c.4-.7 1.2-1.7 3-1.7 2.1 0 3.9 1.5 3.9 4.6V20Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.8 10.4 20.4 3h-1.9l-5.7 6.4L8.1 3H3.3l6.9 9.9-6.9 7.8H5.2l6-6.8 5 6.8h4.7l-7.1-9.3Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.3a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.7 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.7ZM10 15.2V8.8L15.3 12 10 15.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
