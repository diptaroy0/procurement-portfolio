import { experiences } from "./experienceData";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp) => (
        <div
          key={exp.title}
          className="rounded-3xl bg-white p-8 text-black"
        >
          <h2 className="text-2xl font-bold">
            {exp.title}
          </h2>

          <p>{exp.company}</p>

          <p>{exp.period}</p>

          <ul className="mt-5 list-disc pl-5">
            {exp.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}