import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        items: [],
        totalCount: 0,
        currentPage: 1
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
        }
    }
})

export const { setAllLogins, setCurrentPage } = userSlice.actions

export default userSlice.reducer
