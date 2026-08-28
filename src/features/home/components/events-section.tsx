/**
 * ------------------------------------------------------------------
 * Component: EventsSection
 *
 * Purpose:
 * "Upcoming Events" — a 3-card grid of events with date, description,
 * attendee avatars, and a Register link.
 *
 * When to use:
 * Home's page only. Standing in for a real Events page (CLAUDE.md
 * priority #4) until that exists — see ADR 005.
 *
 * Architectural Decision:
 * Same icon-key-to-component pattern as GrowthSection: `ICONS` maps
 * each event's string `icon` field to a Lucide component, keeping
 * `constants/events.ts` as plain data. See GrowthSection's file
 * header for the full reasoning.
 *
 * Known Limitation:
 * Each card's "Register" link (`href="#register"`) doesn't go
 * anywhere real yet — there's no registration flow until Events
 * exists as its own feature.
 *
 * Dependencies:
 * - Button, AvatarStack
 * - UPCOMING_EVENTS
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { ArrowRight, CalendarCheck, Mic, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AvatarStack } from "@/components/avatar-stack";
import { UPCOMING_EVENTS } from "@/features/home/constants/events";
import type { CommunityEvent } from "@/features/home/types";

const ICONS: Record<CommunityEvent["icon"], typeof CalendarCheck> = {
  "calendar-check": CalendarCheck,
  mic: Mic,
  users: Users,
};

const ACCENT_CLASSES = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

export function EventsSection() {
  return (
    <section id="events" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-h3 font-bold tracking-tight text-foreground">
              Upcoming Events
            </h2>
            <p className="mt-3 max-w-md text-body leading-relaxed text-muted-foreground">
              Join live sessions, workshops, and meetups to learn and connect.
            </p>
          </div>
          <a
            href="#all-events"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            View all events
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {UPCOMING_EVENTS.map((event) => {
            const Icon = ICONS[event.icon];
            return (
              <article
                key={event.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${ACCENT_CLASSES[event.accent]}`}
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
                  {event.date}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center">
                    <AvatarStack
                      members={event.attendees}
                      size={28}
                      ringClassName="ring-card"
                    />
                    <span className="ml-2 text-xs text-muted-foreground">
                      +{event.attendeeOverflow}
                    </span>
                  </div>
                  <Button variant="link" size="sm" className="h-auto p-0" asChild>
                    <a href="#register">Register</a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
