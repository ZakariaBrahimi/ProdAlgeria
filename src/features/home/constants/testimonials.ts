/**
 * ------------------------------------------------------------------
 * Module: features/home/constants/testimonials
 *
 * Purpose:
 * Content for the "What our members say" carousel.
 *
 * Known Limitation:
 * These are illustrative quotes, not real member submissions. Before
 * this ships publicly, either get real testimonials with consent to
 * publish, or clearly relabel the section — attributing invented
 * quotes to a named, photo-identified person is a credibility and
 * trust risk once the site is live.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { Testimonial } from "@/features/home/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ProdAlgeria helped me connect with amazing people and land my dream job in product management.",
    member: { name: "Sara K.", avatarSeed: 45 },
    role: "Product Manager",
    rating: 4.5,
    accent: "primary",
  },
  {
    quote:
      "The discussions and resources here are incredible. I learn something new every single day.",
    member: { name: "Walid D.", avatarSeed: 68 },
    role: "Engineering Manager",
    rating: 4.5,
    accent: "secondary",
  },
  {
    quote:
      "The community is supportive, active, and full of opportunities. Proud to be part of ProdAlgeria.",
    member: { name: "Lina M.", avatarSeed: 29 },
    role: "Agile Coach",
    rating: 5,
    accent: "accent",
  },
];
