export type EarningsReportItem = {
  date: string;
  symbol: string;
  eps?: number;
  epsEstimated?: number | null;
  time: string; // "bmo" or "amo" etc, assuming it's a string
  revenue?: number;
  revenueEstimated?: number | null;
  fiscalDateEnding?: string; // assuming date is in ISO format, hence a string
  updatedFromDate?: string; // assuming date is in ISO format, hence a string
}

export type EarningsReportData = [EarningsReportItem];
