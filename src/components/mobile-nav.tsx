"use client";

/**
 * ------------------------------------------------------------------
 * Component: MobileNav
 *
 * Purpose:
 * The `< lg` counterpart to Header's desktop nav — a hamburger button
 * that opens a full-screen overlay with the same links and actions.
 *
 * When to use:
 * Rendered by `Header` only; not meant to be used standalone.
 *
 * Side Effects:
 * While open, locks page scroll (`document.body.style.overflow =
 * "hidden"`) and listens for `Escape` to close — both are cleaned up
 * in the `useEffect` return function, including when the component
 * unmounts while open, so scroll never gets stuck locked.
 *
 * Architectural Decision:
 * The panel is `fixed inset-x-0 top-16 bottom-0` (full remaining
 * viewport below the header), not a small dropdown — an earlier
 * version anchored it directly under the toggle button, which left
 * page content visible and clickable behind/around the "open" panel.
 * A full-height overlay with its own opaque `bg-dark` background
 * avoids that.
 *
 * Author: ProdAlgeria
 * ------------------------------------------------------------------
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-dark px-4 pb-6 pt-4"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Button variant="outline-inverse" className="w-full">
              Log in
            </Button>
            <Button className="w-full">
              <Users aria-hidden="true" />
              Join Community
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
