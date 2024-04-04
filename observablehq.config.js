// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Sandbox",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Geoviz",
      pages: [
        { name: "Dashboard", path: "/example-dashboard" },
        { name: "Report", path: "/example-report" },
      ],
    },

    {
      name: "Maplibre",
      pages: [{ name: "a simple map", path: "/maplibre" }],
    },
    {
      name: "Deckgl",
      pages: [
        { name: "deck 1", path: "/deck1" },
        { name: "Report", path: "/example-report" },
      ],
    },
    {
      name: "Examples from others",
      pages: [
        { name: "Dashboard", path: "/example-dashboard" },
        { name: "Report", path: "/example-report" },
      ],
    },
  ],

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  header:
    "<hr/><div align ='center'><h1>- neocarto's sandbox -</h1></div><hr/>", // what to show in the header (HTML)
  footer:
    "Built with Observable Framework.<br/>Code source: <a href = 'https://github.com/neocarto/observable-sandbox'>github.com/neocarto/observable-sandbox</a>", // what to show in the footer (HTML)
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  //root: "docs", // path to the source root for preview
  //output: "dist", // path to the output root for build
  search: true, // activate search
};
