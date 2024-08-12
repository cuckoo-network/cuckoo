import Link from "@docusaurus/Link";
import Translate from '@docusaurus/Translate';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              <Translate
                description="Hero section main title"
              >
                Transforming AI with Blockchain Technology
              </Translate>
            </h1>
            <p
              className="text-xl text-slate-500 mb-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Translate
                description="Hero section description about Cuckoo Chain and its role in AI development"
              >
                Cuckoo Chain, an Arbitrum L2 in the Ethereum ecosystem,
                revolutionizes AI development with unmatched speed, efficiency,
                and scalability. Perfect for Web3 + AI innovators.
              </Translate>
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group uppercase hover:text-white"
                  href="https://scan.cuckoo.network"
                >
                  <Translate
                    description="Button label to explore the Cuckoo Chain"
                  >
                    Explore Chain
                  </Translate>{" "}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm uppercase hover:text-white"
                  href="/docs/Cuckoo%20Chain/cuckoo-chain"
                >
                  <Translate
                    description="Button label to read the Cuckoo Chain documentation"
                  >
                    Read Docs
                  </Translate>
                </Link>
              </div>
            </div>
          </div>
          {/* Hero image */}
          {/*<div*/}
          {/*  className="pt-16 md:pt-20"*/}
          {/*  data-aos="fade-up"*/}
          {/*  data-aos-delay="300"*/}
          {/*>*/}
          {/*  <img*/}
          {/*    className="mx-auto"*/}
          {/*    src={"/img/cuckoo-chain/hero-image.png"}*/}
          {/*    width={920}*/}
          {/*    height={518}*/}
          {/*    alt="Hero"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
