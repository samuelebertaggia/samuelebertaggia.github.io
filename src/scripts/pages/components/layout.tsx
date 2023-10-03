/** @jsxImportSource https://esm.sh/react@18.2.0 */

import { react } from "../deps.ts";
import { profile } from "../profile.ts";

interface Props {
  children: react.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={`${profile.name} - ${profile.description}`}
      />
      <title>{profile.name}</title>
      <link as="style" rel="preload" href="/style.css" />
      <link as="style" rel="preload" href="/fonts.css" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className="bg text font-extralight">
      <link rel="stylesheet" href="/style.css" />
      <div className="m-auto max-w-3xl screen:p-4">
        <nav className="flex gap-1 justify-end print:hidden" />
        {children}
      </div>
      <link rel="stylesheet" href="/fonts.css" />
      <script type="module" src="/script.js" defer />
    </body>
  </html>
);
