"use client";
import { useEffect, useRef, useState } from "react";
import { Experience, JobPeriod } from "@/app/utils/types";
import { MONTH_MAP } from "@/app/utils/constants";

interface ExperienceCardProps {
  exp: Experience;
  isLeft: boolean;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const { exp, isLeft } = props;

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isPartTime = exp.type === "PT";
  const duration = calcDuration(exp.periods);
  const dateStr = formatPeriods(exp.periods);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function parseDate(str: string): Date {
    if (str === "Present") return new Date();
    const [mon, yr] = str.split(" ");
    return new Date(parseInt(yr), MONTH_MAP[mon] ?? 0);
  }

  function calcDuration(periods: JobPeriod[]): string {
    const total = periods.reduce((sum, { start, end }) => {
      const s = parseDate(start);
      const e = parseDate(end);
      const months =
        (e.getFullYear() - s.getFullYear()) * 12 +
        (e.getMonth() - s.getMonth()) +
        1;
      return sum + Math.max(months, 1);
    }, 0);

    const years = Math.floor(total / 12);
    const months = total % 12;

    if (years === 0) return `${months} month${months !== 1 ? "s" : ""}`;
    if (months === 0) return `${years} year${years !== 1 ? "s" : ""}`;
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
  }

  function formatPeriods(periods: JobPeriod[]): string {
    return periods.map((p) => `${p.start} - ${p.end}`).join(",  ");
  }

  return (
    <div
      ref={cardRef}
      className={`
        relative flex md:items-center
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
    >
      <span
        className={`
          absolute left-2 md:left-1/2
          w-3 h-3 -translate-x-1/2
          transition-transform duration-300
          ${
            isPartTime
              ? "rounded-none border-2 border-dashed border-yellow/40 bg-bg"
              : "bg-yellow"
          }
        `}
      />

      <div
        className={`
          ml-8 md:ml-0 md:w-1/2
          ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}
        `}
      >
        <div
          className={`
            group bg-surface border border-border p-6
            transition-all duration-300
            hover:border-yellow/40
            hover:translate-y-[-2px]
            hover:shadow-[0_4px_24px_rgba(245,216,0,0.04)]
            ${
              isPartTime
                ? "border-l-[3px] [border-left-style:dashed] border-l-yellow/30"
                : "border-l-[3px] border-l-yellow"
            }
          `}
        >
          <h3
            className="
            font-display text-[1.4rem] md:text-[1.6rem]
            uppercase tracking-wide leading-tight text-text
            mb-1
          "
          >
            {exp.role}
          </h3>

          <p
            className="
            font-mono text-[0.82rem] tracking-widest uppercase
            text-yellow mb-1
          "
          >
            {exp.company}
          </p>

          {exp.details && (
            <p className="font-mono text-[0.73rem] text-muted/80 mb-2 leading-relaxed">
              {exp.details}
            </p>
          )}

          <p className="font-mono text-[0.73rem] text-muted tracking-[0.05em] mb-4">
            {dateStr}
            <span className="mx-2 text-yellow/40 text-sm">•</span>
            {duration}
          </p>

          <div className="mb-5 flex flex-col gap-3">
            {exp.description.map((para, i) => (
              <p
                key={i}
                className="
                  font-mono text-[0.78rem] text-text/60
                  leading-[1.8]
                "
              >
                {para}
              </p>
            ))}
          </div>

          <div
            className={`
            flex flex-wrap gap-2
            ${isLeft ? "md:justify-end" : ""}
          `}
          >
            {exp.tech.map((t) => (
              <span
                key={t}
                className="
                  font-mono text-[0.6rem] font-bold
                  tracking-widest uppercase
                  px-2 py-1
                  bg-yellow text-bg
              "
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
