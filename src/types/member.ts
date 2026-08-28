/**
 * ------------------------------------------------------------------
 * Module: types/member
 *
 * Purpose:
 * Minimal shape describing a community member for display purposes
 * (name + a seed for their generated avatar). Shared across features
 * (Home's activity cards and testimonials, Community's discussion
 * authors and contributors) — see ADR 003 for why this lives at the
 * top level instead of inside one feature.
 *
 * Limitations:
 * This is a *display* shape, not a user/account model. It has no id,
 * no auth relationship, and no profile data — once real accounts
 * exist (Auth, priority #7), expect a richer `User`/`Profile` type
 * elsewhere, with `CommunityMember` either becoming a derived subset
 * of it or being replaced entirely.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

export type CommunityMember = {
  name: string;
  /**
   * Deterministic seed for GeneratedAvatar's gradient + palette
   * selection, so the same member always renders the same avatar
   * colors wherever they appear. Not a real user id.
   */
  avatarSeed: number;
};
