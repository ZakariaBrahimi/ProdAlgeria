"use client";

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
