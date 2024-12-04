import { configureStore } from "@reduxjs/toolkit";
import { humansSlice } from "./slices/humansSlice";
import { tasksSlice } from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        humans: humansSlice.reducer,
        tasks: tasksSlice.reducer,
    }
});