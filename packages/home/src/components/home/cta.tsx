import Illustration from "../svg/cta-illustration.svg";
import Translate, { translate } from "@docusaurus/Translate";

export function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div
          className="relative bg-gradient-to-tr from-blue-600 to-purple-500 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden"
          data-aos="zoom-out"
        >
          {/* Bg illustration */}
          <div
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10"
            aria-hidden="true"
          >
            <Illustration />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="text-4xl font-bold font-uncut-sans mb-2 text-white">
                <Translate>Experience Decentralized AI Model-Serving</Translate>
              </h3>
              <p className="text-blue-200">
                <Translate>Generate image now with Cuckoo Bot</Translate>
              </p>
            </div>
            {/* CTA button */}
            <div className="shrink-0">
              <a
                className="hover:text-white btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full group shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cuckoo.network/portal/art"
              >
                <Translate>Explore</Translate>{" "}
                <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
