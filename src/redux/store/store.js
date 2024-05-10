import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../actions/songSlice';

export default configureStore({
  reducer: {
    song: songReducer,
  },
});