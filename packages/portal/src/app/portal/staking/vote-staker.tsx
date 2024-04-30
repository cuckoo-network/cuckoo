import { useEffect, useState } from "react";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { StakingCard } from "@/app/portal/staking/staking-card";

const votingContractAddress = "0xb67546A23f64bA855dff44F07B8d69b547D521b8";
const contractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getVotersForStaker",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "voteForStaker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "voteesToVoters",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const VoteStaker = () => {
  const { contract: voting, isLoading: isStakingLoading } = useContract(
    votingContractAddress,
    contractABI,
  );
  const address = useAddress();
  const [vote, setVote] = useState(""); // State to store the vote result
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchVotes = async () => {
      if (!voting || !address) return;

      setLoading(true);
      try {
        const result = await voting?.call("votes", [address]);
        setVote(result);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch votes:", error);
        setLoading(false);
      }
    };

    fetchVotes();
  }, [voting, address]); // Depend on voting and address to refetch when they change

  return (
    <StakingCard
      title={"You Voted for"}
      balance={
        loading
          ? shortenHash("0x000000000000000000000000000000000000000000")
          : shortenHash(vote) || "No vote found"
      }
    />
  );
};

function shortenHash(addr: string): string {
  try {
    return `${addr.slice(0, 8)}-${addr.slice(addr.length - 6, addr.length)}`;
  } catch (err) {
    return "";
  }
}
