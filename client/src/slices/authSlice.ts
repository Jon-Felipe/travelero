import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

const initialState: AuthState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
