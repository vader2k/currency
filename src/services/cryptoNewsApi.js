import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '0f6be86a06mshc96bafaac64025fp1fe08cjsn42fd3ef9c55d',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({ url, headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => createRequest('/coindesk')
        })
    })
})

export const { useGetNewsQuery } = cryptoNewsApi;