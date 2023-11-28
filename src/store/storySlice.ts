import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: false,
    storyContent: null
}

const storySlice = createSlice({
    name: "story",
    initialState,
    reducers: {
        createStory: (state, action) => {
            state.status = true;
            state.storyContent = action.payload.storyContent;
        },
        deleteStory: (state) => {
            state.status = false;
            state.storyContent = null;
        }
    }
})

export const { createStory, deleteStory } = storySlice.actions;
export default storySlice.reducer;