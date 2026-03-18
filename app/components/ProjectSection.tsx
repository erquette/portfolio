"use client"
import { useState, useEffect, useRef } from "react"
import ProjectRow from "@/app/components/ProjectRow"
import { PROJECTS } from "@/app/utils/data"

export default function ProjectsSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="relative z-10 px-5 md:px-10 py-24 max-w-6xl mx-auto"
    >
      <div
        ref={headerRef}
        className={`
          mb-10 transition-all duration-700 ease-out
          ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted mb-2 flex items-center gap-2">
          <span className="font-display text-[2.5rem] leading-none text-yellow/20">02</span>
          Projects
        </p>
        <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-none tracking-wide text-text">
          Some of My<br />Contributions.
        </h2>
      </div>
      <div className="border border-border">
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={i}
            showYear={i === 0 || PROJECTS[i].year !== PROJECTS[i - 1].year}
          />
        ))}
      </div>
    </section>
  )
}