import type { Profile } from "../types";
import { icons } from "./icons";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Header({ profile }: { profile: Profile }) {
  return (
    <header className="header">
      <div className="header__portrait" aria-hidden={profile.photo ? undefined : true}>
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} />
        ) : (
          <span className="header__monogram">{initials(profile.name)}</span>
        )}
      </div>

      <div className="header__body">
        <h1 className="header__name">{profile.name}</h1>
        <p className="header__title">{profile.title}</p>
        {profile.bio && <p className="header__bio">{profile.bio}</p>}

        <ul className="contacts">
          {profile.links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <li key={link.label} className="contacts__item">
                <Icon className="contacts__icon" />
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span>{link.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <a className="header__download" href="/William-Perkola-CV.pdf">
        Download CV
      </a>
    </header>
  );
}
