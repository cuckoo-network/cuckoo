"use client";

import { useAirdropStats } from "@/app/portal/airdrop/hooks/use-airdrop-stats";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

export const RecentlyJoined = () => {
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
          <TableHead>Name</TableHead>
          <TableHead>Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {airdropStatsData?.airdropStats.usersRecentlyJoined.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center">
                <Image
                  src={user.profilePhoto.url}
                  alt={`${user.name}'s avatar`}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  {user.name}
                  <br />
                  {user.refererUsername && (
                    <span className="text-sm text-gray-400">
                      Referred by @{user.refererUsername}
                    </span>
                  )}
                </div>
              </div>
            </TableCell>
            <TableCell>
              {formatDistanceToNow(new Date(user.createdAt), {
                addSuffix: true,
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
