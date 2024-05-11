import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/components/hero";
import React from "react";
import { Features } from "@site/src/components/features";
import { Ecosystem } from "@site/src/components/ecosystem";
import { News } from "../components/news";
import Clients from "@site/src/components/clients";
import { Cta } from "../components/cta";
import Target from "@site/src/components/target";
import { Process } from "@site/src/components/process";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description={siteConfig.customFields.description as string}
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
