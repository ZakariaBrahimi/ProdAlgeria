/**
 * ------------------------------------------------------------------
 * Component: Button
 *
 * Purpose:
 * The single button primitive for the whole app. Every clickable
 * action (nav CTAs, form submits, carousel controls) should use this
 * rather than a bare `<button>`, so variant/size stay consistent.
 *
 * When to use:
 * Any clickable action. Use `asChild` to render the button's styling
 * on a different element (typically `next/link`'s `Link`, for a
 * button that navigates) instead of a real `<button>`.
 *
 * Props:
 * - `variant`: default | secondary | outline | outline-inverse |
 *   ghost | link | destructive. `outline-inverse` is this project's
 *   addition to the canonical shadcn set, for CTAs on dark
 *   (`bg-dark`) sections where `outline` (built for a light surface)
 *   would be unreadable.
 * - `size`: default | sm | lg | icon.
 * - `asChild`: render as the child element (via Radix `Slot`)
 *   instead of a `<button>`, so `className` and event handlers still
 *   apply to e.g. a wrapped `<Link>`.
 *
 * Limitations:
 * `asChild` requires exactly one child element — passing text or
 * multiple children will throw at runtime (a Radix `Slot`
 * constraint, not specific to this file).
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

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:brightness-110",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:brightness-110",
        outline:
          "border border-border bg-background text-foreground hover:bg-muted",
        "outline-inverse":
          "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5",
        ghost: "text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:brightness-110",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
