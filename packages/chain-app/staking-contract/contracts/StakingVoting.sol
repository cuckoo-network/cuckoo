// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract VotingContract is ContractMetadata {
  // Mapping from voter to the staker they voted for
  mapping(address => address) public votes;
  // Mapping from staker to a list of voters who voted for them
  mapping(address => address[]) public voteesToVoters;

  function voteForStaker(address staker) public {
    // Check if the voter has already voted for this staker
    address currentVote = votes[msg.sender];
    if(currentVote != address(0) && currentVote != staker) {
      // Remove the voter from the old staker's list if they are changing their vote
      removeVoterFromVotee(msg.sender, currentVote);
    }

    votes[msg.sender] = staker;
    voteesToVoters[staker].push(msg.sender);
  }

  function removeVoterFromVotee(address voter, address staker) private {
    address[] storage votersList = voteesToVoters[staker];
    for(uint i = 0; i < votersList.length; i++) {
      if(votersList[i] == voter) {
        // Remove the voter by swapping with the last element and then popping from the array
        votersList[i] = votersList[votersList.length - 1];
        votersList.pop();
        break;
      }
    }
  }

  // Utility function to get all voters for a specific staker
  function getVotersForStaker(address staker) public view returns (address[] memory) {
    return voteesToVoters[staker];
  }
}
