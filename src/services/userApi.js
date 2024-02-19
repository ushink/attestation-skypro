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
            query: ({ searchValue, sort, perPage, page }) =>
                `search/users?q=${searchValue}&sort=repositories&order=${sort}&per_page=${perPage}&page=${page}`
        }),

        // получить данные пользователя
        getUser: build.query({
            query: (login) => `users/${login}`
        })
    })
})

export const { useGetAllLoginsQuery, useGetUserQuery } = userApi
