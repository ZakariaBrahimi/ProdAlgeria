/**
 * ------------------------------------------------------------------
 * Module: utils
 *
 * Purpose:
 * Framework-agnostic helpers shared across the whole app. Currently
 * just the shadcn/ui class-merging helper; add other pure utilities
 * here only if they have no feature-specific meaning.
 *
 * Dependencies:
 * - clsx
 * - tailwind-merge
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class name inputs (clsx) and resolves conflicting
 * Tailwind utility classes so the last one wins (tailwind-merge).
 *
 * Needed anywhere a component accepts a `className` prop that must be
 * able to override the component's own default classes — without this,
 * `cn("px-4", className)` could end up with both `px-4` and a caller's
 * `px-6` in the output, and CSS source order (not intent) would decide
 * which one wins.
 *
 * @param inputs Class values: strings, conditionals, arrays, or falsy values to skip.
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
