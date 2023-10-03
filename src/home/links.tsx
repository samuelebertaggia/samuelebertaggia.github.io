import { Icon } from "../components/icons.tsx";

const links = [
  {
    icon: "call",
    href: "tel:+447449152044",
    text: "+44 7449 152044",
  },
  {
    icon: "mail",
    href: "mailto:samuele.bertaggia@gmail.com",
    text: "samuele.bertaggia@gmail.com",
  },
  {
    icon: "globe",
    href: "https://samuelebertaggia.github.io",
    text: "https://samuelebertaggia.github.io",
  },
  {
    icon: "link",
    href: "https://www.linkedin.com/in/samuele-bertaggia",
    text: "https://www.linkedin.com/in/samuele-bertaggia",
  },
];

export const Links = () => (
  <section className="my-2 screen:hidden">
    {links.map((link) => (
      <a key={link.text} href={link.href} className="flex items-center gap-1">
        <Icon glyph={link.icon} className="text-xl/none" />
        {link.text}
      </a>
    ))}
  </section>
);
