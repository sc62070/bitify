import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '92db03b378mshe4091deef9417afp15d4adjsnc4349ed0c68d'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;