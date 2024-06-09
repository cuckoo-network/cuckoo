"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { BalanceCard } from "./balance-card";
import { UntakeCard } from "./untake-card";
import { ClaimableRewardCard } from "./claimable-reward-card";
import { TokenWrapper } from "@/app/portal/staking/token-wrapper";
import { TokenUnwrapper } from "@/app/portal/staking/token-unwrapper";
import { MinerTable } from "@/app/portal/staking/miner-table";
import { YourVotes } from "@/app/portal/staking/your-votes";
import { ConnectWalletWrapper } from "@/app/portal/staking/connect-wallet-wrapper";

export function StakingHome() {
  return (
    <>
      <div className="flex flex-col">
        <CardTitle className="text-lg font-semibold md:text-2xl">
          Staking
        </CardTitle>
        <CardDescription>
          Stake WCAI (Wrapped CAI) to secure the decentralized AI Platform and
          get 4~12% yearly.
        </CardDescription>
      </div>

      <ConnectWalletWrapper />

      <h4 className={"text-lg"}>
        {
          "To start staking and earning, you'll need WCAI. Don't have WCAI? Convert your CAI to WCAI."
        }
      </h4>
      <div className="grid auto-rows-max items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2 lg:gap-8">
        <TokenWrapper />
        <TokenUnwrapper />
      </div>

      <h4 className={"text-lg"}>
        {"Tools to help you stake and unstake WCAI."}
      </h4>
      <div className="grid auto-rows-max items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2 lg:gap-8">
        <BalanceCard />
        <UntakeCard />
      </div>

      <h4 className={"text-lg"}>
        {"Once staked, you can check your rewards or vote for a miner."}
      </h4>
      <div className="grid auto-rows-max items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2 lg:gap-8">
        <ClaimableRewardCard />
        <YourVotes />
      </div>

      <MinerTable />
    </>
  );
}
