import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice/index';
import favouriteSlice from './favourite/index'
const store = configureStore({
  reducer: {
    user: userReducer, // Add the user slice to the store
    favourite:favouriteSlice
  },
});

export default store;
