"use client";
import { useState, useEffect } from "react";
import { EXPERIENCES } from "@/app/utils/data";
import ExperienceCard from "@/app/components/ExperienceCard";

export default function ExperienceSection() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="experience"
      className="relative z-10 px-5 md:px-10 py-24 max-w-6xl mx-auto"
    >
      <div
        className={`
          mb-8 transition-all duration-700 ease-out
          ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted mb-2 flex items-center gap-2">
          <span className="font-display text-[2.5rem] leading-none text-yellow/20">
            01
          </span>
          Work Experience
        </p>
        <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-none tracking-wide text-text">
          Where I've
          <br />
          Worked.
        </h2>
      </div>

      <div
        className={`
          flex items-center gap-6 mb-14
          transition-all duration-700 ease-out
          ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        style={{ transitionDelay: "60ms" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-[3px] bg-yellow" />
          <span className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-muted">
            Full-time
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-[3px]"
            style={{
              background:
                "repeating-linear-gradient(90deg,rgba(245,216,0,0.7) 0,rgba(245,216,0,0.7) 4px,transparent 4px,transparent 7px)",
            }}
          />
          <span className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-muted">
            Part-time
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-2 md:left-1/2 top-0 h-full w-px bg-border" />
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${i}`}
              exp={exp}
              isLeft={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
