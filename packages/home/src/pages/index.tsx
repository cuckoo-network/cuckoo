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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description={siteConfig.customFields.description as string}
    >
      <Hero />
      <Clients />
      <main>
        <Process/>
        <Ecosystem/>
        <Target/>
        <News/>
        <Cta/>
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <iframe
              src="https://cuckoonetwork.substack.com/embed"
              width={"100%"}
              height={320}
              style={{border: "0px solid #EEE", background: "#111827"}}
              frameBorder={0}
              scrolling="no"
            />
          </div>
        </section>
      </main>
      <br/>
    </Layout>
  );
}
