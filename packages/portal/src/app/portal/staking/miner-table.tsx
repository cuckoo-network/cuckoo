import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {GPUList} from "@/app/portal/staking/gpu-list";
import {VoteButton} from "@/app/portal/staking/vote-button";
import {useFetchGPUProviders} from "@/app/portal/staking/hooks/use-fetch-gpu-providers";

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
  const usedGB = parseFloat(used.replace('GB', ''));
  const totalGB = parseFloat(total.replace('GB', ''));
  return (usedGB / totalGB * 100).toFixed(2) + '%';
}

function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export const MinerTable: React.FC = () => {
  const { providers: miners, isLoading } = useFetchGPUProviders();

  if (isLoading) {
    return <></>
  }

  return (
  <>
    <h2>Miners</h2>
    <Table>
      <p>Votes below are calculated every 30 Minutes.</p>
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
        {miners.map((miner: any, index: number) => (
          <TableRow key={miner.walletAddress}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
                            <span
                              title={miner.walletAddress}
                              onClick={() => copyToClipboard(miner.walletAddress)}
                              style={{cursor: 'pointer', textDecoration: 'underline'}}
                            >
                {shortenAddress(miner.walletAddress)}
              </span>

            </TableCell>
            <TableCell>{(BigInt(miner.votes) / BigInt("1000000000000000000")).toString()}</TableCell>
            <TableCell><GPUList models={miner.nvidia_gpu_models}/></TableCell>
            <TableCell>{miner.CPU["count logical"]}</TableCell>
            <TableCell>{parseRAMUsage(miner.RAM.used, miner.RAM.total)}</TableCell>
            <TableCell>
              <VoteButton address={miner.walletAddress}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)};

function copyToClipboard(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

