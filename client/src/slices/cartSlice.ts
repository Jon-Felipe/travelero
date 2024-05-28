import { createSlice } from '@reduxjs/toolkit';
import { CartSliceState } from '../utils/types';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: CartSliceState = {
  cart: null,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
