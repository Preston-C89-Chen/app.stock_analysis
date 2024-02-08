import { Action } from "redux";

export const fetchFinancialStatementSuccess = (data:any) => ({
  type: "FETCH_FINANCIAL_STATEMENT_SUCCESS",
  payload: data
});

export const fetchFinancialStatementError = (error:any) => ({
  type: "FETCH_FINANCIAL_STATEMENT_ERROR",
  payload: error
})
