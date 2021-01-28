import { configureStore } from '@reduxjs/toolkit';
import numberReducer from '../features/number/numberSlice';

export default configureStore({
  reducer: {
    number: numberReducer,
  },
});
