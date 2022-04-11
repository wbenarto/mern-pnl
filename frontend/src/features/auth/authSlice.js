import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))



const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register User
export const register = createAsyncThunk('auth/register', async (user,  thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {

    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
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