import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice";
import storyReducer from "./storySlice";
const store = configureStore({
    reducer: {
        story: storyReducer,
        auth: authReducer,
    }
})

export default store