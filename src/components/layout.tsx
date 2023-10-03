import { react } from "../deps.ts";
import { profile } from "../profile.ts";

export const Layout = ({ children }: { children: react.ReactNode }) => (
  <html
    lang="en"
    data-script="
      init
        get matchMedia('(prefers-color-scheme: dark)')
        if (no localStorage's theme and result.matches)
            or the localStorage's theme is 'dark'
          toggle .dark"
  >
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={`${profile.name} - ${profile.description}`}
      />
      <title>{profile.name}</title>
      <link as="style" rel="preload" href="/style.t.css" />
      <link as="style" rel="preload" href="/style.e.css" />
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
      <link rel="stylesheet" href="/style.t.css" />
      <div className="m-auto max-w-3xl screen:p-4">{children}</div>
      <link rel="stylesheet" href="/style.e.css" />
      <script src="/_hyperscript.min.js" defer />
    </body>
  </html>
);
