import { configureStore } from '@reduxjs/toolkit';
import {
  inputReducer
} from '../features/number/numberSlice';

const reducer = {
  input: inputReducer
};

export default configureStore({
  reducer
});
