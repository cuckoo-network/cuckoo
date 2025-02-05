"use client";

import { useEffect } from "react";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";
Swiper.use([Autoplay, Navigation]);

export default function Features() {
  const Illustration = useBaseUrl(
    "/img/cuckoo-chain/features-illustration.svg",
  );
  const FeaturesIcon01 = useBaseUrl("/img/cuckoo-chain/features-icon-01.svg");
  const FeaturesIcon02 = useBaseUrl("/img/cuckoo-chain/features-icon-02.svg");
  const FeaturesIcon03 = useBaseUrl("/img/cuckoo-chain/features-icon-03.svg");
  const FeaturesIcon04 = useBaseUrl("/img/cuckoo-chain/features-icon-04.svg");

  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="440"
          alt={
            <Translate description="Illustration alt text">
              Illustration
            </Translate>
          }
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              <Translate description="Section header title">
                Many tools to decentralized AI with Cuckoo Chain
              </Translate>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
                <Translate description="Section header description">
                  The best resources for building an end-to-end Cuckoo Chain
                  dApp.
                </Translate>
              </p>
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <img
                  className="mb-3"
                  src={FeaturesIcon01}
                  width={56}
                  height={56}
                  alt={
                    <Translate description="Icon 01 alt text">
                      Icon 01
                    </Translate>
                  }
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    <Translate description="Cuckoo Network Bridge title">
                      Cuckoo Network Bridge
                    </Translate>
                  </div>
                  <div className="text-slate-500 mb-3">
                    <Translate description="Cuckoo Network Bridge description">
                      Transfer assets seamlessly across Arbitrum One and Cuckoo
                      Chain with minimal fees and secure transactions.
                    </Translate>
                  </div>
                </div>
                <div className="text-right">
                  <Link
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="/docs/cuckoo-chain/bridge"
                  >
                    <Translate description="Link text to learn more about Cuckoo Network Bridge">
                      Learn More
                    </Translate>{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <img
                  className="mb-3"
                  src={FeaturesIcon02}
                  width={56}
                  height={56}
                  alt={
                    <Translate description="Icon 02 alt text">
                      Icon 02
                    </Translate>
                  }
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    <Translate description="Thirdweb title">Thirdweb</Translate>
                  </div>
                  <div className="text-slate-500 mb-3">
                    <Translate description="Thirdweb description">
                      Full-stack, open-source web3 development platform.
                      Fullstack tools to build complete web3 apps.
                    </Translate>
                  </div>
                </div>
                <div className="text-right">
                  <Link
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="https://thirdweb.com/cuckoo-chain"
                  >
                    <Translate description="Link text to learn more about Thirdweb">
                      Learn More
                    </Translate>{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <img
                  className="mb-3"
                  src={FeaturesIcon03}
                  width={56}
                  height={56}
                  alt={
                    <Translate description="Icon 03 alt text">
                      Icon 03
                    </Translate>
                  }
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    <Translate description="ChainList title">
                      ChainList
                    </Translate>
                  </div>
                  <div className="text-slate-500 mb-3">
                    <Translate description="ChainList description">
                      ChainList is a list of EVM networks. Users can use the
                      info to connect their wallets and Web3 middleware
                      providers.
                    </Translate>
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="https://chainlist.org/chain/1200"
                  >
                    <Translate description="Link text to learn more about ChainList">
                      Learn More
                    </Translate>{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <img
                  className="mb-3"
                  src={FeaturesIcon04}
                  width={56}
                  height={56}
                  alt={
                    <Translate description="Icon 04 alt text">
                      Icon 04
                    </Translate>
                  }
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    <Translate description="Cuckoo Scan title">
                      Cuckoo Scan
                    </Translate>
                  </div>
                  <div className="text-slate-500 mb-3">
                    <Translate description="Cuckoo Scan description">
                      Blockchain explorer to inspect Cuckoo Chain transactions,
                      tokens, and coins. RESTful and GraphQL API available.
                    </Translate>
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                    <Translate description="Link text to learn more about Cuckoo Scan">
                      Learn More
                    </Translate>{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="cursor-pointer carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border-none border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">
                <Translate description="Aria label for previous button">
                  Previous
                </Translate>
              </span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="cursor-pointer carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border-none border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">
                <Translate description="Aria label for next button">
                  Next
                </Translate>
              </span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
