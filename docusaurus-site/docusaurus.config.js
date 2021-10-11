// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Simone Kay Stained Glass",
  tagline: "Bespoke stained glass",
  url: "https://johnnyreilly.github.io",
  baseUrl: "/simone-kay-stained-glass/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.jpg",
  organizationName: "johnnyreilly", // Usually your GitHub org/user name.
  projectName: "simone-kay-stained-glass", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        // },
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Simone Kay Stained Glass",
        logo: {
          alt: "Simone Kay Stained Glass Logo",
          src: "img/favicon.jpg",
        },
        items: [
          {
            to: "/gallery",
            label: "Gallery",
            position: "left",
          },
          {
            to: "https://simonekaystainedglass.bigcartel.com/",
            label: "Webshop",
            position: "left",
          },
          {
            to: "https://simonekaystainedglass.tumblr.com" /*"/blog"*/,
            label: "Blog",
            position: "left",
          },
          {
            to: "/about",
            label: "About Us",
            position: "left",
          },
          {
            to: "/contact",
            label: "Contact",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "VISIT THE STUDIO / SHOP:",
            items: [
              {
                html: "Monday to Friday - 9.30am - 6pm<br />Saturday - 10am - 6pm<br />Tuesday & Sunday -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Closed",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                html: "020 8287 7743",
              },
              {
                label: "simonekaystainedglass@gmail.com",
                href: "mailto:simonekaystainedglass@gmail.com",
              },
              {
                label: "@SimoneKay",
                href: "https://twitter.com/SimoneKay",
              },
              {
                html: "2 Fairfield Corner, Hawks Road, Kingston-Upon-Thames, KT1 3BX",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simone Kay`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
