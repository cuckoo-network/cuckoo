"use client";

import { useUser } from "@/containers/authentication/hooks/use-user";
import { useWalletAccount } from "@/app/portal/airdrop/hooks/use-wallet-account";
import { Skeleton } from "@/components/ui/skeleton";
import { ethers } from "ethers";
import { useAirdropStats } from "@/app/portal/airdrop/hooks/use-airdrop-stats";
import { useAirdropHistory } from "@/app/portal/airdrop/hooks/use-airdrop-history";
import { selectSumAmount } from "@/app/portal/airdrop/selectors/select-history-items";
import { WithdrawCaiDialog } from "@/app/portal/airdrop/withdraw-cai-dialog";

export const AirdropOverallStats = () => {
  const { dataUser, loadingUser } = useUser();
  const { walletAccountData, walletAccountLoading } = useWalletAccount();
  const { airdropStatsData, airdropStatsLoading } = useAirdropStats();
  const { airdropHistoryData, airdropHistoryLoading } = useAirdropHistory();
  const historyItems = airdropHistoryData?.airdropHistory;
  const sum = selectSumAmount(historyItems);
  return (
    <div>
      <div className="uppercase text-7xl font-bold mb-2">
        Hey, {dataUser?.user.name || "you"}!
      </div>
      <p className="text-2xl mb-4">
        We&apos;re on a mission to make Onchain AI the global standard.
      </p>

      <div className="flex max-w-5xl">
        <div className="flex-1  shadow rounded-lg">
          <div className="font-bold uppercase text-xl">Your Airdrops</div>
          <div className="text-sm text-muted-foreground mb-4">
            Spread the vision of onchain AI
          </div>
          {airdropHistoryLoading ? (
            <Skeleton className="h-4 w-12" />
          ) : (
            (sum || 0).toFixed(1) + " $CAI"
          )}
        </div>

        <div className="flex-1  shadow rounded-lg">
          <div className="font-bold uppercase text-xl">Total Airdrops</div>
          <div className="text-sm text-muted-foreground mb-4">
            Get rewarded for security done in community
          </div>
          {airdropStatsLoading ? (
            <Skeleton className="h-4 w-12" />
          ) : (
            (airdropStatsData.airdropStats.totalRewards || 0).toFixed(1) +
            " $CAI"
          )}
        </div>

        <div className="flex-1  shadow rounded-lg">
          <div className="font-bold uppercase text-xl">Managed Wallet</div>
          <div className="text-sm text-muted-foreground mb-4">
            Credits for Creating AI Arts
          </div>
          {walletAccountLoading ? (
            <Skeleton className="h-4 w-12" />
          ) : (
            ethers.utils.formatEther(
              walletAccountData?.walletAccount?.balance || 0,
            ) + " $CAI "
          )}
          {!walletAccountLoading && dataUser?.user && (
            <WithdrawCaiDialog
              nonce={walletAccountData?.walletAccount?.transactionCount}
              walletAddress={walletAccountData?.walletAccount?.address}
              amount={walletAccountData?.walletAccount?.balance}
            />
          )}
        </div>
      </div>
    </div>
  );
};
