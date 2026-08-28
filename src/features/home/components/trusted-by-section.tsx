/**
 * ------------------------------------------------------------------
 * Component: TrustedBySection
 *
 * Purpose:
 * The "Trusted by professionals from leading companies" logo/wordmark
 * strip.
 *
 * When to use:
 * Home's page only.
 *
 * Architectural Decision:
 * Company names render as styled text (`<span>` with weight/italic
 * variants), not image logos — see ADR 004's reasoning for avatars,
 * which applies here too (no external image dependency for content
 * this project has no rights-cleared logo assets for yet). See
 * `constants/trusted-companies.ts` for the rights-clearance caveat.
 *
 * Dependencies:
 * - TRUSTED_COMPANIES
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { TRUSTED_COMPANIES } from "@/features/home/constants/trusted-companies";

export function TrustedBySection() {
  return (
    <section className="border-t border-border px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Trusted by professionals from leading companies
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-muted-foreground/70 grayscale">
          {TRUSTED_COMPANIES.map((company) => (
            <span
              key={company.name}
              className={`text-xl font-bold tracking-tight ${
                company.style === "italic" ? "italic font-semibold" : ""
              } ${company.style === "light" ? "font-light" : ""}`}
            >
              {company.name}
            </span>
          ))}
          <span className="text-sm font-medium text-muted-foreground/60">
            Many more…
          </span>
        </div>
      </div>
    </section>
  );
}
