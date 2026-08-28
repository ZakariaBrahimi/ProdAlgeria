/**
 * ------------------------------------------------------------------
 * Component: Badge
 *
 * Purpose:
 * Small pill label — nav "New" tags, discussion category labels,
 * contributor badges ("Top Contributor", "Mentor", "Rising Star").
 *
 * When to use:
 * Any short, non-interactive status or category label. For an
 * interactive filter control (selectable, clickable), don't reuse
 * Badge — see the category filter tabs in `DiscussionFeed`, which
 * are plain `<button>`s styled similarly but are a different
 * component because they carry real interaction and `role="tab"`
 * semantics that a label shouldn't have.
 *
 * Props:
 * - `variant`: default | secondary | accent | outline |
 *   outline-inverse. `outline-inverse` (this project's addition, see
 *   Button) is for badges on dark sections.
 * - `asChild`: render as the child element instead of a `<span>`.
 *
 * Dependencies:
 * - @radix-ui/react-slot
 * - class-variance-authority
 *
 * Author: ProdAlgeria (canonical shadcn/ui source — see ADR 002)
 * ------------------------------------------------------------------
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&_svg]:size-3 gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-muted text-muted-foreground",
        accent: "border-transparent bg-accent text-accent-foreground",
        outline: "border-border text-foreground",
        "outline-inverse": "border-white/20 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
