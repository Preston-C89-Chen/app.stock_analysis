import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  earnings: [],
  loading: false,
  error: null
}

const earningsSlice = createSlice({
  name: 'earnings',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setEarnings: (state, action) => {
      state.earnings = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setLoading }
