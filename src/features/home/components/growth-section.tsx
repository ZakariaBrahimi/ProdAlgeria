/**
 * ------------------------------------------------------------------
 * Component: GrowthSection
 *
 * Purpose:
 * "A community built for your growth" — intro copy plus a 4-card
 * grid of growth pillars (Ask & Share, Connect, Learn Together,
 * Grow Your Career).
 *
 * When to use:
 * Home's page only.
 *
 * Architectural Decision:
 * `GROWTH_PILLARS` (in constants/) stores each pillar's icon as a
 * string key (`"message-circle"`, etc.), not a JSX element or a
 * component reference. The `ICONS` map here is what resolves that
 * key to an actual Lucide component. This keeps the constants file
 * plain data (safe to eventually replace with an API response
 * without any JSX in it) at the cost of needing to keep `ICONS` and
 * `GrowthPillar["icon"]`'s union in sync — TypeScript enforces that
 * sync via `Record<GrowthPillar["icon"], ...>`, so a missing icon
 * mapping is a compile error, not a silent runtime gap.
 *
 * Known Limitation:
 * "See how it works" links to `#how-it-works`, an anchor that
 * doesn't exist on this page yet.
 *
 * Dependencies:
 * - GROWTH_PILLARS
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { ArrowRight, BookOpen, MessageCircle, TrendingUp, Users } from "lucide-react";

import { GROWTH_PILLARS } from "@/features/home/constants/growth-pillars";
import type { GrowthPillar } from "@/features/home/types";

const ICONS: Record<GrowthPillar["icon"], typeof MessageCircle> = {
  "message-circle": MessageCircle,
  users: Users,
  "book-open": BookOpen,
  "trending-up": TrendingUp,
};

const ACCENT_CLASSES = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

export function GrowthSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid grid-cols-1 max-w-7xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
        <div>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-h3 font-bold tracking-tight text-foreground">
            A community built for your growth
          </h2>
          <p className="mt-4 text-body leading-relaxed text-muted-foreground">
            Whether you&apos;re just starting your journey or leading
            high-impact teams, you&apos;ll find the support, knowledge, and
            network to go further.
          </p>
          <a
            href="#how-it-works"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            See how it works
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {GROWTH_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon];
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border p-6 transition hover:border-foreground/15 hover:shadow-lg hover:shadow-foreground/5"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${ACCENT_CLASSES[pillar.accent]}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
