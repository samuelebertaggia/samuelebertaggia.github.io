import { folio, path, react, reactDomServer } from "./deps.ts";

const { join } = path;

export const write = (path: string, element: react.ReactElement) => {
  folio.write(
    join(path, "index.html"),
    "<!DOCTYPE html>" + reactDomServer.renderToStaticMarkup(element)
  );
};
