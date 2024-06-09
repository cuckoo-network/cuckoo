import {
  useAddress,
  useBalance,
  useContract,
  useContractRead,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import {
  web3BtnOutlineStyle,
  web3BtnPrimaryStyle,
} from "@/components/ui/web3-button-style";
import { ethers } from "ethers";
import { StakingCard } from "@/app/portal/staking/staking-card";
import React, { useState } from "react";
import { InputWithUnit } from "@/components/ui/input-with-unit";

const wrapContractAddress = "0x7bd97d61DcE3608b2F93D493FD0f42D8C77fB8E9";
export const stakingContractAddress =
  "0x4a32b8dEdA26902591aBc00c9DaC82bf6dc90124";

const tokenSymbol = "WCAI";

export function TokenUnwrapper() {
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
        autoFocus
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
