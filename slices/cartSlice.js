import { createSlice } from '@reduxjs/toolkit'

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
    removeToCart: (state, action) => {
      const newCart = state.items.filter(item => item.id !== action.payload.id); // Fixed logic for removing item
      if (newCart.length === state.items.length) {
        console.log("Can't remove item that is not in the cart");
      } else {
        state.items = newCart;
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

export const selectCartItemsById = (state, id) => state.cart.items.filter(item => item.id === id);

export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0); // Removed extra parenthesis

export default cartSlice.reducer; // Corrected from counterSlice to cartSlice
