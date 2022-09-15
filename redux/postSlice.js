import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "selectedPosts",
  initialState: [],
  reducers: {
    selectPosts: (state, action) => {
      if(!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removePosts: (state, action) => {
      return state.filter((value) => (
        value != action.payload
      ))
    },
  }
});

export const { selectPosts, removePosts } = PostSlice.actions;

export default PostSlice.reducer;