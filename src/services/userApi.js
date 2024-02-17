import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'user',
    tagTypes: ['USER'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),

    endpoints: (build) => ({
        // получить login всех пользователей
        getAllLogins: build.query({
            query: (searchValue) => `search/users?q=${searchValue}&per_page=${14}&page=${1}`
        })

        // получить repos выбранного пользователя
    })
})

export const { useGetAllLoginsQuery } = userApi
