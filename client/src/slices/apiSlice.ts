import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const traveleroApi = createApi({
  reducerPath: 'traveleroApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: () => ({}),
});
