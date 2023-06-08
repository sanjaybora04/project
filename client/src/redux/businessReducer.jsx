import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const businessApi = createApi({
  reducerPath: 'business',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    getBusiness: builder.query({
      query: (payload) => ({
        url: 'getbusiness/',
        method: 'POST',
        headers: {
            'content-type': 'text/plain',
        },
        body: payload
      }),
    }),
  addBusiness: builder.mutation({
      query: (payload) => ({
        url: 'addbusiness/',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
})


export const { useGetBusinessQuery, useAddBusinessMutation } = businessApi