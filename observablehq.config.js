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
      pages: [{ name: "Globe", path: "/geoviz_globe" }],
    },

    {
      name: "Maplibre",
      pages: [{ name: "a simple map", path: "/maplibre" }],
    },
    {
      name: "Deckgl",
      pages: [
        { name: "a circle", path: "/deck_test1" },
        { name: "Bars in Paris", path: "/bars" },
        { name: "Bars in Paris (2)", path: "/bars2" },
      ],
    },
    {
      name: "webR",
      pages: [{ name: "test webR", path: "/webR" }],
    },
    // {
    //   name: "Examples from others",
    //   pages: [{ name: "Deck-gl from Fil", path: "/deckfromfil" }],
    // },
  ],

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  header:
    "<hr/><div align ='center'><h1>- neocarto's sandbox -</h1>(with Observable Framework)</div><hr/>", // what to show in the header (HTML)
  footer:
    "<div align = 'center'>Nicolas LAMBERT (CNRS/RIATE)<br/>Built with Observable Framework - Code source: <a href = 'https://github.com/neocarto/observable-sandbox'>github.com/neocarto/observable-sandbox</a></div>", // what to show in the footer (HTML)
  toc: false, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  //root: "docs", // path to the source root for preview
  //output: "dist", // path to the output root for build
  search: true, // activate search
};
