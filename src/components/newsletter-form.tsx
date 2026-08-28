"use client";

/**
 * ------------------------------------------------------------------
 * Component: NewsletterForm
 *
 * Purpose:
 * Email capture form used by NewsletterSection on both Home and
 * Community.
 *
 * When to use:
 * Rendered by NewsletterSection only — not meant to be used
 * standalone, since it has no heading/context of its own.
 *
 * Business Decision:
 * Validation uses a hand-rolled regex with `noValidate` on the
 * `<form>`, instead of the browser's native `type="email"`
 * validation. Native validation UI (the built-in tooltip/bubble)
 * can't be styled to match the product's design system and its
 * appearance varies by browser — this keeps the error message
 * visually consistent with the rest of the form.
 *
 * Known Limitation:
 * There is no submission endpoint yet (no backend — see ADR 005).
 * "Success" here only means "passed client-side email validation";
 * no email is actually sent or stored anywhere. Wire this up to a
 * real newsletter API once one exists.
 *
 * Dependencies:
 * - Button, Input
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "error" | "success";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const statusId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm lg:w-80" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          aria-invalid={status === "error"}
          aria-describedby={statusId}
          className="border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-primary focus-visible:ring-primary/40"
        />
        <Button type="submit" className="shrink-0">
          Subscribe
        </Button>
      </div>
      <p
        id={statusId}
        role="status"
        className={`mt-2 min-h-4 text-xs ${
          status === "error"
            ? "text-red-400"
            : status === "success"
              ? "text-accent"
              : "text-transparent"
        }`}
      >
        {status === "error"
          ? "Enter a valid email address."
          : status === "success"
            ? "You're in. Check your inbox to confirm."
            : "placeholder"}
      </p>
    </form>
  );
}
