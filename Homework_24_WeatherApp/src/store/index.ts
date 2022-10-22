import {rootSlice} from "./reducers";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootSlice.reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: true
        })
});