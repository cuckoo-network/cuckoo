import { Input } from "@/components/ui/input";
import { useBalance, Web3Button } from "@thirdweb-dev/react";
import {
  web3BtnOutlineStyle,
  web3BtnPrimaryStyle,
} from "@/components/ui/web3-button-style";
import { ethers } from "ethers";
import { StakingCard } from "@/app/portal/staking/staking-card";
import React, { useState } from "react";
import { InputWithUnit } from "@/components/ui/input-with-unit";
import {useStakingContractAddress} from "@/app/portal/staking/contract/staking-contract-artifacts";
import {useWrapContractAddress} from "@/app/portal/staking/contract/wrap-contract-artifacts";

const tokenSymbol = "CAI";

export function TokenWrapper() {
  const wrapContractAddress = useWrapContractAddress();
  const [amountToOperate, setAmountToOperate] = useState(0);
  const { data: balanceData, isLoading } = useBalance();

  return (
    <StakingCard
      balance={"Available " + `${balanceData?.displayValue} ${tokenSymbol}`}
      isLoading={isLoading}
    >
      <InputWithUnit
        unit={tokenSymbol}
        type="number"
        placeholder=""
        max={balanceData?.displayValue}
        value={amountToOperate}
        onChange={(e: any) => setAmountToOperate(e.target.value)}
      />
      <Web3Button
        style={web3BtnOutlineStyle}
        contractAddress={wrapContractAddress}
        action={async (contract) => {
          await contract.call("deposit", [], {
            value: ethers.utils.parseEther(String(amountToOperate)),
          });
          alert("Tokens deposit successfully!");
        }}
      >
        Wrap to WCAI
      </Web3Button>
    </StakingCard>
  );
}
