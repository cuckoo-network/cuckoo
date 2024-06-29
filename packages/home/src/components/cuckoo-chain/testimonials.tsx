const TestimonialsImage01 = "/img/cuckoo-chain/testimonial-01.jpg";
const TestimonialsImage02 = "/img/cuckoo-chain/testimonial-02.jpg";
const TestimonialsImage03 = "/img/cuckoo-chain/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-slate-800">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st Testimonial */}
            <article
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <header className="mb-3">
                <img
                  className="rounded-full inline-flex"
                  src={TestimonialsImage01}
                  width={40}
                  height={40}
                  alt="Testimonial 01"
                />
                {/* Stars */}
                <div className="mt-4">
                  <div className="flex space-x-1">
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-500 italic">
                  "Cuckoo Chain revolutionized our AI development with unmatched
                  speed and efficiency. It's a game-changer for any AI-driven
                  blockchain enterprise."
                </p>
              </div>
              <footer className="text-sm text-slate-500 font-medium">
                <div className="text-slate-300 hover:text-white transition duration-150 ease-in-out">
                  Aaliyah Baker
                </div>{" "}
                - <span className="text-indigo-500">DApper OS</span>
              </footer>
            </article>
            {/* 2nd Testimonial */}
            <article
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <header className="mb-3">
                <img
                  className="rounded-full inline-flex"
                  src={TestimonialsImage02}
                  width={40}
                  height={40}
                  alt="Testimonial 02"
                />
                {/* Stars */}
                <div className="mt-4">
                  <div className="flex space-x-1">
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-500 italic">
                  "Integrating Cuckoo Chain was seamless. The performance boost
                  and compatibility with Ethereum are phenomenal."
                </p>
              </div>
              <footer className="text-sm text-slate-500 font-medium">
                <div className="text-slate-300 hover:text-white transition duration-150 ease-in-out">
                  Sloan Seaman
                </div>{" "}
                - <span className="text-indigo-500">Coupang</span>
              </footer>
            </article>
            {/* 3rd Testimonial */}
            <article
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <header className="mb-3">
                <img
                  className="rounded-full inline-flex"
                  src={TestimonialsImage03}
                  width={40}
                  height={40}
                  alt="Testimonial 03"
                />
                {/* Stars */}
                <div className="mt-4">
                  <div className="flex space-x-1">
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button className={"bg-transparent border-0 p-0"}>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-500 italic">
                  "Cuckoo Chain empowered us to create fast, secure
                  decentralized AI apps. The support team is invaluable."
                </p>
              </div>
              <footer className="text-sm text-slate-500 font-medium">
                <div className="text-slate-300 hover:text-white transition duration-150 ease-in-out">
                  Christine Dejoux
                </div>{" "}
                - <span className="text-indigo-500">Glocomms</span>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
