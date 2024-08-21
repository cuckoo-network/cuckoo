"use client";

import { MinerTable } from "@/app/portal/staking/miner-table";
import { Button } from "@/components/ui/button";
import { GetCaiBanner } from "@/components/get-cai-banner";

export const MiningHome = () => {
  return (
    <>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic">
        The Mining Portal is still work in progress.
      </blockquote>

      <Banner />

      <GetCaiBanner />

      <MinerTable />
    </>
  );
};

const Banner = () => {
  return (
    <div className="max-w-6xl">
      <div
        className="relative bg-gradient-to-tr from-blue-600 to-purple-500 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden aos-init aos-animate"
        data-aos="zoom-out"
      >
        <div
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10"
          aria-hidden="true"
        >
          <svg width={582} height={662} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter
                x="-37.5%"
                y="-37.5%"
                width="175%"
                height="175%"
                filterUnits="objectBoundingBox"
                id="b"
              >
                <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
              </filter>
              <filter
                x="-37.5%"
                y="-37.5%"
                width="175%"
                height="175%"
                filterUnits="objectBoundingBox"
                id="c"
              >
                <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
              </filter>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stopColor="#60A5FA" stopOpacity={0} offset="0%" />
                <stop stopColor="#F656AA" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <circle
                fill="url(#a)"
                filter="url(#b)"
                cx={314}
                cy={278}
                r={200}
              />
              <circle
                fillOpacity="0.2"
                fill="#111827"
                filter="url(#c)"
                cx={518}
                cy={345}
                r={200}
              />
            </g>
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
            <h3 className="text-4xl font-bold font-uncut-sans mb-2">
              Earn 300 $CAI Daily by Running a Miner Node
            </h3>
          </div>
          <div className="shrink-0">
            <Button href="https://cuckoo.network/docs/Cuckoo%20AI/ai-node">
              Check the Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
