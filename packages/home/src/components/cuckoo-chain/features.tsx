"use client";

import { useEffect } from "react";
const Illustration = "/img/cuckoo-chain/features-illustration.svg";
const FeaturesIcon01 = "/img/cuckoo-chain/features-icon-01.svg";
const FeaturesIcon02 = "/img/cuckoo-chain/features-icon-02.svg";
const FeaturesIcon03 = "/img/cuckoo-chain/features-icon-03.svg";
const FeaturesIcon04 = "/img/cuckoo-chain/features-icon-04.svg";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation]);

export default function Features() {
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
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Many tools to express your creativity
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
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
                  alt="Icon 01"
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    Collaboration
                  </div>
                  <div className="text-slate-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <img
                  className="mb-3"
                  src={FeaturesIcon02}
                  width={56}
                  height={56}
                  alt="Icon 02"
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    Experiences
                  </div>
                  <div className="text-slate-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-slate-800 p-6 rounded">
                <img
                  className="mb-3"
                  src={FeaturesIcon03}
                  width={56}
                  height={56}
                  alt="Icon 03"
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    Animation
                  </div>
                  <div className="text-slate-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
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
                  alt="Icon 04"
                />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl">
                    Modeling
                  </div>
                  <div className="text-slate-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
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
