import React from "react";

export const metadata = {
  title: "Features - Open PRO",
  description: "Page description",
};

import Hero from "@site/src/components/cuckoo-bot/hero-features";
import Stats from "@site/src/components/cuckoo-bot/stats";
import Zigzag from "@site/src/components/cuckoo-bot/zigzag";
// import Blocks from "@site/src/components/cuckoo-bot/blocks";
// import CaseStudies from "@site/src/components/cuckoo-bot/case-studies";
import { Cta } from "@site/src/components/home/cta";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function CuckooBot() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Cuckoo Bot Effortless Text-to-Image Generation"}
      description={
        "Cuckoo Bot's decentralized AI transforms words into breathtaking visuals. Manage every detail with ease and creativity. Now available in Telegram and Discord."
      }
    >
      <Hero />
      <Stats />
      <Zigzag />
      {/*<Blocks />*/}
      {/*<CaseStudies />*/}
      <Cta />
      <br />
    </Layout>
  );
}
