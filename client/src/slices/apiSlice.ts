import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UserPayload } from '../utils/types';

export const traveleroApi = createApi({
  reducerPath: 'traveleroApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    register: builder.mutation<string, Partial<User>>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation<UserPayload, Partial<User>>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation<string, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    updateProfile: builder.mutation<UserPayload, Partial<User>>({
      query: (data) => ({
        url: '/users/update-user',
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutUserMutation,
  useUpdateProfileMutation,
} = traveleroApi;
