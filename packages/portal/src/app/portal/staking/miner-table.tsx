import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VoteButton } from "@/app/portal/staking/vote-button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useMiners } from "@/app/portal/staking/hooks/use-miners";

export const MinerTable: React.FC = () => {
  const { minersData, minersLoading } = useMiners();

  const minerList = minersData?.miners || [];

  if (minersLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-col">
      <CardTitle className="text-lg font-semibold md:text-2xl">
        Miners
      </CardTitle>
      <CardDescription>
        Votes below are calculated every 30 Minutes.
      </CardDescription>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Miner</TableHead>
            <TableHead>Votes</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>System Info</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...minerList]
            .sort((a, b) => Number(b.votes) - Number(a.votes))
            .map((miner, index: number) => (
              <TableRow key={miner.walletAddress}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div>{miner.gpuModels}</div>
                  <Link
                    className={"cursor-pointer underline"}
                    target="_blank"
                    href={`https://scan.cuckoo.network/address/${miner.walletAddress}`}
                  >
                    <pre className={"text-xs"}>{miner.walletAddress}</pre>
                  </Link>
                </TableCell>
                <TableCell>
                  {(
                    BigInt(miner.votes) / BigInt("1000000000000000000")
                  ).toString()}
                </TableCell>
                <TableCell>{miner.location}</TableCell>
                <TableCell>
                  <div className={"text-xs"}>
                    {miner.gpuModels.split(",").length} GPU(s) {miner.cpuCount}{" "}
                    CPU(s)
                  </div>
                  <div className={"text-xs"}>RAM: {miner.ramUsed}</div>
                </TableCell>
                <TableCell>
                  <VoteButton address={miner.walletAddress} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
