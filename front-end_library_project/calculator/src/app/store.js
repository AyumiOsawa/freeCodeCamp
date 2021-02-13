import { configureStore } from '@reduxjs/toolkit';
import {
  calculateReducer,
  inputReducer,
  floatInputReeducer,
  selectCurrentVal
} from '../features/number/numberSlice';

const reducer = {
  calculation: calculateReducer,
  input: inputReducer,
  float: floatInputReeducer
};

export default configureStore({
  reducer
});
