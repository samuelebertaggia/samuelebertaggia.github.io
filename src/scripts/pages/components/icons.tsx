/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { react } from "../deps.ts";

type Props = {
  glyph: string;
} & react.HTMLProps<HTMLSpanElement>;

export const Icon = ({ glyph, className, ...props }: Props) => (
  <span {...props} className={`material-symbols-outlined ${className || ""}`}>
    {glyph}
  </span>
);
