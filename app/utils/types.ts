
export interface JobPeriod {
  start: string  // "MMM YYYY"
  end:   string  // "MMM YYYY" or "Present"
}

type JobStatus = "FT" | "PT" // full-time or part-time

export interface Experience {
  role:        string,
  company:     string,
  details?:    string,
  periods:     JobPeriod[],
  type:        JobStatus,
  description: string[],
  tech:        string[]
}