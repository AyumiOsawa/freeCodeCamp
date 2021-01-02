import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../features/input/inputSlice';

const store = configureStore({
  reducer: {
    input: inputReducer
  },
});

export default store;
