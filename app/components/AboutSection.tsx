"use client";
import { useState, useEffect, useRef } from "react";
import { BIO_PARAGRAPHS } from "@/app/utils/data";
import TerminalCard from "@/app/components/TerminalCard";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 px-5 md:px-10 py-24 max-w-6xl mx-auto"
    >
      <div
        className={`
          mb-8 transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted mb-2 flex items-center gap-2">
          <span className="font-display text-[2.5rem] leading-none text-yellow/20">
            03
          </span>
          About Me
        </p>
        <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-none tracking-wide text-text">
          You Made It
          <br />
          This Far.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-start">
        <div
          className={`
            flex flex-col gap-5
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {BIO_PARAGRAPHS.map((para, i) => (
            <p
              key={i}
              className="font-mono text-[0.82rem] text-text/65 leading-[1.85]"
            >
              {para}
            </p>
          ))}
        </div>

        <TerminalCard isVisible={isVisible} />
      </div>
    </section>
  );
}
