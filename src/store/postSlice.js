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
  },
});

export const { setPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
