import React from "react";
import Link from "@docusaurus/Link";
import Translate from '@docusaurus/Translate';

export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">
              <Translate description="FAQs section title">FAQs</Translate>
            </h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  <Translate description="Question: What is Cuckoo Chain?">
                    What is Cuckoo Chain?
                  </Translate>
                </h4>
                <p className="text-slate-500">
                  <Translate description="Answer: What is Cuckoo Chain?">
                    Cuckoo Chain is a blockchain platform designed specifically
                    for AI applications, operating as an Arbitrum L2 within the
                    Ethereum ecosystem. It offers a streamlined AI developer
                    experience with enhanced speed and efficiency.
                  </Translate>
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  <Translate description="Question: How does Cuckoo Chain integrate with the Ethereum ecosystem?">
                    How does Cuckoo Chain integrate with the Ethereum ecosystem?
                  </Translate>
                </h4>
                <p className="text-slate-500">
                  <Translate description="Answer: How does Cuckoo Chain integrate with the Ethereum ecosystem?">
                    Cuckoo Chain functions as an Arbitrum Layer 2 solution, which
                    means it inherits the security and decentralization of
                    Ethereum while providing faster and cheaper transactions. This
                    integration ensures seamless interoperability with the
                    Ethereum network.
                  </Translate>
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  <Translate description="Question: What are the main benefits of using Cuckoo Chain for AI development?">
                    What are the main benefits of using Cuckoo Chain for AI
                    development?
                  </Translate>
                </h4>
                <p className="text-slate-500">
                  <Translate description="Answer: What are the main benefits of using Cuckoo Chain for AI development?">
                    Cuckoo Chain offers unparalleled speed, efficiency, and
                    scalability for AI development. It reduces transaction costs,
                    accelerates processing times, and provides a robust
                    infrastructure for deploying AI solutions on the blockchain.
                  </Translate>
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  <Translate description="Question: How can I get started with Cuckoo Chain?">
                    How can I get started with Cuckoo Chain?
                  </Translate>
                </h4>
                <p className="text-slate-500">
                  <Translate
                    description="Answer: How can I get started with Cuckoo Chain?"
                    values={{
                      gettingStartedGuide: (
                        <Link to={"/docs/Cuckoo%20Chain/cuckoo-chain"}>
                          <Translate description="Link text for Getting Started Guide">
                            Getting Started Guide
                          </Translate>
                        </Link>
                      ),
                    }}
                  >
                    {`Getting started with Cuckoo Chain is simple. Visit our {gettingStartedGuide} for step-by-step instructions on setting up your account,
                  integrating your applications, and deploying your first AI
                  models on the platform.`}
                  </Translate>
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  <Translate description="Question: What are some real-world use cases for Cuckoo Chain?">
                    What are some real-world use cases for Cuckoo Chain?
                  </Translate>
                </h4>
                <p className="text-slate-500">
                  <Translate description="Answer: What are some real-world use cases for Cuckoo Chain?">
                    Cuckoo Chain can be used in various scenarios, including
                    decentralized AI model inference, secure data sharing, and
                    AI-powered decentralized applications (dApps). Our platform
                    supports diverse industries such as finance, healthcare, and
                    supply chain management.
                  </Translate>
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  <Translate description="Question: Where can I find support and additional resources?">
                    Where can I find support and additional resources?
                  </Translate>
                </h4>
                <p className="text-slate-500">
                  <Translate
                    description="Answer: Where can I find support and additional resources?"
                    values={{
                      helpCenter: (
                        <Link to={"/help-center"}>
                          <Translate description="Link text for Help Center">
                            Help Center
                          </Translate>
                        </Link>
                      ),
                      discord: (
                        <Link to={"https://cuckoo.network/dc"}>
                          <Translate description="Link text for Discord">
                            Discord
                          </Translate>
                        </Link>
                      ),
                      telegram: (
                        <Link to={"https://cuckoo.network/tg"}>
                          <Translate description="Link text for Telegram">
                            Telegram
                          </Translate>
                        </Link>
                      ),
                    }}
                  >
                    {`For support and additional resources, visit our {helpCenter} or join our community on {discord} and {telegram}. Our
                  comprehensive documentation, tutorials, and active community
                  are here to assist you with any questions or challenges you
                  might encounter.`}
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
