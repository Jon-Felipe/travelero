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
  useUpdateProfileMutation,
} = traveleroApi;
