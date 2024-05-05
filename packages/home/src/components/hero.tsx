import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./hero.modules.css";
import { useAos } from "@site/src/hooks/use-aos";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function Hero() {
  useAos();
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={"/img/hero-illustration.svg"}
          className="max-w-none"
          priority
          alt="Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
              <div className="relative text-sm text-gray-300 bg-gray-800 rounded-full inline-block px-4 py-1 mb-6 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                <div className="text-gray-400">
                  Staking and mining tokens with GPU {' '}
                  <Link className={clsx("font-medium text-blue-500 inline-flex items-center transition duration-150 ease-in-out group", styles.heroA)} href="/blog/2024/04/20/staking-and-mining-tokens-with-gpu">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <h1
              className={clsx("h1 font-uncut-sans mb-6", styles.h1)}
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {siteConfig.tagline}
            </h1>
            <p
              className="text-lg text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {siteConfig.customFields.description as string}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className={clsx(
                    "button btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group",
                    styles.heroA,
                  )}
                  href="https://t.me/CuckooNetworkOfficial"
                  target="_blank"
                >
                  Generate Image{" "}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    →
                  </span>
                </a>
              </div>
              <div>
                <Link
                  className={clsx(
                    "button btn text-gray-300 bg-gradient-to-t from-gray-800 to-gray-700 hover:to-gray-800 w-full shadow-lg",
                    styles.heroA,
                  )}
                  href="/docs/cuckoo-network"
                >
                  Discover Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
