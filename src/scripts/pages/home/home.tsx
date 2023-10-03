/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Layout } from "../components/layout.tsx";
import { Experience } from "./experience.tsx";
import { Header } from "./header.tsx";
import { Links } from "./links.tsx";
import { Skills } from "./skills.tsx";
import { Summary } from "./summary.tsx";

export const Home = (
  <Layout>
    <Header />
    <Links />
    <Summary />
    <Skills />
    <Experience />
  </Layout>
);
