import { useState } from "react";
import { useAos } from "@site/src/hooks/use-aos";
import Translate from '@docusaurus/Translate';

export function Ecosystem() {
  const [category, setCategory] = useState<string>("1");
  useAos();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="zoom-out">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h3 className="h3 font-uncut-sans">
              <Translate description="Section header title">
                Experience Decentralized AI Now
              </Translate>
            </h3>
          </div>
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center -m-2.5">
                <div className={`${category === "1" && "rotate-2"}`}>
                  <button
                    className={`cursor-pointer relative font-medium px-3 py-1.5 bg-gray-800 rounded-full inline-flex m-2.5 group before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:rounded-full ${category === "1" ? "shadow-lg shadow-blue-500/25 before:via-gray-300" : "before:via-gray-600"}`}
                    onClick={() => setCategory("1")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 shrink-0 fill-gray-400 mr-2 ${category === "1" && "fill-white"}`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.999 9.012a.999.999 0 0 1-.706-1.707l3.496-3.5a.998.998 0 0 1 1.413 0l2.29 2.293 2.79-2.793a.998.998 0 1 1 1.413 1.414l-3.496 3.5a.998.998 0 0 1-1.413 0l-2.29-2.293-2.79 2.793a.998.998 0 0 1-.707.293Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${category === "1" ? "text-blue-500" : "text-gray-400 group-hover:text-gray-300"}`}
                      >
                        <Translate description="Button label for AI Enthusiasts">
                          For AI Enthusiasts
                        </Translate>
                      </span>
                    </div>
                  </button>
                </div>
                <div className={`${category === "2" && "rotate-2"}`}>
                  <button
                    className={`cursor-pointer relative font-medium px-3 py-1.5 bg-gray-800 rounded-full inline-flex m-2.5 group before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:rounded-full ${category === "2" ? "shadow-lg shadow-blue-500/25 before:via-gray-300" : "before:via-gray-600"}`}
                    onClick={() => setCategory("2")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 shrink-0 fill-gray-400 mr-2 ${category === "2" && "fill-white"}`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${category === "2" ? "text-blue-500" : "text-gray-400 group-hover:text-gray-300"}`}
                      >
                        <Translate description="Button label for Developers">
                          For Developers
                        </Translate>
                      </span>
                    </div>
                  </button>
                </div>
                <div className={`${category === "3" && "rotate-2"}`}>
                  <button
                    className={`cursor-pointer relative font-medium px-3 py-1.5 bg-gray-800 rounded-full inline-flex m-2.5 group before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:rounded-full ${category === "3" ? "shadow-lg shadow-blue-500/25 before:via-gray-300" : "before:via-gray-600"}`}
                    onClick={() => setCategory("3")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 shrink-0 fill-gray-400 mr-2 ${category === "3" && "fill-white"}`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.334 8.06a.5.5 0 0 0-.421-.237 6.023 6.023 0 0 1-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 0 0-.614-.586 6 6 0 1 0 6.832 8.529.5.5 0 0 0-.017-.485Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${category === "3" ? "text-blue-500" : "text-gray-400 group-hover:text-gray-300"}`}
                      >
                        <Translate description="Button label for Miners">
                          For Miners
                        </Translate>
                      </span>
                    </div>
                  </button>
                </div>
                <div className={`${category === "4" && "rotate-2"}`}>
                  <button
                    className={`cursor-pointer relative font-medium px-3 py-1.5 bg-gray-800 rounded-full inline-flex m-2.5 group before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:rounded-full ${category === "4" ? "shadow-lg shadow-blue-500/25 before:via-gray-300" : "before:via-gray-600"}`}
                    onClick={() => setCategory("4")}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`w-3 h-3 shrink-0 fill-gray-400 mr-2 ${category === "4" && "fill-white"}`}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span
                        className={`transition duration-150 ease-in-out ${category === "4" ? "text-blue-500" : "text-gray-400 group-hover:text-gray-300"}`}
                      >
                        <Translate description="Button label for Token Holders">
                          For Token Holders
                        </Translate>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Boxes */}
            <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-1 md:grid-cols-4 sm:gap-x-6 sm:gap-y-8 items-start">
              {/* 1st Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["1"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://cuckoo.network/tg"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="26"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.956.378a.47.47 0 0 0-.32-.347 1.662 1.662 0 0 0-.866.061S1.494 6.968.393 7.73c-.236.164-.316.26-.355.371-.19.546.402.78.402.78l4.968 1.607c.084.015.17.01.252-.015 1.13-.708 11.366-7.126 11.961-7.342.092-.027.162 0 .144.069-.237.823-9.083 8.622-9.131 8.669a.181.181 0 0 0-.066.16l-.464 4.815s-.194 1.498 1.315 0a42.204 42.204 0 0 1 2.612-2.373c1.708 1.171 3.546 2.466 4.339 3.143.27.26.633.398 1.008.385a1.13 1.13 0 0 0 .964-.849s3.51-14.03 3.627-15.909c.012-.182.028-.302.03-.428a1.591 1.591 0 0 0-.043-.435Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold mb-1">
                  <Translate description="Telegram Box Title">Cuckoo Telegram</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Telegram Box Description">
                    A telegram bot for texting to image and manage your CAI tokens.
                  </Translate>
                </p>
              </a>
              {/* 2nd Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["1"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="#0"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="24"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.317 1.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0C9.095.88 8.852.406 8.641.037A.077.077 0 0 0 8.562 0c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.12.097.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.964 19.964 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.839-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 12.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold mb-1">
                  <Translate description="Discord Box Title">Cuckoo Discord</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Discord Box Description">
                    A discord bot for texting to image and manage your CAI tokens.
                  </Translate>
                </p>
              </a>
              {/* 3rd Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${![].includes(category) && "hidden"}`}
                target={"_blank"}
                href="#0"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="22"
                    height="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.083 0H.917A.917.917 0 0 0 0 .917v20.166c0 .507.41.917.917.917h20.166c.507 0 .917-.41.917-.917V.917A.917.917 0 0 0 21.083 0Zm-2.145 4.686L17.651 5.92a.376.376 0 0 0-.143.361v9.068a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.271l1.3-1.264c.128-.128.128-.166.128-.361V7.99l-3.621 9.2h-.489l-4.213-9.2v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271h-4.8v-.271l1.691-2.054a.82.82 0 0 0 .218-.707V7.027a.625.625 0 0 0-.2-.527L3.019 4.686v-.271h4.674l3.613 7.924 3.176-7.924h4.456v.271Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold mb-1">
                  <Translate description="Medium Box Title">Neon Medium</Translate>
                </div>
              </a>
              {/* 4th Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["2"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://blockeden.xyz/api-marketplace/cuckoo-ai"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z"
                      fillRule="nonzero"
                      fillOpacity=".64"
                    />
                    <rect width="14" height="17" rx="1" />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold mb-1">
                  <Translate description="BlockEden Box Title">BlockEden.xyz</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="BlockEden Box Description">
                    RPC node, API marketplace, and staking infrastructure.
                  </Translate>
                </p>
              </a>
              {/* 5th Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["1"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://cuckoo.network/portal/art"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z"
                      fillRule="nonzero"
                      fillOpacity=".64"
                    />
                    <rect width="14" height="17" rx="1" />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
                  <Translate description="Cuckoo Art Box Title">Cuckoo Art</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Cuckoo Art Box Description">
                    Discover AI arts created in our network.
                  </Translate>
                </p>
              </a>
              {/* 6th Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["1", "4"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://karmapi.ai/"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="22"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.083 0H.917C.41 0 0 .448 0 1v16c0 .552.41 1 .917 1h20.166c.507 0 .917-.448.917-1V1c0-.552-.41-1-.917-1ZM9 13V5l6 4-6 4Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold mb-1">
                  <Translate description="Karma Protocol Box Title">Karma Protocol</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Karma Protocol Box Description">
                    A revolutionary prediction market, driven by Community.
                  </Translate>
                </p>
              </a>
              {/* 7th Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["2"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://github.com/cuckoo-network/cuckoo"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
                  <Translate description="Cuckoo Github Box Title">Cuckoo Github</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Cuckoo Github Box Description">
                    Fork us on Github for open-sourced decentralized AI platform.
                  </Translate>
                </p>
              </a>
              {/* 8th Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["3"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://github.com/cuckoo-network/cuckoo/tree/main/packages/node"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
                  <Translate description="Cuckoo Node Box Title">Cuckoo Node</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Cuckoo Node Box Description">
                    Node for mining tokens, distributed with Docker images.
                  </Translate>
                </p>
              </a>
              {/* 9th Box */}
              <a
                className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ${!["4"].includes(category) && "hidden"}`}
                target={"_blank"}
                href="https://cuckoo.network/staking"
              >
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                  <svg
                    className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                    width="23"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z"
                      fillRule="nonzero"
                      fillOpacity=".64"
                    />
                    <rect width="14" height="17" rx="1" />
                  </svg>
                </div>
                <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
                  <Translate description="Staking Portal Box Title">Staking Portal</Translate>
                </div>
                <p className="text-gray-100">
                  <Translate description="Staking Portal Box Description">
                    Stake your token to vote for Node operators you trust
                  </Translate>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
