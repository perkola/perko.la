import type { CompanyGroup as CompanyGroupType } from "../types";
import { CompanyGroup } from "./CompanyGroup";

export function ExperienceSection({ experience }: { experience: CompanyGroupType[] }) {
  return (
    <section className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section__heading">
        Experience
      </h2>
      <div className="section__body">
        {experience.map((group) => (
          <CompanyGroup key={group.company} group={group} />
        ))}
      </div>
    </section>
  );
}
