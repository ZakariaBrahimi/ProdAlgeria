/**
 * ------------------------------------------------------------------
 * Component: Input
 *
 * Purpose:
 * The single text input primitive — currently used only by
 * `NewsletterForm`, but every future form field should use this
 * rather than a bare `<input>`.
 *
 * When to use:
 * Any single-line text input. Pass `aria-invalid="true"` to switch
 * to the destructive (error) border/ring styling — this component
 * has no internal validation state of its own, the caller owns that
 * (see `NewsletterForm` for the pattern).
 *
 * Props:
 * All standard `<input>` props, forwarded directly. `className` is
 * merged with (and can override) the default styling via `cn()`.
 *
 * Author: ProdAlgeria (canonical shadcn/ui source — see ADR 002)
 * ------------------------------------------------------------------
 */

import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-full border border-input bg-background px-4 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none",
        "placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
        className
      )}
      {...props}
    />
  );
}

export { Input };
