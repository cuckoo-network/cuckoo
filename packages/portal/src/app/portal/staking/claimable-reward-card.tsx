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
import {useStakingContractAddress} from "@/app/portal/staking/contract/staking-contract-artifacts";

const tokenSymbol = "WCAI";

export function ClaimableRewardCard() {
  const address = useAddress();
  const stakingContractAddress = useStakingContractAddress();
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
        "Rewarded " +
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
