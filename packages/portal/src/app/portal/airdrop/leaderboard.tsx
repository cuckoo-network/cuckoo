"use client";

import { useAirdropStats } from "@/app/portal/airdrop/hooks/use-airdrop-stats";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export const Leaderboard = () => {
  const { airdropStatsData, airdropStatsLoading } = useAirdropStats();

  if (airdropStatsLoading) {
    return (
      <div className="flex justify-center">
        <Skeleton className="w-full h-12" />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Total Rewards</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {airdropStatsData?.airdropStats.payeeRankedByRewards.map(
          (stat, index) => (
            <TableRow key={stat.payeeUserId}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    src={stat.profilePhoto.url} // Assuming `avatarUrl` is the correct key in your data.
                    alt={`${stat.name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    {stat.name}
                    <br />
                    <span className="text-sm text-gray-400">
                      @{stat.username}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{stat.totalRewards} $CAI</TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
};
