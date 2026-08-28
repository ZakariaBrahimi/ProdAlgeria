/**
 * ------------------------------------------------------------------
 * Component: TestimonialsSection
 *
 * Purpose:
 * Thin Server Component wrapper: provides the section's max-width
 * container and passes static `TESTIMONIALS` content into the
 * interactive carousel.
 *
 * When to use:
 * Home's page only. Exists as a separate file from
 * `TestimonialsCarousel` specifically so the data-fetching/layout
 * concern (Server) stays out of the Client Component that owns
 * carousel interaction — see `TestimonialsCarousel`'s header for why
 * that split matters.
 *
 * Dependencies:
 * - TESTIMONIALS
 * - TestimonialsCarousel
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { TESTIMONIALS } from "@/features/home/constants/testimonials";
import { TestimonialsCarousel } from "@/features/home/components/testimonials-carousel";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}
