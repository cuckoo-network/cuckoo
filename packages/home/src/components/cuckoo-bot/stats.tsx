export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Empower Your Creative Process</h1>
            <p className="text-xl dark:text-gray-400 text-gray-500">
              Designed to fit seamlessly into your team's workflow, Cuckoo Bot
              simplifies collaboration and maximizes productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                5K
              </div>
              <div
                className="dark:text-lg text-gray-400 text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Creators <br />
                Trusted by global visual artists.
              </div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                147%
              </div>
              <div
                className="dark:text-lg text-gray-400 text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Productivity Boost <br /> Achieve more in less time.
              </div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-purple-600 mb-2"
                data-aos="fade-up"
              >
                $20M
              </div>
              <div
                className="dark:text-lg text-gray-400 text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Value Locked
                <br />
                Secure transactions onchain.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
