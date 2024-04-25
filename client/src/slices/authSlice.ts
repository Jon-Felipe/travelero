import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthSliceState, User, UserPayload } from '../utils/types';

const initialState: AuthSliceState = {
  user: {} as User,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayload>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
