"use client";

import { useState } from "react";
const Illustration = "/img/cuckoo-chain/features-illustration-02.svg";
const FeaturesImage = "/img/cuckoo-chain/features-image.png";

export default function Features02() {
  const [category, setCategory] = useState<string>("1");

  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">
              Features to help you create your best designs
            </h2>
          </div>
          {/* Box */}
          <div className="bg-slate-800 bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "1"
                          ? "text-white bg-indigo-500"
                          : "text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                      }`}
                      onClick={() => setCategory("1")}
                    >
                      Everyone
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "2"
                          ? "text-white bg-indigo-500"
                          : "text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                      }`}
                      onClick={() => setCategory("2")}
                    >
                      Freelancers
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "3"
                          ? "text-white bg-indigo-500"
                          : "text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600"
                      }`}
                      onClick={() => setCategory("3")}
                    >
                      Organizations
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== "1" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">
                      Kickstart your project with these tools
                    </h3>
                    <div className="text-lg text-slate-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur, excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt laborum.
                    </div>
                  </div>
                  <div className={`${category !== "2" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">
                      Tech tools to kickstart freelance life
                    </h3>
                    <div className="text-lg text-slate-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur, excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt laborum.
                    </div>
                  </div>
                  <div className={`${category !== "3" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">
                      Share your plan and clarify project risk
                    </h3>
                    <div className="text-lg text-slate-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur, excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt laborum.
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={FeaturesImage}
                className="md:max-w-none"
                width="480"
                height="414"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
