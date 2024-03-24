import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogItems: [], // Initialize catalog items array
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogItems: (state, action) => {
      state.catalogItems = action.payload;
    },
  },
});

export const { setCatalogItems } = catalogSlice.actions;

export const selectCatalogItems = state => state.catalog.catalogItems;

export default catalogSlice.reducer;


