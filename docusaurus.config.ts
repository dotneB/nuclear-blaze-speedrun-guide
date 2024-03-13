// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
const lightTheme = themes.github;
const darkTheme = themes.dracula;

export default {
  title: "Nuclear Blaze Speedrun",
  tagline: "Save the cats, Save the world",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nuclear-blaze-speedrun-guide.neb.gg/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dotneB", // Usually your GitHub org/user name.
  projectName: "nuclear-blaze-speedrun-guide", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/dotneB/nuclear-blaze-speedrun-guide/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Nuclear Blaze Speedrun",
      logo: {
        alt: "Nuclear Blaze Speedrun Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          position: "left",
          label: "Guide",
        },
        {
          href: "https://www.speedrun.com/nuclear_blaze",
          label: "Leaderboards",
          position: "right",
        },
        {
          href: "https://discord.gg/q6r7Z5Hmhx",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Speedrun Guide",
              to: "/docs/guide",
            },
            {
              label: "Movement Techniques",
              to: "/docs/Techniques/Movement",
            },
            {
              label: "Reset Techniques",
              to: "/docs/Techniques/Reset",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/q6r7Z5Hmhx",
            },
            {
              href: "https://www.speedrun.com/nuclear_blaze",
              label: "Leaderboards",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/dotneB/nuclear-blaze-speedrun-guide",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
    colorMode: { defaultMode: "dark" },
  } satisfies Preset.ThemeConfig,
} satisfies Config;
