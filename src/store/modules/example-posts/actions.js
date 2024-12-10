import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesExample from '../../services/example-posts'

export const createPost = createAsyncThunk('CREATE_POST', async (payload) => {
  const response = await servicesExample.createPost(payload)

  return response.data
})


export const getPosts = createAsyncThunk('GET_POSTS', async () => {
  const response = await servicesExample.getPosts()
  return response.data
})
