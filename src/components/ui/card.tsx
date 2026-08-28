/**
 * ------------------------------------------------------------------
 * Component: Card, CardHeader, CardTitle, CardDescription,
 *            CardContent, CardFooter
 *
 * Purpose:
 * Generic bordered container primitive with optional structured
 * header/content/footer regions.
 *
 * When to use:
 * A self-contained content block that needs a consistent card
 * chrome. Not yet used by Home or Community — their cards (event
 * cards, discussion cards, testimonial cards) are currently
 * hand-styled `<article>`/`<div>` elements written before this
 * primitive existed to match specific per-section layouts. New card
 * UI should use this component; consider migrating the existing ones
 * to it if their layouts turn out not to need anything Card can't
 * express.
 *
 * Props:
 * All standard `<div>` (or `<h3>`/`<p>` for CardTitle/CardDescription)
 * props, forwarded directly.
 *
 * Author: ProdAlgeria (canonical shadcn/ui source — see ADR 002)
 * ------------------------------------------------------------------
 */

import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
