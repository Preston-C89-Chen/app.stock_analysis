import { createSlice } from '@reduxjs/toolkit';
import { fetchEarningsCalendar } from '@api/queries/earningsReport';
const initialState = {
  earnings: [],
  loading: false,
  error: null
}

export const earningsCalendarSlice = createSlice({
  name: 'earningsCalendar',
  initialState,
  reducers: {
    // getEarningsCalendarStart: state => {
    //   state.loading = true;
    // },
    // getEarningsCalendarSuccess: (state, action) => {
    //   state.data = action.payload;
    //   state.loading = false;
    // },
    // getEarningsCalendarFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarningsCalendar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEarningsCalendar.fulfilled, (state, action) => {
        state.earnings = action.payload;
        state.loading = false;
      })
      .addCase(fetchEarningsCalendar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});


export default earningsCalendarSlice.reducer
