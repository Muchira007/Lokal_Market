import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import catalogReducer from './slices/catalogSliceTemp'; // Import the catalog reducer
import marketReducer from './slices/marketSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    market: marketReducer,
  },
});
