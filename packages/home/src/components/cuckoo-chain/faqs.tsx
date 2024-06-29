import React from "react";
import Link from "@docusaurus/Link";

export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  What is Cuckoo Chain?
                </h4>
                <p className="text-slate-500">
                  Cuckoo Chain is a blockchain platform designed specifically
                  for AI applications, operating as an Arbitrum L2 within the
                  Ethereum ecosystem. It offers a streamlined AI developer
                  experience with enhanced speed and efficiency.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  How does Cuckoo Chain integrate with the Ethereum ecosystem?
                </h4>
                <p className="text-slate-500">
                  Cuckoo Chain functions as an Arbitrum Layer 2 solution, which
                  means it inherits the security and decentralization of
                  Ethereum while providing faster and cheaper transactions. This
                  integration ensures seamless interoperability with the
                  Ethereum network.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  What are the main benefits of using Cuckoo Chain for AI
                  development?
                </h4>
                <p className="text-slate-500">
                  Cuckoo Chain offers unparalleled speed, efficiency, and
                  scalability for AI development. It reduces transaction costs,
                  accelerates processing times, and provides a robust
                  infrastructure for deploying AI solutions on the blockchain.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  How can I get started with Cuckoo Chain?
                </h4>
                <p className="text-slate-500">
                  Getting started with Cuckoo Chain is simple. Visit our{" "}
                  <Link to={"/docs/Cuckoo%20Chain/cuckoo-chain"}>
                    Getting Started Guide
                  </Link>{" "}
                  for step-by-step instructions on setting up your account,
                  integrating your applications, and deploying your first AI
                  models on the platform.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  What are some real-world use cases for Cuckoo Chain?
                </h4>
                <p className="text-slate-500">
                  Cuckoo Chain can be used in various scenarios, including
                  decentralized AI model inference, secure data sharing, and
                  AI-powered decentralized applications (dApps). Our platform
                  supports diverse industries such as finance, healthcare, and
                  supply chain management.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">
                  Where can I find support and additional resources?
                </h4>
                <p className="text-slate-500">
                  For support and additional resources, visit our{" "}
                  <Link to={"/help-center"}>Help Center</Link> or join our
                  community on{" "}
                  <Link to={"https://cuckoo.network/dc"}>Discord </Link> and{" "}
                  <Link to={"https://cuckoo.network/tg"}>Telegram</Link> . Our
                  comprehensive documentation, tutorials, and active community
                  are here to assist you with any questions or challenges you
                  might encounter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
