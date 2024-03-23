import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  subcategories: null,
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setsubcategories: (state, action) => {
      state.subcategories = action.payload; // Changed from += to =
    },
  },
})

// Action creators are generated for each case reducer function
export const { setsubcategories } = catalogSlice.actions; // Corrected from counterSlice to catalogSlice

export const selectSubcategories = state => state.catalog.subcategories; // Corrected function name and state path

export default catalogSlice.reducer; // Corrected from counterSlice to catalogSlice
