import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/userApi'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer: {
        users: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware)
})

export default store
