import { createAsyncThunk } from '@reduxjs/toolkit'
import {Dependencies} from '../../dependencies'

export const splashAsyncThunk = createAsyncThunk<boolean,void,{extra : Dependencies}>("Splash", async (_,{extra, rejectWithValue}) => {
    try {
        return await extra.splashUseCase.execute()
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