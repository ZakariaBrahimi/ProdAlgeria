/**
 * ------------------------------------------------------------------
 * Component: RootLayout
 *
 * Purpose:
 * The App Router root layout — wraps every page in the app. Owns the
 * `<html>`/`<body>` shell, the site-wide font, the skip-to-content
 * link, and the persistent Header/Footer. See ADR 003 for why
 * Header/Footer live here instead of in each page.
 *
 * Responsibilities:
 * - Load Plus Jakarta Sans via `next/font/google` (self-hosted,
 *   zero-layout-shift — see the Next.js font docs) and expose it as
 *   the `font-sans` Tailwind token (wired in `globals.css`)
 * - Render the accessibility skip link, Header, `<main>`, and Footer
 *   around every page's `children`
 * - Default page `<title>`/`<meta description>` (per-page metadata,
 *   e.g. Community's, overrides this via its own `export const
 *   metadata`)
 *
 * Dependencies:
 * - Header, Footer
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProdAlgeria - Algeria's Home for Product, Tech & Agile Professionals",
  description:
    "Learn, connect, and grow with like-minded professionals. Access resources, share ideas, get help, and build the future of tech in Algeria, together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
