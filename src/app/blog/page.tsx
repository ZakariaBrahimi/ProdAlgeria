/**
 * ------------------------------------------------------------------
 * Page: Blog (`/blog`)
 *
 * Purpose:
 * Composes Blog's sections in order. Owns only layout, section order,
 * and the `BLOG_POSTS` featured/grid split — all content and
 * interaction live under `features/blog/components/`, see
 * `features/blog/README.md`.
 *
 * Responsibilities:
 * - The dark hero wrapper (background + radial glow) around
 *   `BlogHero`, the same treatment Home gives its own hero
 * - Section order: BlogHero, FeaturedPost (overlapping the hero,
 *   Community's overlap pattern), then a two-column layout
 *   (BlogPostGrid + BlogSidebar), then NewsletterSection
 * - Page-level `<title>`/`<meta description>`, overriding the root
 *   layout's default
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { Metadata } from "next";

import { NewsletterSection } from "@/components/newsletter-section";
import { BlogHero } from "@/features/blog/components/blog-hero";
import { FeaturedPost } from "@/features/blog/components/featured-post";
import { BlogPostGrid } from "@/features/blog/components/blog-post-grid";
import { BlogSidebar } from "@/features/blog/components/blog-sidebar";
import { BLOG_POSTS } from "@/features/blog/constants/posts";

export const metadata: Metadata = {
  title: "Blog - ProdAlgeria",
  description:
    "Field notes on product, agile and engineering leadership — written by people doing the work in Algeria.",
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const gridPosts = BLOG_POSTS.filter((post) => !post.featured);

  return (
    <>
      <div className="relative overflow-hidden bg-dark">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-140 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(108,77,255,0.28),transparent)]"
          aria-hidden="true"
        />
        <BlogHero />
      </div>

      {featuredPost ? (
        <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8 lg:-mt-20">
          <div className="mx-auto max-w-7xl">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      ) : null}

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_320px]">
          <BlogPostGrid posts={gridPosts} />
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
