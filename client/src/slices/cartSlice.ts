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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
