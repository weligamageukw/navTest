import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import todoReducer from './todoSlice';

export default configureStore({
  reducer: {
    posts: postReducer,
    todos: todoReducer,
  }
});
