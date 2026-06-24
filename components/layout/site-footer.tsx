import Image from "next/image";
import Link from "next/link";

import { brand, footerLinks, socialLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#071525] text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label={`${brand.name} home`}
            >
              <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/hero-logo.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain p-1.5"
                />
              </span>
              <span className="text-lg font-semibold tracking-[-0.02em]">
                apex<span className="text-[#ee6352]">vector</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-white/60">
              {brand.tagline}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/55">
              <p>{brand.email}</p>
              <p>{brand.phone}</p>
              <p>{brand.address}</p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/55 transition hover:text-[#ee6352]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
