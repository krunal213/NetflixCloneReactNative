import { createSlice } from '@reduxjs/toolkit'
import { splashAsyncThunk } from "./splashAsyncThunk"

interface LoginState {
    loading: boolean,
    isUserLogin: boolean,
    error: String | null
}

const initialState: LoginState = {
    loading: false,
    isUserLogin: false,
    error: null,
};

const splashSlice = createSlice({
    name: "splash",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(splashAsyncThunk.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            }).addCase(splashAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.isUserLogin = action.payload as boolean;
                state.error = null;
            }).addCase(splashAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as String
            })
    }
})

export default splashSlice.reducer