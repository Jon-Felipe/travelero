import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSliceState, UserPayload } from '../utils/types';

const initialState: AuthSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayload>) => {
      state.user = action.payload.user;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
