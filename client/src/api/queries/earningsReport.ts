import { gql } from "@apollo/client";

export const GetEarnings = gql`
  query getEarnings {
    earnings {
      date {
        symbol
      }
    }
  }
`
