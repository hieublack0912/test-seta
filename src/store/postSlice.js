import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    listPost: [],
  },
  reducers: {
    setPost: (state, action) => {
      state.listPost = action.payload;
    },
    createPost: (state, action) => {
      state.listPost.push({
        userId: (state.listPost.length / 10 + 1).toFixed(),
        id: state.listPost.length + 1,
        title: action.payload.title,
        body: action.payload.body,
      });
    },
  },
});

export const { setPost, createPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
