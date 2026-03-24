"use client";
import { useState, useEffect } from "react";
import { PROFILE } from "@/app/utils/data";
import { useScrollTo } from "@/app/hooks/useScrollTo";

export default function HeroSection() {
  const [isReady, setIsReady] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    // so that the transition has a "before" state to animate from
    const t = setTimeout(() => setIsReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = [
    "transition-all duration-700 ease-out",
    isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
  ].join(" ");

  return (
    <section
      id="hero"
      className="
        overflow-hidden
        flex flex-col justify-center
        px-5 md:px-10
        min-h-[calc(100vh-60px)] mt-[60px]
      "
    >
      <div className="max-w-4xl">
        <div
          className={`${fadeUp} flex items-center gap-3 mb-6 pointer-events-none select-none`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-coral animate-pulse-dot"></span>
          <span className="font-mono text-[0.7rem] font-bold tracking-[0.22em] uppercase text-coral">
            Looking for job opportunities
          </span>
        </div>
        <div
          className={`${fadeUp} mb-4 pointer-events-none select-none`}
          style={{ transitionDelay: "120ms" }}
        >
          <h1 className="font-display uppercase leading-[0.88] text-[clamp(4rem,15vw,12rem)]">
            <span className="block text-text">{PROFILE.firstName}</span>
            <span
              className="block"
              style={{
                WebkitTextStroke: "2px var(--color-yellow)",
                color: "transparent",
              }}
            >
              {PROFILE.lastName}
            </span>
          </h1>
        </div>
        <div
          className={`${fadeUp} mb-10 pointer-events-none select-none`}
          style={{ transitionDelay: "240ms" }}
        >
          <p className="font-serif italic text-muted text-[clamp(1rem,3vw,1.75rem)]">
            Developer // Engineer
          </p>
        </div>
        <div
          className={`${fadeUp} flex flex-wrap gap-3`}
          style={{ transitionDelay: "360ms" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="
              inline-flex items-center gap-2
              font-mono text-xs font-bold tracking-widest uppercase
              px-6 py-3 border-2 border-yellow bg-yellow text-bg
              hover:bg-coral hover:border-coral hover:text-white
              transition-colors duration-200 cursor-pointer
            "
          >
            View Projects →
          </button>
          <a
            href={`mailto:${PROFILE.email}`}
            className="
              inline-flex items-center gap-2
              font-mono text-xs font-bold tracking-widest uppercase
              px-6 py-3 border-2 border-border text-text
              hover:border-yellow hover:bg-yellow hover:text-bg
              transition-colors duration-200
            "
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </div>

      <div
        className={`${fadeUp} absolute bottom-8 right-6 hidden md:flex`}
        style={{ transitionDelay: "500ms" }}
      >
        <span
          className="flex items-center gap-2 [writing-mode:vertical-rl] font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted"
          aria-hidden="true"
        >
          Scroll
          <span className="block w-px h-12 bg-linear-to-b from-muted to-transparent animate-scroll-line" />
        </span>
      </div>
    </section>
  );
}
