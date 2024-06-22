import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GPUList } from "@/app/portal/staking/gpu-list";
import { VoteButton } from "@/app/portal/staking/vote-button";
import { useFetchGPUProviders } from "@/app/portal/staking/hooks/use-fetch-gpu-providers";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { shortenAddress } from "@/app/portal/staking/lib/shorten-address";

interface CPUInfo {
  "count logical": number;
}

interface RAMInfo {
  total: string;
  used: string;
}

interface Miner {
  walletAddress: string;
  votes: string;
  nvidia_gpu_models: string[] | null;
  CPU: CPUInfo;
  RAM: RAMInfo;
}

function parseRAMUsage(used: string, total: string): string {
  const usedGB = parseFloat(used.replace("GB", ""));
  const totalGB = parseFloat(total.replace("GB", ""));
  return ((usedGB / totalGB) * 100).toFixed(2) + "%";
}

export const MinerTable: React.FC = () => {
  const { providers: miners = [], isLoading } = useFetchGPUProviders();

  if (isLoading) {
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
            <TableHead>GPUs</TableHead>
            <TableHead>CPUs</TableHead>
            <TableHead>RAM Usage</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(miners ?? [])
            .sort((a: any, b: any) => b.votes - a.votes)
            .map((miner: any, index: number) => (
              <TableRow key={miner.walletAddress}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <pre>
                    {miner.walletAddress}
                  </pre>
                </TableCell>
                <TableCell>
                  {(
                    BigInt(miner.votes) / BigInt("1000000000000000000")
                  ).toString()}
                </TableCell>
                <TableCell>
                  <GPUList models={miner.nvidia_gpu_models} />
                </TableCell>
                <TableCell>{miner.CPU["count logical"]}</TableCell>
                <TableCell>
                  {parseRAMUsage(miner.RAM.used, miner.RAM.total)}
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

function copyToClipboard(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
