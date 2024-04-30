import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styles from "./styles/Home.module.css";
import { useAddress, useContract } from "@thirdweb-dev/react";

const votingContractAddress = "0xb67546A23f64bA855dff44F07B8d69b547D521b8";
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      }
    ],
    "name": "getVotersForStaker",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      }
    ],
    "name": "voteForStaker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "voteesToVoters",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "votes",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
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
    <div className={styles.card}>
      <h2>You Voted for</h2>
      <pre>{loading ? <span>0x000000000000000000000000000000000000000000</span> : <span>{vote || "No vote found"}</span>}</pre>
    </div>
  );
};
