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
import { YourVotes } from "@/app/portal/staking/your-votes";
import { StakingCard } from "./staking-card";
import {web3BtnOutlineStyle, web3BtnPrimaryStyle} from "@/components/ui/web3-button-style";
import {MinerTable} from "@/app/portal/staking/miner-table";

const stakingContractAddress = "0x4a32b8dEdA26902591aBc00c9DaC82bf6dc90124";
const tokenSymbol = "WCAI";

export function StakingHome() {
  const address = useAddress();

  const {contract: staking, isLoading: isStakingLoading} = useContract(stakingContractAddress, "custom", );
  const {contract: stakingToken, isLoading: isStakingTokenLoading} = useContract(
    useContractRead(staking, "stakingToken").data,
    "token",
  );
  const {contract: rewardToken, isLoading: isRewardTokenLoading} = useContract(
    useContractRead(staking, "rewardToken").data,
    "token",
  );

  const {data: stakingTokenBalance, isLoading: isStakingTokenBalanceLoading} = useTokenBalance(stakingToken, address);

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

  const isLoading = isStakingTokenLoading || isStakingLoading || isRewardTokenLoading || isStakingTokenBalanceLoading;

  return (
    <>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Staking
        </CardTitle>
        <CardDescription>
          Stake WCAI (Wrapped CAI) to secure the decentralized AI Platform and get 4~12% yearly.
        </CardDescription>
      </div>

      <div className="grid auto-rows-max items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2 lg:gap-8">
        <StakingCard
          title="Your token balance"
          balance={(stakingTokenBalance?.displayValue ?? 0) + ` ${tokenSymbol}`}
          isLoading={isLoading}
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
          isLoading={isLoading}
          title="Staked amount"
          balance={ethers.utils.formatEther(stakeInfo?.[0] || 0)  + ` ${tokenSymbol}`}
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
          isLoading={isLoading}
          title="Claimable reward"
          balance={ethers.utils.formatEther(stakeInfo?.[1] || 0)  + ` ${tokenSymbol}`}
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
        <YourVotes />
      </div>

      <MinerTable/>
    </>
  );
}
