import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice' // Corrected import statement

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Corrected slice reference
  },
})
