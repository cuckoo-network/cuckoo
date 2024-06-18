// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";

contract Voting is ContractMetadata, Ownable {
  // Private mapping from voter to a set of miners they voted for
  mapping(address => mapping(address => bool)) private votes;
  // Private mapping from miner to a list of voters who voted for them
  mapping(address => address[]) private voteesToVoters;
  // Private mapping to keep track of all miners
  address[] private allMiners;

  event Voted(address indexed voter, address indexed miner);
  event VoteRemoved(address indexed voter, address indexed miner);

  function voteForMiner(address miner) public {
    // Check if the voter has already voted for this miner
    if (!votes[msg.sender][miner]) {
      votes[msg.sender][miner] = true;
      voteesToVoters[miner].push(msg.sender);

      // Add the miner to the list if it's the first vote for this miner
      if (voteesToVoters[miner].length == 1) {
        allMiners.push(miner);
      }

      emit Voted(msg.sender, miner);
    }
  }

  function removeVoteForMiner(address miner) public {
    // Remove the vote for the specific miner
    if (votes[msg.sender][miner]) {
      votes[msg.sender][miner] = false;
      removeVoterFromVotee(msg.sender, miner);
      emit VoteRemoved(msg.sender, miner);
    }
  }

  function hasVotedForMiner(address voter, address miner) public view returns (bool) {
    return votes[voter][miner];
  }

  function removeVoterFromVotee(address voter, address miner) private {
    address[] storage votersList = voteesToVoters[miner];
    for (uint i = 0; i < votersList.length; i++) {
      if (votersList[i] == voter) {
        // Remove the voter by swapping with the last element and then popping from the array
        votersList[i] = votersList[votersList.length - 1];
        votersList.pop();
        break;
      }
    }
  }

  function batchVoteForMiners(address[] calldata miners) public {
    // Remove all current votes for the sender
    address[] memory currentVotes = getMinersForVoter(msg.sender);
    for (uint i = 0; i < currentVotes.length; i++) {
      votes[msg.sender][currentVotes[i]] = false;
      removeVoterFromVotee(msg.sender, currentVotes[i]);
    }

    // Add new votes
    for (uint i = 0; i < miners.length; i++) {
      votes[msg.sender][miners[i]] = true;
      voteesToVoters[miners[i]].push(msg.sender);

      // Add the miner to the list if it's the first vote for this miner
      if (voteesToVoters[miners[i]].length == 1) {
        allMiners.push(miners[i]);
      }

      emit Voted(msg.sender, miners[i]);
    }
  }

  function getVotersForMiner(address miner) public view returns (address[] memory) {
    return voteesToVoters[miner];
  }

  function getMinersForVoter(address voter) public view returns (address[] memory) {
    uint count = 0;
    for (uint i = 0; i < allMiners.length; i++) {
      if (votes[voter][allMiners[i]]) {
        count++;
      }
    }

    address[] memory miners = new address[](count);
    uint index = 0;
    for (uint i = 0; i < allMiners.length; i++) {
      if (votes[voter][allMiners[i]]) {
        miners[index] = allMiners[i];
        index++;
      }
    }

    return miners;
  }

  function _canSetContractURI() internal view virtual override returns (bool) {
    return msg.sender == owner();
  }

  function _canSetOwner() internal view virtual override returns (bool) {
    return msg.sender == owner();
  }
}
