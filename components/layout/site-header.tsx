"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const heroLogoSrc = "/hero-logo.png";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        isHome
          ? "bg-transparent"
          : "border-b border-white/10 bg-[#0a1a2f]/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-white transition hover:opacity-90"
          aria-label="Apex Vector home"
        >
          <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
            <Image
              src={heroLogoSrc}
              alt=""
              fill
              sizes="40px"
              className="object-contain p-1.5"
            />
          </span>
          <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">
            apex<span className="text-[#ee6352]">vector</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition",
                  active ? "text-[#ee6352]" : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-white/10 bg-[#0a1a2f]/98 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium transition",
                      active
                        ? "bg-white/10 text-[#ee6352]"
                        : "text-white/85 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
