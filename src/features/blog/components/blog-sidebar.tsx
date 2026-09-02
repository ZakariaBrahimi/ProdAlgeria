/**
 * ------------------------------------------------------------------
 * Component: BlogSidebar
 *
 * Purpose:
 * The Blog page's sidebar: "Most read this month", "Topics" (post
 * counts per category), and a "Write for the blog" pitch CTA.
 *
 * When to use:
 * Blog's page only, alongside `BlogPostGrid`.
 *
 * Known Limitation:
 * `MOST_READ_ARTICLES` and `BLOG_TOPICS` are static example data
 * (ADR 005) — see each constant module's own header for why they're
 * not derived from `BLOG_POSTS`. "Pitch an article" links to
 * `#newsletter` (scrolls to the newsletter section, the closest thing
 * this page has to a contact point today) — there is no submission
 * flow yet.
 *
 * Dependencies:
 * - MOST_READ_ARTICLES, BLOG_TOPICS
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MOST_READ_ARTICLES } from "@/features/blog/constants/most-read";
import { BLOG_TOPICS } from "@/features/blog/constants/topics";

export function BlogSidebar() {
  return (
    <div className="flex flex-col gap-6">
      {/* -------------------------------------------------- */}
      {/* Most read this month                                */}
      {/* -------------------------------------------------- */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-sm font-bold text-foreground">
          Most read this month
        </h2>
        <ol className="mt-4 flex flex-col gap-4">
          {MOST_READ_ARTICLES.map((article, index) => (
            <li key={article.title} className="flex items-start gap-3">
              <span className="text-lg font-extrabold leading-none text-border">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold leading-snug text-foreground">
                  {article.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {article.category} · {article.readTimeMinutes} min
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* -------------------------------------------------- */}
      {/* Topics                                              */}
      {/* -------------------------------------------------- */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-sm font-bold text-foreground">Topics</h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {BLOG_TOPICS.map((topic) => (
            <li
              key={topic.category}
              className="flex items-center justify-between text-sm text-foreground/80"
            >
              {topic.category}
              <span className="text-xs text-muted-foreground">
                {topic.postCount}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* -------------------------------------------------- */}
      {/* Write for the blog                                  */}
      {/* -------------------------------------------------- */}
      <div className="flex flex-col gap-3 rounded-2xl bg-dark p-6">
        <span className="flex size-10 items-center justify-center rounded-full border border-primary/50 bg-primary/20">
          <PenLine className="size-4.5 text-primary" aria-hidden="true" />
        </span>
        <h2 className="text-base font-bold text-white">Write for the blog</h2>
        <p className="text-xs leading-relaxed text-dark-muted-foreground">
          Bring one thing you learned the hard way. We help you shape the
          draft and edit it with you.
        </p>
        <Button asChild className="mt-1">
          <a href="#newsletter">Pitch an article</a>
        </Button>
      </div>
    </div>
  );
}
