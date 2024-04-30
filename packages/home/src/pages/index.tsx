import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/components/hero";
import React from "react";
import { Features } from "@site/src/components/features";
import { Ecosystem } from "@site/src/components/ecosystem";
// import Clients from "@site/src/components/clients";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description={siteConfig.customFields.description as string}
    >
      <Hero />
      {/*<Clients/>*/}
      <main>
        <Ecosystem />
        <Features />
      </main>
    </Layout>
  );
}
