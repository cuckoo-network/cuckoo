"use client";

import { useEffect } from "react";

import Client01 from "./svg/client-01.svg";
import Client02 from "./svg/client-02.svg";
import Client03 from "./svg/client-03.svg";
import Client04 from "./svg/client-04.svg";
import Client05 from "./svg/client-05.svg";
import Client06 from "./svg/client-06.svg";
import Client07 from "./svg/client-07.svg";
import Client08 from "./svg/client-08.svg";
import Client09 from "./svg/client-09.svg";
import { useAos } from "@site/src/hooks/use-aos";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay]);

export default function Clients() {
  useAos();

  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section>
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="zoom-out"
      >
        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Client01 width={110} height={21} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Client02 alt="Client 02" width={200} height={36} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Client03
                    className="mt-1"
                    alt="Client 03"
                    width={107}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Client04 alt="Client 04" width={85} height={36} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src="https://tp-misc.b-cdn.net/blockeden/Stability+AI+logo.png"
                    style={{
                      width: "120px",
                      height: "26px",
                      filter: "grayscale(1) brightness(0.85)",
                    }}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Client06 alt="Client 06" width={78} height={34} />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src="https://tp-misc.b-cdn.net/blockeden/iotex-logo.png"
                    style={{
                      width: "120px",
                      height: "36px",
                      filter: "grayscale(1)",
                    }}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Client08 alt="Client 08" width={98} height={26} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Client09
                    className="mt-2"
                    alt="Client 09"
                    width={92}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
