"use client";

import { useState } from "react";
const Illustration = "/img/cuckoo-chain/pricing-illustration.svg";

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true);

  return (
    <section className="relative">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none"
          alt="Pricing Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Fundamentally Aligned with Ethereum
            </h2>
            <p className="text-xl text-slate-500">
              But optimized for performance and on-chain AI
            </p>
          </div>
          {/* Pricing tables */}
          <div className="grid md:grid-cols-6">
            {/* Pricing toggle */}
            <div className="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="flex justify-center md:justify-start items-center space-x-4 hidden">
                <div className="text-sm text-slate-500 font-medium min-w-[6rem] md:min-w-0 text-right">
                  Monthly
                </div>
                <div className="form-switch shrink-0">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    checked={annual}
                    onChange={() => setAnnual(!annual)}
                  />
                  <label className="bg-slate-900" htmlFor="toggle">
                    <span className="bg-slate-200" aria-hidden="true" />
                    <span className="sr-only">Pay annually</span>
                  </label>
                </div>
                <div className="text-sm text-slate-500 font-medium min-w-[6rem]">
                  Yearly <span className="text-emerald-500">(-20%)</span>
                </div>
              </div>
            </div>
            {/* Starter price */}
            <div className="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none md:text-center mt-6 md:mt-0"></div>
            {/* Agency price */}
            <div className="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none md:text-center mt-6 md:mt-0">
              <div className="font-hkgrotesk text-lg font-bold text-indigo-500 mb-0.5">
                Ethereum
              </div>
            </div>
            {/* Team price */}
            <div className="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none md:text-center mt-6 md:mt-0">
              <div className="font-hkgrotesk text-lg font-bold text-indigo-500 mb-0.5">
                Cuckoo Chain
              </div>
            </div>
            {/* Infra label */}
            <div className="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:col-span-3">
              <span className="text-xs uppercase font-semibold text-slate-500">
                Infra
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Infra
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Infra
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Infra
              </span>
            </div>
            {/* Admins & Members */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">Max Theoretical TPS</div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                Max Theoretical TPS
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                Max Theoretical TPS
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                119 tx/s
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                Max Theoretical TPS
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                40,000 tx/s
              </div>
            </div>
            {/* Fastest Block Time */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:col-span-3">
              <div className="text-slate-200">Fastest Block Time</div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">Fastest Block Time</div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">Fastest Block Time</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                12.04s
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">Fastest Block Time</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                0.25s
              </div>
            </div>
            {/* Governance Model */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">Governance Model</div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">Governance Model</div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">Governance Model</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                Off-chain
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">Governance Model</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                On-chain
              </div>
            </div>
            {/* Features label */}
            <div className="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:col-span-3">
              <span className="text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                Features
              </span>
            </div>
            {/* Avg. Gas Price */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">Avg. Gas Price</div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">Avg. Gas Price</div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">Avg. Gas Price</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                $0.2493
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">Avg. Gas Price</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                $0.000000004
              </div>
            </div>
            {/* EVM Compatible */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:col-span-3">
              <div className="text-slate-200">EVM Compatible</div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">EVM Compatible</div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">EVM Compatible</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">EVM Compatible</div>
              <div className="text-sm font-medium text-slate-200 text-center">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            {/* Decentralized Ledger */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">Decentralized Ledger</div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                Decentralized Ledger
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                Decentralized Ledger
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                Decentralized Ledger
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            {/* CTA row */}
          </div>
        </div>
      </div>
    </section>
  );
}
