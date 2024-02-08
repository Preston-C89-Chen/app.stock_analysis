"use client"
import { ColumnDef } from "@tanstack/react-table"


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}


export type BalanceSheet = {
  date: string
  symbol: string
  cashAndCashEquivalents: number
  shortTermInvestments: number
  totalAssets: number
  totalLiabilities: number
}


export type FinancialStatements = {
  consolidatedBalanceSheet: BalanceSheet[]
  timePeriod: string[]
}

export const financialStatementColumns = (apiData: any) => {
  // get all the years from apiData
  const columns: any = []

  apiData = apiData["balanceSheets"] || apiData
  console.log("apiData",apiData)
  if (apiData) {
    const dates = apiData.map((data: BalanceSheet) => data.date)
    console.log("found dates",dates)
    columns.push({
      accessorKey: 'label',
      header: 'Consolidate Balance Sheet'
    })
    dates.forEach((date: any) => {
      columns.push({
        accessorKey: date,
        header: date
      })
    });
  }
  console.log('colsss',columns)
  return columns;
}
