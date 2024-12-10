import { configureStore  } from '@reduxjs/toolkit'
import { examplePostsReducer } from './modules/example-posts/reducers'
import { Provider } from "react-redux";
import React from "react";

export const store = configureStore({
  reducer: {
    examplePostsReducer,
  },
})


export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
