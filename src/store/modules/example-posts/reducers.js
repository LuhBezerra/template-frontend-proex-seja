import { createSlice } from '@reduxjs/toolkit'

import { getPosts } from './actions'

const initialState= {
  posts: [],
}

const examplePostsSlice = createSlice({
  name: 'example-posts',
  initialState,
  reducers: {
    clearPosts: state => {
      state.posts = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
      })
  },
})

export const examplePostsReducer = examplePostsSlice.reducer;
export const examplePostsActions = examplePostsSlice.actions;