import type { Education } from "../types";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section className="section" aria-labelledby="education-heading">
      <h2 id="education-heading" className="section__heading">
        Education
      </h2>
      <div className="section__body">
        {education.map((entry) => (
          <article key={entry.degree} className="edu">
            <div className="edu__head">
              <h3 className="edu__degree">{entry.degree}</h3>
              <span className="edu__period">{entry.period}</span>
            </div>
            <p className="edu__institution">{entry.institution}</p>
            {entry.details && <p className="edu__details">{entry.details}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
