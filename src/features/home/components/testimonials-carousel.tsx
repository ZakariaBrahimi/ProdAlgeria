"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star, StarHalf } from "lucide-react";

import { GeneratedAvatar } from "@/components/generated-avatar";
import type { Testimonial } from "@/features/home/types";

const ACCENT_TEXT = {
  primary: "text-primary/30",
  secondary: "text-secondary/30",
  accent: "text-accent/30",
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div
      className="ml-auto flex items-center gap-0.5 text-accent"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
      ))}
      {hasHalf ? (
        <StarHalf className="size-3.5 fill-current" aria-hidden="true" />
      ) : null}
    </div>
  );
}

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    const distance = card.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-h3 font-bold tracking-tight text-foreground">
          What our members say
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="sr-only">Previous testimonials</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
            <span className="sr-only">Next testimonials</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.member.name}
            data-testimonial-card
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-[85%] shrink-0 snap-start rounded-2xl border border-border bg-card p-7 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <Quote
              className={`size-6 ${ACCENT_TEXT[testimonial.accent]}`}
              aria-hidden="true"
              fill="currentColor"
            />
            <blockquote className="mt-3 text-base leading-relaxed text-foreground/75">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <GeneratedAvatar
                seed={testimonial.member.avatarSeed}
                name={testimonial.member.name}
                size={44}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.member.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
              <StarRating rating={testimonial.rating} />
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
