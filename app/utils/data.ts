import { Experience, Project } from "@/app/utils/types";

export const PROFILE = {
  firstName: "Cinguinique",
  lastName: "Erquette",
  email: "cinguinique@gmail.com",
};

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
];

export const PROJECTS: Project[] = [
  {
    title: "SimplyScan",
    year: "2026",
    status: "IP",
    description:
      "I recently found out the scanning app I had been using was storing data on their servers. Privacy when scanning personal documents shouldn't be an afterthought, so I built something where nothing leaves your device. It also gave me an excuse to get into computer vision, playing around with edge detection, perspective warping, and all that cool stuff.",
    tech: ["React", "TypeScript", "OpenCV.js"],
  },
  {
    title: "Azure DSN",
    year: "2024",
    description:
      "As part of a course project, I led a team of six building a distributed social network inspired by Mastodon. The project itself spans about 2-3 months, and somewhere between wrangling the Django backend and keeping everyone moving in the same direction, I actually started to get how the web works.",
    tech: ["React", "TypeScript", "Django", "Web Development"],
    links: [
      { label: "GitHub", href: "https://github.com/cmput404-azure/AzureDSN" },
      { label: "Video", href: "https://www.youtube.com/watch?v=ZJmXECT2B4o" },
    ],
  },
  {
    title: "DishZero",
    year: "2023",
    description:
      "I joined Blueprint, my university's software development club that builds things for non-profits, and landed on the DishZero team right before their launch. Since I came in late, my job was QA; writing UI tests, mocking authenticated sessions, making sure everything held up before real users touched it. The app has since launched at two universities, which felt pretty good to be even a small part of.",
    tech: ["React", "JavaScript", "Jest", "QA Testing"],
    links: [
      { label: "GitHub", href: "https://github.com/UofA-Blueprint/DishZero" },
      {
        label: "Article",
        href: "https://www.ualberta.ca/en/sustainability/about/news-profiles/2023/january/new_reusable_dish_service_take_out_ualberta_takeout.html",
      },
    ],
  },
  {
    title: "QR Code Hunter",
    year: "2023",
    description:
      "This was my first real taste of building something with a team. We made a gamified QR code scanning game for Android where each code gets a procedurally generated name and identity from its hash. Though, what I remember most is learning how to use Git properly, how to review someone else's code, and realising that making software with other people is a completely different skill from making it alone.",
    tech: ["Android Studio", "Java", "Google Firebase", "Mobile Development"],
    links: [
      { label: "GitHub", href: "https://github.com/CMPUT301W23T17/JellyFizz" },
      {
        label: "Video",
        href: "https://drive.google.com/file/d/1_Iio_WFnOR3vxGR8diYCUpKshF1hqVNi/view?usp=sharing",
      },
    ],
  },
];

export const BIO_PARAGRAPHS = [
  "Since you made it this far, I should probably tell you a bit about who I am. A recent graduate who has a passion in building things that work — someone who gets an unreasonable amount of satisfaction from starting with nothing and ending up with something people actually use. Yup, that's me.",
  "I am drawn to technology not just as a career but as a genuine interest. I have an innate curiosity that makes me want to poke around anything new, whether it is a tool I have not tried yet or just something that caught my eye for no good reason.",
  "Outside of all that, I am either deep in a game with my friends or going down some rabbit hole that has absolutely nothing to do with what I should actually be doing. I deeply believe that curiosity and the willingness to learn are the best traits a developer can have, and I try to bring both into everything I work on.",
];

export const SKILLS = [
  {
    key: "frontend",
    values: "React, Angular, Next.js, Tailwind, JS, TS, HTML, CSS",
  },
  { key: "backend", values: "Node.js, Python, Java, C#, C++ Django" },
  { key: "databases", values: "MySQL, Firebase, MongoDB, Cosmos DB" },
  { key: "cloud", values: "AWS, Azure, GitHub Actions, Docker" },
  { key: "tools", values: "Git, GitHub, Jira, Jest, JUnit" },
  { key: "design", values: "Figma, Canva" },
];
