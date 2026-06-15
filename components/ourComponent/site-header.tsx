"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "Sectors", href: "#sectors" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="inline-flex items-center"
          aria-label="Apex Vector home"
        >
          <Image
            src="/sample-logo.svg"
            alt="Apex Vector"
            width={512}
            height={512}
            priority
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-[#002735]/95 px-6 py-4 backdrop-blur-md md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
        aria-label="Mobile navigation"
      >
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block text-sm font-medium text-white/90"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
