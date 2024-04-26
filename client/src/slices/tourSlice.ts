import { Tour } from '../utils/types';
import { traveleroApi } from './apiSlice';

const tourApi = traveleroApi.injectEndpoints({
  endpoints: (build) => ({
    getTours: build.query<{ tours: Tour[] }, void>({
      query: () => ({
        url: '/tours',
      }),
    }),
  }),
});

export const { useGetToursQuery } = tourApi;
