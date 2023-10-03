/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { Grid, since } from "../components/grid.tsx";

const technologies = [
  { name: "J2EE", years: since(2008) },
  { name: "REST", years: since(2008) },
  { name: "Spring", years: since(2008) },
  { name: "Spring Boot", years: since(2008) },
  { name: "JWT", years: since(2008) },
  { name: "OAuth", years: since(2008) },
  { name: "OpenAPI", years: since(2008) },
  { name: "JPA", years: since(2008) },
  { name: "Hibernate", years: since(2008) },
  { name: "Node.js", years: since(2008) },
  { name: "Deno", years: since(2008) },
  { name: "Tailwind CSS", years: since(2008) },
  { name: "React", years: since(2008) },
  { name: "Redux", years: since(2008) },
  { name: "Vue.js", years: since(2008) },
  { name: "Bootstrap", years: since(2008) },
  { name: "Jenkins", years: since(2008) },
  { name: "Gradle", years: since(2008) },
  { name: "Maven", years: since(2008) },
  { name: "Git", years: since(2008) },
  { name: "Docker", years: since(2008) },
  { name: "GCP", years: since(2008) },
  { name: "Firebase", years: since(2008) },
  { name: "AWS", years: since(2008) },
  { name: "S3", years: since(2008) },
  { name: "DynamoDB", years: since(2008) },
  { name: "Lighthouse", years: since(2008) },
  { name: "ZAP", years: since(2008) },
  { name: "JUnit", years: since(2008) },
  { name: "JMockit", years: since(2008) },
  { name: "Mockito", years: since(2008) },
  { name: "Rest Assured", years: since(2008) },
  { name: "Jest", years: since(2008) },
  { name: "Sonar", years: since(2008) },
  { name: "SonarLint", years: since(2008) },
  { name: "SonarQube", years: since(2008) },
  { name: "IntelliJ", years: since(2008) },
  { name: "Visual Studio", years: since(2008) },
  { name: "VS Code", years: since(2008) },
  { name: "Eclipse", years: since(2008) },
];

export const Technology = () => (
  <Grid title="Frameworks &amp; Libraries" experiences={technologies} />
);
