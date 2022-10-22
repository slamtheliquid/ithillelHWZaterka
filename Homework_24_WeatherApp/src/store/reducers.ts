import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const rootSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1,
        users: []
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        addUsers: (state, action) => {
            (state as any).users = [...state.users, ...action.payload];
        }
    },
})
export const {increment, decrement, incrementByAmount, addUsers} = rootSlice.actions;
export default rootSlice.reducer;