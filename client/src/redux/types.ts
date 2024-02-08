export interface FinancialStatementReq {
  date: string;
  symbol: string;
  totalAssets: number;
}

export type FinancialStatement = Partial<FinancialStatementReq>;
