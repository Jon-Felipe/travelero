import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utils/types';

const initialState: User = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    dateOfBirth: '',
    phoneNumber: '',
    postalCode: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
