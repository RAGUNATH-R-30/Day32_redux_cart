import { configureStore } from "@reduxjs/toolkit";
import { TotalSlice } from "./reducer/totalslice";

export const store = configureStore({
    reducer:{
        app:TotalSlice.reducer
    }
})