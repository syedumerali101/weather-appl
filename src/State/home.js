import {createSlice} from '@reduxjs/toolkit';
import {apiHeaders, endpoints} from '../Api/configs';
import {apiSlice} from './apiSlice';
import initial from './initial';
import {useSelector} from 'react-redux';

export const entendedEntrySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getHome: builder.query({
      query: queryArg => ({
        url: endpoints.home.home,
        method: apiHeaders.get,
        headers: apiHeaders.headerjson,
        params: {...queryArg},
      }),
    }),
  }),
});

export const {useGetHomeQuery} = entendedEntrySlice;
