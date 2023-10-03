import { react } from "../deps.ts";

export const Section = ({
  header,
  children,
  className,
  ...props
}: {
  header: string;
} & react.HTMLProps<HTMLElement>) => (
  <section {...props} className={`my-2 break-inside-avoid ${className || ""}`}>
    <h2 className="my-1 text-2xl font-normal text-primary">{header}</h2>
    {children}
  </section>
);
