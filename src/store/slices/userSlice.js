import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        items: [],
        totalCount: 0,
        currentPage: 1,
        perPage: 14
    },
    reducers: {
        setAllLogins(state, action) {
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count
            }
        },

        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },

        setError(state) {
            state.items = []
            state.totalCount = 0
        }
    }
})

export const { setAllLogins, setCurrentPage, setError } = userSlice.actions

export default userSlice.reducer
