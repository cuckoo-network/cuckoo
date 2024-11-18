import React from "react";
import Head from "@docusaurus/Head";
import { useDoc } from "@docusaurus/plugin-content-docs/lib/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Footer from "@theme-original/DocItem/Footer";
import { useColorMode } from "@docusaurus/theme-common";
import { TwitterLink } from "../../../components/TwitterLink";
import Giscus from "@giscus/react";

export default function FooterWrapper(props: {}) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = useDoc();

  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Footer {...props} />

      {metadata.frontMatter.references &&
        metadata.frontMatter.references.length && (
          <>
            <b>References:</b>
            <ul>
              {metadata.frontMatter.references.map((r) => (
                <li key={r}>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer nofollow"
                    href={r}
                  >
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

      <div
        className="margin-vert--lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TwitterLink
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            `${siteConfig.url}${metadata.permalink}`,
          )}&text=${encodeURIComponent(
            `I just read "${metadata.title}" by @CuckooNetworkHQ`,
          )}`}
          title="Share on Twitter"
        />
      </div>

      {metadata.frontMatter.comments !== false && (
        <div className="margin-vert--xl">
          <Giscus
            id="comments"
            repo={`cuckoo-network/cuckoo`}
            repoId={"R_kgDOL1E4iA="}
            category={"Announcements"}
            categoryId={"DIC_kwDODJCASs4Cj5tn"}
            mapping="title"
            reactionsEnabled="0"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
            strict="0"
          />
        </div>
      )}
    </>
  );
}
