import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    status: false,
    storyContent: null,
    formContent: null,
}

const storySlice = createSlice({
    name: "story",
    initialState,
    reducers: {
        formDataSub: (state, action) => {
            state.status = true;
            state.formContent = action.payload.formContent;
        },
        genStory: (state, action) => {
            state.status = true;
            state.storyContent = action.payload.storyContent;
        },
        deleteStory: (state) => {
            state.status = false;
            state.storyContent = null;
        }
    }
})

export const { genStory, deleteStory, formDataSub } = storySlice.actions;
export default storySlice.reducer;