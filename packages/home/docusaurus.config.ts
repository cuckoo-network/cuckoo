import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Cuckoo Network",
  tagline: "Decentralized AI-to-Earn Platform",
  customFields: {
    description:
      "The first decentralized AI-to-Earn platform rewarding AI enthusiasts, developers, and GPU miners with ERC20 tokens. Cuckoo starts with GPU-sharing for text-to-image generation and LLM inference",
  },
  titleDelimiter: "-",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://cuckoo.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    tailwindPlugin,
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: ["/tg"],
            to: "https://t.me/CuckooNetworkOfficial",
          },
          {
            from: ["/x"],
            to: "https://twitter.com/intent/follow?screen_name=CuckooNetworkHQ",
          },
          {
            from: ["/dc"],
            to: "https://discord.gg/W5nbdn7yye",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-8W6N8HXQ4R",
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsed: false,
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/cuckoo-social-card.webp",
    navbar: {
      title: "Cuckoo",
      logo: {
        alt: "Cuckoo Network Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/about-us", label: "About", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "https://github.com/cuckoo-network/cuckoo", label: "Github", position: "left" },
        {
          href: "https://scan.cuckoo.network/",
          label: "Testnet Pre Alpha",
          position: "right",
        },
        {
          href: "https://testnet-scan.cuckoo.network/",
          label: "Testnet Sepolia",
          position: "right",
        },
        {
          href: "https://cuckoo.network/staking",
          label: "Staking",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: "Discord",
              href: "https://cuckoo.network/dc",
            },
          ],
        },
        {
          items: [
            {
              label: "Telegram",
              href: "https://cuckoo.network/tg",
            },
          ],
        },
        {
          items: [
            {
              label: "X",
              href: "https://cuckoo.network/x",
            },
          ],
        },
        {
          items: [
            {
              html: "<p>hello@cuckoo.network</p>",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cuckoo Network. All Rights Reserved.`,
    },
    prism: {
      // theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
