import { gql } from "@apollo/client";

export const queryMiners = gql`
  query Miners {
    miners {
      type
      walletAddress
      votes
      gpuModels
      cpuCount
      ramUsed
      location
    }
  }
`;
