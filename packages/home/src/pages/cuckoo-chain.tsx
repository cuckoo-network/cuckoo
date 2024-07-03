import Hero from "@site/src/components/cuckoo-chain/hero";
import Testimonials from "@site/src/components/cuckoo-chain/testimonials";
import Features from "@site/src/components/cuckoo-chain/features";
import Features02 from "@site/src/components/cuckoo-chain/features-02";
import Integrations from "@site/src/components/cuckoo-chain/integrations";
import Pricing from "@site/src/components/cuckoo-chain/pricing";
import Faqs from "@site/src/components/cuckoo-chain/faqs";
import Cta from "@site/src/components/cuckoo-chain/cta";
import Layout from "@theme/Layout";
import { useAos } from "@site/src/hooks/use-aos";
import {News} from "@site/src/components/home/news";
const Illustration = "/img/cuckoo-chain/hero-illustration.svg";

export default function Home() {
  useAos();
  return (
    <Layout
      title={"Cuckoo Chain: The Premier Blockchain for AI"}
      description={
        "Cuckoo Chain is set to transform the AI blockchain landscape. As an Arbitrum L2 in the Ethereum ecosystem, it brings streamlined AI developer experience, fast speed and efficiency to the table. This makes it a prime choice for Web3 + AI users seeking robust and scalable solutions"
      }
    >
      <main className="grow overflow-hidden relative">
        {/* Illustration */}

        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <img
            src={Illustration}
            className="max-w-none"
            priority
            alt="Hero Illustration"
          />
        </div>

        <Hero />
        <Testimonials />
        <Features />
        {/*<Features02 />*/}
        {/*<Integrations />*/}
        <Pricing />
        <Faqs />
        <News tag={"cuckoo chain"}/>
        <Cta />
      </main>
    </Layout>
  );
}
