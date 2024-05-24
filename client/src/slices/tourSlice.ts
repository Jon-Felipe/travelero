import { Tour } from '../utils/types';
import { traveleroApi } from './apiSlice';

const tourApi = traveleroApi.injectEndpoints({
  endpoints: (build) => ({
    getTours: build.query<
      { tours: Tour[] },
      { sort?: string; search?: string }
    >({
      query: ({ sort, search }) => ({
        url: '/tours',
        params: { sort, search },
      }),
    }),
    getSingleTour: build.query<{ tour: Tour }, string>({
      query: (id) => ({
        url: `/tours/${id}`,
      }),
    }),
  }),
});

export const { useGetToursQuery, useGetSingleTourQuery } = tourApi;
