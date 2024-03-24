import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Changed from object spread to push
    },
      removeToCart : (state, action) => {
      const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1); // Remove one item at the found index
      } else {
        console.error("Can't remove item that is not in the cart");
      }
    },
    
    emptyCart: (state, action) => { // Renamed from emptyToCart to emptyCart
      state.items = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, emptyCart } = cartSlice.actions; // Corrected from counterSlice to cartSlice

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = createSelector(
  state => state.cart.items,
  (_, id) => id,
  (items, id) => items.filter(item => item.id === id)
);

export const selectCartTotal = state => {
  return state.cart.items.reduce((total, item) => {
    // Check if the price is a valid integer, if not, parse it
    const price = parseInt(item.price);
    // Add the parsed price to the total
    return total + price;
  }, 0);
};

export default cartSlice.reducer; // Corrected from counterSlice to cartSlice
