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
