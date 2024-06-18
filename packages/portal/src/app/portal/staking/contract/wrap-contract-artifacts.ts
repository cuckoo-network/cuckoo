import {useChainId} from "@thirdweb-dev/react";


export const useWrapContractAddress = () => {
  const chain = useChainId();
  const wrapContractAddress: Record<number, string> = {
    1210: "0x7bd97d61DcE3608b2F93D493FD0f42D8C77fB8E9",
    1200: "0x142AB2B626cB26A1F2584b166D4eEd0c47cEB9ac"};


  return wrapContractAddress[chain ?? 1200];
}
