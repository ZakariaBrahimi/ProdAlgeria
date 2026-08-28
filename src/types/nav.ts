/**
 * ------------------------------------------------------------------
 * Module: types/nav
 *
 * Purpose:
 * Shape of a single primary navigation link, shared by every
 * component that renders the site nav (desktop Header, MobileNav,
 * Footer). Lives at the top level, not inside a feature, because no
 * single feature owns navigation — see ADR 003.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

export type NavLink = {
  label: string;
  href: string;
  /** Optional pill shown after the label, e.g. "New" on Community. */
  badge?: string;
};
