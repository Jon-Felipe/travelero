import { Tour } from '../utils/types';
import { traveleroApi } from './apiSlice';

const tourApi = traveleroApi.injectEndpoints({
  endpoints: (build) => ({
    getTours: build.query<{ tours: Tour[] }, { sort?: string }>({
      query: ({ sort }) => ({
        url: '/tours',
        params: { sort },
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
