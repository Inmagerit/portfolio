import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../features/taskList/taskSlice";

const store = configureStore({
    reducer: {
        task: taskSlice.reducer
    }
});

export default store;
