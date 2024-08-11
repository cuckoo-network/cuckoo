"use client";

import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from '@docusaurus/Translate';

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true);
  const Illustration = useBaseUrl("/img/cuckoo-chain/pricing-illustration.svg");

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
          alt={translate({
            message: "Pricing Illustration",
            description: "Alt text for the pricing section illustration",
          })}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              <Translate description="Title for the pricing section">
                Fundamentally Aligned with Ethereum
              </Translate>
            </h2>
            <p className="text-xl text-slate-500">
              <Translate description="Description for the pricing section">
                But optimized for performance and on-chain AI
              </Translate>
            </p>
          </div>
          {/* Pricing tables */}
          <div className="grid md:grid-cols-6">
            {/* Pricing toggle */}
            <div className="flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="flex justify-center md:justify-start items-center space-x-4 hidden">
                <div className="text-sm text-slate-500 font-medium min-w-[6rem] md:min-w-0 text-right">
                  <Translate description="Label for the monthly payment option">
                    Monthly
                  </Translate>
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
                    <span className="sr-only">
                      <Translate description="Screen reader label for toggling to pay annually">
                        Pay annually
                      </Translate>
                    </span>
                  </label>
                </div>
                <div className="text-sm text-slate-500 font-medium min-w-[6rem]">
                  <Translate description="Label for the yearly payment option">
                    Yearly
                  </Translate> <span className="text-emerald-500">(-20%)</span>
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
                <Translate description="Infra section label">
                  Infra
                </Translate>
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                <Translate description="Infra section label for mobile view">
                  Infra
                </Translate>
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                <Translate description="Infra section label for mobile view">
                  Infra
                </Translate>
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                <Translate description="Infra section label for mobile view">
                  Infra
                </Translate>
              </span>
            </div>
            {/* Admins & Members */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">
                <Translate description="Label for maximum theoretical transactions per second">
                  Max Theoretical TPS
                </Translate>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for maximum theoretical transactions per second in mobile view">
                  Max Theoretical TPS
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for maximum theoretical transactions per second in mobile view">
                  Max Theoretical TPS
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                119 tx/s
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for maximum theoretical transactions per second in mobile view">
                  Max Theoretical TPS
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                40,000 tx/s
              </div>
            </div>
            {/* Fastest Block Time */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:col-span-3">
              <div className="text-slate-200">
                <Translate description="Label for the fastest block time">
                  Fastest Block Time
                </Translate>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the fastest block time in mobile view">
                  Fastest Block Time
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the fastest block time in mobile view">
                  Fastest Block Time
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                12.04s
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the fastest block time in mobile view">
                  Fastest Block Time
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                0.25s
              </div>
            </div>
            {/* Governance Model */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">
                <Translate description="Label for the governance model">
                  Governance Model
                </Translate>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the governance model in mobile view">
                  Governance Model
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the governance model in mobile view">
                  Governance Model
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                Off-chain
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the governance model in mobile view">
                  Governance Model
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                On-chain
              </div>
            </div>
            {/* Features label */}
            <div className="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:col-span-3">
              <span className="text-xs uppercase font-semibold text-slate-500">
                <Translate description="Label for the features section">
                  Features
                </Translate>
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-1 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                <Translate description="Label for the features section in mobile view">
                  Features
                </Translate>
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-2 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                <Translate description="Label for the features section in mobile view">
                  Features
                </Translate>
              </span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-700 bg-opacity-25 md:border-l border-slate-700 order-3 md:order-none">
              <span className="md:hidden text-xs uppercase font-semibold text-slate-500">
                <Translate description="Label for the features section in mobile view">
                  Features
                </Translate>
              </span>
            </div>
            {/* Avg. Gas Price */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">
                <Translate description="Label for the average gas price">
                  Avg. Gas Price
                </Translate>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the average gas price in mobile view">
                  Avg. Gas Price
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the average gas price in mobile view">
                  Avg. Gas Price
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                $0.2493
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for the average gas price in mobile view">
                  Avg. Gas Price
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center">
                $0.000000004
              </div>
            </div>
            {/* EVM Compatible */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:col-span-3">
              <div className="text-slate-200">
                <Translate description="Label for EVM compatibility">
                  EVM Compatible
                </Translate>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for EVM compatibility in mobile view">
                  EVM Compatible
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for EVM compatibility in mobile view">
                  EVM Compatible
                </Translate>
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
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 bg-opacity-70 md:border-l border-slate-700 order-3 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for EVM compatibility in mobile view">
                  EVM Compatible
                </Translate>
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
            {/* Decentralized Ledger */}
            <div className="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-800 md:col-span-3">
              <div className="text-slate-200">
                <Translate description="Label for decentralized ledger">
                  Decentralized Ledger
                </Translate>
              </div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-1 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for decentralized ledger in mobile view">
                  Decentralized Ledger
                </Translate>
              </div>
              <div className="text-sm font-medium text-slate-200 text-center"></div>
            </div>
            <div className="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-800 md:border-l border-slate-700 order-2 md:order-none">
              <div className="md:hidden text-slate-200">
                <Translate description="Label for decentralized ledger in mobile view">
                  Decentralized Ledger
                </Translate>
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
                <Translate description="Label for decentralized ledger in mobile view">
                  Decentralized Ledger
                </Translate>
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
