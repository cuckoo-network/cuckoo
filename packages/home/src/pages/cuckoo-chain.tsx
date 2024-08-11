import Hero from "@site/src/components/cuckoo-chain/hero";
import Testimonials from "@site/src/components/cuckoo-chain/testimonials";
import Features from "@site/src/components/cuckoo-chain/features";
import Pricing from "@site/src/components/cuckoo-chain/pricing";
import Faqs from "@site/src/components/cuckoo-chain/faqs";
import Cta from "@site/src/components/cuckoo-chain/cta";
import Layout from "@theme/Layout";
import { useAos } from "@site/src/hooks/use-aos";
import { News } from "@site/src/components/home/news";
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from "@docusaurus/useBaseUrl";


export default function Home() {
  const Illustration = useBaseUrl("/img/cuckoo-chain/hero-illustration.svg");
  useAos();
  return (
    <Layout
      title={translate({
        message: "Cuckoo Chain: The Premier Blockchain for AI",
        description: "Page title for Cuckoo Chain homepage",
      })}
      description={translate({
        message:
          "Cuckoo Chain is set to transform the AI blockchain landscape. As an Arbitrum L2 in the Ethereum ecosystem, it brings streamlined AI developer experience, fast speed and efficiency to the table. This makes it a prime choice for Web3 + AI users seeking robust and scalable solutions",
        description: "Page description for Cuckoo Chain homepage",
      })}
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
            alt={translate({
              message: "Hero Illustration",
              description: "Alt text for the hero illustration image",
            })}
          />
        </div>

        <Hero />
        <Testimonials />
        <Features />
        {/*<Features02 />*/}
        {/*<Integrations />*/}
        <Pricing />
        <Faqs />
        <News tag={"cuckoo chain"} />
        <Cta />
      </main>
    </Layout>
  );
}
