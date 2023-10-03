/** @jsxImportSource https://esm.sh/preact@10.19.4 */

import { JSX, render } from "https://esm.sh/preact@10.19.4";

type IconProps = {
  glyph: string;
  className: string;
} & JSX.HTMLAttributes<HTMLSpanElement>;

export const Icon = ({ glyph, className, ...props }: IconProps) => (
  <span {...props} className={`material-symbols-outlined ${className || ""}`}>
    {glyph}
  </span>
);

type ButtonProps = {
  glyph: string;
} & JSX.HTMLAttributes<HTMLButtonElement>;

const Button = ({ glyph, ...props }: ButtonProps) => (
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

const toggle = (theme?: "dark" | "light") => {
  if (theme) {
    localStorage.theme = theme;
  } else {
    localStorage.removeItem("theme");
  }

  location.reload();
};

const Nav = () => (
  <>
    <Button glyph="light_mode" onClick={() => toggle("light")} />
    <Button glyph="brightness_auto" onClick={() => toggle()} />
    <Button glyph="dark_mode" onClick={() => toggle("dark")} />
    <Button glyph="print" onClick={() => print()} />
  </>
);

setTimeout(() => {
  if (
    (!localStorage.theme &&
      matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage.theme === "dark"
  ) {
    document.documentElement.classList.add("dark");
  }

  render(<Nav />, document.querySelector("nav")!);
});
