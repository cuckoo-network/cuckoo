import { Badge } from "@/components/ui/badge";

export const TestnetBadge = () => {
  return (
    <Badge variant={"warning"} className="hidden md:inline-flex">
      Testnet Sepolia - You are in test mode. All operations here are simulated
      and hold no real value.
    </Badge>
  );
};
