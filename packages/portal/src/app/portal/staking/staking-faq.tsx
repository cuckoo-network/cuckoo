import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stakingFaqs = [
  {
    q: "What is staking?",
    a: "Staking on the Cuckoo Network involves locking up CAI tokens to support the network's operations and security. By staking, you participate in the network's decentralized AI model inference mechanism, help create transactions, and earn rewards in return. Staking is a way to contribute to the network's stability while potentially earning passive income.",
  },
  {
    q: "Why should I stake?",
    a: "There are several benefits to staking on the Cuckoo Network:\n\n1. Earn Rewards: You can earn additional CAI tokens as rewards for supporting the network.\n2. Participate in Governance: Staking allows you to have a say in the network's future by voting on proposals.\n3. Support Network Security: Your stake helps secure the network against potential attacks.\n4. Contribute to Decentralization: By staking, you help distribute the network's power more widely.\n5. Potential for Increased Returns: As the network grows, the value of your staked tokens may increase.",
  },
  // {
  //   q: "How do I start staking?",
  //   a: "To start staking on the Cuckoo Network:\n\n1. Get CAI tokens from the Cuckoo Network faucet or bridge.\n2. Visit the staking portal at https://cuckoo.network/portal/staking/testnet.\n3. Connect your wallet containing CAI tokens.\n4. Choose the amount you want to stake.\n5. Select a validator or node to delegate your stake to.\n6. Confirm the transaction and pay any associated gas fees.\n\nOnce your stake is confirmed, you'll start earning rewards based on network activity and your stake amount."
  // },
  // {
  //   q: "Any advice for selecting a node to vote?",
  //   a: "When selecting a node to vote or delegate your stake to, consider the following factors:\n\n1. Reputation: Look for nodes with a good track record of reliability and uptime.\n2. Commission Rates: Compare the fees charged by different nodes.\n3. Total Stake: A higher total stake can indicate trust from other stakers.\n4. Community Engagement: Nodes that actively participate in the community may be more reliable.\n5. Performance History: Check if the node has a history of missing blocks or being slashed.\n6. Decentralization: Consider supporting smaller nodes to help maintain network decentralization.\n\nRemember to do your own research and potentially distribute your stake across multiple nodes to minimize risk."
  // },
];

function convertToParagraphs(text: string): string {
  return text
    .split("\n")
    .map((paragraph) => `<p>${paragraph.trim()}</p>`)
    .join("");
}

export const StakingFaq = () => {
  return (
    <>
      <h2>FAQs</h2>
      <Accordion type="single" collapsible className="w-full">
        {stakingFaqs.map((aq) => (
          <AccordionItem key={aq.q} value={aq.q}>
            <AccordionTrigger>{aq.q}</AccordionTrigger>
            <AccordionContent>
              <div
                dangerouslySetInnerHTML={{ __html: convertToParagraphs(aq.a) }}
              ></div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
