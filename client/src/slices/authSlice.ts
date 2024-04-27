import { User } from '../utils/types';
import { traveleroApi } from './apiSlice';

const authApi = traveleroApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<string, Partial<User>>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: build.mutation<{ user: User }, Partial<User>>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: build.mutation<string, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
