"use client";

import {
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import {useCallback, useEffect, useState} from "react";
import {
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { VoteStaker } from "@/app/portal/staking/vote-staker";
import { StakingCard } from "./staking-card";
import {web3BtnOutlineStyle, web3BtnPrimaryStyle} from "@/components/ui/web3-button-style";

const stakingContractAddress = "0x40977db70eCE7DC7A4538151aD3AB8cb7490226B";

export function StakingHome() {
  const address = useAddress();

  const staking = useContract(stakingContractAddress, "custom", ).contract;
  const stakingToken = useContract(
    useContractRead(staking, "stakingToken").data,
    "token",
  ).contract;
  const rewardToken = useContract(
    useContractRead(staking, "rewardToken").data,
    "token",
  ).contract;

  const stakingTokenBalance = useTokenBalance(stakingToken, address).data;

  const stakeInfo = useContractRead(staking, "getStakeInfo", [
    address || "0",
  ]).data;

  const refetchData = useCallback(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTokenBalance(stakingToken, address).refetch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTokenBalance(rewardToken, address).refetch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useContractRead(staking, "getStakeInfo", [address || "0"]).refetch();
  }, [address, rewardToken, staking, stakingToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, [refetchData]);
  const [amountToStake, setAmountToStake] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Staking
        </CardTitle>
        <CardDescription>
          Stake CUC to secure the decentralized AI Platform and get 6% yearly.
        </CardDescription>
      </div>

      <div className="grid auto-rows-max items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2 lg:gap-8">
        <StakingCard
          title="Your token balance"
          balance={stakingTokenBalance?.displayValue}
        >
          <Input
            type="number"
            placeholder=""
            autoFocus
            value={amountToStake}
            onChange={(e: any) => setAmountToStake(e.target.value)}
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
        <StakingCard
          title="Staked amount"
          balance={ethers.utils.formatEther(stakeInfo?.[0] || 0)}
        >
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

        <StakingCard
          title="Claimable reward"
          balance={ethers.utils.formatEther(stakeInfo?.[1] || 0)}
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
        <VoteStaker />
      </div>
    </>
  );
}
