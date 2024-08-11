import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";

export default function Cta() {
  const Illustration = useBaseUrl("/img/cuckoo-chain/cta-illustration.svg");
  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none"
          alt={Translate({id: "Features 01 Illustration", message: "Features 01 Illustration", description: "Alt text for the features illustration"})}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="fade-up"
          >
            <h2 className="h2 font-hkgrotesk">
              <Translate description="CTA section main title">
                It's time to join the thousands of creators, artists, and developers using Cuckoo Chain
              </Translate>
            </h2>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group uppercase hover:text-white"
                  href="https://scan.cuckoo.network"
                >
                  <Translate description="Button label to explore the Cuckoo Chain">
                    Explore Chain
                  </Translate>{" "}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <Link
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm uppercase hover:text-white"
                  href="/docs/Cuckoo%20Chain/cuckoo-chain"
                >
                  <Translate description="Button label to read the Cuckoo Chain documentation">
                    Read Docs
                  </Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
