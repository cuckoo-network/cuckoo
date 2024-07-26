"use client";

import { MinerTable } from "@/app/portal/staking/miner-table";

export const MiningHome = () => {
  return (
    <>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic">
        The Mining Portal is coming soon.
      </blockquote>

      <MinerTable />
    </>
  );
};
