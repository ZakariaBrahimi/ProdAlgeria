/**
 * ------------------------------------------------------------------
 * Module: features/home/constants/trusted-companies
 *
 * Purpose:
 * "Trusted by" logo strip content.
 *
 * Known Limitation:
 * These are company names ProdAlgeria's members work at, not
 * confirmed partnership/sponsorship logos with usage rights cleared.
 * Verify with each company before this ships to production, or
 * replace with confirmed partners.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import type { TrustedCompany } from "@/features/home/types";

export const TRUSTED_COMPANIES: TrustedCompany[] = [
  { name: "Yassir" },
  { name: "Cevital", style: "italic" },
  { name: "Sonatrach" },
  { name: "Condor" },
  { name: "ooredoo", style: "light" },
  { name: "Frendy" },
  { name: "Sofrecom" },
];
