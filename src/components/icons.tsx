import { react } from "../deps.ts";

export const Icon = ({
  glyph,
  className,
  ...props
}: {
  glyph: string;
} & react.HTMLProps<HTMLSpanElement>) => (
  <span {...props} className={`material-symbols-outlined ${className || ""}`}>
    {glyph}
  </span>
);
