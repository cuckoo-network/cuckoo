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
      payeeRankedByRewards {
        payeeUserId
        name
        username
        totalRewards
        profilePhoto {
          id
          url
          sortOrder
          width
          height
        }
      }
      usersRecentlyJoined {
        createdAt
        id
        name
        username
        refererName
        refererUsername
        profilePhoto {
          id
          url
          sortOrder
          width
          height
        }
      }
    }
  }
`;

export const queryAirdropHistory = gql`
  query AirdropHistory {
    airdropHistory {
      id
      type
      rewards
      receiptUrl
      createdAt
    }
  }
`;

export const queryWalletAccount = gql`
  query WalletAccount {
    walletAccount {
      address
      balance
      transactionCount
    }
  }
`;
