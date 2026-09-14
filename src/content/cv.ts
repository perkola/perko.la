import type { CV } from "../types";

// Profile photo lives in `public/` and is served from the site root.
// Swap the filename here to change it; set to `undefined` for the monogram.

export const cv: CV = {
  profile: {
    name: "William Perkola",
    title: "Product Owner & Software Engineer",
    // Optional one-liner shown under the title. Left blank — fill in if wanted.
    bio: undefined,
    photo: "/William.jpeg",
    links: [
      { label: "hej@perko.la", href: "mailto:hej@perko.la", icon: "email" },
      { label: "Stockholm, Sweden", href: "", icon: "location" },
      {
        label: "linkedin.com/in/perkola",
        href: "https://linkedin.com/in/perkola",
        icon: "linkedin",
      },
      {
        label: "github.com/perkola",
        href: "https://github.com/perkola",
        icon: "github",
      },
    ],
  },

  experience: [
    {
      company: "OSTTRA",
      positions: [
        {
          title: "Product Owner",
          period: "2021 – Present",
          description: [
            "Own OSTTRA's inner-sourced design system, partnering closely with product teams and UX to drive adoption across 30+ teams.",
            "Evolving the system for AI-assisted development, enabling agents and AI tools to consume and build with it directly.",
          ],
          skills: [
            "Product Management",
            "Stakeholder Management",
            "Design Systems",
            "Agile / Scrum",
            "AI-Assisted Development",
            "React",
            "TypeScript",
            "Storybook",
            "Figma",
          ],
        },
        {
          title: "Software Engineer",
          period: "2017 – 2021",
          description: [
            "Full-stack role in a highly autonomous and experienced team, building a collateral management system and a settlement service using micro services on a private cloud infrastructure.",
          ],
          skills: [
            "Go",
            "Python",
            "Clojure",
            "ClojureScript",
            "Docker",
            "Kubernetes",
          ],
        },
      ],
    },
    {
      company: "Freelance",
      positions: [
        {
          title: "Software Consultant",
          period: "2015 – 2021",
          description: [
            "Working with mainly non-profit organizations designing, building and maintaining websites and digital payment systems.",
          ],
          skills: ["PHP", "SQL", "JavaScript"],
        },
      ],
    },
    {
      company: "Scania Group",
      positions: [
        {
          title: "Master Thesis Student",
          period: "2017 – 2017",
          description: [
            "Using machine learning, at the C-ITS (Cooperative Intelligent Transport System) R&D department, to classify short-lived distributed hazard warning messages to road vehicles.",
          ],
          skills: ["Python", "Machine Learning"],
        },
        {
          title: "Intern",
          period: "2016 – 2017",
          description: [
            "A year-long internship programme at the R&D department for master's students.",
          ],
        },
        {
          title: "Android Developer",
          period: "2016 – 2016",
          description: [
            "Building a prototype for a map-based mobile application in a research project at the R&D department.",
          ],
          skills: ["Android", "React Native", "C#", "Microsoft Azure"],
        },
      ],
    },
    {
      company: "Academic Work",
      positions: [
        {
          title: "Software Consultant",
          period: "2014 – 2015",
          description: [
            "Part-time consultancy at an advertising company. Responsibilities consisted of maintaining multiple websites while developing a job search engine using the API of the Swedish Public Employment Service (Arbetsförmedlingen).",
          ],
          skills: ["PHP", "JavaScript", "HTML", "CSS"],
        },
      ],
    },
  ],

  education: [
    {
      degree: "Master of Engineering (M.Eng.), Computer Science",
      institution: "KTH Royal Institute of Technology",
      period: "2015 – 2017",
    },
    {
      degree: "Bachelor of Engineering (B.Eng.), Computer Science",
      institution: "KTH Royal Institute of Technology",
      period: "2012 – 2015",
    },
  ],
};
