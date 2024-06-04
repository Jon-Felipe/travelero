import { createSlice } from '@reduxjs/toolkit';
import { Cart, CartSliceState } from '../utils/types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: CartSliceState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ cart: Cart }>) => {
      state.cart = [...state.cart, action.payload.cart];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.tour._id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
