import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { ReduxProvider } from './store';

import ExamplePosts from './pages/ExamplePosts';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example-posts',
    element: <ExamplePosts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <RouterProvider router={router}/>
    </ReduxProvider>
  </React.StrictMode>
);
