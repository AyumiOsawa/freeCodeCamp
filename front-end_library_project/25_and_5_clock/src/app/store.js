import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import sessionLabelReducer from '../features/sessionLabel/SessionLabelSlice';
import breakLabelReducer from '../features/breakLabel/BreakLabelSlice';
import timerSliceReducer from '../features/timer/TimerSlice';

const combinedReducer = combineReducers({
  sessionLabelReducer,
  breakLabelReducer,
  timerSliceReducer
});

export default configureStore({
  reducer: {
    combinedReducer
  },
});
