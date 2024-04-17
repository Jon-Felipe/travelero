import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type RegisterArg = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

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
  }),
});

export const { useRegisterMutation } = traveleroApi;