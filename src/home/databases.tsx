import { Grid, since } from "../components/grid.tsx";

const databases = [
  { name: "MySQL", years: since(2008) },
  { name: "PostgreSQL", years: since(2008) },
  { name: "SQLite", years: since(2008) },
  { name: "Oracle", years: since(2008) },
  { name: "DB2", years: since(2008) },
  { name: "GreenPlum", years: since(2008) },
  { name: "MongoDB", years: since(2008) },
];

export const Databases = () => (
  <Grid title="Database Experience" experiences={databases} />
);
