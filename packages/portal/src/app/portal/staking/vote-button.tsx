import {Web3Button} from "@thirdweb-dev/react";
import {web3BtnOutlineStyle} from "@/components/ui/web3-button-style";
import {votingContractABI, votingContractAddress} from "@/app/portal/staking/voting-contract-artifacts";

export const VoteButton = ({address}: {address: string}) => {
  return (
    <Web3Button
      style={web3BtnOutlineStyle}
      contractAddress={votingContractAddress}
      contractAbi={votingContractABI}
      action={async (contract) => {
        await contract.call("voteForStaker", [
          address
        ]);
        alert("Voted successfully!");
        window.location.reload();
      }}
    >
      Vote
    </Web3Button>
  )
}
