import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/components/home/hero";
import React from "react";
import { Ecosystem } from "@site/src/components/home/ecosystem";
import { News } from "../components/home/news";
import Clients from "@site/src/components/home/clients";
import { Cta } from "../components/home/cta";
import Target from "@site/src/components/home/target";
import { Process } from "@site/src/components/home/process";
import { translate } from "@docusaurus/Translate";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        message: "Access AI apps and earn from staking and providing GPU power",
        description: "The site tagline",
      })}
      description={translate({
        message:
          "Create stunning AI art and fuel Gen AI apps with your GPU or CPU on Cuckoo Chain. Share, generate, and unlock the power of decentralized AI.",
        description: "The site description",
      })}
    >
      <Hero />
      <Clients />
      <main>
        <Process />
        <Ecosystem />
        <Target />
        <News />
        <Cta />
      </main>
      <br />
    </Layout>
  );
}
