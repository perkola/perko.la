import type { CompanyGroup as CompanyGroupType, Position } from "../types";

function Role({ position }: { position: Position }) {
  return (
    <div className="role">
      <div className="role__head">
        <h4 className="role__title">{position.title}</h4>
        <span className="role__period">{position.period}</span>
      </div>
      <ul className="role__points">
        {position.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {position.skills && position.skills.length > 0 && (
        <ul className="chips">
          {position.skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CompanyGroup({ group }: { group: CompanyGroupType }) {
  const multiple = group.positions.length > 1;

  return (
    <article className="company">
      <h3 className="company__name">
        {group.url ? (
          <a href={group.url} target="_blank" rel="noreferrer">
            {group.company}
          </a>
        ) : (
          group.company
        )}
      </h3>

      <div className={multiple ? "roles roles--timeline" : "roles"}>
        {group.positions.map((position) => (
          <Role key={`${position.title}-${position.period}`} position={position} />
        ))}
      </div>
    </article>
  );
}
