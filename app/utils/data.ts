import { Experience } from "@/app/utils/types"

export const PROFILE = {
    firstName: "Cinguinique",
    lastName: "Erquette",
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Teaching Assistant",
    company: "University of Alberta",
    details: "CMPUT 404: Web Applications and Architecture",
    periods: [{ start: "Sep 2025", end: "Dec 2025" }],
    type: "PT",
    description: [
      "I ran demo assessments covering CSS, JavaScript, Django, and HTTP fundamentals, and my favourite part was asking students to walk me through their own code rather than just checking if it worked.",
      "I also got to lead student groups through large-scale distributed web app projects, helping them navigate architecture decisions, team dynamics, and deadlines that mimics the real industry.",
    ],
    tech: ["Django", "React", "JavaScript", "REST API"],
  },
  {
    role: "Junior Software Developer",
    company: "SMA Consulting Ltd.",
    periods: [{ start: "Jan 2025", end: "Aug 2025" }],
    type: "FT",
    description: [
      "I spent most of my time building out a React/TypeScript frontend for risk analysis and simulation tools, working closely with C# backend APIs hooked into Azure Cosmos DB.",
      "I also picked up test coverage, bringing the frontend coverage up by 40% with Jest, and kept the CI/CD pipelines running smoothly so the team was not dealing with broken deployments.",
      "Additionally, I ended up volunteering for IT support during onboarding and offboarding periods too, handling things like device setup, BitLocker, and account issues. It was not in my job description but I genuinely enjoyed it.",
    ],
    tech: ["React", "TypeScript", "C#", ".NET", "Microsoft Azure"],
  },
  {
    role: "Teaching Assistant",
    company: "University of Alberta",
    details: "CMPUT 331: Computational Cryptography",
    periods: [{ start: "Jan 2025", end: "Apr 2025" }],
    type: "PT",
    description: [
      "I designed coursework spanning everything from Caesar ciphers to RSA and basic quantum cryptography, which was honestly a lot of fun to put together. I also helped students understand the harder analytical techniques like frequency analysis and Kasiski examination.",
      "Outside the classroom, I helped built Python scripts to automate grading so my peers and I could spend less time on marking and more time actually helping students understand the material.",
    ],
    tech: ["Python", "Cyptographic Algorithms"],
  },
  {
    role: "Software Developer Student",
    company: "Titan Logix Ltd.",
    periods: [{ start: "May 2024", end: "Aug 2024" }],
    type: "FT",
    description: [
      "I built a full-stack asset and employee management system using Angular, TypeScript, Node.js, and MySQL, and wired it up with AWS services including Cognito, Lambda, S3, and IAM for authentication and cloud features.",
      "Working closely with the team on UI/UX through an iterative design process was a highlight for me since it was the first time I really felt the gap between what makes sense to an engineer and what actually makes sense to a user.",
    ],
    tech: ["Angular", "TypeScript", "AWS Cognito", "AWS Lambda", "AWS S3"],
  },
  {
    role: "Teaching Assistant",
    company: "University of Alberta",
    details: "CMPUT 301: Intro to Software Engineering",
    periods: [
      { start: "Jan 2024", end: "Apr 2024" },
      { start: "Sep 2024", end: "Dec 2024" },
    ],
    type: "PT",
    description: [
      "I taught 150+ students across version control, SDLC, JUnit testing, and object-oriented design using Java and Android Studio, and ran student projects under the SCRUM framework to give them a taste of real project management.",
      "The one-on-one sessions were my favourite part of the role. There is something genuinely satisfying about sitting with someone who has been stuck for an hour and watching it finally click for them.",
    ],
    tech: ["Android Studio", "Java", "Google Firebase", "Git & GitHub"],
  },
]