import {createSlice} from '@reduxjs/toolkit'
import {homeAsyncThunk,Content} from './homeAsyncThunk'
import {store} from '../../store'

const homeSlice = createSlice({
    name : "home",
    initialState : {
        result : null as Content[] | null
    },
    reducers : {},
    extraReducers:(builder)=>{
        builder.addCase(homeAsyncThunk.fulfilled,(state,action) => {
            state.result = action.payload
        })
    }
})

export default homeSlice.reducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


