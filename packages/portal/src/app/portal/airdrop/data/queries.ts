import { gql } from "@apollo/client";

export const queryAirdropStats = gql`
  query AirdropStats {
    airdropStats {
      recentAirdrops {
        id
        type
        rewards
        receiptUrl
      }
      totalRewards
    }
  }
`;

export const queryAirdropHistory = gql`
  query Query {
    airdropHistory {
      id
      type
      rewards
      receiptUrl
    }
  }
`;
