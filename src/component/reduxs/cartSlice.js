
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        state.items = state.items.filter(item => item.id !== productId);
        state.totalPrice -= product.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
