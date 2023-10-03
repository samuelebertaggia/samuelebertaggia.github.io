import { react } from "../deps.ts";
import { profile } from "../profile.ts";

export const Layout = ({ children }: { children: react.ReactNode }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={`${profile.name} - ${profile.description}`}
      />
      <title>{profile.name}</title>
      <style>{`@layer loading {body{display:none;}}`}</style>
      <link as="style" rel="preload" href="/page.tailwind.css" />
      <link as="style" rel="preload" href="/fonts.bundle.css" />
      <link as="script" rel="preload" href="/page.bundle.js" />
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
    <body className="bg text block font-extralight">
      <div className="m-auto max-w-3xl screen:p-4">{children}</div>
      <link rel="stylesheet" href="/page.tailwind.css" />
      <link rel="stylesheet" href="/fonts.bundle.css" />
      <script src="/page.bundle.js" defer />
    </body>
  </html>
);
