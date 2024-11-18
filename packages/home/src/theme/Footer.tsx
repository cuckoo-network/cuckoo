import OriginalFooter from "@theme-original/Footer";
import React, {useTransition} from "react";
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";

function Footer(props: {}) {
  const dogImg = useBaseUrl("/img/favicon.png");

  return (
    <div className="footer-wrapper footer">
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <h3>
                  <Translate id="footer.aboutTitle">About Cuckoo AI</Translate>
                </h3>
                <p>
                  <Translate id="footer.aboutDescription">
                    Cuckoo Network is revolutionizing AI infrastructure through decentralization. As a pioneering
                    blockchain platform built on Arbitrum and Ethereum, we empower GPU miners, developers, and AI enthusiasts to
                    participate in a fair, transparent ecosystem. Our network enables cost-effective AI model serving,
                    secure transactions through Cuckoo Chain, and community-driven growth through the $CAI token.

                  </Translate>
                </p>
              </div>
              <img
                src={dogImg}
                style={{
                  borderRadius: "50%",
                  height: 130,
                  marginLeft: 10,
                  width: 130,
                }}
              />
            </div>
            <div
              className="margin-top--lg"
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{flexGrow: 1}}>
                <h3>
                  <Translate id="footer.subscribeTitle">Stay up to date today</Translate>
                </h3>
                <iframe
                  src="https://cuckoonetwork.substack.com/embed"
                  width={"100%"}
                  height={320}
                  style={{border: "0px solid #EEE", background: "#111827"}}
                  frameBorder={0}
                  scrolling="no"
                  title={translate({
                    message: 'Newsletter iframe',
                    description: 'The title for the newsletter iframe',
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OriginalFooter {...props} />
    </div>
  );
}

export default Footer;
