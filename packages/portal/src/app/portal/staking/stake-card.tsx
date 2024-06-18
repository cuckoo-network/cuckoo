"use client";

import {
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { StakingCard } from "./staking-card";
import { web3BtnPrimaryStyle } from "@/components/ui/web3-button-style";
import { ethers } from "ethers";
import { InputWithUnit } from "@/components/ui/input-with-unit";
import {useStakingContractAddress} from "@/app/portal/staking/contract/staking-contract-artifacts";

const tokenSymbol = "WCAI";

export function StakeCard() {
  const stakingContractAddress = useStakingContractAddress();
  const address = useAddress();
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom",
  );
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(useContractRead(staking, "stakingToken").data, "token");
  const { data: stakingTokenBalance, isLoading: isLoadingTokenBalance } =
    useTokenBalance(stakingToken, address);
  const [amountToStake, setAmountToStake] = useState(0);

  return (
    <StakingCard
      balance={
        "Available " +
        (stakingTokenBalance?.displayValue ?? 0) +
        ` ${tokenSymbol}`
      }
      isLoading={
        isStakingLoading || isStakingTokenLoading || isLoadingTokenBalance
      }
    >
      <InputWithUnit
        type="number"
        placeholder=""
        value={amountToStake}
        onChange={(e: any) => setAmountToStake(e.target.value)}
        unit={tokenSymbol}
      />
      <Web3Button
        style={web3BtnPrimaryStyle}
        contractAddress={stakingContractAddress}
        action={async (contract) => {
          try {
            const amount = ethers.utils.parseEther(String(amountToStake));
            await stakingToken?.call("approve", [
              stakingContractAddress,
              amount,
            ]);
            await contract.call("stake", [amount]);
            alert("Tokens staked successfully!");
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Stake
      </Web3Button>
    </StakingCard>
  );
}
