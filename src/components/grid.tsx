import { Section } from "./section.tsx";

const currentYear = new Date().getFullYear();

export const since = (year: number) => currentYear - year;

export const Grid = ({
  title,
  experiences,
}: {
  title: string;
  experiences: {
    name: string;
    years: number;
  }[];
}) => (
  <Section header={title}>
    <div
      className="
        grid gap-1 text-sm/none
        grid-cols-[repeat(auto-fit,minmax(7rem,1fr))]
      "
    >
      {experiences.map((experience) => (
        <div key={experience.name} className="flex gap-x-1 items-center">
          <div
            className="
              w-5 h-5 shrink-0
              flex items-center justify-center
              font-normal bg-accent text-accent
              print:border-b print:border-slate-300
            "
          >
            {experience.years}
          </div>
          <div className="text-ellipsis whitespace-nowrap overflow-x-hidden">
            {experience.name}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
