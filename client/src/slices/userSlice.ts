import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSliceState, User, UserPayload } from '../utils/types';

import { traveleroApi } from './apiSlice';

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

const userApi = traveleroApi.injectEndpoints({
  endpoints: (build) => ({
    updateProfile: build.mutation<UserPayload, Partial<User>>({
      query: (data) => ({
        url: '/users/update-user',
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { setUser, clearUser } = userSlice.actions;
export const { useUpdateProfileMutation } = userApi;

export default userSlice.reducer;
