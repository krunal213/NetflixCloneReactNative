import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './view/home/homeSlice'
import splashReducer from './view/splash/splashSlice'

export const store = configureStore({
    reducer : {
        splash : splashReducer,
        home : homeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
