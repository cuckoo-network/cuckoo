import React from "react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";


interface GPUProps {
  models: string[] | null;
}

export const GPUList: React.FC<GPUProps> = ({models}) => {
  if (!models) return <span>N/A</span>;

  return (
    <HoverCard>
      <HoverCardTrigger>
        <span className="cursor-pointer underline">
          {models.length} GPUs
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <ul className="list-disc pl-5">
          {models.map((model, index) => (
            <li key={index}>{model}</li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};
