export interface JobPeriod {
  start: string,  // "MMM YYYY"
  end: string  // "MMM YYYY" or "Present"
}

interface ProjectLink {
  label: ProjectLinkTypes,
  href: string
}

type JobStatus = "FT" | "PT" // full-time or part-time
type ProjectStatus = "IP" | "C" // in-progress or completed
type ProjectLinkTypes = "GitHub" | "Live" | "Video" | "Article";

export interface Experience {
  role: string,
  company: string,
  details?: string,
  periods: JobPeriod[],
  type: JobStatus,
  description: string[],
  tech: string[]
}

export interface Project {
  title: string,
  year: string,
  status?: ProjectStatus,
  description: string,
  tech: string[],
  links?: ProjectLink[]
}