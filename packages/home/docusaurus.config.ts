import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Cuckoo AI",
  tagline: "Cuckoo AI Decentralized Model Serving Marketplace",
  customFields: {
    description:
      "Share your GPU or CPU with Gen AI App builders to generate images and perform LLM inference",
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
      title: "",
      logo: {
        alt: "Cuckoo Network Logo",
        src: "https://cuckoo-network.b-cdn.net/white-full-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          label: "Docs",
          position: "right",
        },
        { to: "/blogs", label: "Blogs", position: "right" },
        {
          href: "/cuckoo-bot",
          label: "Image Gen",
          position: "right",
        },
        {
          href: "https://testnet-scan.cuckoo.network/",
          label: "Testnet Sepolia",
          position: "right",
        },
        {
          href: "https://cuckoo.network/portal/staking",
          label: "Staking",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        href: "/",
        src: "/img/favicon.png",
        srcDark: "/img/favicon.png",
        alt: "BlockEden.xyz",
        height: "36px",
      },
      links: [
        {
          title: "Navigate",
          items: [
            {
              label: "Staking",
              to: "https://cuckoo.network/portal/staking",
            },
            {
              label: "Faucet",
              to: "https://cuckoo.network/portal/faucet",
            },
            {
              label: "About Us",
              to: "/about-us",
            },
            {
              label: "Testnet Pre Alpha",
              to: "https://scan.cuckoo.network/",
            },
            {
              label: "Testnet Sepolia",
              to: "https://testnet-scan.cuckoo.network/",
            },
            {
              label: "FAQ",
              to: "/faq",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Discord",
              href: "https://cuckoo.network/dc",
            },
            {
              label: "Github",
              href: "https://github.com/cuckoo-network/cuckoo",
            },
            {
              label: "Forum",
              href: "https://github.com/orgs/cuckoo-network/discussions",
            },
            {
              label: "Telegram",
              href: "https://cuckoo.network/tg",
            },
            {
              label: "X",
              href: "https://cuckoo.network/x",
            },
            {
              label: "Email: hello@cuckoo.network",
              to: "mailto:hello@cuckoo.network",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Brand Assets",
              href: "/brand-assets",
            },
            {
              label: "GitHub",
              href: "https://github.com/cuckoo-network/cuckoo",
            },
            {
              label: "Documentation",
              to: "/docs/cuckoo-network",
            },
            {
              label: "Blogs",
              to: "/blogs",
            },
            {
              label: "Privacy Policy",
              href: "/privacy-policy",
            },
            {
              label: "Terms of Service",
              href: "/terms-of-service",
            },
          ],
        },
        {
          title: "Ecosystem Showcase",
          items: [
            {
              label: "BlockEden.xyz",
              href: "https://blockeden.xyz/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
            },
            {
              label: "Karma Protocol",
              href: "https://karmapi.ai/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
            },
            {
              label: "Magic Wand",
              href: "https://magicwand.so/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
            },
            {
              label: "Beancount",
              href: "https://beancount.io/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cuckoo`,
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
