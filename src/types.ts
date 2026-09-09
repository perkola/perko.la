export interface Position {
  title: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface CompanyGroup {
  company: string;
  /** Optional external link rendered on the company name. */
  url?: string;
  /** One or more roles held at this company. More than one renders a timeline. */
  positions: Position[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  /** Icon key, see `src/components/icons.tsx`. */
  icon: "email" | "location" | "linkedin" | "github";
}

export interface Profile {
  name: string;
  title: string;
  /** Short tagline shown under the title. Optional. */
  bio?: string;
  /** Imported image URL, or undefined to render an initials monogram. */
  photo?: string;
  links: ContactLink[];
}

export interface CV {
  profile: Profile;
  experience: CompanyGroup[];
  education: Education[];
}
