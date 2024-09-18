import Translate, { translate } from '@docusaurus/Translate';

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3" data-aos="fade-up">
              <Translate description={"section title for target customers"}>From AI builders to consumers, we got you covered.</Translate>
            </h3>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <img
                  className="mx-auto md:max-w-none"
                  src={"https://cuckoo-network.b-cdn.net/cuckoo-home-demo.webp"}
                  style={{
                    width: "100%",
                  }}
                  alt={translate({
                    message: 'Features 02',
                    description: 'Alt text for the image'
                  })}
                />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div
                    className="font-architects-daughter text-xl text-purple-600 mb-2"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <Translate description={"a card description to explain what to do"}>Get rewarded by contributing to Gen AI</Translate>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-purple-600">.</span>{' '}
                      <Translate description={"a card title for a group of user"}>For AI Consumers</Translate>
                    </h4>
                    <p className="text-lg text-gray-400">
                      <Translate description={"a card description to explain what to do"}>
                        Access a variety of AI apps for free, by contributing to the ecosystem or using Cuckoo Pay. If one app is blocked, seamlessly switch to another coordinator within the decentralized network.
                      </Translate>
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-teal-500">.</span>{' '}
                      <Translate>For App Builders/Coordinators</Translate>
                    </h4>
                    <p className="text-lg text-gray-400">
                      <Translate>
                        Run a coordinator node, stake to join the network, and earn staking rewards. Reduce GPU costs, expand your customer base, assign tasks to GPU miners, validate results, and distribute payments.
                      </Translate>
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-pink-500">.</span>{' '}
                      <Translate description={"a card description to a specific user group"}>For GPU Miners</Translate>
                    </h4>
                    <p className="text-lg text-gray-400">
                      <Translate description={"a card description to explain what to do"}>
                        Run a miner node, stake to join the network, and earn staking rewards. Share your GPU resources, complete assigned tasks, and maintain reliable service to earn tokens.
                      </Translate>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
