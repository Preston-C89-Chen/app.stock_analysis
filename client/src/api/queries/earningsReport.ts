import ApolloApi from '../apolloClient';
import { gql } from "@apollo/client";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GET_EARNINGS_CALENDAR = gql`
  query GetEarningsCalendar($from: String!, $to: String!) {
    earningsCalendar(from: $from, to: $to) {
      date
      symbol
      time
      revenue
    }
  }
`;

export const fetchEarningsCalendar = createAsyncThunk(
  'earningsCalendar/fetchEarningsCalendar',
  async({from,to}, { rejectWithValue }) => {
    try {
      const response = await ApolloApi.query({

        query: GET_EARNINGS_CALENDAR,
        variables: { from, to }
      });
      return response.data.earningsCalendar
    } catch (error) {
      console.log("error",error)
      return rejectWithValue(error);
    }
  }
)
