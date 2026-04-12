import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './view/home/homeSlice'
import splashReducer from './view/splash/splashSlice'
import { getDependencies } from "./dependencies"

export const store = configureStore({
    reducer: {
        splash: splashReducer,
        home: homeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            thunk: {
                extraArgument: getDependencies()
            }
        }
    )
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
