import { ArrowRight, Briefcase, MessagesSquare, Users } from "lucide-react";

import { INTEREST_TAGS } from "@/features/home/constants/interest-tags";

const STATS = [
  { icon: Users, value: "1,248+", label: "Active Members", accent: "primary" as const },
  { icon: MessagesSquare, value: "320+", label: "Discussions", accent: "secondary" as const },
  { icon: Briefcase, value: "45+", label: "Events Hosted", accent: "accent" as const },
];

const ACCENT_CLASSES = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

export function StatsBar() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto -mt-10 max-w-7xl rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-foreground/10 sm:-mt-14 sm:p-8 lg:-mt-16">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
          <dl className="grid grid-cols-3 gap-6 sm:gap-10">
            {STATS.map(({ icon: Icon, value, label, accent }) => (
              <div key={label} className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${ACCENT_CLASSES[accent]}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xl font-bold text-foreground sm:text-2xl">
                    {value}
                  </dt>
                  <dd className="text-xs text-muted-foreground sm:text-sm">
                    {label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-sm font-semibold text-foreground">
              Explore by interest
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {INTEREST_TAGS.map((tag) => (
                <a
                  key={tag.label}
                  href={tag.href}
                  className="rounded-full bg-muted px-3.5 py-1.5 text-xs font-medium text-foreground/75 transition hover:bg-muted/70"
                >
                  {tag.label}
                </a>
              ))}
              <a
                href="#explore"
                className="flex items-center gap-1 text-xs font-semibold text-primary"
              >
                View all
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
