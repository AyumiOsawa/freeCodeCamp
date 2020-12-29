import { createStore } from 'redux';
import counterReducer from '../features/counter/counterSlice';

const store = createStore(counterReducer);

export default store;
