import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

import { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import { stakingContractAddress } from "../src/const/yourDetails";
import { VoteStaker } from "./vote-staker";
import { TopNav } from "./top-nav";

export function StakingHome() {
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState(0);

  // Initialize all the contracts
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom",
  );

  // Get contract data from staking contract
  const { data: rewardTokenAddress } = useContractRead(staking, "rewardToken");
  const { data: stakingTokenAddress } = useContractRead(
    staking,
    "stakingToken",
  );

  // Initialize token contracts
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(stakingTokenAddress, "token");
  const { contract: rewardToken, isLoading: isRewardTokenLoading } =
    useContract(rewardTokenAddress, "token");

  // Token balances
  const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } =
    useTokenBalance(stakingToken, address);
  const { data: rewardTokenBalance, refetch: refetchRewardTokenBalance } =
    useTokenBalance(rewardToken, address);

  // Get staking data
  const {
    data: stakeInfo,
    refetch: refetchStakingInfo,
    isLoading: isStakeInfoLoading,
  } = useContractRead(staking, "getStakeInfo", [address || "0"]);

  useEffect(() => {
    setInterval(() => {
      refetchData();
    }, 10000);
  }, []);

  const refetchData = () => {
    refetchRewardTokenBalance();
    refetchStakingTokenBalance();
    refetchStakingInfo();
  };

  return (
    <>
      <TopNav />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Cuckoo staking!</h1>

          <p className={styles.description}>
            Stake to secure the decentralized AI-to-Earn Platform and get 6%
            yearly.
          </p>

          <div className={styles.connect}>
            <ConnectWallet />
          </div>

          <div className={styles.stakeContainer}>
            <input
              className={styles.textbox}
              type="number"
              value={amountToStake}
              onChange={(e) => setAmountToStake(e.target.value)}
            />{" "}
            <Web3Button
              className={styles.button}
              contractAddress={stakingContractAddress}
              action={async (contract) => {
                await stakingToken.setAllowance(
                  stakingContractAddress,
                  amountToStake,
                );
                await contract.call("stake", [
                  ethers.utils.parseEther(amountToStake),
                ]);
                alert("Tokens staked successfully!");
              }}
            >
              Stake
            </Web3Button>
            <Web3Button
              className={styles.button}
              contractAddress={stakingContractAddress}
              action={async (contract) => {
                await contract.call("withdraw", [
                  ethers.utils.parseEther(amountToStake),
                ]);
                alert("Tokens unstaked successfully!");
              }}
            >
              Unstake
            </Web3Button>{" "}
            <Web3Button
              className={styles.button}
              contractAddress={stakingContractAddress}
              action={async (contract) => {
                await contract.call("claimRewards", []);
                alert("Rewards claimed successfully!");
              }}
            >
              Claim rewards
            </Web3Button>
          </div>

          <div className={styles.grid}>
            <a className={styles.card}>
              <h2>Your token balance</h2>
              <pre>
                {stakingTokenBalance?.displayValue
                  ? Number(stakingTokenBalance?.displayValue).toLocaleString()
                  : "-"}{" "}
                CUC
              </pre>
            </a>

            {/*<a className={styles.card}>*/}
            {/*  <h2>Reward token balance</h2>*/}
            {/*  <pre>{Number(rewardTokenBalance?.displayValue).toLocaleString()}</pre>*/}
            {/*</a>*/}

            <a className={styles.card}>
              <h2>Staked amount</h2>
              <pre>
                {stakeInfo
                  ? Number(
                      stakeInfo &&
                        ethers.utils.formatEther(stakeInfo[0].toString()),
                    ).toLocaleString()
                  : "-"}{" "}
                CUC
              </pre>
            </a>

            <a className={styles.card}>
              <h2>Claimable reward</h2>
              <pre>
                {stakeInfo
                  ? Number(
                      stakeInfo &&
                        ethers.utils.formatEther(stakeInfo[1].toString()),
                    ).toLocaleString()
                  : "-"}{" "}
                CUC
              </pre>
            </a>

            <VoteStaker />
          </div>
        </main>
      </div>
    </>
  );
}
