import { Header } from "@/features/home/components/header";
import { Hero } from "@/features/home/components/hero";
import { StatsBar } from "@/features/home/components/stats-bar";
import { GrowthSection } from "@/features/home/components/growth-section";
import { EventsSection } from "@/features/home/components/events-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { TrustedBySection } from "@/features/home/components/trusted-by-section";
import { NewsletterSection } from "@/features/home/components/newsletter-section";
import { Footer } from "@/features/home/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg"
      >
        Skip to content
      </a>

      <div className="relative overflow-hidden bg-dark">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-140 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(108,77,255,0.28),transparent)]"
          aria-hidden="true"
        />
        <Header />
        <main id="main">
          <Hero />
        </main>
      </div>

      <StatsBar />
      <GrowthSection />
      <EventsSection />
      <TestimonialsSection />
      <TrustedBySection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
