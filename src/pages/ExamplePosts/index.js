import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../store/modules/example-posts/actions';
import { getPostsSelector } from '../../store/modules/example-posts/selectors';
import { examplePostsActions } from '../../store/modules/example-posts/reducers';

import './styles.css'

function ExamplePosts() {
  const navigate = useNavigate()
  
  const posts = useSelector(getPostsSelector)

  const dispatch = useDispatch()

  const onBack = () => {
    dispatch(examplePostsActions.clearPosts());
    navigate('/')
  }

  return (
    <div className='container'>
      <button onClick={onBack}>Voltar</button>
      <h1>Posts</h1>
      <button onClick={() => dispatch(getPosts())}>Clique aqui para buscar posts</button>

      {posts?.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default ExamplePosts