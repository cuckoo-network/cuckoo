import { Web3Button} from "@thirdweb-dev/react";
import {web3BtnOutlineStyle} from "@/components/ui/web3-button-style";
import {votingContractABI, useVotingContractAddress} from "@/app/portal/staking/contract/voting-contract-artifacts";
import {useCallback} from "react";

export const VoteButton = ({address}: {address: string}) => {
  const votingContractAddress = useVotingContractAddress();
  const vote = useCallback(async (contract: any) => {
    await contract.call("voteForMiner", [
      address
    ]);
    alert("Voted successfully!");
  }, [address]);
  return (
    <Web3Button
      style={web3BtnOutlineStyle}
      contractAddress={votingContractAddress}
      contractAbi={votingContractABI}
      action={vote}
    >
      Vote
    </Web3Button>
  )
}
