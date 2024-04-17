import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Register = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const traveleroApi = createApi({
  reducerPath: 'traveleroApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    register: builder.mutation<string, Register>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = traveleroApi;
