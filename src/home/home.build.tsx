import { Layout } from "../components/layout.tsx";
import { write } from "../write.ts";
import { Cloud } from "./cloud.tsx";
import { Databases } from "./databases.tsx";
import { Header } from "./header.tsx";
import { Links } from "./links.tsx";
import { Nav } from "./nav.tsx";
import { Programming } from "./programming.tsx";
import { Skills } from "./skills.tsx";
import { Summary } from "./summary.tsx";
import { Technology } from "./technology.tsx";

write(
  "",
  <Layout>
    <Nav />
    <Header />
    <Links />
    <Summary />
    <Skills />
    <Programming />
    <Technology />
    <Cloud />
    <Databases />
  </Layout>
);
