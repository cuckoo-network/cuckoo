"use client";

import {
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import { StakingCard } from "./staking-card";
import { web3BtnOutlineStyle } from "@/components/ui/web3-button-style";
import { ethers } from "ethers";

const stakingContractAddress = "0x4a32b8dEdA26902591aBc00c9DaC82bf6dc90124";
const tokenSymbol = "WCAI";

export function ClaimableRewardCard() {
  const address = useAddress();
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom",
  );
  const { data: stakeInfo, isLoading: isStakeInfoLoading } = useContractRead(
    staking,
    "getStakeInfo",
    [address || "0"],
  );

  return (
    <StakingCard
      isLoading={isStakeInfoLoading}
      balance={
        "Available " +
        ethers.utils.formatEther(stakeInfo?.[1] || 0) +
        ` ${tokenSymbol}`
      }
    >
      <Web3Button
        style={web3BtnOutlineStyle}
        contractAddress={stakingContractAddress}
        action={async (contract) => {
          await contract.call("claimRewards", []);
          alert("Rewards claimed successfully!");
        }}
      >
        Claim rewards
      </Web3Button>
    </StakingCard>
  );
}
