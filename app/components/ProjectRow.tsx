"use client"
import { useEffect, useRef, useState } from "react"
import { Project } from "@/app/utils/types"

interface ProjectRowProps {
  project: Project,
  index: number,
  showYear: boolean
}

export default function ProjectRow(props: ProjectRowProps) {
  const { project, index, showYear } = props;
  const [isVisible, setIsVisible] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      className={`
        group relative
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div
        className="
          absolute left-0 top-0 bottom-0 w-[3px] z-10
          bg-yellow scale-y-0 origin-bottom
          transition-transform duration-300 ease-out
          group-hover:scale-y-100
        "
        aria-hidden="true"
      />

      <div className="
        flex items-stretch
        bg-surface border-b border-border
        last:border-b-0
        transition-colors duration-200
        group-hover:bg-[color-mix(in_srgb,var(--color-surface)_96%,var(--color-yellow)_4%)]
      ">
        <div className="
          w-[44px] flex-none
          flex items-center justify-center
          border-r border-border
          py-5
        ">
          {showYear && (
            <span className="
              font-display text-[0.75rem] tracking-[0.15em]
              text-yellow/50 [writing-mode:vertical-rl]
              uppercase select-none
            ">
              {project.year}
            </span>
          )}
        </div>
        <div className="flex-1 px-5 py-5 flex flex-col gap-3 min-w-0">
          {project.status === "IP" && (
            <div>
              <span className="
                font-mono text-[0.58rem] font-bold
                tracking-[0.12em] uppercase
                px-2 py-0.5
                border border-yellow text-yellow
                leading-none
              ">
                In Progress
              </span>
            </div>
          )}

          <h3 className="
            font-display text-[1.3rem] md:text-[1.5rem]
            uppercase tracking-wide leading-tight text-text
          ">
            {project.title}
          </h3>

          <p className="
            font-mono text-[0.78rem] text-text/60 leading-[1.8]
          ">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="
                    font-mono text-[0.6rem] font-bold
                    tracking-[0.08em] uppercase
                    px-2 py-1 bg-yellow text-bg
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex items-center gap-4 flex-none">
                {project.links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-mono text-[0.65rem] font-bold
                      tracking-widest uppercase text-yellow
                      border-b border-transparent
                      hover:border-yellow/50
                      transition-colors duration-200
                      whitespace-nowrap
                    "
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}