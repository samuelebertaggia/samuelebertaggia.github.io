/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Icon } from "../components/icons.tsx";
import { Section } from "../components/section.tsx";

const skills = [
  "Effective problem solver",
  "Test driven developer",
  "Practical software designer",
  "Security and reliability promoter",
  "Accessibility advocate",
  "Technical mentor",
  "Good practices coach",
  "Synergistic team player",
  "Business oriented team leader",
  "Constructive communicator",
  "Agile enthusiast",
  "Quick learner",
];

export const Skills = () => (
  <Section header="Top Skills">
    <div
      className="
        grid break-inside-avoid
        grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]
      "
    >
      {skills.map((skill) => (
        <div key={skill} className="flex items-center gap-x-1">
          <Icon glyph="star" className="text-secondary" />
          {skill}
        </div>
      ))}
    </div>
  </Section>
);
