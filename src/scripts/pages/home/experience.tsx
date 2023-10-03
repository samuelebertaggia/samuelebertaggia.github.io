/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Section } from "../components/section.tsx";
import { Cloud } from "./cloud.tsx";
import { Databases } from "./databases.tsx";
import { Programming } from "./programming.tsx";
import { Systems } from "./systems.tsx";
import { Technology } from "./technology.tsx";
import { Tools } from "./tools.tsx";

export const Experience = () => (
  <Section header="Experience">
    <Programming />
    <Cloud />
    <Databases />
    <Technology />
    <Tools />
    <Systems />
  </Section>
);
