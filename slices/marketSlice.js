import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  marketItems: [], // Initialize market items array
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setMarketItems: (state, action) => {
      state.marketItems = action.payload;
    },
  },
});

export const { setMarketItems } = marketSlice.actions;

export const selectMarketItems = state => state.market.marketItems;

export default marketSlice.reducer;
