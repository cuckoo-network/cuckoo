"use client";

import {
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { StakingCard } from "./staking-card";
import { web3BtnOutlineStyle } from "@/components/ui/web3-button-style";
import { ethers } from "ethers";
import { Input } from "@/components/ui/input";
import { InputWithUnit } from "@/components/ui/input-with-unit";

const stakingContractAddress = "0x4a32b8dEdA26902591aBc00c9DaC82bf6dc90124";
const tokenSymbol = "WCAI";

export function UntakeCard() {
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
  const [amountToStake, setAmountToStake] = useState(0);

  return (
    <StakingCard
      isLoading={isStakeInfoLoading}
      balance={
        "Staked " +
        ethers.utils.formatEther(stakeInfo?.[0] || 0) +
        ` ${tokenSymbol}`
      }
    >
      <InputWithUnit
        type="number"
        placeholder=""
        value={amountToStake}
        unit={tokenSymbol}
        onChange={(e: any) => setAmountToStake(e.target.value)}
      />
      <Web3Button
        style={web3BtnOutlineStyle}
        contractAddress={stakingContractAddress}
        action={async (contract) => {
          await contract.call("withdraw", [
            ethers.utils.parseEther(String(amountToStake)),
          ]);
          alert("Tokens unstaked successfully!");
        }}
      >
        Unstake
      </Web3Button>
    </StakingCard>
  );
}
