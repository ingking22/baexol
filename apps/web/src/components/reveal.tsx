"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** transition delay in ms — for staggering siblings */
  delay?: number;
};

/** Scroll-triggered reveal. Adds `data-in="true"` once the element enters view. */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-in={inView ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
