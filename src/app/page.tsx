import { Hero } from "@/features/home/components/hero";
import { StatsBar } from "@/features/home/components/stats-bar";
import { GrowthSection } from "@/features/home/components/growth-section";
import { EventsSection } from "@/features/home/components/events-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { TrustedBySection } from "@/features/home/components/trusted-by-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-dark">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-140 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(108,77,255,0.28),transparent)]"
          aria-hidden="true"
        />
        <Hero />
      </div>

      <StatsBar />
      <GrowthSection />
      <EventsSection />
      <TestimonialsSection />
      <TrustedBySection />
      <NewsletterSection />
    </>
  );
}
