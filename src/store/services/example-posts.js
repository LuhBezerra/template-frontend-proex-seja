import axios from 'axios'

import { API_URL } from '../../config/environment'


export const createPost = (payload) =>
  axios.post(`${API_URL}/posts`, payload)

export const getPosts = () =>
  axios.get(`${API_URL}/posts`)