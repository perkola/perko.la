// William Perkola's CV — see style.typ for how it's styled, and
// ../CLAUDE.md for how this fits together with the perko.la site and how
// to build the PDF.
#import "style.typ": *

#set document(title: "Curriculum Vitae", author: "William Perkola")

#set page(
  paper: "a4",
  margin: (left: 12mm, right: 12mm, top: 15mm - 3mm, bottom: 15mm),
  footer: {
    set align(center)
    set text(size: 0.7em, fill: ink-muted)
    [William Perkola CV #dot #datetime.today().display("[month repr:long] [year]")]
  },
)

#set text(font: body-font, size: 10.5pt, weight: "regular", fill: ink)
#set par(spacing: 0.75em, justify: true)

#header("William", "Perkola", ("Product Owner", "Software Engineer"), 12mm)
#v(3mm)

#side-and-body(
  profile-picture: image("/public/William.jpeg"),
  [
    = About me
    Curious engineer with a passion for understanding the _how_ and the _why_. I value people, long-term thinking and continuing to learn by doing, together.

    = Personal Interests
    - How it works
    - Piano, guitar and choir
    - Board games
    - Motorcycling
    - Camping

    = Contact
    #icon-rows((
      ("email", link("mailto:hej@perko.la", "hej@perko.la")),
      ("phone", link("tel:+46737462052", "+46 73 746 20 52")),
      ("location", [Tjurbergsgatan 34 \ 118 56 Stockholm]),
    ))

    = Skills & technologies
    #item-pills((
      "Product Management",
      "Stakeholder Management",
      "Design Systems",
      "Agile / Scrum",
      "AI-Assisted Development",
      "Figma",
      "JavaScript",
      "TypeScript",
      "React",
      "SQL",
      "Docker",
      "Kubernetes",
    ))

    #v(1fr)
    #icon-rows((
      ("globe", link("https://perko.la", "perko.la")),
      ("github", link("https://github.com/perkola", "perkola")),
      ("linkedin", link("https://www.linkedin.com/in/perkola", "perkola")),
    ))
  ],
  [
    = Professional Experience

    #entry(
      title: "Product Owner",
      date: "2021 – Present",
      institution: "OSTTRA",
      location: "Stockholm",
    )[
      - Own OSTTRA's inner-sourced design system, partnering closely with product teams and UX to drive adoption across 30+ teams.
      - Evolving the system for AI-assisted development, enabling agents and AI tools to consume and build with it directly.
    ]

    #entry(
      title: "Software Engineer",
      date: "2017 – 2021",
      institution: "OSTTRA",
      location: "Stockholm",
    )[
      - Full-stack role in a highly autonomous and experienced team, building a collateral management system and a settlement service using micro services on a private cloud infrastructure.
    ]

    #entry(
      title: "Software Consultant",
      date: "2015 – 2021",
      institution: "Freelance",
      location: "Stockholm",
    )[
      - Working with mainly non-profit organizations designing, building and maintaining websites and digital payment systems.
    ]

    #entry(
      title: "Master Thesis Student",
      date: "2017 – 2017",
      institution: "Scania Group",
      location: "Södertälje",
    )[
      - Using machine learning, at the C-ITS (Cooperative Intelligent Transport System) R&D department, to classify short-lived distributed hazard warning messages to road vehicles.
    ]

    #entry(
      title: "Intern",
      date: "2016 – 2017",
      institution: "Scania Group",
      location: "Södertälje",
    )[
      - A year-long internship programme at the R&D department for master's students.
    ]

    #entry(
      title: "Android Developer",
      date: "2016 – 2016",
      institution: "Scania Group",
      location: "Södertälje",
    )[
      - Building a prototype for a map-based mobile application in a research project at the R&D department.
    ]

    #entry(
      title: "Software Consultant",
      date: "2014 – 2015",
      institution: "Academic Work",
      location: "Stockholm",
    )[
      - Part-time consultancy at an advertising company. Responsibilities consisted of maintaining multiple websites while developing a job search engine using the API of the Swedish Public Employment Service (Arbetsförmedlingen).
    ]

    = Education

    #entry(
      title: "Master of Engineering (M.Eng.), Computer Science",
      date: "2015 – 2017",
      institution: "KTH Royal Institute of Technology",
      location: "Stockholm",
      [Thesis: _"Relevance classification of connected vehicles for short-lived distributed geospatial events"_.],
    )

    #entry(
      title: "Bachelor of Engineering (B.Eng.), Computer Science",
      date: "2012 – 2015",
      institution: "KTH Royal Institute of Technology",
      location: "Stockholm",
      [],
    )

    = Other Experience

    #entry(
      title: "Secretary",
      date: "2024 – Present",
      institution: "HSB BRF Vågskivan i Stockholm",
      [],
    )

    #entry(
      title: "Chairman of the board",
      date: "2019 – 2023",
      institution: "BRF Stänkskärmen 20",
      [],
    )
  ],
)
