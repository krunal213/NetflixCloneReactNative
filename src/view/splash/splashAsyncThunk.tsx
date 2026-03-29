import { createAsyncThunk } from '@reduxjs/toolkit'
import {SplashUseCase} from '@domain/splash/SplashUseCase'

export const splashAsyncThunk = createAsyncThunk("Splash", async (_,{rejectWithValue}) => {
    try {
        return await new SplashUseCase().execute()
    } catch (error) {
        return rejectWithValue("Something went wrong!");
    }
})

/*export const loginAsyncThunk = createAsyncThunk<boolean, { username: string; password: string }, { extra: Dependencies }>(
    "Login",
    async (inputParams, { extra, rejectWithValue }) => {
        try {
            return await extra.repository.isUserLoginSuccessfully(inputParams)
        } catch (error) {
            if (error instanceof NoInternetError) {
                return rejectWithValue("Please check internet connection");
            } else if (error instanceof InvalidCredentialError) {
                return rejectWithValue("Enter valid credentials");
            } else {
                return rejectWithValue("Something went wrong!");
            }
        }
    }
)*/