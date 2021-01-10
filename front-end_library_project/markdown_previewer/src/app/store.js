import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../features/input/inputSlice';

const store = configureStore({ reducer });

export default store;
