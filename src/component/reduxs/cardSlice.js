import { createSlice } from "@reduxjs/toolkit";
//import { FaCarTunnel } from "react-icons/fa6";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: 0,
    cart: [],
    quantity: 0,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== -1) {
        item.quantity++;
      }
    },

    decrementItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== 0 && item.quantity > 0) {
        item.quantity--;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decrementItem,
  incrementItem,
  getCardTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
