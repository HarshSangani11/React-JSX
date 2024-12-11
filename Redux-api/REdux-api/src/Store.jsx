import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../src/ApiSlice"
export const store = configureStore({
    reducer: {
        ApiKey: apiSlice,
    },
})