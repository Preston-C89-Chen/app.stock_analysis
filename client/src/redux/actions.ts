import { Action } from "redux";

export const FETCH_EARNINGS = "FETCH_EARNINGS";
export const FETCH_EARNINGS_SUCCESS = "FETCH_EARNINGS_SUCCESS";
export const FETCH_EARNINGS_ERROR = "FETCH_EARNINGS_SUCCESS";
export const FETCH_FINACIAL_STATEMENT = "FETCH_FINACIAL_STATEMENT";
export const FETCH_FINANCIAL_STATEMENT_SUCCESS = "FETCH_FINANCIAL_STATEMENT_SUCCESS";
export const FETCH_FINANCIAL_STATEMENT_ERROR = "FETCH_FINANCIAL_STATEMENT_ERROR";

export const fetchFinancialStatement = () => ({
  type: FETCH_FINACIAL_STATEMENT
});

export const fetchFinancialStatementSuccess = (data:any) => ({
  type: FETCH_FINANCIAL_STATEMENT_SUCCESS,
  payload: data
});

export const fetchFinancialStatementError = (error:any) => ({
  type: FETCH_FINANCIAL_STATEMENT_ERROR,
  payload: error
});

export const fetchEarningsError = (error:any) => ({
  type: FETCH_EARNINGS_ERROR,
  payload: error
});

export const fetchEarningsRequest = () => ({
  type: FETCH_EARNINGS
});

export const fetchEarningsRequestSuccess = (data: any) => ({
  type: FETCH_EARNINGS_SUCCESS,
  payload: data
});




