import {useChainId} from "@thirdweb-dev/react";

export const useStakingContractAddress = () => {
  const chain = useChainId();
  const stakingContractAddress: Record<any, string> = {
    1210: "0x4a32b8dEdA26902591aBc00c9DaC82bf6dc90124",
    1200: "0x47EC8202018447B424C8F6B4f6e5b603Be0c35CD",
  }

  return stakingContractAddress[chain ?? 1200];
}
