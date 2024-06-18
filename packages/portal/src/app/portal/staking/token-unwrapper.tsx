import {
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import {
  web3BtnOutlineStyle,
} from "@/components/ui/web3-button-style";
import { ethers } from "ethers";
import { StakingCard } from "@/app/portal/staking/staking-card";
import React, { useState } from "react";
import { InputWithUnit } from "@/components/ui/input-with-unit";
import {useStakingContractAddress} from "@/app/portal/staking/contract/staking-contract-artifacts";
import {useWrapContractAddress} from "@/app/portal/staking/contract/wrap-contract-artifacts";

const tokenSymbol = "WCAI";

export function TokenUnwrapper() {
  const wrapContractAddress = useWrapContractAddress();
  const stakingContractAddress = useStakingContractAddress();
  const address = useAddress();
  const [amountToOperate, setAmountToOperate] = useState(0);

  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom",
  );
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(useContractRead(staking, "stakingToken").data, "token");
  const { data: stakingTokenBalance, isLoading: isStakingTokenBalanceLoading } =
    useTokenBalance(stakingToken, address);

  const isLoading =
    isStakingLoading || isStakingTokenLoading || isStakingTokenBalanceLoading;

  return (
    <StakingCard
      balance={
        "Available " + `${stakingTokenBalance?.displayValue} ${tokenSymbol}`
      }
      isLoading={isLoading}
    >
      <InputWithUnit
        unit={tokenSymbol}
        type="number"
        placeholder=""
        max={stakingTokenBalance?.displayValue}
        value={amountToOperate}
        onChange={(e: any) => setAmountToOperate(e.target.value)}
      />
      <Web3Button
        style={web3BtnOutlineStyle}
        contractAddress={wrapContractAddress}
        action={async (contract) => {
          await contract.call("withdraw", [
            ethers.utils.parseEther(String(amountToOperate)),
          ]);
          alert("Tokens withdrawn successfully!");
        }}
      >
        Unwrap to CAI
      </Web3Button>
    </StakingCard>
  );
}
