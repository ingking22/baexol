"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b hairline bg-snow-1/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.32em] text-graphite transition-opacity hover:opacity-60"
        >
          BAEXOL
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-slate transition-colors hover:text-graphite"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
