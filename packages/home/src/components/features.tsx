import { useAos } from "@site/src/hooks/use-aos";

export function Features() {
  useAos();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <h3 className="h3 font-uncut-sans" data-aos="zoom-out">
              AI is centralized by big corporations and so is GPU resources
            </h3>
            <p className="text-xl text-gray-400">
              Cuckoo decentralizes AI with computing resource sharing and
              tokenomics from multichain.
            </p>
          </div>
          <div className="pb-16 flex flex-col" data-aos="zoom-out">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://customer-wmy0lgubd5pjy3fx.cloudflarestream.com/d5b2ca9a50526dd1151e5126cd212dcd/iframe?poster=https%3A%2F%2Fcustomer-wmy0lgubd5pjy3fx.cloudflarestream.com%2Fd5b2ca9a50526dd1151e5126cd212dcd%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                loading="lazy"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </div>
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div className="flex flex-col items-center" data-aos="zoom-out">
              <div className="mb-4">
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="89.85%"
                      id="icon1-b"
                    >
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop
                        stopColor="#F472B6"
                        stopOpacity=".876"
                        offset="100%"
                      />
                    </radialGradient>
                    <circle id="icon1-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon1-b)" xlinkHref="#icon1-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M17 28h22" opacity=".64" />
                      <path d="M20 23v-3h3M33 20h3v3M36 33v3h-3M23 36h-3v-3" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">What is it?</h4>
              <p className="text-lg text-gray-400 text-center">
                Decentralized model serving with shared computing resources,
                coordinated by staking and slashing
              </p>
            </div>
            {/* 2nd item */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="mb-4">
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="89.85%"
                      id="icon2-b"
                    >
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop
                        stopColor="#F472B6"
                        stopOpacity=".876"
                        offset="100%"
                      />
                    </radialGradient>
                    <circle id="icon2-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon2-b)" xlinkHref="#icon2-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m22 24-4 4 4 4M34 24l4 4-4 4" />
                      <path d="m26 36 4-16" opacity=".64" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">How to GTM?</h4>
              <p className="text-lg text-gray-400 text-center">
                We build the value chain with Web3 and AI companies and word of
                mouth with end customers
              </p>
            </div>
            {/* 3rd item */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <div className="mb-4">
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="89.85%"
                      id="icon3-b"
                    >
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop
                        stopColor="#F472B6"
                        stopOpacity=".876"
                        offset="100%"
                      />
                    </radialGradient>
                    <circle id="icon3-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon3-b)" xlinkHref="#icon3-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m18 31 4 4 12-15" />
                      <path d="M39 25h-3M39 30h-7M39 35H28" opacity=".64" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">
                Why choose it?
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Cuckoo enpowers AI consumers and builders in a democratized way,
                so that everyone can contribute or earn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
