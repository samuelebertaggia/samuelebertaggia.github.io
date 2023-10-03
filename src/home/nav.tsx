import { Icon } from "../components/icons.tsx";
import { react } from "../deps.ts";

const Button = ({
  glyph,
  ...props
}: { glyph: string } & react.HTMLAttributes<HTMLButtonElement>) => (
  <button {...props}>
    <Icon
      glyph={glyph}
      className="
        rounded-full p-2
        items-center justify-center
        bg-hover text-hover text-2xl/none
      "
    />
  </button>
);

export const Nav = () => (
  <nav className="flex gap-1 justify-end print:hidden">
    <Button
      glyph="dark_mode"
      className="inline dark:hidden"
      data-script="
        on click
          set the localStorage's theme to 'dark'
          toggle .dark on <html />"
    />
    <Button
      glyph="light_mode"
      className="hidden dark:inline"
      data-script="
        on click
          set the localStorage's theme to 'light'
          toggle .dark on <html />"
    />
    <Button glyph="print" data-script="on click call print()" />
  </nav>
);
