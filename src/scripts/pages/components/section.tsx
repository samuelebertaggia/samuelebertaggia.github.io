/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { react } from "../deps.ts";

type Props = {
  header: string;
} & react.HTMLProps<HTMLElement>;

export const Section = ({ header, children, className, ...props }: Props) => (
  <section {...props} className={`my-2 ${className || ""}`}>
    <h2 className="my-1 text-2xl font-normal text-primary">{header}</h2>
    {children}
  </section>
);
