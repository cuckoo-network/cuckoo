import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";
import commit from "./src/latest-commit.json";

const config: Config = {
  title: "Cuckoo AI",
  tagline: "Decentralized AI Creative Platform for Creators & Builders",
  customFields: {
    description:
      "Create stunning AI art and fuel Gen AI apps with your GPU or CPU on Cuckoo Chain. Share, generate, and unlock the power of decentralized AI.",
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
  organizationName: "cuckoo-network", // Usually your GitHub org/user name.
  projectName: "cuckoo", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "ko",
      "ja",
      "id",
      "zh",
      "vi",
      "hi",
      "ru",
      "ar",
      "es",
      "fa",
      "fr",
      "pt",
      "th",
      "tr",
    ],
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
          {
            from: ["/reddit"],
            to: "https://www.reddit.com/r/CuckooAI/",
          },
          {
            from: ["/appstore"],
            to: "https://onelink.to/38sr93",
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
          editUrl:
            "https://github.com/cuckoo-network/cuckoo/edit/main/packages/home",
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
    metadata: [
      {
        name: "keywords",
        content:
          "Cuckoo Network, blockchain, AI, decentralized AI, Cuckoo AI, GPU mining, Cuckoo Chain, CAI token, airdrop, staking, Web3, Arbitrum, Layer 2, smart contracts, DeFi, NFTs, AI inference, decentralized computing, crypto, tokenomics, Proof of Sampling, Proof of Inference, LLMs, machine learning, Ethereum",
      },
    ],

    // Replace with your project's social card
    image: "img/cuckoo-social-card.webp",
    navbar: {
      title: "",
      logo: {
        alt: "Cuckoo AI Logo",
        src: "https://cuckoo-network.b-cdn.net/white-full-logo.svg",
      },
      items: [
        {
          href: "https://cuckoo.network/portal/airdrop",
          label: "Airdrop",
          position: "right",
        },
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
          href: "/cuckoo-chain",
          label: "Blockchain",
          position: "right",
        },
        {
          href: "https://cuckoo.network/portal/staking",
          label: "Staking",
          position: "right",
        },

        {
          value: `
<a target="_blank" href="https://cuckoo.network/x" class="flex justify-center items-center" aria-label="Twitter">
  <svg class="fill-white group-hover:fill-gray-200 transition duration-150 ease-in-out"
       width="28" height="38"
       viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
  </svg>
</a>
`,
          type: "html",
          position: "right",
        },
        {
          value: ` <a target="_blank" href="https://cuckoo.network/tg" class="flex justify-center items-center" aria-label="Telegram">
                  <svg class="fill-white group-hover:fill-gray-200 transition duration-150 ease-in-out" width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.956.378a.47.47 0 0 0-.32-.347 1.662 1.662 0 0 0-.866.061S1.494 6.968.393 7.73c-.236.164-.316.26-.355.371-.19.546.402.78.402.78l4.968 1.607c.084.015.17.01.252-.015 1.13-.708 11.366-7.126 11.961-7.342.092-.027.162 0 .144.069-.237.823-9.083 8.622-9.131 8.669a.181.181 0 0 0-.066.16l-.464 4.815s-.194 1.498 1.315 0a42.204 42.204 0 0 1 2.612-2.373c1.708 1.171 3.546 2.466 4.339 3.143.27.26.633.398 1.008.385a1.13 1.13 0 0 0 .964-.849s3.51-14.03 3.627-15.909c.012-.182.028-.302.03-.428a1.591 1.591 0 0 0-.043-.435Z" fill-rule="nonzero"></path>
                                        </svg></a>`,
          type: "html",
          position: "right",
        },
        {
          value: ` <a target="_blank" href="https://cuckoo.network/dc" class="flex justify-center items-center" aria-label="Discord">
                  <svg
                    class="fill-white group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="24"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.317 1.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0C9.095.88 8.852.406 8.641.037A.077.077 0 0 0 8.562 0c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.12.097.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.964 19.964 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.839-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 12.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z"
                      fillRule="nonzero"
                    />
                  </svg></a>`,
          type: "html",
          position: "right",
        },

        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://github.com/cuckoo-network/cuckoo/issues/12",
              label: "Help Us Translate",
            },
          ],
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
              label: "Bridge",
              to: "https://bridge.cuckoo.network/",
            },
            {
              label: "About Us",
              to: "/about-us",
            },
            {
              label: "Cuckoo Scan (Mainnet)",
              to: "https://scan.cuckoo.network/",
            },
            {
              label: "Cuckoo Sepolia Scan (Testnet)",
              to: "https://testnet-scan.cuckoo.network/",
            },
            {
              label: "FAQ",
              to: "/faq",
            },
            {
              label: "Roadmap",
              to: "/docs/roadmap",
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
              label: "𝕏",
              href: "https://cuckoo.network/x",
            },
            {
              label: "Reddit",
              href: "https://cuckoo.network/reddit",
            },
            {
              label: "Email: hello@cuckoo.network",
              to: "mailto:hello@cuckoo.network",
            },
            {
              label: "Careers",
              to: "/careers",
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
              label: "Help Center",
              to: "/help-center",
            },
            {
              label: "Privacy Policy",
              href: "/privacy-policy",
            },
            {
              label: "Airdrop Terms of Service",
              href: "/airdrop-terms-of-service",
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
              label: "Beancount",
              href: "https://beancount.io/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
            },
            {
              label: "Miners",
              href: "https://cuckoo.network/portal/mining",
            },
            {
              label: "Cuckoo Art",
              href: "https://cuckoo.network/portal/art",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cuckoo Network (${commit.hash.slice(0, 7)} / Updated ${commit.date})`,
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
