/** @jsxImportSource https://esm.sh/react@18.2.0 */

const currentYear = new Date().getFullYear();

export const since = (year: number) => currentYear - year;

interface Props {
  title: string;
  experiences: {
    name: string;
    years: number;
  }[];
}

export const Grid = ({ title, experiences }: Props) => (
  <div className="break-inside-avoid">
    <h3 className="my-1 text-lg font-normal text-secondary">{title}</h3>
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
  </div>
);
