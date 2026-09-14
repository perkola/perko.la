// Styling for William Perkola's CV — purpose-built for this one document,
// not a reusable theme. The two-column sidebar layout and entry-grid below
// take their structure from the "neat-cv" Typst package
// (https://github.com/dialvarezs/neat-cv, MIT), which is what this CV used
// to import from typst.app — but this is a rewrite, not a copy: no author
// dict, no theme state, nothing parameterized beyond what this one CV needs.
//
// Colors, fonts and icons are the same ones the web CV uses, so the two stay
// visually related — see ../src/styles/tokens.css (palette),
// ../src/styles/app.css (`--font-serif`) and ../src/components/icons.tsx.

// ---- Palette (src/styles/tokens.css :root, light mode) ----
#let accent = rgb("#2f5d3a")
#let text-strong = rgb("#16301f")
// --chip-bg — a pale tint, not a dark fill, so the header band (a full-bleed
// block) doesn't print as a near-black slab of ink. Text on it uses
// text-strong/accent below instead of white.
#let header-bg = rgb("#e9efdf")
#let ink = rgb("#22402e")
#let ink-muted = rgb("#5f6d5a")

// ---- Type ----
// One family for everything, like the site's own single --font-serif token
// (headings and body both leave --font-serif alone; only the variation axes
// below differ).
#let font = "Fraunces"

// ---- Icons ----
// SVGs in ./icons/, redrawn from src/components/icons.tsx and baked to
// `accent` above — regenerate them (resume/icons/*.svg) if this palette
// ever changes.
#let icon(name, size: 1em) = box(baseline: 0.15em, image("icons/" + name + ".svg", width: size))

#let dot = box(inset: (x: 0.5em), sym.dot.c)

/// A two-column table of icon + content rows, used for both contact info
/// and social links.
#let icon-rows(rows) = if rows.len() > 0 {
  table(
    columns: (1em, 1fr),
    align: (center, left),
    inset: 0pt,
    column-gutter: 0.5em,
    row-gutter: 1em,
    stroke: none,
    ..rows.map(((name, content)) => ([#v(-0.2em) #icon(name)], content)).flatten(),
  )
}

/// One experience/education/other-experience entry: a date column plus a
/// title / institution+location / description block.
#let entry(title: none, date: "", institution: "", location: "", description) = block(above: 1em, below: 0.65em)[
  #grid(
    columns: (5.7em, auto),
    align: (right, left),
    column-gutter: .8em,
    text(size: 0.8em, fill: ink-muted, date),
    [
      #set text(size: 0.85em)
      // src/styles/app.css .company__name: SOFT 20, WONK 0.
      #text(weight: "semibold", variations: (SOFT: 20, WONK: 0), title)

      #text(size: 0.9em, smallcaps([
        #if institution != "" or location != "" [
          #institution
          #h(1fr)
          #if location != "" [ #icon("location", size: 0.85em) #location ]
        ]
      ]))

      #text(size: 0.9em, description)
    ],
  )
]

// Heading axes below mirror src/styles/app.css's `.section__heading`
// (`font-variation-settings: "opsz" 48, "SOFT" 30, "WONK" 0`) — opsz is
// already auto-driven by Typst from the text size, same as the site's
// `font-optical-sizing: auto`, so only SOFT/WONK need setting explicitly.
#let heading-variations = (SOFT: 30, WONK: 0)

/// Sidebar heading (`= About me`, etc.): accent-colored small-caps with a
/// little filled tab to its left.
#let show-side-headings(body) = {
  show heading.where(depth: 1): it => block(width: 100%, above: 2em)[
    #set text(font: font, fill: accent, weight: "regular", size: 0.95em, variations: heading-variations)
    #grid(
      columns: (0pt, 1fr),
      align: horizon,
      box(fill: accent, width: -0.4em, height: 1.2em, outset: (left: 0.6em)),
      it.body,
    )
  ]
  body
}

/// Body heading (`= Professional Experience`, etc.): accent-colored
/// small-caps with a rule filling the rest of the line.
#let show-body-headings(body) = {
  show heading.where(depth: 1): it => block(width: 100%)[
    #text(fill: accent, weight: "regular", font: font, size: 0.9em, variations: heading-variations)[#smallcaps(it.body)]
    #box(width: 1fr, line(length: 100%, stroke: accent))
  ]
  body
}

/// A list of items shown as outlined pills (skills, technologies, ...).
#let item-pills(items) = {
  set text(size: 0.85em)

  block(
    items
      .map(item => box(inset: (x: 0.53em, y: 0.53em), stroke: accent + 0.5pt, item))
      .join(" "),
  )
}

/// The colored name/title banner at the top of the page. Reads the page's
/// own margin via `context` (rather than taking it as a parameter) so it
/// can't drift out of sync with `#set page(margin: ..)` in cv.typ — the
/// block outsets by exactly the page's margin so its fill reaches the
/// physical page edge on all three sides.
#let header(firstname, lastname, positions) = context block(
  width: 100%,
  fill: header-bg,
  outset: (left: page.margin.left, right: page.margin.right, top: page.margin.top),
  inset: (bottom: page.margin.top),
)[
  #set align(center)
  // src/styles/app.css .header__name is --text-strong, .header__title is --accent.
  #set text(font: font)

  // src/styles/app.css .header__name: opsz 80, SOFT 44, WONK 1.
  #text(size: 3em, fill: text-strong, variations: (opsz: 80, SOFT: 44, WONK: 1))[
    #text(weight: "light")[#firstname]
    #text(weight: "medium")[#lastname]
  ]

  #v(-0.5em)

  #text(size: 0.95em, fill: accent, weight: "regular")[#smallcaps(positions.join(dot))]
]

/// The two-column sidebar + body grid filling the rest of the page. The
/// inter-column gutter matches the page's own left margin (same `context`
/// reasoning as `header()` above), so it stays in sync automatically.
#let side-and-body(profile-picture: none, side-content, body-content) = context {
  let side-width = 4cm
  let margin-x = page.margin.left

  grid(
    columns: (side-width + margin-x / 2, auto),
    align: (left, left),
    inset: (col, _) => if col == 0 {
      (right: margin-x / 2, y: 1mm)
    } else {
      (left: margin-x / 2, y: 1mm)
    },
    {
      set text(size: 0.72em)
      show-side-headings[
        #if profile-picture != none {
          block(clip: true, stroke: accent + 1pt, radius: side-width / 2, width: 100%, profile-picture)
        }
        #side-content
      ]
      v(1fr)
    },
    grid.vline(stroke: accent.lighten(40%) + 0.5pt),
    {
      show-body-headings(body-content)
      v(1fr)
    },
  )
}
