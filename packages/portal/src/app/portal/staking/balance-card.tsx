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
import { Input } from "@/components/ui/input";
import { web3BtnPrimaryStyle } from "@/components/ui/web3-button-style";
import { ethers } from "ethers";
import { InputWithUnit } from "@/components/ui/input-with-unit";

const stakingContractAddress = "0x4a32b8dEdA26902591aBc00c9DaC82bf6dc90124";
const tokenSymbol = "WCAI";

export function BalanceCard() {
  const address = useAddress();
  const { contract: staking } = useContract(stakingContractAddress, "custom");
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(useContractRead(staking, "stakingToken").data, "token");
  const { data: stakingTokenBalance } = useTokenBalance(stakingToken, address);
  const [amountToStake, setAmountToStake] = useState(0);

  return (
    <StakingCard
      balance={
        "Available " +
        (stakingTokenBalance?.displayValue ?? 0) +
        ` ${tokenSymbol}`
      }
      isLoading={isStakingTokenLoading}
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
          await stakingToken?.setAllowance(
            stakingContractAddress,
            amountToStake,
          );
          await contract.call("stake", [
            ethers.utils.parseEther(String(amountToStake)),
          ]);
          alert("Tokens staked successfully!");
        }}
      >
        Stake
      </Web3Button>
    </StakingCard>
  );
}
