import { gql } from "@apollo/client";

export const GetFinancials = gql`
  query GetFinancials {
    balanceSheets {
      symbol
      date
      calendarYear
      totalLiabilities
      cashAndCashEquivalents
      shortTermInvestments
      netReceivables
      link
    }
  }
`;
