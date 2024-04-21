import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, LoginArg, RegisterArg } from '../utils/types';

export const traveleroApi = createApi({
  reducerPath: 'traveleroApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    register: builder.mutation<string, RegisterArg>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation<User, LoginArg>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = traveleroApi;
