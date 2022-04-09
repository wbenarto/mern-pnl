import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))



const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: () => {
            state.isLoading = false
            state.isError = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})


export const {reset} = authSlice.actions
export default authSlice.reducer