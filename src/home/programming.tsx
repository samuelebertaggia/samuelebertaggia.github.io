import { Grid, since } from "../components/grid.tsx";

const programming = [
  { name: "Java", years: since(2008) },
  { name: "JavaScript", years: since(2008) },
  { name: "TypeScript", years: since(2019) },
  { name: "Go", years: since(2019) },
  { name: "SQL", years: since(2008) },
  { name: "HTML", years: since(2008) },
  { name: "CSS", years: since(2008) },
  { name: "Groovy", years: since(2008) },
  { name: "Shell Script", years: since(2008) },
  { name: "JSON", years: since(2008) },
  { name: "XML", years: since(2008) },
  { name: "YAML", years: since(2016) },
  { name: "C", years: 1 },
  { name: "Kotlin", years: 1 },
  { name: "Python", years: 1 },
  { name: "PHP", years: 1 },
  { name: "C#", years: 1 },
];

export const Programming = () => (
  <Grid title="Programming Experience" experiences={programming} />
);
